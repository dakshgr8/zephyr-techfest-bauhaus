import React, { useState } from 'react';
import { SPONSORS } from '../data/sponsors';
import { CornerShape, BauhausTag } from './Shapes';
import { Sparkles, Grid, Layers } from 'lucide-react';

export function SponsorsMarquee() {
  const [viewMode, setViewMode] = useState("marquee"); // 'marquee' or 'grid'

  // Duplicate sponsors for smooth infinite marquee loops
  const row1 = SPONSORS.slice(0, 10);
  const row2 = SPONSORS.slice(10, 20);

  return (
    <section id="sponsors" className="w-full bg-[#1040C0] text-white border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-bauhaus-dots-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-none bg-[#F0C020] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
                GALACTIC ALLIANCES // 20+ SPONSORS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
              OUR INDUSTRY<br />
              <span className="text-[#F0C020]">PARTNERS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode(viewMode === "marquee" ? "grid" : "marquee")}
              className="bauhaus-btn px-4 py-2 bg-white text-black text-xs font-mono"
            >
              {viewMode === "marquee" ? "SWITCH TO ALL 20 GRID" : "SWITCH TO MARQUEE"}
            </button>
          </div>
        </div>

        {/* View Mode 1: Infinite Marquee Rows */}
        {viewMode === "marquee" && (
          <div className="space-y-6 overflow-hidden py-4">
            
            {/* Marquee Row 1 */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee gap-6 flex">
                {[...row1, ...row1, ...row1].map((spon, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className="w-48 sm:w-60 bg-white text-[#121212] border-4 border-black shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-between shrink-0 group hover:-translate-y-1 transition-transform"
                  >
                    <div className="w-full flex items-center justify-between text-[9px] font-mono font-bold text-[#121212]/60 uppercase mb-2">
                      <span>PARTNER 0{spon.id}</span>
                      <CornerShape index={spon.id} size="w-2.5 h-2.5" />
                    </div>

                    <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2">
                      <img
                        src={spon.image}
                        alt={spon.name}
                        className="max-h-full max-w-full object-contain bauhaus-img-filter group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/zephyr-logo.jpeg";
                        }}
                      />
                    </div>

                    <div className="w-full pt-2 border-t border-black text-center">
                      <span className="font-mono text-[11px] font-black text-[#121212] uppercase truncate block">
                        {spon.name}
                      </span>
                      <span className="font-mono text-[9px] text-[#D02020] font-bold uppercase block">
                        {spon.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 (Reverse Direction) */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee-reverse gap-6 flex">
                {[...row2, ...row2, ...row2].map((spon, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className="w-48 sm:w-60 bg-white text-[#121212] border-4 border-black shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-between shrink-0 group hover:-translate-y-1 transition-transform"
                  >
                    <div className="w-full flex items-center justify-between text-[9px] font-mono font-bold text-[#121212]/60 uppercase mb-2">
                      <span>PARTNER {spon.id}</span>
                      <CornerShape index={spon.id} size="w-2.5 h-2.5" />
                    </div>

                    <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2">
                      <img
                        src={spon.image}
                        alt={spon.name}
                        className="max-h-full max-w-full object-contain bauhaus-img-filter group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/zephyr-logo.jpeg";
                        }}
                      />
                    </div>

                    <div className="w-full pt-2 border-t border-black text-center">
                      <span className="font-mono text-[11px] font-black text-[#121212] uppercase truncate block">
                        {spon.name}
                      </span>
                      <span className="font-mono text-[9px] text-[#1040C0] font-bold uppercase block">
                        {spon.tier}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* View Mode 2: Full 20 Sponsors Grid */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {SPONSORS.map((spon, idx) => (
              <div
                key={spon.id}
                className="bg-white text-[#121212] border-4 border-black shadow-[4px_4px_0px_0px_black] p-4 flex flex-col items-center justify-between group hover:-translate-y-1 transition-transform"
              >
                <div className="w-full flex items-center justify-between text-[9px] font-mono font-bold text-[#121212]/60 uppercase mb-2">
                  <span>#{spon.id}</span>
                  <CornerShape index={idx} size="w-2.5 h-2.5" />
                </div>

                <div className="h-20 w-full flex items-center justify-center p-1">
                  <img
                    src={spon.image}
                    alt={spon.name}
                    className="max-h-full max-w-full object-contain bauhaus-img-filter group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/zephyr-logo.jpeg";
                    }}
                  />
                </div>

                <div className="w-full pt-2 border-t border-black text-center">
                  <span className="font-mono text-xs font-black text-[#121212] uppercase truncate block">
                    {spon.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#D02020] font-bold uppercase block">
                    {spon.tier}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sponsor Callout Banner */}
        <div className="p-6 bg-[#121212] text-white border-4 border-black shadow-[8px_8px_0px_0px_#F0C020] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-black text-lg sm:text-xl uppercase text-[#F0C020]">
              WANT TO PARTNER WITH ZEPHYR 2025?
            </h4>
            <p className="font-mono text-xs text-white/80">
              Connect with 5,000+ top engineering delegates from across India.
            </p>
          </div>
          <a
            href="mailto:technicalteamtsdw@gmail.com?subject=Sponsorship%20Inquiry%20Zephyr%202025"
            className="bauhaus-btn px-6 py-3 bg-[#F0C020] text-black text-xs font-black uppercase shrink-0"
          >
            SPONSORSHIP PROPOSAL
          </a>
        </div>

      </div>
    </section>
  );
}
