import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CalendarDays, User, Phone, Sparkles, MessageSquare, Plus, Minus, ArrowRight } from 'lucide-react';
import { PARTY_SERVICES } from '../data';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Party',
    date: '',
    guestCount: 25,
    specialRequirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update specific fields
  const handleInputChange = (field: string, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const adjustGuestCount = (amount: number) => {
    setFormData((prev) => {
      const nextCount = prev.guestCount + amount;
      return {
        ...prev,
        guestCount: nextCount > 0 ? nextCount : 1
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      alert('Please fill out the required entries to design your royal event.');
      return;
    }

    // Build the WhatsApp message payload
    const whatsappMessage = `Hello SPICY BAWARCHI,

New Party Booking Request:

Name: ${formData.name}
Phone Number: ${formData.phone}
Event Type: ${formData.eventType}
Date: ${formData.date}
Guest Count: ${formData.guestCount}
Special Requirements: ${formData.specialRequirements || 'No special requirements'}

Please check the availability. Thank you!`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917643097915?text=${encodedText}`;

    setFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSubmitted(false);
    }, 1500);
  };

  return (
    <div className="w-full bg-luxury-black min-h-screen pt-28 pb-32 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Page Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold">Unmatched Banqueting Craft</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-wide mt-2 mb-4 leading-tight">
          Celebrate In Royal Grand Format
        </h1>
        <p className="font-serif italic text-base text-luxury-gold/80 max-w-lg mx-auto">
          Tailor bespoke culinary journeys and sensory event themes for your absolute grandest occasions.
        </p>
      </div>

      {/* Grid of services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {PARTY_SERVICES.map((serv, idx) => (
          <div
            key={idx}
            onClick={() => handleInputChange('eventType', serv.title)}
            className={`group cursor-pointer rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between border ${
              formData.eventType === serv.title
                ? 'bg-gradient-to-r from-neutral-950 to-[#0e0e0e] border-luxury-orange shadow-[0_15px_35px_rgba(255,107,0,0.15)]'
                : 'bg-white/[0.01] border-white/5 hover:border-white/15'
            }`}
          >
            {/* Visual highlight circle for selected state */}
            {formData.eventType === serv.title && (
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-orange/15 rounded-full blur-2xl" />
            )}

            <div>
              {/* Premium Image instead of emoji */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-5 border border-white/5 shadow-md">
                <img
                  src={serv.image}
                  alt={serv.title}
                  className="w-full h-full object-cover brightness-[0.75] group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              </div>

              <h3 className="font-serif text-xl text-white font-medium mb-1 tracking-wide group-hover:text-luxury-orange transition-colors">
                {serv.title}
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-luxury-orange mb-3">
                {serv.tagline}
              </p>
              <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-3">
                {serv.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <span className={`text-[10px] uppercase font-mono tracking-widest leading-none ${
                formData.eventType === serv.title ? 'text-luxury-gold font-bold' : 'text-white/20 group-hover:text-white/40'
              }`}>
                {formData.eventType === serv.title ? '● Selected Category' : 'Select Service'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Split section for booking form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Fine print instructions */}
        <div className="lg:col-span-5 text-left">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-luxury-orange font-bold mb-3 block">Infinite Hospitality Accord</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6 leading-snug">
            Custom-design your signature celebrations with Spicy Bawarchi
          </h2>
          <p className="text-xs text-white/60 leading-relaxed font-sans mb-6">
            Our expert catering managers and head chefs orchestrate everything from grand custom floral sets or slow-instrumental sound systems down to tailored molecular dessert displays.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-luxury-orange/10 flex items-center justify-center text-luxury-orange shrink-0 mt-0.5">
                <Sparkles size={14} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-white font-medium">Bespoke Culinary Menus</h4>
                <p className="text-[11px] text-white/40 font-sans leading-relaxed">Customize spices levels, ingredients constraints, and raw allergen controls.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-luxury-orange/10 flex items-center justify-center text-luxury-orange shrink-0 mt-0.5">
                <CalendarDays size={14} />
              </div>
              <div>
                <h4 className="font-serif text-sm text-white font-medium">Immersive Table Topography</h4>
                <p className="text-[11px] text-white/40 font-sans leading-relaxed">Luxury gold elements, glowing crystal glasses, and slow ambient lighting sets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Glass Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 rounded-2xl border border-white/5 relative">
            <h3 className="font-serif text-2xl text-white tracking-wide mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-luxury-gold" />
              Royal Space Reservation Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name field */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                    Customer Name *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <User size={15} />
                    </div>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter full name"
                      className="w-full py-3.5 pl-10 pr-4 rounded-lg bg-white/5 focus:bg-white/10 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all"
                    />
                  </div>
                </div>

                {/* Phone field */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                      <Phone size={15} />
                    </div>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="01234 56789"
                      className="w-full py-3.5 pl-10 pr-4 rounded-lg bg-white/5 focus:bg-white/10 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Event Type selector */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                    Event Services
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                    className="w-full py-3.5 px-4 rounded-lg bg-neutral-900 focus:bg-neutral-800 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all cursor-pointer"
                  >
                    {PARTY_SERVICES.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Date field */}
                <div>
                  <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                    Target Date *
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full py-3.5 px-4 rounded-lg bg-neutral-900 focus:bg-neutral-800 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Guest Count area with plus/minus control */}
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                  Estimated Guest Count ({formData.guestCount} People)
                </label>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-lg p-2.5 max-w-xs">
                  <button
                    type="button"
                    onClick={() => adjustGuestCount(-10)}
                    className="p-1 px-2 hover:bg-white/10 rounded text-luxury-orange cursor-pointer font-bold"
                  >
                    -10
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustGuestCount(-1)}
                    className="p-1 hover:bg-white/10 rounded text-luxury-orange cursor-pointer"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="flex-grow text-center text-white text-sm font-mono font-bold">
                    {formData.guestCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => adjustGuestCount(1)}
                    className="p-1 hover:bg-white/10 rounded text-luxury-orange cursor-pointer"
                  >
                    <Plus size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => adjustGuestCount(10)}
                    className="p-1 px-2 hover:bg-white/10 rounded text-luxury-orange cursor-pointer font-bold"
                  >
                    +10
                  </button>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-[10px] uppercase font-mono tracking-widest text-[#FFC857]/80 mb-2">
                  Special Guidelines &amp; Architectural Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequirements}
                  onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                  placeholder="Specify requested spices limits, organic constraints, VIP seating allocations, customized cakes sizing..."
                  className="w-full py-3 px-4 rounded-lg bg-white/5 focus:bg-white/10 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-event-booking"
                className="w-full py-4 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-xs tracking-[0.2em] uppercase font-bold rounded-lg shadow-xl shadow-luxury-orange/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.01]"
              >
                {formSubmitted ? (
                  <>Preparing Event Reservation Sheet...</>
                ) : (
                  <>
                    <MessageSquare size={14} />
                    Confirm &amp; Redirect To WhatsApp
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
