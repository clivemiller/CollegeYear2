#!/usr/bin/env python
import argparse
import csv
import os
import re
from datetime import datetime
from typing import Any, Dict, Iterable, List, Optional, Tuple

import requests
from rich.console import Console
from rich.table import Table
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich import box
from yt_dlp import YoutubeDL


console = Console()


def fmt_duration(seconds: Any) -> str:
    try:
        s = int(seconds)
    except Exception:
        return "—"
    h, rem = divmod(s, 3600)
    m, s = divmod(rem, 60)
    if h:
        return f"{h:d}:{m:02d}:{s:02d}"
    return f"{m:d}:{s:02d}"


def fmt_views(views: Any) -> str:
    try:
        v = int(views)
    except Exception:
        return "—"
    if v >= 1_000_000:
        return f"{v/1_000_000:.1f}M"
    if v >= 1_000:
        return f"{v/1_000:.1f}K"
    return str(v)


def views_emoji(views: Any) -> str:
    try:
        v = int(views)
    except Exception:
        return "🙂"
    if v >= 5_000_000:
        return "🚀"
    if v >= 1_000_000:
        return "🔥"
    if v >= 100_000:
        return "✨"
    if v >= 10_000:
        return "👍"
    return "🙂"


def parse_date(yyyymmdd: str) -> str:
    if not yyyymmdd:
        return "—"
    try:
        dt = datetime.strptime(yyyymmdd, "%Y%m%d")
        return dt.strftime("%Y-%m-%d")
    except Exception:
        return yyyymmdd


def build_ydl(playlistend: Optional[int] = None) -> YoutubeDL:
    opts: Dict[str, Any] = {
        "quiet": True,
        "no_warnings": True,
        "skip_download": True,
        # Limit playlist/channel lengths to keep things snappy
        "extract_flat": False,
    }
    if playlistend:
        opts["playlistend"] = playlistend
    return YoutubeDL(opts)


def extract_items(mode: str, query: Optional[str], url: Optional[str], limit: int) -> List[Dict[str, Any]]:
    with build_ydl(playlistend=limit) as ydl:
        if mode == "search":
            if not query:
                raise SystemExit("--query is required for search mode")
            spec = f"ytsearch{limit}:{query}"
            info = ydl.extract_info(spec, download=False)
        elif mode in {"channel", "playlist"}:
            if not url:
                raise SystemExit("--url is required for channel/playlist mode")
            info = ydl.extract_info(url, download=False)
        else:
            raise SystemExit(f"Unknown mode: {mode}")

    entries: List[Dict[str, Any]] = []
    if not info:
        return entries

    if "entries" in info and isinstance(info["entries"], list):
        entries = info["entries"][:limit]
    else:
        entries = [info]

    # Normalize and pick key fields
    normalized: List[Dict[str, Any]] = []
    for e in entries:
        # On some flat extractions, metadata might be nested; ensure dict
        if not isinstance(e, dict):
            continue
        # For flat results, `url` is often a video id/URL; try to map fields
        video_id = e.get("id") or e.get("url")
        title = e.get("title") or "(no title)"
        channel = e.get("channel") or e.get("uploader") or "—"
        duration = e.get("duration")
        view_count = e.get("view_count")
        upload_date = e.get("upload_date")
        webpage_url = e.get("webpage_url") or e.get("url")
        thumbnail = e.get("thumbnail")

        normalized.append(
            {
                "id": video_id,
                "title": title,
                "channel": channel,
                "duration": duration,
                "view_count": view_count,
                "upload_date": upload_date,
                "url": webpage_url,
                "thumbnail": thumbnail,
            }
        )

    return normalized


STOPWORDS = {
    "the",
    "a",
    "an",
    "and",
    "or",
    "to",
    "of",
    "in",
    "on",
    "for",
    "with",
    "is",
    "are",
    "how",
    "why",
    "what",
    "this",
    "that",
    "you",
    "your",
    "from",
    "at",
    "by",
    "it",
    "we",
    "i",
    "my",
}


def buzzwords(items: Iterable[Dict[str, Any]], top_n: int = 10) -> List[Tuple[str, int]]:
    counts: dict[str, int] = {}
    for it in items:
        title = (it.get("title") or "").lower()
        words = re.findall(r"[a-z0-9']+", title)
        for w in words:
            if w in STOPWORDS:
                continue
            counts[w] = counts.get(w, 0) + 1
    ranked = sorted(counts.items(), key=lambda kv: (-kv[1], kv[0]))
    return ranked[:top_n]


