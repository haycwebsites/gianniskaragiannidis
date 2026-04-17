import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scheduleScrollToHashSection } from '../lib/scrollToHashSection';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, '');
      if (id) {
        scheduleScrollToHashSection(id);
      }
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
