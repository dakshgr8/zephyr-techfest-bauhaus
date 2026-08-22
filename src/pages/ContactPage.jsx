import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { ArrowLeft } from 'lucide-react';

export function ContactPage({ onShowToast, onNavigate }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 animate-fade-in">
      {/* Back to Homepage */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-[#6B6862] hover:text-[#9E7438] transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Overview</span>
        </button>
      </div>

      {/* Main Clean Contact Section */}
      <ContactSection onShowToast={onShowToast} />
    </div>
  );
}
