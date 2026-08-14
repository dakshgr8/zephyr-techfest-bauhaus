import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CosmicGatewayCanvas } from './CosmicGatewayCanvas';

export function Hero({ onBookEvent }) {
  return (
    <section className="relative min-h-[88vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between bg-[#F0F0F0] border-b-4 border-black overflow-hidden select-none pb-3 sm:pb-0">
      
      {/* 1. Live Interactive Cosmic Gateway & Time Machine Canvas */}
      <CosmicGatewayCanvas />

      {/* Subtle Dot Grid Layer */}
      <div className="absolute inset-0 bg-bauhaus-dots-light opacity-15 pointer-events-none" />

      {/* 2. Sleek Bauhaus Hero Typography & Action Controls */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 pointer-events-none">
        
        {/* Top Minimalist Portal Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4 pointer-events-auto">
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-[#121212] text-[#F0C020] px-2.5 sm:px-3.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black] flex items-center gap-1.5 sm:gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D02020] animate-pulse" />
            PORTAL_ID: COSMIC_GATEWAY_2025
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F0C020] text-black px-2 sm:px-2.5 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black]">
            TSDW @ TCET
          </span>
        </div>

        {/* High-Impact Headline */}
        <div className="max-w-2xl">
          <span className="inline-block text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#121212] bg-[#F0F0F0]/90 px-1">
            TSDW Presents
          </span>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-[#121212] leading-[0.88] sm:leading-[0.85] my-1 sm:my-2">
            ZEPHYR <span className="text-[#D02020]">2025</span>
          </h1>

          {/* Subtitle & Date with High Contrast */}
          <div className="mt-2 sm:mt-3 space-y-1.5 pointer-events-auto">
            <div className="font-mono text-xs sm:text-sm lg:text-base font-bold text-[#121212] uppercase tracking-[0.1em] sm:tracking-[0.12em] flex items-center gap-1.5">
              <span className="text-[#D02020] font-black">▸</span>
              <span className="bg-[#FFF9C4] px-1.5 py-0.5 border border-black shadow-[1px_1px_0px_0px_black]">
                INTERDIMENSIONAL TECHNOLOGY SYMPOSIUM
              </span>
            </div>
            <div className="font-mono text-[10px] sm:text-xs font-bold text-[#121212] uppercase tracking-wider">
              <span className="bg-white/90 px-2 py-0.5 border border-black shadow-[1px_1px_0px_0px_black] inline-block">
                25-27.SEPTEMBER.2025 | [TCET MUMBAI] | MISSION_CRITICAL
              </span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-5 sm:pt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 pointer-events-auto">
            <button
              onClick={onBookEvent}
              className="bauhaus-btn px-6 sm:px-10 py-3 sm:py-4 bg-[#D02020] text-white hover:bg-[#D02020]/90 text-xs sm:text-base font-black tracking-wider uppercase shadow-[4px_4px_0px_0px_black] sm:shadow-[5px_5px_0px_0px_black]"
            >
              <span>BOOK EVENT</span>
              <ArrowRight className="w-4 h-4 ml-1.5 stroke-[3]" />
            </button>

            <a
              href="#About"
              className="bauhaus-btn px-4 sm:px-6 py-3 sm:py-4 bg-white text-black hover:bg-[#E0E0E0] text-xs sm:text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_black]"
            >
              ABOUT FEST
            </a>

            <a
              href="#Contact"
              className="bauhaus-btn px-4 sm:px-6 py-3 sm:py-4 bg-[#F0C020] text-black hover:bg-[#F0C020]/90 text-xs sm:text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_black]"
            >
              CONTACT
            </a>
          </div>
        </div>

      </div>

      {/* 3. Minimal Bottom Bar */}
      <div className="relative z-10 w-full bg-[#121212] text-white py-2 px-3 sm:px-8 border-t-4 border-black font-mono text-[10px] sm:text-xs flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-2 font-bold truncate">
          <span className="text-[#F0C020]">🌌 COSMIC GATEWAY:</span>
          <span className="text-white/80 hidden sm:inline">Move cursor / tap screen to pulse spacetime shockwaves!</span>
          <span className="text-white/80 sm:hidden">Tap anywhere to pulse!</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold uppercase shrink-0">
          <span className="text-[#D02020]">● LIVE PORTAL</span>
          <span className="text-white/60">TCET '25</span>
        </div>
      </div>

    </section>
  );
}
