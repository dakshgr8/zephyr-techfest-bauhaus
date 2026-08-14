import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CornerShape, BauhausTag } from './Shapes';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // Open first FAQ by default

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="w-full bg-[#F0F0F0] border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 border-b-4 border-black pb-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D02020] border border-black" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
              INQUIRIES // FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212] leading-tight">
            GOT QUESTIONS?<br />
            <span className="text-[#D02020]">WE HAVE ANSWERS.</span>
          </h2>
          
          <p className="font-mono text-sm text-[#121212]/80 max-w-lg mx-auto">
            Everything you need to know regarding participation, team rules, prize distribution, and campus venue access.
          </p>
        </div>

        {/* Bauhaus Styled Accordion Stack */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_black] transition-all"
              >
                {/* Accordion Header Button */}
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

                {/* Accordion Expanded Content */}
                {isOpen && (
                  <div className="bg-[#FFF9C4] text-[#121212] p-5 sm:p-6 border-t-4 border-black text-sm sm:text-base font-medium leading-relaxed font-outfit">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#D02020] uppercase">
                      <span>✓</span>
                      <span>RESOLUTION</span>
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 bg-white border-4 border-black shadow-[6px_6px_0px_0px_black] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-black uppercase text-[#121212]">
              HAVE A SPECIFIC QUERY NOT LISTED HERE?
            </h4>
            <p className="font-mono text-xs text-[#121212]/70">
              Our Student Council Helpline is available 24/7.
            </p>
          </div>
          <a
            href="#contact"
            className="bauhaus-btn px-6 py-2.5 bg-[#1040C0] text-white text-xs"
          >
            CONTACT HELPLINE
          </a>
        </div>

      </div>
    </section>
  );
}
