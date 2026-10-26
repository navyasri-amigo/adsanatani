import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { MenuOverlay } from './MenuOverlay';
import { scrollToSection, easeOut } from '../utils/motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;
      const difference = currentScrollY - previousScrollY;

      setScrolled(currentScrollY > window.innerHeight * 0.7);

      if (open) {
        setHeaderVisible(true);
      } else if (currentScrollY <= 80) {
        // Always show header near the top
        setHeaderVisible(true);
      } else if (difference > 5) {
        // Scrolling down: hide header
        setHeaderVisible(false);
      } else if (difference < -5) {
        // Scrolling up: show header
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-out ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          solid
            ? 'bg-cream/95 text-charcoal shadow-[0_1px_0_rgba(32,32,30,0.08)] backdrop-blur'
            : 'bg-transparent text-cream'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-200 ease-out md:px-10 ${
            solid ? 'py-3.5' : 'py-6'
          }`}
        >
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
              setHeaderVisible(true);
              scrollToSection('top');
            }}
            aria-label="AdSanatani home"
            className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <Logo className="shrink-0" />
          </a>

          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              setHeaderVisible(true);
            }}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="group relative -translate-y-20 flex h-11 w-11 items-center justify-center rounded-full transition-opacity duration-150 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <motion.span
              className="absolute h-[2px] w-7 rounded-full bg-current"
              animate={
                open
                  ? { rotate: 45, y: 0 }
                  : { rotate: 0, y: -5 }
              }
              transition={{
                duration: 0.22,
                ease: easeOut,
              }}
            />

            <motion.span
              className="absolute h-[2px] rounded-full bg-current"
              animate={
                open
                  ? { rotate: -45, y: 0, width: 28, x: 0 }
                  : { rotate: 0, y: 5, width: 18, x: 5 }
              }
              transition={{
                duration: 0.22,
                ease: easeOut,
              }}
            />
          </button>
        </div>
      </header>

      <MenuOverlay
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}