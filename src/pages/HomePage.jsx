import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { SponsorsSection } from '../components/SponsorsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export function HomePage({ onNavigateToEvents }) {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero onBookEvent={onNavigateToEvents} />

      {/* 2. About Section (#About) */}
      <AboutSection />

      {/* 3. Sponsors Section (🤝 GALACTIC_ALLIANCES.DB) */}
      <SponsorsSection />

      {/* 4. FAQs Section (Questions & Answers) */}
      <FaqSection />

      {/* 5. Contact Section (#Contact - Establish Contact) */}
      <ContactSection />
    </main>
  );
}
