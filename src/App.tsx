
import React from 'react';
import { MotionConfig } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Network } from './components/Network';
import { HowItWorks } from './components/HowItWorks';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { usePageMeta } from './hooks/usePageMeta';

function HomePage() {
  return (
    <>
      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <main>
        <Hero />
        <About />
        <Network />
        <HowItWorks />
        <FinalCta />
      </main>
    </>
  );
}

export function App() {
  usePageMeta();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full overflow-x-clip bg-cream font-sans text-charcoal antialiased">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="*"
            element={
              <main className="min-h-[50vh] px-6 py-24 text-center">
                <h1 className="text-3xl font-bold">Page not found</h1>
                <a
                  href="/"
                  className="mt-6 inline-block text-orange-700 underline"
                >
                  Return to Home
                </a>
              </main>
            }
          />
        </Routes>

        <Footer />
      </div>
    </MotionConfig>
  );
}
