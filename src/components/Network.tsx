import React from 'react';
import { Reveal } from './Reveal';
import { NetworkCard } from './NetworkCard';
import { networkItems } from '../data/network';

export function Network() {
  return (
    <section id="network" aria-labelledby="network-heading" className="bg-[#EFE8DA] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-sm font-medium text-terracotta">Our Network</p>
            <h2 id="network-heading" className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1] text-charcoal">
              One network, built for every side of growth.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-sm text-base leading-relaxed text-charcoal/70">
              Whether you buy traffic, own an audience, or build partnerships — there's a place for you here.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {networkItems.map((item, i) =>
          <li key={item.key}>
              <Reveal delay={i * 0.06} className="h-full">
                <NetworkCard item={item} />
              </Reveal>
            </li>
          )}
        </ul>
      </div>
    </section>);

}