def render_table(mode: str, items: List[Dict[str, Any]]):
    title = {
        "search": "YouTube Search Results",
        "channel": "YouTube Channel Videos",
        "playlist": "YouTube Playlist Videos",
    }.get(mode, "YouTube Results")

    table = Table(
        title=title,
        title_style="bold cyan",
        box=box.SIMPLE_HEAVY,
        show_lines=False,
    )
    table.add_column("Title", style="bold", max_width=60, overflow="fold")
    table.add_column("Channel", style="magenta", max_width=30, overflow="fold")
    table.add_column("Dur", justify="right", style="yellow")
    table.add_column("Views", justify="right", style="green")
    table.add_column("Published", style="blue")
    table.add_column(" ")

    for it in items:
        table.add_row(
            it.get("title") or "(no title)",
            it.get("channel") or "—",
            fmt_duration(it.get("duration")),
            fmt_views(it.get("view_count")),
            parse_date(it.get("upload_date") or ""),
            views_emoji(it.get("view_count")),
        )

    console.print(table)


def render_buzzwords(items: List[Dict[str, Any]]):
    top = buzzwords(items)
    if not top:
        return
    table = Table(title="Title Buzzword Leaderboard", title_style="bold cyan", box=box.SIMPLE_HEAVY)
    table.add_column("Word", style="bold")
    table.add_column("Count", justify="right", style="green")
    for word, count in top:
        table.add_row(word, str(count))
    console.print(table)


def save_csv(items: List[Dict[str, Any]], csv_path: str):
    os.makedirs(os.path.dirname(csv_path) or ".", exist_ok=True)
    fields = ["id", "title", "channel", "duration", "view_count", "upload_date", "url", "thumbnail"]
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for it in items:
            row = dict(it)
            # normalize types for CSV
            row["duration"] = it.get("duration") if isinstance(it.get("duration"), int) else ""
            row["view_count"] = it.get("view_count") if isinstance(it.get("view_count"), int) else ""
            w.writerow(row)
    console.print(f"[green]Saved CSV:[/green] {csv_path}")


def download_thumbs(items: List[Dict[str, Any]], outdir: str):
    thumb_dir = os.path.join(outdir, "thumbs")
    os.makedirs(thumb_dir, exist_ok=True)
    jobs = [(it.get("id"), it.get("thumbnail")) for it in items]
    jobs = [(vid, url) for vid, url in jobs if vid and url]
    if not jobs:
        console.print("[yellow]No thumbnails to download.[/yellow]")
        return

    progress = Progress(
        SpinnerColumn(),
        TextColumn("[progress.description]{task.description}"),
        transient=True,
        console=console,
    )
    with progress:
        task = progress.add_task("Downloading thumbnails...", total=len(jobs))
        for vid, url in jobs:
            try:
                resp = requests.get(url, timeout=15)
                resp.raise_for_status()
                ext = os.path.splitext(url.split("?")[0])[1] or ".jpg"
                path = os.path.join(thumb_dir, f"{vid}{ext}")
                with open(path, "wb") as fp:
                    fp.write(resp.content)
            except Exception as e:
                console.print(f"[red]Failed[/red] {vid}: {e}")
            finally:
                progress.advance(task)
    console.print(f"[green]Thumbnails saved to:[/green] {thumb_dir}")


def ensure_video_urls(items: List[Dict[str, Any]]) -> List[str]:
    urls: List[str] = []
    for it in items:
        url = it.get("url")
        vid = it.get("id")
        if isinstance(url, str) and url.startswith("http"):
            urls.append(url)
        elif vid:
            urls.append(f"https://www.youtube.com/watch?v={vid}")
    # de-dup while preserving order
    seen = set()
    deduped: List[str] = []
    for u in urls:
        if u in seen:
            continue
        seen.add(u)
        deduped.append(u)
    return deduped


