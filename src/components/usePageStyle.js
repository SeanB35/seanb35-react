import { useEffect } from 'react';

/**
 * Applies per-page body-level overrides that cannot live in Vite-imported CSS
 * (because Vite CSS persists across route changes). On mount the hook creates
 * a <style> tag with the supplied CSS and appends it to <head>; on unmount it
 * removes the tag so styles don't leak to other pages.
 *
 * @param {string} id   Unique identifier for the style tag
 * @param {string} css  Raw CSS string (should target body / html)
 */
export default function usePageStyle(id, css) {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = `page-style-${id}`;
    style.textContent = css;
    document.head.appendChild(style);
    return () => style.remove();
  }, [id, css]);
}
