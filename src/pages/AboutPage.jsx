import React, { useEffect } from 'react';
import { BookOpen, Sparkles, Layers, ArrowRight } from 'lucide-react';

export function AboutPage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 animate-fade-in">
      
      {/* Page Header */}
      <div className="space-y-3 text-center max-w-2xl mx-auto border-b border-[#E2DCD2] pb-8">
        <div className="flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7438]" />
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#6B6862]">
            ESTABLISHED 2004 • TCET MUMBAI
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase">
          The <span className="italic text-[#9E7438]">Zephyr</span> Story
        </h1>

        <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
          The annual technical symposium of Thakur College of Engineering and Technology.
        </p>
      </div>

      {/* 3-Part Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Chapter 1: Heritage */}
        <div className="gallery-card p-8 sm:p-10 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#9E7438]">
              <BookOpen className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] font-medium text-[#9E7438] uppercase tracking-[0.2em] block">
              CHAPTER 01 // HERITAGE
            </span>

            <h2 className="font-display text-2xl text-[#1C1C1C] font-medium tracking-wide">
              Two Decades of Excellence
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
              Founded in 2004, Zephyr has grown into a premier technical gathering, uniting thousands of student researchers, developers, and esports competitors across India.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span>EDITION</span>
            <span className="font-medium text-[#1C1C1C]">21ST (2025)</span>
          </div>
        </div>

        {/* Chapter 2: Theme */}
        <div className="gallery-card p-8 sm:p-10 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#1B3B4B]">
              <Sparkles className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] font-medium text-[#1B3B4B] uppercase tracking-[0.2em] block">
              CHAPTER 02 // PHILOSOPHY
            </span>

            <h2 className="font-display text-2xl text-[#1C1C1C] font-medium tracking-wide">
              Spectrum of Innovation
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
              The 2025 theme honors the journey from ancient geometry and celestial navigation to modern neural architectures, robotics, and cyber defense.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span>SCOPE</span>
            <span className="font-medium text-[#1C1C1C]">67 EVENTS</span>
          </div>
        </div>

        {/* Chapter 3: Council */}
        <div className="gallery-card p-8 sm:p-10 space-y-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#2D5A46]">
              <Layers className="w-4 h-4" />
            </div>

            <span className="font-body text-[9px] font-medium text-[#2D5A46] uppercase tracking-[0.2em] block">
              CHAPTER 03 // LEADERSHIP
            </span>

            <h2 className="font-display text-2xl text-[#1C1C1C] font-medium tracking-wide">
              TSDW Student Council
            </h2>

            <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
              The TCET Student Development and Welfare Association (TSDW) coordinates all student-led technical bodies under the University of Mumbai guidelines.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E2DCD2] flex items-center justify-between text-xs font-body text-[#6B6862]">
            <span>COUNCIL</span>
            <span className="font-medium text-[#1C1C1C]">TSDW TCET</span>
          </div>
        </div>

      </div>

      {/* Numerical Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#F3EFE8] p-8 border border-[#E2DCD2]">
        <div className="space-y-1">
          <div className="font-display text-3xl sm:text-4xl font-normal text-[#1C1C1C]">
            67<span className="text-[#9E7438]">+</span>
          </div>
          <div className="font-body text-[10px] text-[#6B6862] uppercase tracking-[0.2em]">
            Verified Events
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-display text-3xl sm:text-4xl font-normal text-[#1C1C1C]">
            11<span className="text-[#1B3B4B]">+</span>
          </div>
          <div className="font-body text-[10px] text-[#6B6862] uppercase tracking-[0.2em]">
            Student Chapters
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-display text-3xl sm:text-4xl font-normal text-[#1C1C1C]">
            ₹5L<span className="text-[#2D5A46]">+</span>
          </div>
          <div className="font-body text-[10px] text-[#6B6862] uppercase tracking-[0.2em]">
            Prize Pool
          </div>
        </div>

        <div className="space-y-1">
          <div className="font-display text-3xl sm:text-4xl font-normal text-[#1C1C1C]">
            21<span className="text-[#9E7438]">st</span>
          </div>
          <div className="font-body text-[10px] text-[#6B6862] uppercase tracking-[0.2em]">
            Annual Edition
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => onNavigate('events')}
          className="btn-gallery-primary px-8 py-3.5 text-xs inline-flex items-center gap-2"
        >
          <span>Explore 67 Verified Events</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#9E7438]" />
        </button>
      </div>

    </div>
  );
}
