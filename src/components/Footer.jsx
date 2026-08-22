import React from 'react';
import { CONTACT_INFO } from '../data/contacts';
import { ArrowUp } from 'lucide-react';

export function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Fest' },
    { id: 'events', label: '67 Events Directory' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact Desks' },
  ];

  const committees = [
    'CSI', 'ASCE', 'OWASP', 'TRS', 'ACM', 'S4DS', 'IEEE', 'IETE', 'SIGAI', 'IOT / IEI', 'ASME'
  ];

  return (
    <footer className="relative bg-[#F3EFE8] border-t border-[#E2DCD2] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 text-[#1C1C1C]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        {/* Top Brand & Directory Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-12 border-b border-[#E2DCD2]">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
              <span className="font-display font-medium text-2xl tracking-[0.2em] text-[#1C1C1C] uppercase">
                ZEPHYR<span className="text-[#9E7438] font-normal text-base ml-2 italic">MMXXV</span>
              </span>
              <span className="font-body text-[9px] block text-[#6B6862] uppercase tracking-[0.25em] mt-0.5">
                SPECTRUM OF INNOVATION
              </span>
            </div>

            <p className="text-xs text-[#6B6862] leading-relaxed max-w-sm font-body font-light">
              The flagship interdimensional technical symposium organized by the <strong>TCET Student Development and Welfare Association (TSDW)</strong> at Thakur College of Engineering and Technology, Mumbai.
            </p>

            <div className="font-body text-xs text-[#6B6862] space-y-0.5 pt-1">
              <div>Thakur Educational Campus, Kandivali East, Mumbai 400101</div>
              <div>Autonomous • NAAC 'A+' Grade • Affiliated to Mumbai University</div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E7438] block">
              Pages
            </span>
            <ul className="space-y-2 text-xs font-body">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate && onNavigate(link.id)}
                    className="text-[#6B6862] hover:text-[#9E7438] transition-colors focus:outline-none uppercase tracking-wider text-[11px]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Committee Chapters (4 cols) */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E7438] block">
              11 Professional Chapters
            </span>
            <div className="flex flex-wrap gap-1.5 font-body text-[11px]">
              {committees.map((c) => (
                <button
                  key={c}
                  onClick={() => onNavigate && onNavigate('events')}
                  className="px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#1C1C1C] text-[#6B6862] hover:text-white border border-[#E2DCD2] transition-colors focus:outline-none"
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Social Channels */}
            <div className="pt-2.5 space-y-1.5">
              <span className="font-body text-[9px] font-medium uppercase tracking-[0.2em] text-[#6B6862] block">
                Connect With TSDW
              </span>
              <div className="flex flex-wrap gap-4 text-xs font-body">
                {CONTACT_INFO.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1C1C1C] hover:text-[#9E7438] underline underline-offset-4 transition-colors uppercase tracking-wider text-[11px]"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-[10px] sm:text-[11px] text-[#6B6862]">
          <div className="text-center sm:text-left">
            © 2004–2025 Zephyr Techfest & TSDW Council. Thakur College of Engineering and Technology.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 text-xs text-[#1C1C1C] hover:text-[#9E7438] transition-colors p-1 uppercase tracking-wider text-[11px]"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
