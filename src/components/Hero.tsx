import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { HeroScene } from './HeroScene';
import { easeOut } from '../utils/motion';

const HERO_IMAGE = "/79014ba2-42ba-4d50-b2b3-37c23f99170e.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, reduced ? 1 : 0]);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const imgX = useSpring(px, { stiffness: 60, damping: 20 });
  const imgY = useSpring(py, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * -18);
      py.set((e.clientY / window.innerHeight - 0.5) * -12);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduced, px, py]);

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Introduction"
      className="relative isolate h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink">
      
      <motion.div className="absolute inset-0 -z-20" style={{ y: bgY }}>
        <motion.img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full scale-110 object-cover object-[70%_center]"
          style={{ x: imgX, y: imgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: easeOut }} />
        
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-ink/55" aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-ink/35 md:w-1/2" aria-hidden="true" />

      <HeroScene reducedMotion={reduced} />

      <motion.div
        className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-[24vh] pt-32 md:px-10 md:pb-[20vh]"
        style={{ y: contentY, opacity: contentOpacity }}>
        
        <h1 className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.01em] text-cream">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, ease: easeOut }}>
            
            Email Marketing
          </motion.span>
          <motion.span
            className="block italic text-[#D97706]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.27, ease: easeOut }}>
            Powered by Partnerships
          </motion.span>
        </h1>
        <motion.p
          className="mt-8 max-w-md text-base leading-relaxed text-cream/85 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.42, ease: easeOut }}>
          
         Crafting and sending targeted email campaigns to a segmented audience to promote products, services, events, or engage customers.
        </motion.p>
      </motion.div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[20vh] min-h-[110px] w-full md:h-[30vh]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true">
        
        <path d="M0 300 C 420 296, 880 230, 1440 30 L1440 320 L0 320 Z" fill="#F7F3EB" fillOpacity="0.18" />
        <path d="M0 312 C 480 306, 940 250, 1440 78 L1440 320 L0 320 Z" fill="#F7F3EB" />
      </svg>
    </section>);

}