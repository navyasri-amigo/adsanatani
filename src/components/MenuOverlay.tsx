
import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { navigation } from '../data/navigation';
import { scrollToSection, easeOut } from '../utils/motion';

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) firstLink.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 overflow-y-auto bg-ink text-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: easeOut }}
        >
          <div className="mx-auto grid min-h-full max-w-7xl gap-12 px-6 pb-12 pt-32 md:px-10 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:pb-20">
            <nav aria-label="Primary">
              <ul className="space-y-1">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.28,
                      delay: 0.06 + i * 0.045,
                      ease: easeOut,
                    }}
                  >
                    <a
                      ref={i === 0 ? firstLink : undefined}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        window.setTimeout(
                          () => scrollToSection(item.id),
                          80
                        );
                      }}
                      className="group inline-flex items-baseline gap-4 py-1 font-serif text-5xl font-medium leading-tight text-cream/90 transition-colors duration-150 hover:text-gold focus-visible:text-gold focus-visible:outline-none md:text-7xl"
                    >
                      <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="space-y-6 border-t border-cream/15 pt-8 text-sm text-cream/70 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.2,
                ease: easeOut,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Email Marketing Solutions
              </p>

              <p className="max-w-sm text-base leading-relaxed text-cream/80">
                Performance-driven email marketing for advertisers and
                publishers. We help brands reach the right audience
                through targeted email campaigns and strategic partnerships.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@adsanatani.com"
                  className="inline-flex items-center gap-2 break-all text-lg text-gold transition-opacity duration-150 hover:opacity-80"
                >
                  info@adsanatani.com
                  <ArrowUpRightIcon
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </a>

                <div className="flex items-start gap-3 text-sm leading-relaxed text-cream/70">
                  <MapPinIcon
                    className="mt-1 h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />

                  <p>
                    16192 Coastal Highway
                    <br />
                    Lewes, DE 19958
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}