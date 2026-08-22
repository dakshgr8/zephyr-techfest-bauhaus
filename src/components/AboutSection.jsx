import React from 'react';
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-8 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2DCD2] pb-6 sm:pb-8">
        <div className="space-y-1">
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#6B6862]">
            GENESIS & PHILOSOPHY
          </span>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase">
            About <span className="italic text-[#9E7438]">Zephyr</span>
          </h1>
        </div>

        <p className="max-w-md font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
          The flagship annual technical symposium of Thakur College of Engineering & Technology (TCET), Mumbai.
        </p>
      </div>

      {/* Editorial 3-Column Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        
        {/* Column 1: The Legacy */}
        <div className="gallery-card p-5 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#9E7438]">
              <BookOpen className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] sm:text-[10px] font-medium text-[#9E7438] uppercase tracking-[0.2em] block">
              01 // TWO DECADES OF LEGACY
            </span>

            <h3 className="font-display text-xl sm:text-2xl text-[#1C1C1C] font-medium">
              Estd. 2004 at TCET Mumbai
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6862] leading-relaxed font-body font-light">
              Since 2004, <strong>Zephyr</strong> has stood as the definitive technical symposium for engineers and researchers at Thakur College of Engineering & Technology.
            </p>
          </div>

          <div className="pt-3 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span className="text-[11px] uppercase tracking-wider">21ST EDITION</span>
            <span className="font-medium text-[#1C1C1C]">2004 — 2025</span>
          </div>
        </div>

        {/* Column 2: The Theme */}
        <div className="gallery-card p-5 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#1B3B4B]">
              <Sparkles className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] sm:text-[10px] font-medium text-[#1B3B4B] uppercase tracking-[0.2em] block">
              02 // THE THEME
            </span>

            <h3 className="font-display text-xl sm:text-2xl text-[#1C1C1C] font-medium">
              Spectrum of Innovation
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6862] leading-relaxed font-body font-light">
              From the Eye of Horus to modern neural networks, Zephyr bridges classical mythology with cutting-edge engineering and artificial intelligence.
            </p>
          </div>

          <div className="pt-3 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span className="text-[11px] uppercase tracking-wider">67 EVENTS</span>
            <span className="font-medium text-[#1C1C1C]">11 COMMITTEES</span>
          </div>
        </div>

        {/* Column 3: TSDW Student Council */}
        <div className="gallery-card p-5 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#2D5A46]">
              <Layers className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] sm:text-[10px] font-medium text-[#2D5A46] uppercase tracking-[0.2em] block">
              03 // ORGANIZING BODY
            </span>

            <h3 className="font-display text-xl sm:text-2xl text-[#1C1C1C] font-medium">
              TSDW Student Council
            </h3>

            <p className="text-xs sm:text-sm text-[#6B6862] leading-relaxed font-body font-light">
              The TCET Student Development and Welfare Association (TSDW) serves as the central student leadership council, driving academic development and technical leadership.
            </p>
          </div>

          <div className="pt-3 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span className="text-[11px] uppercase tracking-wider">MUMBAI UNIV</span>
            <span className="font-medium text-[#1C1C1C]">AUTONOMOUS</span>
          </div>
        </div>

      </div>

      {/* Statistical Highlights Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 bg-[#F3EFE8] p-4 sm:p-8 border border-[#E2DCD2]">
        <div className="space-y-0.5 text-center sm:text-left">
          <div className="font-display text-2xl sm:text-4xl font-medium text-[#1C1C1C]">
            67<span className="text-[#9E7438]">+</span>
          </div>
          <div className="font-body text-[10px] sm:text-[11px] text-[#6B6862] uppercase tracking-wider">
            Verified Events
          </div>
        </div>

        <div className="space-y-0.5 text-center sm:text-left">
          <div className="font-display text-2xl sm:text-4xl font-medium text-[#1C1C1C]">
            11<span className="text-[#1B3B4B]">+</span>
          </div>
          <div className="font-body text-[10px] sm:text-[11px] text-[#6B6862] uppercase tracking-wider">
            Chapters
          </div>
        </div>

        <div className="space-y-0.5 text-center sm:text-left">
          <div className="font-display text-2xl sm:text-4xl font-medium text-[#1C1C1C]">
            ₹5.0<span className="text-[#2D5A46]">L+</span>
          </div>
          <div className="font-body text-[10px] sm:text-[11px] text-[#6B6862] uppercase tracking-wider">
            Prize Pool
          </div>
        </div>

        <div className="space-y-0.5 text-center sm:text-left">
          <div className="font-display text-2xl sm:text-4xl font-medium text-[#1C1C1C]">
            21<span className="text-[#9E7438]">st</span>
          </div>
          <div className="font-body text-[10px] sm:text-[11px] text-[#6B6862] uppercase tracking-wider">
            Edition
          </div>
        </div>
      </div>

    </section>
  );
}
