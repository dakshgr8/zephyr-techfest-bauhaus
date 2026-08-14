import React, { useState, useEffect } from 'react';
import { X, Trophy, Users, Phone, Mail, Calendar, CheckCircle2, Ticket, Sparkles, Download, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CornerShape, BauhausTag } from './Shapes';

export function EventModal({ event, onClose }) {
  const [activeTab, setActiveTab] = useState("details"); // 'details' or 'register'
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passNumber, setPassNumber] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    leadName: "",
    leadEmail: "",
    leadPhone: "",
    college: "TCET Mumbai",
    branch: "Computer Engineering",
    year: "FE",
    teamName: "",
    teamMembers: []
  });

  useEffect(() => {
    // Generate initial team member empty fields if teamMax > 1
    if (event && event.teamMax > 1) {
      const extraMembersCount = event.teamMax - 1;
      setFormData(prev => ({
        ...prev,
        teamMembers: Array(extraMembersCount).fill("")
      }));
    }
  }, [event]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!event) return null;

  const handleCopyPhone = () => {
    if (event.phone_no) {
      navigator.clipboard.writeText(event.phone_no);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const generatedPass = `ZEP25-${event.tag}-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassNumber(generatedPass);
    setIsSubmitted(true);

    // Trigger Bauhaus Confetti (Primary Colors: Red, Blue, Yellow, Black)
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D02020', '#1040C0', '#F0C020', '#121212']
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#F0F0F0] border-4 border-black shadow-[12px_12px_0px_0px_black] my-8 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-[#121212] text-white p-4 flex items-center justify-between border-b-4 border-black">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D02020] border border-white" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
              ZEPHYR '25 // SPECIFICATION MATRIX
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 bg-[#D02020] text-white border-2 border-white hover:bg-white hover:text-black transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 border-b-4 border-black bg-white">
          <button
            onClick={() => setActiveTab("details")}
            className={`py-3.5 font-black uppercase text-xs sm:text-sm tracking-wider border-r-2 border-black transition-all ${
              activeTab === "details"
                ? "bg-[#F0C020] text-black shadow-[inset_0_-4px_0_0_#121212]"
                : "bg-white text-[#121212] hover:bg-[#F0F0F0]"
            }`}
          >
            EVENT SPECIFICATIONS
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`py-3.5 font-black uppercase text-xs sm:text-sm tracking-wider border-l-2 border-black transition-all ${
              activeTab === "register"
                ? "bg-[#D02020] text-white shadow-[inset_0_-4px_0_0_#121212]"
                : "bg-white text-[#121212] hover:bg-[#F0F0F0]"
            }`}
          >
            REGISTRATION &amp; PASS
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: DETAILS */}
          {activeTab === "details" && (
            <div className="space-y-6">
              
              {/* Event Image Banner with Bauhaus Frame */}
              <div className="relative h-48 sm:h-64 w-full border-4 border-black bg-black overflow-hidden shadow-[6px_6px_0px_0px_black]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/zephyr-logo.jpeg";
                  }}
                />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="font-mono text-xs font-black uppercase px-3 py-1 bg-[#121212] text-white border-2 border-black">
                    {event.tag}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase px-3 py-1 bg-[#F0C020] text-black border-2 border-black">
                    {event.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 font-mono text-sm font-black px-4 py-1.5 bg-[#D02020] text-white border-2 border-black shadow-[3px_3px_0px_0px_black]">
                  ENTRY: {event.priceDisplay}
                </div>
              </div>

              {/* Title & Specs Grid */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#121212]/60 uppercase">
                    EVENT IDENTIFIER: #{String(event.id).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1040C0] uppercase">
                    TCET CAMPUS
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121212] leading-none">
                  {event.title}
                </h2>
              </div>

              {/* Description */}
              <div className="p-5 bg-white border-3 border-black shadow-[4px_4px_0px_0px_black]">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#D02020] mb-2">
                  // OFFICIAL BRIEF
                </div>
                <p className="text-base font-medium text-[#121212] leading-relaxed">
                  {event.desc}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                <div className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black]">
                  <div className="text-[10px] font-bold text-[#121212]/60 uppercase">TEAM CAPACITY</div>
                  <div className="text-sm font-black text-[#121212] flex items-center gap-1.5 mt-1">
                    <Users className="w-4 h-4 text-[#1040C0]" />
                    <span>
                      {event.teamMin === event.teamMax
                        ? `${event.teamMin} Player(s)`
                        : `${event.teamMin} to ${event.teamMax} Players`}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black]">
                  <div className="text-[10px] font-bold text-[#121212]/60 uppercase">PRIZE POOL</div>
                  <div className="text-sm font-black text-[#D02020] flex items-center gap-1.5 mt-1">
                    <Trophy className="w-4 h-4" />
                    <span>{event.prize_pool || "Official Certificates & Goodies"}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black]">
                  <div className="text-[10px] font-bold text-[#121212]/60 uppercase">ORGANIZING COMMITTEE</div>
                  <div className="text-sm font-black text-[#1040C0] flex items-center gap-1.5 mt-1">
                    <span>{event.college || event.tag}</span>
                  </div>
                </div>
              </div>

              {/* Coordinator Contact Box */}
              {event.phone_no && (
                <div className="p-4 bg-[#FFF9C4] border-3 border-black shadow-[4px_4px_0px_0px_black] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#121212] text-[#F0C020] flex items-center justify-center border-2 border-black">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-black/70 uppercase">
                        STUDENT COORDINATOR HELPLINE
                      </div>
                      <div className="text-base font-black font-mono">
                        +91 {event.phone_no}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${event.phone_no}`}
                      className="bauhaus-btn px-4 py-2 bg-[#D02020] text-white text-xs"
                    >
                      CALL NOW
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="bauhaus-btn px-3 py-2 bg-white text-black text-xs"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-green-700" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => setActiveTab("register")}
                  className="bauhaus-btn w-full py-4 bg-[#D02020] text-white hover:bg-[#D02020]/90 text-sm sm:text-base"
                >
                  <span>PROCEED TO EVENT REGISTRATION</span>
                  <Sparkles className="w-5 h-5 ml-2" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: REGISTRATION & TICKET GENERATOR */}
          {activeTab === "register" && (
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                  <div className="p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_black]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono font-bold text-[#121212]/60 uppercase">
                          REGISTERING FOR
                        </div>
                        <div className="text-xl font-black uppercase text-[#1040C0]">
                          {event.title}
                        </div>
                      </div>
                      <div className="font-mono text-sm font-black bg-[#F0C020] text-black px-3 py-1 border-2 border-black">
                        {event.priceDisplay}
                      </div>
                    </div>
                  </div>

                  {/* Team Details (If team size > 1) */}
                  {event.teamMax > 1 && (
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        TEAM / SQUAD NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. TCET Cyber Knights"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      />
                    </div>
                  )}

                  {/* Lead Participant Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        {event.teamMax > 1 ? "TEAM LEADER FULL NAME *" : "FULL NAME *"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Sharma"
                        value={formData.leadName}
                        onChange={(e) => setFormData({ ...formData, leadName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@tcetmumbai.in"
                        value={formData.leadEmail}
                        onChange={(e) => setFormData({ ...formData, leadEmail: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        WHATSAPP PHONE *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.leadPhone}
                        onChange={(e) => setFormData({ ...formData, leadPhone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        COLLEGE NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#121212] mb-1.5">
                        ACADEMIC YEAR *
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-black font-medium shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-[#FFF9C4]"
                      >
                        <option value="FE">First Year (FE)</option>
                        <option value="SE">Second Year (SE)</option>
                        <option value="TE">Third Year (TE)</option>
                        <option value="BE">Final Year (BE)</option>
                        <option value="PG">Postgraduate / Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Dynamic Teammates inputs if applicable */}
                  {event.teamMax > 1 && formData.teamMembers.length > 0 && (
                    <div className="p-4 bg-[#F0F0F0] border-2 border-black space-y-3">
                      <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#1040C0]">
                        SQUAD ROSTER (PLAYERS 2 TO {event.teamMax}):
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {formData.teamMembers.map((member, idx) => (
                          <div key={idx}>
                            <input
                              type="text"
                              placeholder={`Teammate ${idx + 2} Full Name`}
                              value={member}
                              onChange={(e) => {
                                const updated = [...formData.teamMembers];
                                updated[idx] = e.target.value;
                                setFormData({ ...formData, teamMembers: updated });
                              }}
                              className="w-full px-3 py-2 bg-white border-2 border-black font-medium text-xs shadow-[2px_2px_0px_0px_black]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submission Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bauhaus-btn w-full py-4 bg-[#D02020] text-white hover:bg-[#D02020]/90 text-sm sm:text-base"
                    >
                      CONFIRM REGISTRATION &amp; GET TICKET PASS
                    </button>
                    <p className="font-mono text-[11px] text-center text-[#121212]/60 mt-2">
                      ⚡ Instant confirmation ticket will be generated. All communications via TSDW Council.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Pass Ticket */
                <div className="space-y-6">
                  <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_black] relative overflow-hidden">
                    
                    {/* Bauhaus Ticket Border Accent */}
                    <div className="absolute top-0 left-0 right-0 h-3 bg-[#D02020]" />

                    <div className="flex items-center justify-between border-b-2 border-dashed border-black pb-4 mb-4 mt-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8 text-[#D02020]" />
                        <div>
                          <div className="font-black text-xl uppercase leading-none">
                            ENTRY PASS CONFIRMED
                          </div>
                          <div className="font-mono text-xs text-[#121212]/60 font-bold uppercase mt-1">
                            ZEPHYR 2025 // TSDW ADMISSION
                          </div>
                        </div>
                      </div>

                      <div className="font-mono text-right">
                        <div className="text-[10px] text-black/60 font-bold">PASS NUMBER</div>
                        <div className="text-sm sm:text-base font-black text-[#1040C0] bg-[#FFF9C4] px-2 py-0.5 border border-black">
                          {passNumber}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs my-4">
                      <div>
                        <span className="text-black/60 block">EVENT NAME</span>
                        <span className="font-black text-sm text-[#121212] uppercase">{event.title}</span>
                      </div>
                      <div>
                        <span className="text-black/60 block">PARTICIPANT / TEAM LEADER</span>
                        <span className="font-black text-sm text-[#121212] uppercase">{formData.leadName || "Delegate"}</span>
                      </div>
                      <div>
                        <span className="text-black/60 block">ORGANIZER</span>
                        <span className="font-black text-sm text-[#D02020] uppercase">{event.tag} @ TCET</span>
                      </div>
                      <div>
                        <span className="text-black/60 block">DATES &amp; VENUE</span>
                        <span className="font-black text-sm text-[#1040C0] uppercase">SEP 25-27 // TCET MUMBAI</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#F0F0F0] border-2 border-black font-mono text-[11px] text-[#121212]/80 mt-4">
                      ✓ Please preserve this ticket ID and display it at the TCET Registration Desk during festival check-in.
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => window.print()}
                      className="bauhaus-btn flex-1 py-3 bg-[#F0C020] text-black text-xs font-black"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PRINT / DOWNLOAD PASS
                    </button>
                    <button
                      onClick={onClose}
                      className="bauhaus-btn px-6 py-3 bg-[#121212] text-white text-xs font-black"
                    >
                      DONE
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
