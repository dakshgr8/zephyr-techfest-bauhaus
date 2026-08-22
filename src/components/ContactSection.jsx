import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/contacts';
import { MapPin, Mail, Phone, ExternalLink, Send, CheckCircle2, Copy } from 'lucide-react';

export function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    committee: 'TSDW',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) {
        onShowToast('Please fill in your name, email, and message.', 'error');
      }
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Message transmitted. The TSDW team will respond shortly.', 'success');
      }
      setFormData({
        name: '',
        email: '',
        committee: 'TSDW',
        subject: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const copyNumber = (num, label = 'Number') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(num);
    }
    if (onShowToast) {
      onShowToast(`${label} (${num}) copied to clipboard.`);
    }
  };

  return (
    <div className="space-y-8 sm:space-y-12">
      
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2DCD2] pb-6 sm:pb-8">
        <div className="space-y-1">
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#6B6862]">
            COMMUNICATION
          </span>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase">
            Contact <span className="italic text-[#9E7438]">& Connect</span>
          </h1>
        </div>

        <p className="max-w-md font-body text-xs sm:text-sm text-[#6B6862] leading-relaxed font-light">
          Direct lines to the central festival council, departmental chapters, and campus helplines.
        </p>
      </div>

      {/* 2. Top 3-Column Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Card 1: Campus Location */}
        <div className="gallery-card p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#9E7438]">
              <MapPin className="w-4 h-4" />
            </div>

            <div className="space-y-1">
              <span className="font-body text-[9px] font-medium text-[#9E7438] uppercase tracking-[0.2em] block">
                CAMPUS LOCATION
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#1C1C1C]">
                TCET Mumbai
              </h3>
            </div>

            <p className="text-xs text-[#6B6862] leading-relaxed font-body font-light">
              Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur Village, Kandivali East, Mumbai 400101.
            </p>
          </div>

          <div className="pt-3.5 border-t border-[#E2DCD2]">
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-[#1C1C1C] hover:text-[#9E7438] transition-colors uppercase tracking-wider text-[11px]"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Official Desks */}
        <div className="gallery-card p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#1B3B4B]">
              <Mail className="w-4 h-4" />
            </div>

            <div className="space-y-1">
              <span className="font-body text-[9px] font-medium text-[#1B3B4B] uppercase tracking-[0.2em] block">
                EMAIL DIRECTORY
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#1C1C1C]">
                Official Desks
              </h3>
            </div>

            <div className="space-y-2 font-body text-xs">
              {CONTACT_INFO.emails.map((e) => (
                <div key={e.address} className="flex items-center justify-between gap-2 p-2 bg-[#FAF7F2] border border-[#E2DCD2]">
                  <span className="text-[#6B6862] text-[10px] uppercase tracking-wider">{e.label}:</span>
                  <a
                    href={`mailto:${e.address}`}
                    className="font-medium text-[#1C1C1C] hover:text-[#9E7438] transition-colors truncate text-[11px]"
                  >
                    {e.address}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3.5 border-t border-[#E2DCD2] font-body text-[10px] uppercase tracking-wider text-[#6B6862]">
            Response Time: &lt; 24 Hours
          </div>
        </div>

        {/* Card 3: Central Helplines */}
        <div className="gallery-card p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center text-[#2D5A46]">
              <Phone className="w-4 h-4" />
            </div>

            <div className="space-y-1">
              <span className="font-body text-[9px] font-medium text-[#2D5A46] uppercase tracking-[0.2em] block">
                DIRECT HELPLINES
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#1C1C1C]">
                Student Leads
              </h3>
            </div>

            <div className="space-y-2 font-body text-xs">
              {CONTACT_INFO.phones.map((p) => (
                <div
                  key={p.number}
                  className="flex items-center justify-between gap-2 p-2 bg-[#FAF7F2] border border-[#E2DCD2]"
                >
                  <div>
                    <span className="text-[10px] text-[#6B6862] uppercase tracking-wider block">{p.label}</span>
                    <span className="font-medium text-[#1C1C1C] text-[11px]">{p.number}</span>
                  </div>
                  <button
                    onClick={() => copyNumber(p.number, p.label)}
                    className="p-1 hover:text-[#9E7438] text-[#6B6862] transition-colors"
                    aria-label={`Copy ${p.label} number`}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3.5 border-t border-[#E2DCD2] font-body text-[10px] uppercase tracking-wider text-[#6B6862]">
            Operating Hours: 08:00 — 20:00 IST
          </div>
        </div>

      </div>

      {/* 3. Main 2-Column Section: Inquiry Form & Chapter Directory */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        
        {/* Left: Transmission Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="gallery-card p-5 sm:p-10 space-y-5 sm:space-y-6 h-full flex flex-col justify-between">
            
            <div className="space-y-1">
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E7438]">
                INQUIRY FORM
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1C1C1C]">
                Send a Message
              </h2>
              <p className="text-xs text-[#6B6862] font-body font-light">
                For registrations, rulebook clarifications, or general inquiries.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 bg-[#FAF7F2] border border-[#9E7438] text-center space-y-3 animate-fade-in my-auto">
                <div className="w-10 h-10 bg-[#2D5A46]/10 text-[#2D5A46] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-display text-2xl font-medium text-[#1C1C1C]">
                  Message Transmitted
                </h3>
                <p className="text-xs text-[#6B6862] max-w-sm mx-auto font-body font-light">
                  Thank you. The TSDW team will respond to your inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-body text-xs font-medium uppercase text-[#1C1C1C] tracking-wider block">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E2DCD2] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-body text-xs font-medium uppercase text-[#1C1C1C] tracking-wider block">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E2DCD2] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-body text-xs font-medium uppercase text-[#1C1C1C] tracking-wider block">
                      Chapter
                    </label>
                    <select
                      value={formData.committee}
                      onChange={(e) => setFormData({ ...formData, committee: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E2DCD2] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all"
                    >
                      <option value="TSDW">TSDW Central Desk</option>
                      <option value="CSI">CSI</option>
                      <option value="ASCE">ASCE</option>
                      <option value="OWASP">OWASP</option>
                      <option value="TRS">TRS</option>
                      <option value="ACM">ACM</option>
                      <option value="S4DS">S4DS</option>
                      <option value="IEEE">IEEE</option>
                      <option value="IETE">IETE</option>
                      <option value="SIGAI">ACM-SIGAI</option>
                      <option value="IOT">IOT / IEI</option>
                      <option value="ASME">ASME</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-body text-xs font-medium uppercase text-[#1C1C1C] tracking-wider block">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Topic of inquiry"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E2DCD2] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-body text-xs font-medium uppercase text-[#1C1C1C] tracking-wider block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E2DCD2] text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gallery-primary w-full py-3 text-xs flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5 text-[#9E7438]" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

        {/* Right: Chapter Coordinators Directory (5 cols) */}
        <div className="lg:col-span-5">
          <div className="gallery-card p-5 sm:p-8 space-y-4 sm:space-y-5 h-full flex flex-col justify-between">
            
            <div className="space-y-1">
              <span className="font-body text-[10px] font-medium uppercase tracking-[0.2em] text-[#9E7438]">
                CHAPTER HELPLINES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-[#1C1C1C]">
                11 Committee Leads
              </h2>
              <p className="text-xs text-[#6B6862] font-body font-light">
                Reach student committee coordinators directly for event-specific questions.
              </p>
            </div>

            {/* Scrollable Helplines List */}
            <div className="space-y-2 max-h-[340px] sm:max-h-[380px] overflow-y-auto pr-1">
              {CONTACT_INFO.committeeHelplines.map((c) => (
                <div
                  key={c.committee}
                  className="flex items-center justify-between p-2.5 bg-[#FAF7F2] border border-[#E2DCD2] hover:border-[#9E7438] transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-body font-medium text-xs text-[#1C1C1C]">{c.committee}</span>
                      <span className="text-[10px] text-[#6B6862]">•</span>
                      <span className="font-body text-[11px] text-[#6B6862]">{c.lead}</span>
                    </div>
                    <span className="font-body text-[11px] text-[#9E7438] font-medium block mt-0.5">
                      {c.phone}
                    </span>
                  </div>

                  <button
                    onClick={() => copyNumber(c.phone, c.committee)}
                    className="p-1.5 text-[#6B6862] hover:text-[#1C1C1C] transition-colors"
                    aria-label={`Copy contact for ${c.committee}`}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center border-t border-[#E2DCD2]">
              <span className="font-body text-[10px] text-[#6B6862] uppercase tracking-wider">
                Autonomous • Affiliated to Mumbai University
              </span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
