import React, { useState, useMemo } from 'react';
import { ALL_EVENTS, CATEGORIES, COMMITTEES } from '../data/events';
import { CornerShape, BauhausTag } from './Shapes';
import { Search, Filter, Trophy, Users, ArrowRight, X, Phone, Check } from 'lucide-react';

export function EventsExplorer({ onSelectEvent }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCommittee, setSelectedCommittee] = useState("All Committees");
  const [priceFilter, setPriceFilter] = useState("all"); // 'all', 'free', 'paid'
  const [visibleCount, setVisibleCount] = useState(12);

  // Filtered Events
  const filteredEvents = useMemo(() => {
    return ALL_EVENTS.filter((evt) => {
      // Search query
      const matchSearch =
        searchQuery.trim() === "" ||
        evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.tag.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchCategory =
        selectedCategory === "All" || evt.category === selectedCategory;

      // Committee filter
      const matchCommittee =
        selectedCommittee === "All Committees" ||
        evt.tag.toUpperCase().includes(selectedCommittee.toUpperCase());

      // Price filter
      const isFree = evt.price === "0" || !evt.price;
      const matchPrice =
        priceFilter === "all" ||
        (priceFilter === "free" && isFree) ||
        (priceFilter === "paid" && !isFree);

      return matchSearch && matchCategory && matchCommittee && matchPrice;
    });
  }, [searchQuery, selectedCategory, selectedCommittee, priceFilter]);

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  return (
    <section id="events" className="w-full bg-[#F0F0F0] border-b-4 border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-black pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-none bg-[#1040C0] border border-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]">
                COMPLETE REPOSITORY // 67 VERIFIED EVENTS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-[#121212] leading-[0.9]">
              EVENTS<br />
              <span className="text-[#D02020]">DIRECTORY</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="p-3 bg-white border-2 border-black shadow-[3px_3px_0px_0px_black] font-mono text-xs font-bold">
              SHOWING <span className="text-[#D02020] font-black">{filteredEvents.length}</span> OF 67 EVENTS
            </div>
          </div>
        </div>

        {/* Filter Controls & Search Matrix */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-6 space-y-6">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#121212]/60 stroke-[3]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH BY EVENT NAME (e.g. Valorant, BGMI, Hackathon, Garba, Tech Hunt, CAD)..."
              className="w-full pl-12 pr-10 py-3.5 bg-[#F0F0F0] text-[#121212] font-outfit font-bold placeholder:text-[#121212]/40 border-3 border-black rounded-none shadow-[3px_3px_0px_0px_black] focus:outline-none focus:bg-white focus:shadow-[5px_5px_0px_0px_#1040C0] transition-all text-sm sm:text-base"
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

          {/* Category Tabs */}
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]/70 flex items-center gap-2">
              <span>●</span>
              <span>FILTER BY CATEGORY:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(12);
                    }}
                    className={`px-3.5 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-black transition-all rounded-none ${
                      isSelected
                        ? "bg-[#D02020] text-white shadow-[3px_3px_0px_0px_black] translate-x-0.5 translate-y-0.5"
                        : "bg-[#F0F0F0] text-[#121212] hover:bg-white hover:shadow-[3px_3px_0px_0px_black]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Committee Filter Pills & Price Filter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pt-2 border-t-2 border-black">
            
            {/* Committee Dropdown/Pills (9 cols) */}
            <div className="lg:col-span-9 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]/70 flex items-center gap-2">
                <span>■</span>
                <span>FILTER BY COMMITTEE / DEPARTMENT:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {COMMITTEES.map((comm) => {
                  const isSelected = selectedCommittee === comm;
                  return (
                    <button
                      key={comm}
                      onClick={() => {
                        setSelectedCommittee(comm);
                        setVisibleCount(12);
                      }}
                      className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border-2 border-black transition-all rounded-none ${
                        isSelected
                          ? "bg-[#1040C0] text-white shadow-[2px_2px_0px_0px_black]"
                          : "bg-white text-[#121212] hover:bg-[#E0E0E0]"
                      }`}
                    >
                      {comm}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter (3 cols) */}
            <div className="lg:col-span-3 space-y-2">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#121212]/70 flex items-center gap-2">
                <span>▲</span>
                <span>ENTRY FEE:</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { label: "ALL", val: "all" },
                  { label: "FREE", val: "free" },
                  { label: "PAID", val: "paid" },
                ].map((item) => (
                  <button
                    key={item.val}
                    onClick={() => setPriceFilter(item.val)}
                    className={`py-1 text-[11px] font-black uppercase text-center border-2 border-black rounded-none ${
                      priceFilter === item.val
                        ? "bg-[#F0C020] text-black shadow-[2px_2px_0px_0px_black]"
                        : "bg-white text-black hover:bg-[#F0F0F0]"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="bg-white border-4 border-black p-12 text-center shadow-[8px_8px_0px_0px_black] space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F0C020] border-3 border-black shadow-[4px_4px_0px_0px_black] mx-auto flex items-center justify-center font-black text-2xl">
              ?
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight">NO MATCHING EVENTS FOUND</h3>
            <p className="font-mono text-sm text-[#121212]/70">
              Try adjusting your search query or reset all filters to view all 67 festival events.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedCommittee("All Committees");
                setPriceFilter("all");
              }}
              className="bauhaus-btn px-6 py-2.5 bg-[#D02020] text-white text-xs"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}

        {/* 67 Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedEvents.map((evt, idx) => (
            <div
              key={evt.id}
              onClick={() => onSelectEvent(evt)}
              className="bauhaus-card flex flex-col justify-between group overflow-hidden cursor-pointer bg-white"
            >
              <div>
                {/* Event Image Banner */}
                <div className="relative h-44 sm:h-48 w-full border-b-4 border-black overflow-hidden bg-[#121212]">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover bauhaus-img-filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/zephyr-logo.jpeg";
                    }}
                  />

                  {/* Corner Shape */}
                  <div className="absolute top-3 right-3 z-10">
                    <CornerShape index={idx} size="w-3.5 h-3.5" />
                  </div>

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                    <span className="font-mono text-[11px] font-black uppercase px-2 py-0.5 bg-[#121212] text-white border-2 border-black shadow-[2px_2px_0px_0px_white]">
                      {evt.tag}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 bg-[#F0C020] text-black border border-black">
                      {evt.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 z-10 font-mono text-xs font-black px-2.5 py-1 bg-[#D02020] text-white border-2 border-black shadow-[2px_2px_0px_0px_black]">
                    {evt.priceDisplay}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-[#121212]/60">
                    <span>EVENT #{String(evt.id).padStart(2, '0')}</span>
                    {evt.prize_pool && (
                      <span className="flex items-center gap-1 font-bold text-[#D02020]">
                        <Trophy className="w-3 h-3" />
                        <span>{evt.prize_pool}</span>
                      </span>
                    )}
                  </div>

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
                      ? `${evt.teamMin} ${evt.teamMin === 1 ? 'Player' : 'Players'}`
                      : `${evt.teamMin}-${evt.teamMax} Players`}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1 font-black text-xs uppercase tracking-wider text-[#D02020] group-hover:translate-x-1 transition-transform">
                  <span>DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Pagination Button */}
        {visibleCount < filteredEvents.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="bauhaus-btn px-10 py-4 bg-[#1040C0] text-white hover:bg-[#1040C0]/90 text-sm sm:text-base"
            >
              LOAD MORE EVENTS ({filteredEvents.length - visibleCount} REMAINING)
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
