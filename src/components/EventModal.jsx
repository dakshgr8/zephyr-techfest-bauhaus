import React, { useEffect } from 'react';
import { X, Phone, Copy, ArrowRight } from 'lucide-react';

export function EventModal({ event, isOpen, onClose, onRegister, onCopyContact }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#E2DCD2] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Image */}
        <div className="relative h-48 sm:h-56 w-full bg-[#1C1C1C] overflow-hidden shrink-0">
          <img
            src={event.image || `/event${event.id}.webp`}
            alt={event.title}
            className="w-full h-full object-cover opacity-85"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/wordmark/zephyr-full-wordmark.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-black/40" />

          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close event details"
            className="absolute top-4 right-4 p-2 bg-[#1C1C1C]/80 text-[#FAF7F2] hover:bg-[#9E7438] transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Committee Badges Over Image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-[#9E7438] text-white font-body text-xs font-medium tracking-wider uppercase">
              {event.tag}
            </span>

            <span className="px-3 py-1 bg-[#FAF7F2]/90 text-[#1C1C1C] font-body text-xs font-medium uppercase backdrop-blur-sm">
              {event.category}
            </span>

            {event.isCollab && (
              <span className="px-2.5 py-0.5 bg-[#1B3B4B] text-white text-[11px] font-body tracking-wider uppercase">
                Joint Event
              </span>
            )}
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-[#FAF7F2]">
          
          {/* Title & Fee / Prize Matrix */}
          <div className="space-y-3">
            <h3
              id="event-modal-title"
              className="font-display text-3xl sm:text-4xl font-medium text-[#1C1C1C]"
            >
              {event.title}
            </h3>

            {event.collabNote && (
              <div className="p-2.5 bg-[#F3EFE8] border border-[#E2DCD2] text-xs font-body text-[#6B6862]">
                ✦ {event.collabNote}
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-[#F3EFE8] border border-[#E2DCD2]">
                <span className="font-body text-[10px] text-[#6B6862] uppercase tracking-wider block">
                  Registration Fee
                </span>
                <span className="font-display font-medium text-lg text-[#1C1C1C]">
                  {event.priceDisplay}
                </span>
              </div>

              <div className="p-3 bg-[#F3EFE8] border border-[#E2DCD2]">
                <span className="font-body text-[10px] text-[#6B6862] uppercase tracking-wider block">
                  Prize Pool
                </span>
                <span className="font-display font-medium text-lg text-[#2D5A46]">
                  {event.prizeDisplay}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-[#F3EFE8] border border-[#E2DCD2]">
                <span className="font-body text-[10px] text-[#6B6862] uppercase tracking-wider block">
                  Participation
                </span>
                <span className="font-display font-medium text-lg text-[#1C1C1C]">
                  {event.teamDisplay}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B6862]">
              Event Overview & Specifications
            </h4>
            <p className="text-xs sm:text-sm text-[#6B6862] leading-relaxed font-body font-light">
              {event.desc}
            </p>
          </div>

          {/* Coordinator Contact Lead */}
          <div className="p-4 bg-[#F3EFE8] border border-[#E2DCD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#9E7438]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="font-body text-[9px] uppercase tracking-wider text-[#6B6862] block">
                  Student Coordinator Contact
                </span>
                <span className="font-body font-medium text-xs text-[#1C1C1C]">
                  +91 {event.phone_no}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onCopyContact(event.phone_no)}
                className="btn-gallery-outline px-3 py-1 text-xs flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </button>

              <a
                href={`tel:+91${event.phone_no}`}
                className="btn-gallery-primary px-3 py-1 text-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-[#F3EFE8] border-t border-[#E2DCD2] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="btn-gallery-outline px-4 py-2 text-xs"
          >
            Back to Directory
          </button>

          <button
            onClick={() => onRegister(event)}
            className="btn-gallery-primary px-6 py-2 text-xs flex items-center gap-2"
          >
            <span>Register Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#9E7438]" />
          </button>
        </div>

      </div>
    </div>
  );
}
