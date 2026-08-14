import React from 'react';
import { BauhausLogoMark, SectionDivider } from './Shapes';
import { Heart, ArrowUp, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

export function BauhausFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#121212] text-white border-t-4 border-black relative overflow-hidden">
      
      {/* Top Colorful Constructivist Ribbon */}
      <div className="w-full h-4 grid grid-cols-12 border-b-2 border-black">
        <div className="col-span-3 bg-[#D02020]" />
        <div className="col-span-2 bg-[#1040C0]" />
        <div className="col-span-4 bg-[#F0C020]" />
        <div className="col-span-1 bg-white" />
        <div className="col-span-2 bg-[#D02020]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        {/* Top Grid: Brand Statement & Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b-2 border-white/20 pb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <BauhausLogoMark size="md" />
              <span className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-white">
                ZEPHYR<span className="text-[#D02020]">'25</span>
              </span>
              <span className="text-[10px] font-mono font-bold bg-[#F0C020] text-black px-2 py-0.5 border border-black">
                TSDW
              </span>
            </div>

            <p className="text-sm font-medium text-white/80 max-w-sm font-mono leading-relaxed">
              The Annual Techno-Cultural Symposium organized by <strong>Thakur Student Development &amp; Welfare (TSDW)</strong> at Thakur College of Engineering &amp; Technology (TCET), Mumbai.
            </p>

            <div className="font-mono text-xs text-[#F0C020] font-bold">
              PORTAL_ID: COSMIC_GATEWAY_2025 // MISSION_CRITICAL
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
              NAVIGATION MATRIX
            </div>
            <ul className="space-y-2 text-sm font-bold uppercase tracking-wider font-mono">
              <li>
                <a href="#about" className="hover:text-[#F0C020] transition-colors">
                  ▸ About Zephyr &amp; TSDW
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#D02020] transition-colors">
                  ▸ 67 Festival Events
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#1040C0] transition-colors">
                  ▸ 3-Day Schedule
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-[#F0C020] transition-colors">
                  ▸ 20+ Industry Sponsors
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#D02020] transition-colors">
                  ▸ FAQs &amp; Help Desk
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1040C0] transition-colors">
                  ▸ Transmission &amp; Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Institution & Committees (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
              HOST INSTITUTION
            </div>
            <div className="p-4 bg-white text-black border-3 border-black shadow-[4px_4px_0px_0px_#F0C020] space-y-2">
              <div className="font-black text-sm uppercase">
                THAKUR COLLEGE OF ENGINEERING &amp; TECHNOLOGY
              </div>
              <p className="font-mono text-[11px] text-black/70 leading-normal">
                Autonomous Institute Affiliated to University of Mumbai. Approved by AICTE &amp; Govt. of Maharashtra.
              </p>
              <div className="pt-2 text-[10px] font-mono font-bold text-[#D02020]">
                Kandivali (East), Mumbai 400101
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={scrollToTop}
                className="bauhaus-btn px-4 py-2 bg-[#D02020] text-white text-xs font-mono"
              >
                <ArrowUp className="w-4 h-4 mr-1.5 inline" />
                RETURN TO TOP
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="space-y-4 text-center">
          <div className="font-mono text-base sm:text-lg text-[#F0C020] font-black uppercase tracking-wider flex items-center justify-center gap-2">
            <span>🌌</span>
            <span>ZEPHYR - 2K25: SPECTRUM OF INNOVATION</span>
            <span>🌌</span>
          </div>

          <div className="font-mono text-xs text-white/60">
            © 2025 | ZEPHYR | COSMIC_GATEWAY | ALL_DIMENSIONS_RESERVED | VERSION_∞.0
          </div>

          <div className="font-mono text-xs text-[#FFF] flex items-center justify-center gap-1.5 pt-2">
            <span>⭐ Powered by</span>
            <span className="font-black text-[#F0C020]">TSDW STUDENT COUNCIL</span>
            <span>with Love</span>
            <Heart className="w-3.5 h-3.5 text-[#D02020] fill-[#D02020] inline" />
            <span>⭐</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
