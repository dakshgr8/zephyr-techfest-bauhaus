import React, { useState } from 'react';
import { SCHEDULE_DAYS } from '../data/schedule';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

export function ScheduleSection({ onSelectScheduleEvent }) {
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const activeDay = SCHEDULE_DAYS[activeDayIdx];

  return (
    <section
      id="schedule"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2DCD2] pb-8">
        <div className="space-y-1.5">
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#6B6862]">
            ITINERARY
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase">
            Festival <span className="italic text-[#9E7438]">Schedule</span>
          </h1>
        </div>

        <p className="max-w-md font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
          Three days of keynotes, challenges, and finals at TCET Mumbai.
        </p>
      </div>

      {/* Day Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SCHEDULE_DAYS.map((day, idx) => {
          const isSelected = activeDayIdx === idx;
          return (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDayIdx(idx)}
              className={`p-6 text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-[#FAF7F2] border border-[#9E7438] shadow-sm'
                  : 'bg-[#F3EFE8] border border-[#E2DCD2] hover:bg-[#FAF7F2] text-[#6B6862]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-xs font-medium uppercase tracking-wider text-[#9E7438]">
                  {day.dayNumber}
                </span>
                <span className="font-body text-[10px] uppercase tracking-widest text-[#6B6862]">
                  {day.badge}
                </span>
              </div>

              <div className="font-display text-2xl font-medium text-[#1C1C1C]">
                {day.date}
              </div>

              <div className="text-xs font-body text-[#6B6862] uppercase tracking-wider mt-1">
                {day.theme}
              </div>
            </button>
          );
        })}
      </div>

      {/* Timeline Container */}
      <div className="gallery-card p-6 sm:p-9 space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2DCD2] pb-4">
          <div>
            <span className="font-body text-[10px] font-medium text-[#9E7438] uppercase tracking-widest block">
              {activeDay.dayNumber}
            </span>
            <h2 className="font-display text-2xl font-medium text-[#1C1C1C]">
              {activeDay.date} — {activeDay.theme}
            </h2>
          </div>

          <span className="font-body text-xs font-medium px-3 py-1 bg-[#FAF7F2] text-[#1C1C1C] border border-[#E2DCD2] self-start sm:self-auto tracking-wider uppercase text-[10px]">
            {activeDay.events.length} Sessions
          </span>
        </div>

        {/* Timeline Items */}
        <div className="space-y-4 pt-2">
          {activeDay.events.map((item, idx) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 bg-[#FAF7F2] border border-[#E2DCD2] hover:border-[#9E7438] transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F3EFE8] border border-[#E2DCD2] group-hover:border-[#9E7438] flex items-center justify-center font-body font-medium text-xs text-[#1C1C1C] shrink-0">
                  0{idx + 1}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-body text-[10px] font-medium px-2 py-0.5 bg-[#1C1C1C] text-white uppercase tracking-wider">
                      {item.committee}
                    </span>
                    <span className="font-body text-xs text-[#6B6862]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 pt-1 font-body text-xs text-[#6B6862]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#9E7438]" />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1B3B4B]" />
                      {item.venue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="shrink-0 self-end md:self-center">
                <button
                  onClick={() => {
                    if (onSelectScheduleEvent) {
                      onSelectScheduleEvent(item.eventId);
                    }
                  }}
                  className="btn-gallery-outline px-4 py-2 text-xs flex items-center gap-1.5"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
