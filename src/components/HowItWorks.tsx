import React from 'react';
import { motion } from 'framer-motion';
import { Link2Icon, SearchIcon, SlidersHorizontalIcon, TrendingUpIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { steps } from '../data/steps';
import { easeOut } from '../utils/motion';

const icons = {
  connect: Link2Icon,
  discover: SearchIcon,
  optimize: SlidersHorizontalIcon,
  grow: TrendingUpIcon
};

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="bg-cream pb-40 pt-24 md:pb-56 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <p className="text-sm font-medium text-terracotta">How It Works</p>
          <h2 id="how-heading" className="mt-4 max-w-2xl font-serif text-[clamp(2.25rem,4.5vw,4rem)] font-medium leading-[1] text-charcoal">
            Connect. Discover. Optimize. <span className="italic text-terracotta">Grow.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = icons[step.key];
            const isLast = i === steps.length - 1;
            return (
              <li key={step.key} className={`relative flex gap-6 lg:flex-col lg:gap-0 ${isLast ? '' : 'pb-12 lg:pb-0'}`}>
                {!isLast &&
                <div
                  aria-hidden="true"
                  className="absolute bottom-2 left-7 top-16 w-px bg-charcoal/15 lg:bottom-auto lg:left-16 lg:top-7 lg:h-px lg:w-[calc(100%-2.5rem)]">
                  
                    <motion.div
                    className="h-full w-full origin-top-left bg-terracotta"
                    initial={{ scaleX: 0, scaleY: 0 }}
                    whileInView={{ scaleX: 1, scaleY: 1 }}
                    viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.18, ease: easeOut }} />
                  
                  </div>
                }
                <motion.span
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-charcoal/15 bg-cream text-charcoal"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '0px 0px -15% 0px' }}
                  transition={{ duration: 0.25, delay: i * 0.18, ease: easeOut }}>
                  
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </motion.span>
                <Reveal delay={0.05 + i * 0.18} className="pt-2 lg:pt-8">
                  <p className="text-xs font-medium text-charcoal/50">Step {i + 1}</p>
                  <h3 className="mt-1 font-serif text-3xl font-semibold text-charcoal">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-base leading-relaxed text-charcoal/70">{step.description}</p>
                </Reveal>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}