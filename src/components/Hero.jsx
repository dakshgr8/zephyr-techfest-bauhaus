import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CosmicGatewayCanvas } from './CosmicGatewayCanvas';

export function Hero({ onBookEvent }) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between bg-[#F0F0F0] border-b-4 border-black overflow-hidden select-none">
      
      {/* 1. Live Interactive Cosmic Gateway & Time Machine Canvas */}
      <CosmicGatewayCanvas />

      {/* Subtle Dot Grid Layer */}
      <div className="absolute inset-0 bg-bauhaus-dots-light opacity-15 pointer-events-none" />

      {/* 2. Sleek, Decluttered Hero Typography & Action Controls */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pointer-events-none">
        
        {/* Top Minimalist Portal Badge */}
        <div className="flex items-center gap-2 mb-4 pointer-events-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[#121212] text-[#F0C020] px-3.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D02020] animate-pulse" />
            PORTAL_ID: COSMIC_GATEWAY_2025
          </span>
          <span className="font-mono text-xs font-bold uppercase tracking-wider bg-[#F0C020] text-black px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black]">
            TSDW @ TCET
          </span>
        </div>

        {/* Decluttered Bold Headline */}
        <div className="max-w-2xl">
          <span className="block text-xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
            TSDW Presents
          </span>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter text-[#121212] leading-[0.85]">
            ZEPHYR <span className="text-[#D02020]">2025</span>
          </h1>

          {/* Subtitle & Date */}
          <div className="mt-3 space-y-1">
            <div className="font-mono text-xs sm:text-base font-bold text-[#121212] uppercase tracking-[0.12em] flex items-center gap-1.5">
              <span className="text-[#D02020] font-black">▸</span> INTERDIMENSIONAL TECHNOLOGY SYMPOSIUM
            </div>
            <div className="font-mono text-xs font-bold text-[#121212]/70 uppercase tracking-widest">
              25-27.SEPTEMBER.2025 | [TCET MUMBAI] | MISSION_CRITICAL
            </div>
          </div>

          {/* Primary Action Buttons (Clickable) */}
          <div className="pt-6 flex flex-wrap items-center gap-3 pointer-events-auto">
            <button
              onClick={onBookEvent}
              className="bauhaus-btn px-8 sm:px-10 py-3.5 sm:py-4 bg-[#D02020] text-white hover:bg-[#D02020]/90 text-sm sm:text-base font-black tracking-wider uppercase shadow-[5px_5px_0px_0px_black]"
            >
              <span>BOOK EVENT</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[3]" />
            </button>

            <a
              href="#About"
              className="bauhaus-btn px-6 py-3.5 sm:py-4 bg-white text-black hover:bg-[#E0E0E0] text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_black]"
            >
              ABOUT FEST
            </a>

            <a
              href="#Contact"
              className="bauhaus-btn px-6 py-3.5 sm:py-4 bg-[#F0C020] text-black hover:bg-[#F0C020]/90 text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_black]"
            >
              CONTACT
            </a>
          </div>
        </div>

      </div>

      {/* 3. Minimal Bottom Bar with Gateway Interaction Cue */}
      <div className="relative z-10 w-full bg-[#121212] text-white py-2 px-4 sm:px-8 border-t-4 border-black font-mono text-xs flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 font-bold">
          <span className="text-[#F0C020]">🌌 INTERACTIVE COSMIC GATEWAY:</span>
          <span className="text-white/80 hidden sm:inline">Move cursor to warp gravity field • Click to pulse dimensional shockwaves!</span>
        </div>
        <div className="flex items-center gap-3 text-xs font-bold uppercase">
          <span className="text-[#D02020]">● LIVE PORTAL</span>
          <span className="text-white/60">TCET '25</span>
        </div>
      </div>

    </section>
  );
}
