import React from 'react';
import { CornerShape } from './Shapes';

export function ContactSection() {
  const channels = [
    {
      id: 1,
      protocol: "SUPPORT",
      channel: "technicalteamtsdw@gmail.com",
      status: "ACTIVE",
      icon: "📧",
      link: "mailto:technicalteamtsdw@gmail.com",
      color: "bg-[#D02020] text-white"
    },
    {
      id: 2,
      protocol: "OUTREACH ADVISORY",
      channel: "Harsh Mishra (+91 7020976545)",
      status: "AVAILABLE",
      icon: "📞",
      link: "tel:7020976545",
      color: "bg-[#1040C0] text-white"
    },
    {
      id: 3,
      protocol: "TECHNICAL ADVISORY",
      channel: "Amitabh Dwivedi (+91 8429051078)",
      status: "STANDBY",
      icon: "📞",
      link: "tel:8429051078",
      color: "bg-[#F0C020] text-black"
    },
    {
      id: 4,
      protocol: "COORDINATES",
      channel: "[TCET], [MUMBAI]",
      status: "LOCKED",
      icon: "🗺️",
      link: "https://maps.google.com/?q=Thakur+College+of+Engineering+and+Technology+Mumbai",
      color: "bg-[#121212] text-white"
    }
  ];

  return (
    <section id="Contact" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0C020] border-b-4 border-black overflow-hidden">
      
      {/* Background Dots */}
      <div className="absolute inset-0 bg-bauhaus-dots-yellow opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header matching exact original text */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-[#121212] text-white px-3.5 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_black]">
            📡 TRANSMISSION_CHANNELS.IO
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
            Establish Contact
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#121212] uppercase tracking-wider font-bold">
            Connect with the gateway operators
          </p>
        </div>

        {/* 4 Transmission Cards in 2x2 Bauhaus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((ch, idx) => (
            <div
              key={ch.id}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1 transition-transform relative"
            >
              <div className="absolute top-4 right-4">
                <CornerShape index={idx} size="w-3.5 h-3.5" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{ch.icon}</span>
                  <span className={`font-mono text-[10px] font-black uppercase px-2.5 py-0.5 border border-black ${ch.color}`}>
                    {ch.status}
                  </span>
                </div>

                <div>
                  <div className="font-mono text-xs font-bold text-[#121212]/60 uppercase tracking-widest">
                    PROTOCOL: {ch.protocol}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#121212] uppercase font-mono mt-1 break-all">
                    {ch.channel}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-black flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#121212]/60 uppercase">
                  GATEWAY NODE 0{ch.id}
                </span>
                <a
                  href={ch.link}
                  target={ch.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="bauhaus-btn px-4 py-1.5 bg-[#D02020] text-white text-xs font-black uppercase shadow-[3px_3px_0px_0px_black]"
                >
                  CONNECT →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
