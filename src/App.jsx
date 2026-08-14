import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    // Check initial pathname if loaded directly on /zephyr-events
    if (window.location.pathname.includes('zephyr-events')) {
      return 'events';
    }
    return 'home';
  });

  // Handle browser popstate / back button
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.includes('zephyr-events')) {
        setCurrentPage('events');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPage = (page) => {
    setCurrentPage(page);
    if (page === 'events') {
      window.history.pushState({}, '', '/zephyr-events');
    } else {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#121212] flex flex-col selection:bg-[#F0C020] selection:text-black">
      {/* 1. Bauhaus Navigation Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={navigateToPage}
      />

      {/* 2. Main View (Home or Events page) */}
      <div className="flex-grow">
        {currentPage === 'home' ? (
          <HomePage onNavigateToEvents={() => navigateToPage('events')} />
        ) : (
          <EventsPage onGoHome={() => navigateToPage('home')} />
        )}
      </div>

      {/* 3. Bauhaus Footer */}
      <Footer />
    </div>
  );
}
