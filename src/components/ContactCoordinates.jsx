import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Clock } from 'lucide-react';
import { CornerShape, BauhausTag } from './Shapes';

export function ContactCoordinates() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setMessageData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    }, 3000);
  };

  const advisors = [
    {
      role: "OUTREACH ADVISORY",
      name: "Harsh Mishra",
      phone: "+91 7020976545",
      type: "Student Outreach & Public Relations",
      color: "bg-[#D02020] text-white"
    },
    {
      role: "TECHNICAL ADVISORY",
      name: "Amitabh Dwivedi",
      phone: "+91 8429051078",
      type: "Technical Systems & Infrastructure",
      color: "bg-[#1040C0] text-white"
    }
  ];

  return (
    <section id="contact" className="w-full bg-[#F0C020] border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Dots in Yellow */}
      <div className="absolute inset-0 bg-bauhaus-dots-yellow opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-none bg-[#121212] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                TRANSMISSION // COORDINATES &amp; SUPPORT
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-[#121212] leading-[0.95]">
              GET IN TOUCH<br />
              <span className="text-[#D02020]">&amp; VENUE MAP</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-sm text-[#121212] leading-relaxed">
            Reach out to the TSDW Student Welfare Council or visit the TCET Mumbai campus for all symposium activities.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards (Left) + Interactive Transmission Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Advisories & Venue (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 2 Advisory Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {advisors.map((adv, idx) => (
                <div
                  key={adv.name}
                  className="bg-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_black] flex flex-col justify-between group hover:-translate-y-1 transition-transform"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-black ${adv.color}`}>
                        {adv.role}
                      </span>
                      <CornerShape index={idx} size="w-3 h-3" />
                    </div>

                    <h4 className="text-xl font-black uppercase tracking-tight text-[#121212]">
                      {adv.name}
                    </h4>

                    <p className="text-xs font-medium text-[#121212]/70">
                      {adv.type}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-black flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#121212]">
                      {adv.phone}
                    </span>
                    <a
                      href={`tel:${adv.phone.replace(/\s+/g, '')}`}
                      className="bauhaus-btn px-3 py-1 bg-[#121212] text-white text-[11px]"
                    >
                      CALL
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email Support Card */}
            <div className="bg-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_black] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D02020] text-white flex items-center justify-center border-2 border-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-bold text-[#121212]/60 uppercase">
                    OFFICIAL PROTOCOL EMAIL
                  </div>
                  <div className="text-base font-black font-mono text-[#121212]">
                    technicalteamtsdw@gmail.com
                  </div>
                </div>
              </div>

              <a
                href="mailto:technicalteamtsdw@gmail.com"
                className="bauhaus-btn px-4 py-2 bg-[#D02020] text-white text-xs shrink-0"
              >
                SEND EMAIL
              </a>
            </div>

            {/* Campus Coordinates & Address Card */}
            <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_black] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-none bg-[#1040C0] border border-black" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                    CAMPUS COORDINATES // TCET MUMBAI
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-[#D02020]">
                  [MUMBAI, 400101]
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#D02020] shrink-0 mt-1" />
                <div>
                  <h4 className="font-black text-lg uppercase text-[#121212]">
                    THAKUR COLLEGE OF ENGINEERING &amp; TECHNOLOGY
                  </h4>
                  <p className="font-mono text-xs text-[#121212]/80 mt-1 leading-relaxed">
                    A-Block, Thakur Educational Campus, Shyamnarayan Thakur Marg, Thakur Village, Kandivali (East), Mumbai, Maharashtra 400101.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Thakur+College+of+Engineering+and+Technology+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bauhaus-btn px-4 py-2 bg-[#1040C0] text-white text-xs font-mono"
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5 inline" />
                  OPEN IN GOOGLE MAPS
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Transmission Form (5 cols) */}
          <div className="lg:col-span-5 bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 sm:p-8 flex flex-col justify-between relative">
            <div className="absolute top-4 right-4">
              <CornerShape index={2} size="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#D02020]">
                  // QUICK TRANSMISSION
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-[#121212] mb-4">
                SEND DIRECT INQUIRY
              </h3>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={messageData.name}
                      onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F0F0F0] border-2 border-black font-medium text-sm shadow-[2px_2px_0px_0px_black] focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={messageData.email}
                      onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F0F0F0] border-2 border-black font-medium text-sm shadow-[2px_2px_0px_0px_black] focus:outline-none focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                      TOPIC / SUBJECT *
                    </label>
                    <select
                      value={messageData.subject}
                      onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F0F0F0] border-2 border-black font-medium text-sm shadow-[2px_2px_0px_0px_black] focus:outline-none focus:bg-white"
                    >
                      <option value="General Inquiry">General Festival Inquiry</option>
                      <option value="Event Registration">Event Registration Issue</option>
                      <option value="Sponsorship">Sponsorship Proposal</option>
                      <option value="Workshop Queries">Workshop Details</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1">
                      MESSAGE / DETAILS *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Type your message or inquiry here..."
                      value={messageData.message}
                      onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F0F0F0] border-2 border-black font-medium text-sm shadow-[2px_2px_0px_0px_black] focus:outline-none focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bauhaus-btn w-full py-3.5 bg-[#D02020] text-white text-sm uppercase tracking-wider font-black"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    TRANSMIT MESSAGE
                  </button>
                </form>
              ) : (
                <div className="p-8 text-center bg-[#FFF9C4] border-3 border-black space-y-3">
                  <CheckCircle className="w-12 h-12 text-[#D02020] mx-auto" />
                  <h4 className="font-black text-xl uppercase">TRANSMISSION RECEIVED!</h4>
                  <p className="font-mono text-xs text-[#121212]/80">
                    Thank you {messageData.name || 'Delegate'}. The TSDW technical council team will respond to your inquiry promptly.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t-2 border-black mt-4">
              <span className="font-mono text-[10px] text-[#121212]/60 uppercase">
                TSDW RESPONSE PROTOCOL: UNDER 24 HOURS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
