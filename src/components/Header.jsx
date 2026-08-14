import React, { useState } from 'react';

export function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    if (target === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'events') {
      setCurrentPage('events');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about' || target === 'contact') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.getElementById(target === 'about' ? 'About' : 'Contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(target === 'about' ? 'About' : 'Contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F0F0F0] border-b-4 border-black shadow-[0_4px_0px_0px_#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              {/* Geometric Bauhaus Triad Logo */}
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-black shadow-[2px_2px_0px_0px_black]" />
                <div className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-black shadow-[2px_2px_0px_0px_black]" />
                <div className="w-5 h-5 rounded-none bg-[#F0C020] border-2 border-black clip-triangle shadow-[2px_2px_0px_0px_black]" />
              </div>
              <img
                src="/zephyr-logo.jpeg"
                alt="Zephyr Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_black] object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-[#121212]">
                ZEPHYR <span className="text-[#D02020]">'25</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all ${
                currentPage === 'home'
                  ? "bg-[#D02020] text-white shadow-[3px_3px_0px_0px_black]"
                  : "bg-white text-[#121212] hover:bg-[#E0E0E0] shadow-[2px_2px_0px_0px_black]"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`px-4 py-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider border-2 border-black transition-all ${
                currentPage === 'events'
                  ? "bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_black]"
                  : "bg-white text-[#121212] hover:bg-[#E0E0E0] shadow-[2px_2px_0px_0px_black]"
              }`}
            >
              Events
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className="px-4 py-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-[#121212] border-2 border-black shadow-[2px_2px_0px_0px_black] hover:bg-[#E0E0E0] transition-all"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider bg-white text-[#121212] border-2 border-black shadow-[2px_2px_0px_0px_black] hover:bg-[#E0E0E0] transition-all"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white text-[#121212] border-2 border-black shadow-[3px_3px_0px_0px_black] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-[#F0F0F0] p-4 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-4 py-2.5 font-mono text-sm font-bold uppercase border-2 border-black ${
              currentPage === 'home' ? 'bg-[#D02020] text-white shadow-[3px_3px_0px_0px_black]' : 'bg-white text-black'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className={`block w-full text-left px-4 py-2.5 font-mono text-sm font-bold uppercase border-2 border-black ${
              currentPage === 'events' ? 'bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_black]' : 'bg-white text-black'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left px-4 py-2.5 font-mono text-sm font-bold uppercase bg-white text-black border-2 border-black"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-4 py-2.5 font-mono text-sm font-bold uppercase bg-white text-black border-2 border-black"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