def download_videos(items: List[Dict[str, Any]], outdir: str, fmt: Optional[str], audio_only: bool):
    os.makedirs(outdir, exist_ok=True)
    urls = ensure_video_urls(items)
    if not urls:
        console.print("[yellow]No downloadable video URLs resolved.[/yellow]")
        return

    if audio_only:
        ydl_format = fmt or "bestaudio/best"
    else:
        # More robust default: best video+audio of any ext, fallback to best single file
        ydl_format = fmt or "bv*+ba/b"

    opts: Dict[str, Any] = {
        "quiet": False,
        "no_warnings": False,
        "outtmpl": os.path.join(outdir, "%(title).200s [%(id)s].%(ext)s"),
        "restrictfilenames": True,
        "format": ydl_format,
        "noplaylist": True,
        # Keep download progress bar from yt-dlp
    }
    try:
        with YoutubeDL(opts) as ydl:
            ydl.download(urls)
        console.print(f"[green]Downloads completed:[/green] {outdir}")
    except Exception as e:
        console.print("[yellow]Primary format failed. Retrying with 'best'.[/yellow]")
        opts_fallback = dict(opts)
        opts_fallback["format"] = "best"
        with YoutubeDL(opts_fallback) as ydl:
            ydl.download(urls)
        console.print(f"[green]Downloads completed with fallback format:[/green] {outdir}")


def list_formats(url: str):
    with YoutubeDL({"quiet": False, "no_warnings": False}) as ydl:
        info = ydl.extract_info(url, download=False)
        ydl.list_formats(info)


def main():
    parser = argparse.ArgumentParser(description="Fun YouTube metadata scraper using yt-dlp")
    sub = parser.add_subparsers(dest="mode", required=True)

    p_search = sub.add_parser("search", help="Search YouTube videos")
    p_search.add_argument("--query", required=True, help="Search query")
    p_search.add_argument("-n", "--limit", type=int, default=10, help="Max results")
    p_search.add_argument("--save-csv", dest="save_csv", help="Save results to CSV path")
    p_search.add_argument("--download-thumbs", action="store_true", help="Download thumbnails")
    p_search.add_argument("--outdir", default="out", help="Output directory for assets")

    p_channel = sub.add_parser("channel", help="List videos from a channel URL/handle")
    p_channel.add_argument("--url", required=True, help="Channel URL or handle (e.g. https://www.youtube.com/@handle)")
    p_channel.add_argument("-n", "--limit", type=int, default=20, help="Max results")
    p_channel.add_argument("--save-csv", dest="save_csv", help="Save results to CSV path")
    p_channel.add_argument("--download-thumbs", action="store_true", help="Download thumbnails")
    p_channel.add_argument("--outdir", default="out", help="Output directory for assets")

    p_playlist = sub.add_parser("playlist", help="List videos from a playlist URL")
    p_playlist.add_argument("--url", required=True, help="Playlist URL")
    p_playlist.add_argument("-n", "--limit", type=int, default=50, help="Max results")
    p_playlist.add_argument("--save-csv", dest="save_csv", help="Save results to CSV path")
    p_playlist.add_argument("--download-thumbs", action="store_true", help="Download thumbnails")
    p_playlist.add_argument("--outdir", default="out", help="Output directory for assets")

    p_download = sub.add_parser("download", help="Download videos from a query or URL")
    p_download.add_argument("--query", help="Search query to download from (uses top N)")
    p_download.add_argument("--url", help="Video/Channel/Playlist URL to download from")
    p_download.add_argument("-n", "--limit", type=int, default=10, help="Max items to consider (for search/channel/playlist)")
    p_download.add_argument("--outdir", default="downloads", help="Directory to save downloaded files")
    p_download.add_argument("--audio-only", action="store_true", help="Download audio only")
    p_download.add_argument("--format", dest="format", help="yt-dlp format string override")
    p_download.add_argument("--list-formats", action="store_true", help="List available formats for a URL and exit")

    args = parser.parse_args()

    if args.mode == "download":
        if not args.query and not args.url:
            raise SystemExit("Provide --query or --url for download mode")
        # Determine extraction source
        if args.query:
            items = extract_items("search", args.query, None, args.limit)
        else:
            # Could be video, channel or playlist
            items = extract_items("playlist", None, args.url, args.limit)
        if args.list_formats:
            if not args.url:
                raise SystemExit("--list-formats requires --url")
            list_formats(args.url)
            return
        if not items:
            console.print("[yellow]Nothing to download.[/yellow]")
            return
        render_table("download", items)
        download_videos(items, args.outdir, args.format, args.audio_only)
        return
    else:
        items = extract_items(args.mode, getattr(args, "query", None), getattr(args, "url", None), args.limit)

        if not items:
            console.print("[yellow]No results found.[/yellow]")
            return

        render_table(args.mode, items)
        render_buzzwords(items)

        if getattr(args, "save_csv", None):
            save_csv(items, args.save_csv)
        if getattr(args, "download_thumbs", False):
            download_thumbs(items, args.outdir)


if __name__ == "__main__":
    main()
