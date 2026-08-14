import React from 'react';
import { ALL_EVENTS } from '../data/events';
import { CornerShape, BauhausTag } from './Shapes';
import { Trophy, Users, ArrowRight, Sparkles, Tag } from 'lucide-react';

export function SpectrumHighlights({ onSelectEvent }) {
  // Select 6 iconic flagship events from the 67 events
  const flagshipIds = [11, 5, 2, 3, 4, 1];
  const flagshipEvents = ALL_EVENTS.filter(e => flagshipIds.includes(e.id));

  return (
    <section className="w-full bg-[#121212] text-white border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Dot Grid in White */}
      <div className="absolute inset-0 bg-bauhaus-dots-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-none bg-[#F0C020] border border-white" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
                CURATED SELECTION // HIGH STAKES
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95]">
              FLAGSHIP<br />
              <span className="text-[#F0C020]">SHOWCASES</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-sm text-white/80 leading-relaxed">
            The premier high-energy showdowns, premier esports tournaments, masterclasses, and tactical hack challenges of Zephyr '25.
          </p>
        </div>

        {/* 6-Card Grid with Bauhaus Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipEvents.map((evt, idx) => (
            <div
              key={evt.id}
              onClick={() => onSelectEvent(evt)}
              className="bg-white text-[#121212] border-4 border-black shadow-[6px_6px_0px_0px_#F0C020] hover:shadow-[10px_10px_0px_0px_#D02020] hover:-translate-y-2 transition-all duration-200 cursor-pointer flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Event Image with Grayscale Filter & Hover Color */}
                <div className="relative h-48 sm:h-52 w-full border-b-4 border-black overflow-hidden bg-black">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover bauhaus-img-filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/zephyr-logo.jpeg";
                    }}
                  />
                  
                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-xs font-black uppercase px-2.5 py-1 bg-[#121212] text-white border-2 border-black shadow-[2px_2px_0px_0px_white]">
                      {evt.tag}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase px-2 py-1 bg-[#F0C020] text-black border border-black">
                      {evt.category}
                    </span>
                  </div>

                  {/* Corner Geometric Shape */}
                  <div className="absolute top-3 right-3">
                    <CornerShape index={idx} size="w-4 h-4" />
                  </div>

                  {/* Price Tag in Bottom Right */}
                  <div className="absolute bottom-3 right-3 font-mono text-xs font-black px-3 py-1 bg-[#D02020] text-white border-2 border-black shadow-[2px_2px_0px_0px_black]">
                    ENTRY: {evt.priceDisplay}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#121212]/60 uppercase">
                      EVENT #{String(evt.id).padStart(2, '0')}
                    </span>
                    {evt.prize_pool && (
                      <span className="flex items-center gap-1 text-xs font-bold text-[#D02020] font-mono">
                        <Trophy className="w-3.5 h-3.5" />
                        <span>{evt.prize_pool}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212] group-hover:text-[#1040C0] transition-colors leading-tight">
                    {evt.title}
                  </h3>

                  <p className="text-sm font-medium text-[#121212]/80 line-clamp-3 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 sm:p-5 bg-[#F0F0F0] border-t-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#121212]/70">
                  <Users className="w-3.5 h-3.5" />
                  <span>
                    {evt.teamMin === evt.teamMax
                      ? `${evt.teamMin} ${evt.teamMin === 1 ? 'Player' : 'Players'}`
                      : `${evt.teamMin}-${evt.teamMax} Players`}
                  </span>
                </div>

                <span className="font-black text-xs uppercase tracking-wider text-[#D02020] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>REGISTER</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-6">
          <a
            href="#events"
            className="bauhaus-btn px-8 py-4 bg-[#F0C020] text-black hover:bg-[#F0C020]/90 text-sm sm:text-base"
          >
            <span>VIEW ALL 67 EVENTS IN DIRECTORY</span>
            <ArrowRight className="w-5 h-5 ml-2 stroke-[3]" />
          </a>
        </div>

      </div>
    </section>
  );
}
