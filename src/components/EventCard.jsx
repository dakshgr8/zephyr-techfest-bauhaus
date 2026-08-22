import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EventCard({ event, onSelect }) {
  return (
    <div
      onClick={() => onSelect(event)}
      className="gallery-card group p-4 sm:p-6 lg:p-7 flex flex-col justify-between cursor-pointer relative overflow-hidden space-y-4 sm:space-y-6"
    >
      {/* Top Meta & Title */}
      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2 py-0.5 bg-[#FAF7F2] border border-[#E2DCD2] group-hover:border-[#9E7438] font-body text-[9px] sm:text-[10px] font-medium text-[#1C1C1C] uppercase tracking-[0.18em] transition-colors">
            {event.tag}
          </span>

          <span className="font-body text-[9px] sm:text-[10px] text-[#6B6862] uppercase tracking-[0.18em]">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-medium text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors leading-snug tracking-wide">
          {event.title}
        </h3>

        {/* Short description */}
        <p className="font-body text-xs text-[#6B6862] line-clamp-2 leading-relaxed font-light">
          {event.desc}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="pt-3 sm:pt-4 border-t border-[#E2DCD2] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-display font-medium text-sm sm:text-base text-[#1C1C1C]">
            {event.priceDisplay}
          </span>
          <span className="text-[#D8D1C5]">•</span>
          <span className="font-body text-xs text-[#2D5A46]">
            {event.prizeDisplay}
          </span>
        </div>

        <div className="p-1.5 sm:p-2 bg-[#FAF7F2] group-hover:bg-[#1C1C1C] text-[#1C1C1C] group-hover:text-white border border-[#E2DCD2] group-hover:border-[#1C1C1C] transition-all duration-200">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
