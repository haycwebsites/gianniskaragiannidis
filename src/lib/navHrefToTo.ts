import type { To } from 'react-router-dom';

/** Map config `href` values to React Router `to` (hash links need an object `to`). */
export function navHrefToTo(href: string): To | string {
  if (href.startsWith('/#')) {
    return { pathname: '/', hash: href.slice(1) };
  }
  return href;
}
