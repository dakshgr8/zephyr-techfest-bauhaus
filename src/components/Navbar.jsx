import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2DCD2] py-3.5'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            <div className="flex flex-col">
              <span className="font-display font-medium text-2xl sm:text-3xl tracking-[0.2em] text-[#1C1C1C] group-hover:text-[#9E7438] transition-colors uppercase">
                ZEPHYR<span className="text-[#9E7438] font-normal text-base ml-2 tracking-normal italic">MMXXV</span>
              </span>
              <span className="font-body text-[9px] tracking-[0.25em] text-[#6B6862] uppercase -mt-1">
                TCET • MUMBAI
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-body text-xs uppercase tracking-[0.2em] transition-colors relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#9E7438] font-medium'
                      : 'text-[#6B6862] hover:text-[#1C1C1C]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9E7438]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('events')}
              className="btn-gallery-outline px-4 py-2 text-[11px] flex items-center gap-1.5 focus:outline-none"
            >
              <span>Explore Events</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9E7438]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#1C1C1C] hover:text-[#9E7438] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E2DCD2] px-6 pt-4 pb-8 space-y-4 shadow-sm animate-fade-in">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-body text-xs uppercase tracking-[0.2em] py-2.5 border-b border-[#E2DCD2]/50 text-left ${
                    isActive ? 'text-[#9E7438] font-medium' : 'text-[#6B6862]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <button
              onClick={() => handleLinkClick('events')}
              className="btn-gallery-primary block w-full py-3 text-center text-xs"
            >
              Explore 67 Verified Events
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
