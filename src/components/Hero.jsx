import React from 'react';
import { CelestialCanvas } from './CelestialCanvas';
import { InteractiveWordmark } from './InteractiveWordmark';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function Hero({ onExploreEvents }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-8 sm:pb-10 px-3 sm:px-6 lg:px-8 bg-[#FAF7F2] border-b border-[#E2DCD2] overflow-hidden select-none"
    >
      {/* Interactive Astrolabe & Constellation Physics Background */}
      <CelestialCanvas />

      {/* Background Corner Coordinate Markings (Desktop only) */}
      <div className="absolute top-20 left-6 hidden md:block pointer-events-none z-0">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-[#9E7438]/50">
          + 19.2061° N, 72.8737° E
        </span>
      </div>

      <div className="absolute top-20 right-6 hidden md:block pointer-events-none z-0">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-[#9E7438]/50">
          ASTROLABE MATRIX • SEC 01 +
        </span>
      </div>

      <div className="absolute bottom-6 left-6 hidden md:block pointer-events-none z-0">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-[#9E7438]/40">
          + TCET AUTONOMOUS ARCHIVE
        </span>
      </div>

      <div className="absolute bottom-6 right-6 hidden md:block pointer-events-none z-0">
        <span className="font-body text-[9px] uppercase tracking-[0.3em] text-[#9E7438]/40">
          MUMBAI • MMXXV +
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-5 sm:space-y-8 my-auto">
        
        {/* Subtle Institutional Line */}
        <div className="animate-fade-in">
          <p className="font-body text-[9px] sm:text-xs font-medium tracking-[0.25em] uppercase text-[#6B6862]">
            TCET MUMBAI • TSDW
          </p>
        </div>

        {/* Central Wordmark Artwork */}
        <div className="w-full max-w-5xl space-y-1">
          <InteractiveWordmark />
        </div>

        {/* Tagline & Essence */}
        <div className="space-y-2 max-w-xl mx-auto px-2">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase leading-tight">
            Spectrum of <span className="italic text-[#9E7438]">Innovation</span>
          </h1>

          <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
            Where ancient mythology meets modern engineering.
          </p>

          <div className="font-body text-[10px] sm:text-[11px] tracking-[0.25em] text-[#6B6862] uppercase pt-0.5">
            SEPTEMBER 25–27, 2025
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 px-4 sm:px-0">
          <button
            onClick={onExploreEvents}
            className="btn-gallery-primary w-full sm:w-auto px-8 py-3 text-xs flex items-center justify-center gap-2"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#9E7438]" />
          </button>

          <a
            href="#portals"
            className="btn-gallery-outline w-full sm:w-auto px-7 py-3 text-xs text-center"
          >
            <span>Overview</span>
          </a>
        </div>

      </div>

      {/* Minimal Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-3 text-center">
        <a
          href="#portals"
          aria-label="Scroll down to overview"
          className="text-[#6B6862] hover:text-[#9E7438] transition-colors focus:outline-none p-1"
        >
          <ChevronDown className="w-4 h-4 text-[#9E7438] animate-bounce" />
        </a>
      </div>

    </section>
  );
}
