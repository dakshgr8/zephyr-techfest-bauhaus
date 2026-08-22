import React from 'react';
import { InteractiveWordmark } from './InteractiveWordmark';
import { ChevronDown, ArrowRight } from 'lucide-react';

export function Hero({ onExploreEvents }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-[#E2DCD2] overflow-hidden select-none"
    >
      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center space-y-6 sm:space-y-8 my-auto">
        
        {/* Subtle Institutional Line */}
        <div className="animate-fade-in">
          <p className="font-body text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase text-[#6B6862]">
            TCET MUMBAI • TSDW
          </p>
        </div>

        {/* Central Wordmark Artwork */}
        <div className="w-full max-w-5xl space-y-2">
          <InteractiveWordmark />
        </div>

        {/* Tagline & Essence */}
        <div className="space-y-2.5 max-w-xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase leading-tight">
            Spectrum of <span className="italic text-[#9E7438]">Innovation</span>
          </h1>

          <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
            Where ancient mythology meets modern engineering.
          </p>

          <div className="font-body text-[11px] tracking-[0.25em] text-[#6B6862] uppercase pt-1">
            SEPTEMBER 25–27, 2025
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <button
            onClick={onExploreEvents}
            className="btn-gallery-primary px-8 py-3.5 text-xs flex items-center gap-2"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#9E7438]" />
          </button>

          <a
            href="#portals"
            className="btn-gallery-outline px-7 py-3.5 text-xs"
          >
            <span>Overview</span>
          </a>
        </div>

      </div>

      {/* Minimal Scroll Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-4 text-center">
        <a
          href="#portals"
          aria-label="Scroll down to overview"
          className="text-[#6B6862] hover:text-[#9E7438] transition-colors focus:outline-none"
        >
          <ChevronDown className="w-4 h-4 text-[#9E7438] animate-bounce" />
        </a>
      </div>

    </section>
  );
}
