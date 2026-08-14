import React, { useState } from 'react';
import { BauhausLogoMark } from './Shapes';
import { Menu, X, Calendar, Sparkles, Trophy } from 'lucide-react';

export function Navbar({ onOpenEvents, onOpenSchedule }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "67 EVENTS", href: "#events", highlight: true },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "FAQS", href: "#faqs" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F0F0F0] border-b-4 border-black shadow-[0_4px_0px_0px_#121212]">
      {/* Top Banner Ticker */}
      <div className="bg-[#121212] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 overflow-hidden border-b-2 border-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 bg-[#F0C020] rounded-none animate-pulse"></span>
            <span className="font-mono text-[11px] sm:text-xs">THAKUR COLLEGE OF ENGINEERING & TECHNOLOGY [TCET]</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 font-mono text-[11px]">
            <span className="text-[#F0C020]">⚡ 67+ EVENTS</span>
            <span>•</span>
            <span className="text-[#FFF]">₹5,00,000+ PRIZE POOL</span>
            <span>•</span>
            <span className="text-[#D02020] font-bold">SEP 25–27, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo with Bauhaus Triad & Official TCET/TSDW */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <BauhausLogoMark size="lg" />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black tracking-tighter uppercase leading-none text-[#121212] group-hover:text-[#D02020] transition-colors">
                  ZEPHYR<span className="text-[#D02020]">'25</span>
                </span>
                <span className="text-[10px] font-bold uppercase bg-[#F0C020] text-black px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_black] rounded-none">
                  TSDW
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#121212]/70 font-mono">
                SPECTRUM OF INNOVATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-bold tracking-wider uppercase transition-all duration-150 rounded-none border-2 ${
                  link.highlight
                    ? "bg-[#F0C020] text-black border-black shadow-[3px_3px_0px_0px_black] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_black]"
                    : "border-transparent text-[#121212] hover:border-black hover:bg-white hover:shadow-[3px_3px_0px_0px_black]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#events"
              className="px-4 py-2 text-xs sm:text-sm font-black uppercase tracking-wider bg-[#D02020] text-white border-2 lg:border-3 border-black shadow-[4px_4px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none hover:bg-[#D02020]/95 transition-all"
            >
              EXPLORE EVENTS
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6 stroke-[3]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F0F0F0] border-t-4 border-black px-4 pt-4 pb-6 space-y-3 shadow-[0_8px_0px_0px_#121212]">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block p-3 font-bold uppercase tracking-wider text-sm bg-white border-2 border-black shadow-[3px_3px_0px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#events"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 text-center font-black uppercase tracking-wider text-sm bg-[#D02020] text-white border-2 border-black shadow-[4px_4px_0px_0px_black]"
          >
            BOOK EVENT NOW
          </a>
        </div>
      )}
    </header>
  );
}
