import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useFragmentScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash || typeof window === 'undefined') return;

    const targetId = decodeURIComponent(hash.replace('#', ''));
    if (!targetId) return;

    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target) return false;

      const nav = document.querySelector('nav');
      const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 0;
      const yOffset = target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

      window.scrollTo({ top: Math.max(yOffset, 0), behavior: 'smooth' });
      return true;
    };

    let attempts = 0;
    let cancelled = false;

    const tryScroll = () => {
      if (cancelled) return;
      const done = scrollToTarget();
      if (!done && attempts < 10) {
        attempts += 1;
        window.setTimeout(tryScroll, 60);
      }
    };

    window.requestAnimationFrame(tryScroll);

    return () => {
      cancelled = true;
    };
  }, [hash]);
}
