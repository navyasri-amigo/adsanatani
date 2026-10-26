import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { navigation } from '../data/navigation';
import { scrollToSection } from '../utils/motion';

export function Footer() {
  const location = useLocation();

  const handleBackToTop = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
      return;
    }

    scrollToSection('top');
  };

  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            aria-label="AdSanatani Home"
            className="text-cream"
          >
            <Logo />
          </Link>

          <nav
            aria-label="Footer"
            className="-translate-y-20"
          >
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {navigation.slice(1).map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();

                      if (location.pathname !== '/') {
                        window.location.href = `/#${item.id}`;
                        return;
                      }

                      scrollToSection(item.id);
                    }}
                    className="transition-colors duration-150 hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AdSanatani.com. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-150 hover:text-gold"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-150 hover:text-gold"
            >
              Terms
            </Link>

            <button
              type="button"
              onClick={handleBackToTop}
              className="transition-colors duration-150 hover:text-gold"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}