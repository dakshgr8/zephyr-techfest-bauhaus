import React from 'react';
import { BookOpen, Layers, Sparkles } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F7F2E9] border-b border-[#E3D9C6]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E3D9C6] pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#736B60]">
                GENESIS & PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1A1714] tracking-wide uppercase">
              About <span className="italic font-editorial text-[#C5A059] lowercase">Zephyr</span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-xs sm:text-sm text-[#5A5248] leading-relaxed">
            The flagship annual technical symposium of Thakur College of Engineering & Technology (TCET), Mumbai — celebrating over two decades of engineering ingenuity and interdisciplinary innovation.
          </p>
        </div>

        {/* Editorial 3-Column Narrative with Seamless Blended Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Column 1: The Legacy */}
          <div className="manuscript-card p-7 sm:p-9 rounded-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#F2ECE0] border border-[#E3D9C6] flex items-center justify-center text-[#C5A059]">
                <BookOpen className="w-4 h-4" />
              </div>

              <span className="font-mono text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em] block">
                01 // TWO DECADES OF LEGACY
              </span>

              <h3 className="font-serif text-xl text-[#1A1714] font-semibold tracking-wide">
                Estd. 2004 at TCET Mumbai
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5248] leading-relaxed">
                Ever since its inception in 2004, <strong>Zephyr</strong> has stood as the definitive technical gathering for aspiring engineers and researchers at Thakur College of Engineering & Technology. Each edition bridges foundational theory with hands-on mastery across hackathons, robotics, and creative arts.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E3D9C6] flex items-center justify-between text-xs font-mono text-[#736B60]">
              <span>21ST EDITION</span>
              <span className="font-bold text-[#1A1714]">2004 — 2025</span>
            </div>
          </div>

          {/* Column 2: The Theme */}
          <div className="manuscript-card p-7 sm:p-9 rounded-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#F2ECE0] border border-[#E3D9C6] flex items-center justify-center text-[#1B3B4B]">
                <Sparkles className="w-4 h-4" />
              </div>

              <span className="font-mono text-[10px] font-bold text-[#1B3B4B] uppercase tracking-[0.2em] block">
                02 // THE THEME
              </span>

              <h3 className="font-serif text-xl text-[#1A1714] font-semibold tracking-wide">
                Spectrum of Innovation
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5248] leading-relaxed">
                The 2025 theme conceptualizes the expedition of a cosmic traveler traversing ancient mathematical symbols, maritime architecture, and modern artificial intelligence. From the Eye of Horus to neural networks, Zephyr honors human curiosity across all dimensions.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E3D9C6] flex items-center justify-between text-xs font-mono text-[#736B60]">
              <span>67 EVENTS</span>
              <span className="font-bold text-[#1A1714]">11 COMMITTEES</span>
            </div>
          </div>

          {/* Column 3: TSDW Student Council */}
          <div className="manuscript-card p-7 sm:p-9 rounded-xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-9 h-9 rounded bg-[#F2ECE0] border border-[#E3D9C6] flex items-center justify-center text-[#2D5A46]">
                <Layers className="w-4 h-4" />
              </div>

              <span className="font-mono text-[10px] font-bold text-[#2D5A46] uppercase tracking-[0.2em] block">
                03 // ORGANIZING BODY
              </span>

              <h3 className="font-serif text-xl text-[#1A1714] font-semibold tracking-wide">
                TSDW Student Council
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5248] leading-relaxed">
                The TCET Student Development and Welfare Association (TSDW), formed under Mumbai University guidelines, serves as the central student leadership council, driving academic development, intercollegiate festivals, and technical leadership.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E3D9C6] flex items-center justify-between text-xs font-mono text-[#736B60]">
              <span>MUMBAI UNIVERSITY</span>
              <span className="font-bold text-[#1A1714]">AUTONOMOUS</span>
            </div>
          </div>

        </div>

        {/* Statistical Highlights Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-[#F2ECE0]/70 p-6 sm:p-8 rounded-xl border border-[#E3D9C6]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714]">
              67<span className="text-[#C5A059]">+</span>
            </div>
            <div className="font-mono text-[11px] text-[#736B60] uppercase tracking-wider">
              Verified Events
            </div>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714]">
              11<span className="text-[#1B3B4B]">+</span>
            </div>
            <div className="font-mono text-[11px] text-[#736B60] uppercase tracking-wider">
              Active Committees
            </div>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714]">
              ₹5.0<span className="text-[#2D5A46]">L+</span>
            </div>
            <div className="font-mono text-[11px] text-[#736B60] uppercase tracking-wider">
              Prize Pool & Grants
            </div>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1714]">
              21<span className="text-[#C5A059]">st</span>
            </div>
            <div className="font-mono text-[11px] text-[#736B60] uppercase tracking-wider">
              Annual Edition
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
