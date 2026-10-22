import React from 'react';
import { Reveal } from './Reveal';
import { AboutGraphic } from './AboutGraphic';

const pillars = [
{ title: 'CPA, CPL & CPS', text: 'Pay for outcomes, not impressions.' },
{ title: 'Email Marketing', text: 'Quality traffic from trusted publishers.' },
{ title: 'Transparent tracking', text: 'Every click and conversion, accounted for.' }];


export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <Reveal>
            <p className="text-sm font-medium text-terracotta">About AdSanatani</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 id="about-heading" className="mt-4 font-serif text-[clamp(2.5rem,5.5vw,4.75rem)] font-medium leading-[0.98] text-charcoal">
              Connecting Brands With the <span className="italic text-terracotta">Right Audiences.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal/75">
              AdSanatani is a performance advertising and affiliate marketing network. We match advertisers with
              publishers whose audiences genuinely fit — so campaigns reach the right people and every partner is
              rewarded for real results.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <dl className="mt-12 grid gap-6 border-t border-charcoal/15 pt-8 sm:grid-cols-3">
              {pillars.map((p) =>
              <div key={p.title}>
                  <dt className="font-serif text-2xl font-semibold text-charcoal">{p.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-charcoal/65">{p.text}</dd>
                </div>
              )}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="flex justify-center lg:justify-end">
          <AboutGraphic />
        </Reveal>
      </div>
    </section>);

}