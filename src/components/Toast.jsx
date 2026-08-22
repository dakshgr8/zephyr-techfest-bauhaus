import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-white border border-[#C5A059] shadow-parchment-lift rounded-lg p-4 flex items-start gap-3 animate-fade-in"
    >
      <div className="shrink-0 mt-0.5">
        {type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#2D5A46]" />}
        {type === 'error' && <AlertCircle className="w-5 h-5 text-[#A24B36]" />}
        {type === 'info' && <Info className="w-5 h-5 text-[#C5A059]" />}
      </div>

      <div className="flex-grow text-xs sm:text-sm font-medium text-[#181512] leading-snug">
        {message}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className="text-[#7A7064] hover:text-[#181512] transition-colors p-0.5"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
