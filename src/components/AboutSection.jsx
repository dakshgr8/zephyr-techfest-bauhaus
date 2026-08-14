import React, { useState } from 'react';
import { CornerShape } from './Shapes';

export function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="About" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0] border-b-4 border-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header Tag */}
        <div className="flex items-center gap-3 border-b-4 border-black pb-4">
          <div className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-black" />
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-[#121212]">
            ABOUT // SPECTRUM OF INNOVATION
          </span>
        </div>

        {/* 3-Card Grid matching original website layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
          
          {/* Card 1: Zephyr 2004 History & Time Machine Motif (2 cols) */}
          <div
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-2 bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-10 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
          >
            <div className="absolute top-4 right-4">
              <CornerShape index={0} size="w-4 h-4" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase px-2.5 py-1 bg-[#D02020] text-white border-2 border-black">
                  ESTD. 2004
                </span>
                <span className="font-mono text-xs font-bold uppercase text-[#121212]/70">
                  TCET MUMBAI
                </span>
              </div>

              <div className="space-y-4 text-base sm:text-lg font-medium text-[#121212] leading-relaxed">
                <p>
                  Ever since it was first organized in <strong>2004</strong>, <strong>Zephyr</strong> has been the most awaited event among the students of <strong>Thakur College of Engineering and Technology</strong>. This technical festival aims at providing students with a platform to enhance their technical skills. Each Year with a new edition, Zephyr brings new events such as workshops on in-demand technology and skills along with gaming tournaments and fun events.
                </p>
                <p>
                  The theme of Zephyr'25 is <strong>Spectrum of Innovation</strong>. The time traveler, equipped with knowledge about the time period they wish to visit, steps into the machine. The interior is filled with an array of flashing lights, complex instruments, and a central control panel. After entering the desired date and time into the control panel, the traveler activates the machine.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black flex items-center justify-between">
              <span className="font-black text-xl uppercase tracking-tight text-[#121212]">
                Cosmic Zephyr Through Intelligence
              </span>
              <span className="font-mono text-xs font-bold bg-[#F0C020] text-black px-2 py-0.5 border border-black">
                2025 EDITION
              </span>
            </div>
          </div>

          {/* Card 2: Where Ideas Ignite (1 col) */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-1 bg-[#1040C0] text-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-transform"
          >
            <div className="absolute top-4 right-4">
              <CornerShape index={1} size="w-4 h-4" />
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#F0C020] text-black border-2 border-black shadow-[3px_3px_0px_0px_black] flex items-center justify-center font-black text-lg">
                ⚡
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                Zephyr 2025
              </h3>

              <p className="text-base sm:text-lg font-medium text-white/90 leading-relaxed font-mono">
                Where Ideas Ignite, spreading an endless technical exposure across engineering and technology.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t-2 border-black/40">
              <span className="font-mono text-xs font-bold text-[#F0C020] uppercase tracking-widest">
                TCET AUTONOMOUS
              </span>
            </div>
          </div>

          {/* Card 3: TSDW Student Development & Welfare Association (3 cols) */}
          <div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-3 bg-[#F0C020] text-[#121212] border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:-translate-y-1 transition-transform relative"
          >
            <div className="absolute top-4 right-4">
              <CornerShape index={2} size="w-4 h-4" />
            </div>

            <div className="flex items-start gap-6 max-w-3xl">
              <img
                src="/TSDW.png"
                alt="TSDW Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-2 border-3 border-black shadow-[4px_4px_0px_0px_black] object-contain shrink-0 rounded-none"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/zephyr-logo.jpeg";
                }}
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black uppercase px-2.5 py-0.5 bg-[#121212] text-white border border-black">
                    STUDENT COUNCIL
                  </span>
                  <span className="font-mono text-xs font-bold text-black/70 uppercase">
                    ESTD. 2004-05
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#121212]">
                  TSDW — Thakur Student Development Welfare.
                </h3>
                <p className="text-sm sm:text-base font-medium text-[#121212] leading-relaxed">
                  The TCET Student Development and Welfare Association (TSDW), established in 2004-05 under the guidelines of Mumbai University, serves as a dynamic platform for creativity, innovation, and holistic growth. Commonly known as the Student Council, TSDW represents the student body and spearheads flagship events.
                </p>
              </div>
            </div>

            <div className="shrink-0 font-mono text-xs font-bold p-4 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black] text-center">
              <div>MUMBAI UNIVERSITY</div>
              <div className="text-[#D02020] font-black mt-1">AFFILIATED</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
