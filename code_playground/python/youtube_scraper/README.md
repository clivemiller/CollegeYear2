YouTube Scraper (Fun Edition)

A lightweight, fun CLI tool to explore YouTube videos using `yt-dlp` under the hood. Search videos, list a channel or playlist, print a colorful table, generate a tiny "buzzword" leaderboard from titles, and optionally save results to CSV and download thumbnails.

Note: This does not download videos. It only fetches metadata unless you choose to download thumbnails.

Quick start

- Python 3.9+
- Install deps:

```
pip install -r requirements.txt
```

Examples

- Search for videos about cats (top 10):
```
python scraper.py search --query "cats" -n 10
```

- List recent videos from a channel URL or handle:
```
python scraper.py channel --url https://www.youtube.com/@veritasium -n 15
```

- Scrape a playlist:
```
python scraper.py playlist --url https://www.youtube.com/playlist?list=PL9tY0BWXOZFuP7hE8yL9sQ0Vf1sQ9bRmu
```

- Save results to CSV and download thumbnails:
```
python scraper.py search --query "python tutorials" -n 20 --save-csv out/results.csv --download-thumbs --outdir out
```

- Download top results from a search:
```
python scraper.py download --query "lofi hip hop" -n 5 --outdir downloads
```

- Download audio-only from a playlist:
```
python scraper.py download --url https://www.youtube.com/playlist?list=YOUR_LIST_ID --audio-only --outdir downloads/audio
```

- Use a custom yt-dlp format string:
```
python scraper.py download --query "python" -n 3 --format "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best"
```

Features

- Colorful table with title, channel, duration, views, and published date
- Works with search, channel URLs/handles, and playlist URLs
- Optional CSV export
- Optional thumbnail downloads
- Tiny "buzzword" leaderboard from video titles (for fun!)

Notes & disclaimers

- Be mindful of YouTube's Terms of Service and robots.txt. Use this tool for personal/educational purposes.
- `yt-dlp` performs the metadata extraction. Site changes may occasionally break scraping.
- Network access is required at runtime to fetch data. This repo only provides the code.
- For audio conversion (e.g., to mp3) or certain merges, `ffmpeg` may be required on your system PATH. By default, downloads use sensible formats without transcoding.

Troubleshooting

- If you see fewer fields (like missing view counts) on some entries, that's usually due to data availability inconsistencies from YouTube for certain items.
- If thumbnails fail to download, check your network/firewall and try again.

License

For educational use.
