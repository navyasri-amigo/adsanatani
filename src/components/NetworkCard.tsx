import React from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowRightIcon, HandshakeIcon, MegaphoneIcon, NewspaperIcon } from 'lucide-react';
import { networkItems } from '../data/network';
import { scrollToSection } from '../utils/motion';

type NetworkItem = (typeof networkItems)[number];

const icons = {
  advertisers: MegaphoneIcon,
  publishers: NewspaperIcon,
  affiliate: HandshakeIcon
};

const accentClasses = {
  gold: 'bg-gold text-ink',
  terracotta: 'bg-terracotta text-cream',
  charcoal: 'bg-charcoal text-gold'
};

export function NetworkCard({ item }: {item: NetworkItem;}) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 220, damping: 22 });
  const Icon = icons[item.key];

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        scrollToSection('contact');
      }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group flex h-full min-h-[380px] flex-col rounded-3xl bg-cream p-8 shadow-[0_1px_0_rgba(32,32,30,0.06)] transition-shadow duration-200 ease-out hover:shadow-[0_30px_60px_-30px_rgba(23,23,21,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta md:p-10">
      
      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accentClasses[item.accent]}`}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-10 font-serif text-4xl font-semibold leading-none text-charcoal md:text-[2.75rem]">{item.title}</h3>
      <p className="mt-4 text-base leading-relaxed text-charcoal/70">{item.description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-semibold text-charcoal">
        {item.cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </motion.a>);

}