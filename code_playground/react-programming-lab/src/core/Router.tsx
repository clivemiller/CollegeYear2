import React, { useEffect, useMemo, useState } from 'react';

type Params = Record<string, string>;

function matchPath(pattern: string, hash: string): { ok: boolean; params: Params } {
  const p = pattern.replace(/^#?\//, '');
  const h = hash.replace(/^#?\//, '');
  const pSeg = p.split('/');
  const hSeg = h.split('/');
  if (pSeg.length !== hSeg.length) return { ok: false, params: {} };
  const params: Params = {};
  for (let i = 0; i < pSeg.length; i++) {
    const ps = pSeg[i];
    const hs = hSeg[i];
    if (ps.startsWith(':')) params[ps.slice(1)] = decodeURIComponent(hs);
    else if (ps !== hs) return { ok: false, params: {} };
  }
  return { ok: true, params };
}

export function Router({ children }: { children: React.ReactNode }) {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const routes = useMemo(() => React.Children.toArray(children) as React.ReactElement<RouteProps>[], [children]);
  for (const r of routes) {
    const { ok } = matchPath(r.props.path, hash);
    if (ok) return r;
  }
  return null;
}

type RouteProps = {
  path: string;
  component: React.ComponentType<any>;
};

export function Route(props: RouteProps) {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const { ok, params } = matchPath(props.path, hash);
  if (!ok) return null;
  const C = props.component;
  return <C params={params} />;
}

