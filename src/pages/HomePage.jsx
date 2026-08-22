import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, Trophy, Calendar, BookOpen, Phone } from 'lucide-react';

export function HomePage({ onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const portals = [
    {
      id: 'events',
      title: 'Events Directory',
      subtitle: '67 COMPETITIONS',
      description: 'Esports, Hackathons, Robotics, CAD Modeling, and Creative Challenges across all 11 chapters.',
      actionText: 'Explore Events',
      icon: Trophy,
    },
    {
      id: 'schedule',
      title: 'Schedule',
      subtitle: '3-DAY TIMELINE',
      description: 'Keynotes, hackathon phases, project expos, and championship finals.',
      actionText: 'View Schedule',
      icon: Calendar,
    },
    {
      id: 'about',
      title: 'Heritage',
      subtitle: 'ESTABLISHED 2004',
      description: 'Two decades of collegiate engineering and technical excellence at TCET Mumbai.',
      actionText: 'Read Story',
      icon: BookOpen,
    },
    {
      id: 'contact',
      title: 'Helplines',
      subtitle: 'COORDINATOR DESKS',
      description: 'Direct contacts for student leads, committee heads, and campus registration desks.',
      actionText: 'Get In Touch',
      icon: Phone,
    }
  ];

  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero */}
      <Hero onExploreEvents={() => onNavigate('events')} />

      {/* 2. Portal Grid */}
      <section id="portals" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-body text-[10px] sm:text-xs font-medium tracking-[0.25em] uppercase text-[#6B6862]">
            SECTORS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#1C1C1C] tracking-wide uppercase">
            Explore the <span className="italic text-[#9E7438]">Spectrum</span>
          </h2>
        </div>

        {/* 4 Clean Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {portals.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="gallery-card p-8 sm:p-10 flex flex-col justify-between space-y-6 cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] group-hover:border-[#9E7438] flex items-center justify-center text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="font-body text-[9px] font-medium text-[#6B6862] tracking-[0.2em] uppercase">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors tracking-wide">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DCD2] flex items-center justify-between font-body text-xs uppercase tracking-[0.2em] text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors">
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E7438] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </main>
  );
}
