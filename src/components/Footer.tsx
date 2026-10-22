import React from 'react';
import { Logo } from './Logo';
import { navigation } from '../data/navigation';
import { scrollToSection } from '../utils/motion';

export function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <span className="text-cream">
            <Logo />
          </span>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {navigation.slice(1).map((item) =>
              <li key={item.id}>
                  <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="transition-colors duration-150 hover:text-gold">
                  
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AdSanatani.com. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition-colors duration-150 hover:text-gold">Privacy Policy</a>
            <a href="/terms" className="transition-colors duration-150 hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>);

}