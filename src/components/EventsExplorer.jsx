import React, { useState, useMemo } from 'react';
import { ALL_EVENTS, CATEGORIES, filterAndSearchEvents } from '../data/events';
import { COMMITTEES_DATA } from '../data/committees';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { Search, X, RotateCcw, Filter } from 'lucide-react';

export function EventsExplorer({ onShowToast }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommittee, setSelectedCommittee] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return filterAndSearchEvents({
      events: ALL_EVENTS,
      searchQuery,
      selectedCommittee,
      selectedCategory,
      priceFilter,
    });
  }, [searchQuery, selectedCommittee, selectedCategory, priceFilter]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCommittee('ALL');
    setSelectedCategory('All');
    setPriceFilter('all');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCommittee !== 'ALL' ||
    selectedCategory !== 'All' ||
    priceFilter !== 'all';

  const handleRegisterEvent = (event) => {
    setSelectedEvent(null);
    if (onShowToast) {
      onShowToast(`Registration initiated for ${event.title}. Coordinator: +91 ${event.phone_no}`);
    }
  };

  const handleCopyContact = (phone) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phone);
    }
    if (onShowToast) {
      onShowToast(`Copied coordinator contact (+91 ${phone}) to clipboard.`);
    }
  };

  return (
    <section
      id="events"
      className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 sm:space-y-12"
    >
      {/* Header & Counter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E2DCD2] pb-6 sm:pb-8">
        <div className="space-y-1">
          <span className="font-body text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-[#6B6862]">
            DIRECTORY
          </span>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1C1C1C] tracking-wide uppercase">
            Events <span className="italic text-[#9E7438]">Directory</span>
          </h1>
        </div>

        <div className="flex items-center gap-2.5 font-body text-xs">
          <div className="px-3 py-1.5 bg-[#F3EFE8] border border-[#E2DCD2] text-[#1C1C1C] tracking-wider uppercase text-[11px]">
            {filteredEvents.length} OF 67 EVENTS
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="px-3 py-1.5 bg-transparent hover:bg-[#F3EFE8] border border-[#E2DCD2] text-[#9E7438] transition-colors flex items-center gap-1.5 text-[11px] uppercase tracking-wider"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Matrix */}
      <div className="gallery-card p-4 sm:p-8 space-y-4 sm:space-y-6">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6862]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events, chapters, or keywords..."
            className="w-full pl-10 pr-9 py-2.5 sm:py-3 bg-[#FAF7F2] text-[#1C1C1C] placeholder:text-[#6B6862]/60 border border-[#E2DCD2] font-body text-xs sm:text-sm focus:outline-none focus:border-[#9E7438] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#6B6862] hover:text-[#1C1C1C]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Dropdowns / Desktop Chips Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#E2DCD2]">
          
          {/* Chapter Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-body font-medium text-[#6B6862] uppercase tracking-[0.2em] block">
              Chapter
            </label>
            <select
              value={selectedCommittee}
              onChange={(e) => setSelectedCommittee(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E2DCD2] text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all uppercase tracking-wider"
            >
              <option value="ALL">All 11 Chapters ({ALL_EVENTS.length})</option>
              {COMMITTEES_DATA.filter((c) => c.id !== 'ALL').map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({ALL_EVENTS.filter((e) => e.committee === c.id).length})
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-body font-medium text-[#6B6862] uppercase tracking-[0.2em] block">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E2DCD2] text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all uppercase tracking-wider"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Fee Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-body font-medium text-[#6B6862] uppercase tracking-[0.2em] block">
              Fee Type
            </label>
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E2DCD2] text-xs sm:text-sm text-[#1C1C1C] focus:outline-none focus:border-[#9E7438] transition-all uppercase tracking-wider"
            >
              <option value="all">All Fees (Free & Paid)</option>
              <option value="free">Free Events Only</option>
              <option value="paid">Paid Events Only</option>
            </select>
          </div>

        </div>

        {/* Desktop Quick Chapter Pills (Shown on tablet/desktop for rapid filtering) */}
        <div className="hidden md:block pt-3 border-t border-[#E2DCD2]/60">
          <div className="flex flex-wrap gap-1.5">
            {COMMITTEES_DATA.map((comm) => {
              const isSelected = selectedCommittee === comm.id;
              return (
                <button
                  key={comm.id}
                  onClick={() => setSelectedCommittee(comm.id)}
                  className={`px-2.5 py-1 text-[11px] font-body uppercase tracking-wider transition-all ${
                    isSelected
                      ? 'bg-[#1C1C1C] text-white font-medium'
                      : 'bg-[#FAF7F2] text-[#6B6862] hover:bg-[#EBE5DC] border border-[#E2DCD2]'
                  }`}
                >
                  {comm.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Event Cards Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={(evt) => setSelectedEvent(evt)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 px-4 gallery-card space-y-3 max-w-lg mx-auto">
          <div className="w-8 h-8 bg-[#FAF7F2] border border-[#E2DCD2] flex items-center justify-center mx-auto text-[#6B6862]">
            <Filter className="w-4 h-4" />
          </div>

          <div className="space-y-1">
            <h3 className="font-display text-lg sm:text-xl font-medium text-[#1C1C1C]">
              No Events Found
            </h3>
            <p className="font-body text-xs text-[#6B6862]">
              No events match your current filter selections.
            </p>
          </div>

          <button
            onClick={resetFilters}
            className="btn-gallery-primary px-4 py-2 text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={Boolean(selectedEvent)}
        onClose={() => setSelectedEvent(null)}
        onRegister={handleRegisterEvent}
        onCopyContact={handleCopyContact}
      />
    </section>
  );
}
