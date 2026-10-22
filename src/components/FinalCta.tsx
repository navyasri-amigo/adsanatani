import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCta() {
  return (
    <section id="contact" aria-labelledby="cta-heading" className="relative isolate bg-charcoal text-cream">
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-[90px] w-full -translate-y-[calc(100%-1px)] md:h-[160px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden="true">
        
        <path d="M0 200 L0 190 C 520 182, 980 130, 1440 0 L1440 200 Z" fill="#20201E" />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-20">
        <Reveal>
          <h2 id="cta-heading" className="font-serif text-[clamp(3rem,8vw,7rem)] font-medium leading-[0.92]">
            Let's Grow <span className="italic text-gold">Together.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.06}>
            <p className="max-w-md text-lg leading-relaxed text-cream/75">
              Tell us what you're building. Our partnerships team replies within one business day.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:advertisers@adsanatani.com?subject=Advertise%20with%20AdSanatani"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-[background-color,transform] duration-150 ease-out hover:bg-[#F7D266] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              
              Advertise With Us
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="mailto:publishers@adsanatani.com?subject=Become%20a%20Publisher"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-cream/30 px-7 py-4 text-sm font-semibold text-cream transition-[border-color,background-color,transform] duration-150 ease-out hover:border-cream hover:bg-cream/5 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
              
              Become a Publisher
            </a>
          </Reveal>
        </div>
      </div>
    </section>);

}