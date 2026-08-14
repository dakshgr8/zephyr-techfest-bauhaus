import React, { useState, useMemo } from 'react';
import { ALL_EVENTS } from '../data/events';
import { CornerShape } from '../components/Shapes';
import { Search, X, Users, Trophy, Phone, ArrowLeft, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const ORIGINAL_COMMITTEES = [
  'All',
  'CSI',
  'ACM',
  'IETE',
  'ASCE',
  'IEEE',
  'ACM-SIGAI',
  'ACM-SIGAI, S4DS, ASCE',
  'ACM-SIGAI, CSI',
  'S4DS',
  'OWASP',
  'IEI',
  'TRS',
  'BBA',
  'BCA',
  'ASME'
];

export function EventsPage({ onGoHome }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Filter logic matching the original website
  const filteredEvents = useMemo(() => {
    return ALL_EVENTS.filter((evt) => {
      const matchSearch =
        searchQuery.trim() === "" ||
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCommittee =
        selectedCommittee === "All" ||
        evt.tag === selectedCommittee ||
        evt.tag.includes(selectedCommittee);

      return matchSearch && matchCommittee;
    });
  }, [searchQuery, selectedCommittee]);

  const handleBookNow = (evt) => {
    setBookingSuccess(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D02020', '#1040C0', '#F0C020', '#121212']
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#121212] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Breadcrumb & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <button
              onClick={onGoHome}
              className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#121212] hover:text-[#D02020] mb-3"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-none bg-[#D02020] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                🚩 ZEPHYR EVENTS
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter text-[#121212] leading-none">
              Explore Events
            </h1>
          </div>

          <div className="font-mono text-xs font-bold p-3 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black]">
            TOTAL: <span className="text-[#D02020] font-black">{filteredEvents.length}</span> / 67 EVENTS
          </div>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#121212]/60 stroke-[3]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events by name, committee, or keywords..."
            className="w-full pl-12 pr-10 py-3.5 bg-white text-[#121212] font-outfit font-bold placeholder:text-[#121212]/40 border-4 border-black shadow-[4px_4px_0px_0px_black] focus:outline-none focus:bg-white focus:shadow-[6px_6px_0px_0px_#1040C0] transition-all text-sm sm:text-base rounded-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-black hover:text-[#D02020]"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Committee Filter Buttons */}
        <div className="space-y-2">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]/70">
            COMMITTEE:
          </div>
          <div className="flex flex-wrap gap-2">
            {ORIGINAL_COMMITTEES.map((comm) => {
              const isSelected = selectedCommittee === comm;
              return (
                <button
                  key={comm}
                  onClick={() => setSelectedCommittee(comm)}
                  className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-black transition-all rounded-none ${
                    isSelected
                      ? "bg-[#D02020] text-white shadow-[3px_3px_0px_0px_black] translate-x-0.5 translate-y-0.5"
                      : "bg-white text-[#121212] hover:bg-[#E0E0E0] shadow-[2px_2px_0px_0px_black]"
                  }`}
                >
                  {comm}
                </button>
              );
            })}
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredEvents.map((evt, idx) => (
            <div
              key={evt.id}
              onClick={() => {
                setSelectedEvent(evt);
                setBookingSuccess(false);
              }}
              className="bauhaus-card flex flex-col justify-between group overflow-hidden cursor-pointer bg-white"
            >
              <div>
                {/* Event Image Banner with Grayscale-to-Color Filter */}
                <div className="relative h-48 w-full border-b-4 border-black overflow-hidden bg-[#121212]">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover bauhaus-img-filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/zephyr-logo.jpeg";
                    }}
                  />

                  {/* Corner Geometric Shape */}
                  <div className="absolute top-3 right-3 z-10">
                    <CornerShape index={idx} size="w-3.5 h-3.5" />
                  </div>

                  {/* Tag Overlay */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-xs font-black uppercase px-2.5 py-1 bg-[#121212] text-white border-2 border-black shadow-[2px_2px_0px_0px_white]">
                      {evt.tag}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 z-10 font-mono text-xs font-black px-3 py-1 bg-[#D02020] text-white border-2 border-black shadow-[2px_2px_0px_0px_black]">
                    ₹{evt.price}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#121212] group-hover:text-[#1040C0] transition-colors leading-tight">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-[#121212]/80 line-clamp-3 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-[#F0F0F0] border-t-2 border-black flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#121212]/70">
                  <Users className="w-3.5 h-3.5" />
                  <span>
                    {evt.teamMin === evt.teamMax
                      ? `${evt.teamMin} Player(s)`
                      : `${evt.teamMin}-${evt.teamMax} Players`}
                  </span>
                </div>

                <button className="font-black text-xs uppercase tracking-wider text-[#D02020] group-hover:translate-x-1 transition-transform">
                  BOOK EVENT →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking / Details Modal matching original features in Bauhaus Theme */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#F0F0F0] border-4 border-black shadow-[12px_12px_0px_0px_black] my-8 overflow-hidden">
            
            {/* Modal Top Bar */}
            <div className="bg-[#121212] text-white p-4 flex items-center justify-between border-b-4 border-black">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#D02020] border border-white" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#F0C020]">
                  {selectedEvent.tag} // EVENT BOOKING
                </span>
              </div>

              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1.5 bg-[#D02020] text-white border-2 border-white hover:bg-white hover:text-black transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 stroke-[3]" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
              
              {/* Event Image */}
              <div className="relative h-48 sm:h-60 w-full border-4 border-black bg-black overflow-hidden shadow-[4px_4px_0px_0px_black]">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/zephyr-logo.jpeg";
                  }}
                />
                <div className="absolute bottom-3 right-3 font-mono text-base font-black px-4 py-1 bg-[#D02020] text-white border-2 border-black">
                  ₹{selectedEvent.price}
                </div>
              </div>

              {/* Title & Tag */}
              <div>
                <span className="font-mono text-xs font-bold uppercase text-[#1040C0]">
                  {selectedEvent.college || selectedEvent.tag}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121212]">
                  {selectedEvent.title}
                </h2>
              </div>

              {/* Description */}
              <div className="p-4 bg-white border-3 border-black shadow-[4px_4px_0px_0px_black]">
                <p className="text-sm sm:text-base font-medium text-[#121212] leading-relaxed">
                  {selectedEvent.desc}
                </p>
              </div>

              {/* Event Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-white border-2 border-black">
                  <div className="text-black/60 font-bold">TEAM SIZE</div>
                  <div className="font-black text-sm text-[#121212] mt-0.5">
                    {selectedEvent.teamMin === selectedEvent.teamMax
                      ? `${selectedEvent.teamMin} Player(s)`
                      : `${selectedEvent.teamMin} to ${selectedEvent.teamMax} Players`}
                  </div>
                </div>

                <div className="p-3 bg-white border-2 border-black">
                  <div className="text-black/60 font-bold">PRIZE POOL</div>
                  <div className="font-black text-sm text-[#D02020] mt-0.5">
                    {selectedEvent.prize_pool || "Official Vouchers"}
                  </div>
                </div>
              </div>

              {/* Coordinator Helpline */}
              {selectedEvent.phone_no && (
                <div className="p-4 bg-[#FFF9C4] border-2 border-black flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-5 h-5 text-[#D02020]" />
                    <div>
                      <div className="text-[10px] font-mono font-bold text-black/70 uppercase">
                        COORDINATOR HELPLINE
                      </div>
                      <div className="font-mono font-black text-sm">
                        +91 {selectedEvent.phone_no}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyPhone(selectedEvent.phone_no)}
                    className="bauhaus-btn px-3 py-1 bg-white text-black text-xs font-mono"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-green-700" /> : "COPY"}
                  </button>
                </div>
              )}

              {/* Book Event / Razorpay Simulation Button */}
              {!bookingSuccess ? (
                <button
                  onClick={() => handleBookNow(selectedEvent)}
                  className="bauhaus-btn w-full py-4 bg-[#D02020] text-white hover:bg-[#D02020]/90 text-sm sm:text-base font-black tracking-wider uppercase shadow-[6px_6px_0px_0px_black]"
                >
                  <span>BOOK EVENT NOW (₹{selectedEvent.price})</span>
                </button>
              ) : (
                <div className="p-6 bg-white border-4 border-black text-center space-y-3 shadow-[6px_6px_0px_0px_black]">
                  <div className="w-12 h-12 rounded-full bg-[#D02020] text-white flex items-center justify-center font-black text-xl mx-auto">
                    ✓
                  </div>
                  <h3 className="text-xl font-black uppercase text-[#121212]">
                    BOOKING INITIATED!
                  </h3>
                  <p className="font-mono text-xs text-[#121212]/80">
                    Registration confirmed for <strong>{selectedEvent.title}</strong>. Please present this at the TCET festival desk.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
