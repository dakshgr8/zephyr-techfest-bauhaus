import React, { useState } from 'react';
import { SCHEDULE_DAYS } from '../data/schedule';
import { Clock, MapPin, Tag, Calendar, Sparkles } from 'lucide-react';
import { CornerShape, BauhausTag } from './Shapes';

export function ScheduleSection({ onSelectEventByTitle }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const activeDay = SCHEDULE_DAYS[activeDayIdx];

  return (
    <section id="schedule" className="w-full bg-[#F0F0F0] border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-[#D02020] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                CHRONOLOGY // 3-DAY TIMELINE
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212] leading-[0.95]">
              FESTIVAL<br />
              <span className="text-[#1040C0]">SCHEDULE</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-sm text-[#121212]/80 leading-relaxed">
            Plan your symposium itinerary across all three days at Thakur College of Engineering and Technology (TCET), Mumbai.
          </p>
        </div>

        {/* 3-Day Tab Switcher */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCHEDULE_DAYS.map((day, idx) => {
            const isSelected = activeDayIdx === idx;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDayIdx(idx)}
                className={`p-5 sm:p-6 text-left border-4 border-black transition-all relative overflow-hidden rounded-none ${
                  isSelected
                    ? `${day.color} ${day.textColor} shadow-[8px_8px_0px_0px_black] -translate-y-1`
                    : "bg-white text-[#121212] shadow-[4px_4px_0px_0px_black] hover:bg-[#F8F8F8]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-80">
                    {day.dayNumber}
                  </span>
                  <CornerShape index={idx} size="w-3.5 h-3.5" />
                </div>

                <div className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  {day.date}
                </div>

                <div className="text-xs font-mono font-bold uppercase tracking-wider mt-2 opacity-90">
                  {day.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Day Schedule Timeline Container */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-10 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-3 border-black pb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D02020] block">
                ACTIVE TIMELINE FOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#121212]">
                {activeDay.dayNumber} — {activeDay.date}
              </h3>
            </div>
            <span className="font-mono text-xs font-bold bg-[#F0C020] text-black px-3 py-1 border-2 border-black">
              {activeDay.theme}
            </span>
          </div>

          {/* Timeline Events List */}
          <div className="space-y-4 pt-2">
            {activeDay.events.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-[#F0F0F0] border-3 border-black shadow-[4px_4px_0px_0px_black] hover:shadow-[6px_6px_0px_0px_#1040C0] hover:bg-white transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-4">
                  
                  {/* Rotated Time Badge (Bauhaus style 45 degree rotation) */}
                  <div className="hidden sm:flex w-12 h-12 rounded-none bg-[#121212] text-white border-2 border-black items-center justify-center font-mono font-black text-sm shrink-0 shadow-[2px_2px_0px_0px_black]">
                    0{idx + 1}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-[#D02020] text-white border border-black">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {item.time}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-[#1040C0] text-white border border-black">
                        {item.committee}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase px-2.5 py-0.5 bg-[#F0C020] text-black border border-black">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#121212] group-hover:text-[#1040C0] transition-colors">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#121212]/70 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-[#D02020]" />
                      <span>{item.venue}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#events"
                  className="bauhaus-btn px-4 py-2 bg-white text-black hover:bg-[#F0C020] text-xs self-start md:self-center"
                >
                  VIEW EVENT
                </a>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
