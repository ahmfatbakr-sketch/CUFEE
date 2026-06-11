/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceTabs } from './components/ExperienceTabs';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[var(--color-sarmad-bg)] selection:bg-[var(--color-sarmad-gold)] selection:text-white">
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <ExperienceTabs />
          <Reviews />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
