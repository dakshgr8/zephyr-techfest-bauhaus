import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  // The 5 exact FAQs from zephyr-techfest.dev
  const originalFaqs = FAQS.slice(0, 5);

  return (
    <section id="faqs" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0] border-b-4 border-black">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header matching exact original text */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-[#121212] text-[#F0C020] px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_black]">
            💬 FREQUENTLY_ASKED_QUESTIONS.SYS
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212]">
            Questions &amp; Answers
          </h2>

          <p className="font-mono text-sm sm:text-base text-[#121212]/80 uppercase tracking-wider">
            Everything you need to know about the portal
          </p>
        </div>

        {/* Bauhaus Accordions (Closed = White, Open = Red Header + #FFF9C4 Expanded Content) */}
        <div className="space-y-4">
          {originalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_black] transition-all"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors font-outfit ${
                    isOpen
                      ? "bg-[#D02020] text-white"
                      : "bg-white text-[#121212] hover:bg-[#F8F8F8]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono font-bold text-xs px-2 py-0.5 border border-black ${
                        isOpen ? "bg-black text-white" : "bg-[#F0C020] text-black"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-lg sm:text-xl font-black uppercase tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  <div className="shrink-0">
                    <ChevronDown
                      className={`w-6 h-6 stroke-[3] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-white" : "text-black"
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {isOpen && (
                  <div className="bg-[#FFF9C4] text-[#121212] p-5 sm:p-6 border-t-4 border-black text-sm sm:text-base font-medium leading-relaxed font-outfit">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
