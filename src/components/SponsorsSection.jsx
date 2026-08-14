import React from 'react';
import { SPONSORS } from '../data/sponsors';
import { CornerShape } from './Shapes';

export function SponsorsSection() {
  const row1 = SPONSORS.slice(0, 10);
  const row2 = SPONSORS.slice(10, 20);

  return (
    <section className="relative py-20 sm:py-32 bg-[#1040C0] text-white border-b-4 border-black overflow-hidden">
      
      {/* Dot Grid */}
      <div className="absolute inset-0 bg-bauhaus-dots-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header matching exact original text */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-[#F0C020] text-black px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black]">
            🤝 GALACTIC_ALLIANCES.DB
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white">
            Our Sponsors
          </h2>

          <p className="font-mono text-sm sm:text-base text-white/80 uppercase tracking-wider">
            Powering the next frontier of innovation
          </p>
        </div>

        {/* Dual Marquee of Sponsors */}
        <div className="space-y-6 overflow-hidden py-4">
          
          {/* Row 1 */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee gap-6 flex">
              {[...row1, ...row1, ...row1].map((spon, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-48 sm:w-56 bg-white text-[#121212] border-4 border-black shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-between shrink-0 group hover:-translate-y-1 transition-transform"
                >
                  <div className="w-full flex items-center justify-between text-[9px] font-mono font-bold text-[#121212]/60 uppercase mb-1">
                    <span>SPONSOR 0{spon.id}</span>
                    <CornerShape index={spon.id} size="w-2.5 h-2.5" />
                  </div>

                  <div className="h-16 sm:h-20 w-full flex items-center justify-center p-2">
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

                  <div className="w-full pt-1.5 border-t border-black text-center">
                    <span className="font-mono text-xs font-black text-[#121212] uppercase truncate block">
                      {spon.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Reverse) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-reverse gap-6 flex">
              {[...row2, ...row2, ...row2].map((spon, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-48 sm:w-56 bg-white text-[#121212] border-4 border-black shadow-[6px_6px_0px_0px_black] p-4 flex flex-col items-center justify-between shrink-0 group hover:-translate-y-1 transition-transform"
                >
                  <div className="w-full flex items-center justify-between text-[9px] font-mono font-bold text-[#121212]/60 uppercase mb-1">
                    <span>SPONSOR {spon.id}</span>
                    <CornerShape index={spon.id} size="w-2.5 h-2.5" />
                  </div>

                  <div className="h-16 sm:h-20 w-full flex items-center justify-center p-2">
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

                  <div className="w-full pt-1.5 border-t border-black text-center">
                    <span className="font-mono text-xs font-black text-[#121212] uppercase truncate block">
                      {spon.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
