import React from 'react';
import { Trophy, Users, Zap, Layers } from 'lucide-react';

export function StatsBar() {
  const stats = [
    {
      id: 1,
      num: "67+",
      label: "TOTAL EVENTS",
      sub: "Gaming, Coding, Workshops, Robotics",
      shape: "circle",
      shapeColor: "bg-[#D02020] text-white",
      icon: <Layers className="w-5 h-5 text-black" />
    },
    {
      id: 2,
      num: "₹5L+",
      label: "PRIZE POOL",
      sub: "Cash awards, vouchers & goodies",
      shape: "square",
      shapeColor: "bg-[#1040C0] text-white",
      icon: <Trophy className="w-5 h-5 text-black" />
    },
    {
      id: 3,
      num: "20+",
      label: "SPONSORS",
      sub: "CADD Centre, Indian Bank & more",
      shape: "triangle",
      shapeColor: "bg-[#121212] text-white",
      icon: <Zap className="w-5 h-5 text-black" />
    },
    {
      id: 4,
      num: "21 YRS",
      label: "LEGACY (SINCE 2004)",
      sub: "By TSDW Student Council @ TCET",
      shape: "rotated-square",
      shapeColor: "bg-white text-black",
      icon: <Users className="w-5 h-5 text-black" />
    }
  ];

  return (
    <section className="w-full bg-[#F0C020] border-b-4 border-black overflow-hidden relative">
      <div className="absolute inset-0 bg-bauhaus-dots-yellow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto border-x-4 border-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-black">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="p-6 sm:p-8 flex flex-col justify-between relative group hover:bg-[#E5B518] transition-colors"
            >
              {/* Top Row: Label & Shape Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                  0{idx + 1} // {stat.label}
                </span>
                
                {/* Geometric Shape Container */}
                {stat.shape === "circle" && (
                  <div className={`w-8 h-8 rounded-full ${stat.shapeColor} border-2 border-black shadow-[2px_2px_0px_0px_black] flex items-center justify-center text-xs font-black`}>
                    ●
                  </div>
                )}
                {stat.shape === "square" && (
                  <div className={`w-8 h-8 rounded-none ${stat.shapeColor} border-2 border-black shadow-[2px_2px_0px_0px_black] flex items-center justify-center text-xs font-black`}>
                    ■
                  </div>
                )}
                {stat.shape === "triangle" && (
                  <div className={`w-8 h-8 rounded-none ${stat.shapeColor} clip-triangle border-2 border-black shadow-[2px_2px_0px_0px_black] flex items-center justify-center text-xs font-black`}>
                    ▲
                  </div>
                )}
                {stat.shape === "rotated-square" && (
                  <div className={`w-8 h-8 rounded-none ${stat.shapeColor} border-2 border-black shadow-[2px_2px_0px_0px_black] transform rotate-45 flex items-center justify-center`}>
                    <span className="transform -rotate-45 text-[10px] font-black">21</span>
                  </div>
                )}
              </div>

              {/* Huge Number */}
              <div className="my-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#121212]">
                  {stat.num}
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-semibold text-[#121212]/80 mt-2 font-mono">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
