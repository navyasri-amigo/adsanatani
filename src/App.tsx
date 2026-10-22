import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Network } from './components/Network';
import { HowItWorks } from './components/HowItWorks';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { usePageMeta } from './hooks/usePageMeta';

export function App() {
  usePageMeta();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-clip bg-cream font-sans text-charcoal antialiased">
        <a
          href="#about"
          className="sr-only z-[60] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          
          Skip to content
        </a>
        <Header />
        <main>
          <Hero />
          <About />
          <Network />
          <HowItWorks />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>);

}