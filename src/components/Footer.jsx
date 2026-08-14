import React from 'react';

export function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-[#121212] text-white border-t-4 border-black">
      
      {/* Top Colorful Constructivist Ribbon */}
      <div className="max-w-6xl mx-auto text-center space-y-4">
        
        {/* Geometric Motif */}
        <div className="flex items-center justify-center gap-2 mb-2" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-[#D02020] border border-white" />
          <div className="w-3 h-3 rounded-none bg-[#1040C0] border border-white" />
          <div className="w-3 h-3 rounded-none bg-[#F0C020] border border-white clip-triangle" />
        </div>

        {/* Title */}
        <div className="font-mono text-[#F0C020] text-base sm:text-lg font-bold flex items-center justify-center gap-2 uppercase tracking-wider">
          🌌 ZEPHYR - 2K25: The Cosmic Gateway
        </div>

        {/* Copyright */}
        <div className="font-mono text-white/70 text-xs sm:text-sm">
          © 2025 | ZEPHYR | COSMIC_GATEWAY | ALL_DIMENSIONS_RESERVED | VERSION_∞.0
        </div>

        {/* Powered by TSDW */}
        <div className="mt-4 text-[#FFF] font-mono text-xs flex items-center justify-center gap-1 font-bold">
          ⭐ Powered by <span className="text-[#F0C020]">TSDW</span> with Love❤️ ⭐
        </div>

      </div>
    </footer>
  );
}
