import { motion } from 'motion/react';
import { Phone, Sparkles, MessageSquare, Star, ArrowRight, Quote, Clock, MapPin, Calendar, Shield, Wine } from 'lucide-react';
import { MenuItem, Review, ActiveSection } from '../types';
import { MENU_ITEMS, REVIEWS, PARTY_SERVICES } from '../data';
import restaurantFront from '../assets/images/restaurant_front_1780214774320.png';
import Premium3DCard from './Premium3DCard';

interface HeroSectionProps {
  onNavigate: (section: ActiveSection) => void;
  onFilterCategory: (category: string) => void;
  onQuickOrder: (item: MenuItem) => void;
}

export default function HeroSection({ onNavigate, onFilterCategory, onQuickOrder }: HeroSectionProps) {
  // Extract elite items
  const featuredDishes = MENU_ITEMS.filter(item => item.popular && item.bestSeller);
  const bestSellers = MENU_ITEMS.filter(item => item.bestSeller && !item.popular).slice(0, 3);
  const todaysSpecial = MENU_ITEMS.find(item => item.id === 'veg-tvs') || MENU_ITEMS[0];

  return (
    <div className="w-full bg-black pb-32 overflow-hidden selection:bg-luxury-orange selection:text-white">
      
      {/* ==========================================
          1. CINEMATIC HERO EXPERIENCE (FIRST SCREEN)
          ========================================== */}
      <section 
        id="hero-section" 
        className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* Background Layer: High-End Scenic Storefront Image with smooth alignment */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <motion.img
            src={restaurantFront}
            alt="Spicy Bawarchi Royal Front Exterior Signature Board"
            className="w-full h-full object-cover object-[center_30%] md:object-center brightness-[0.45]"
            referrerPolicy="no-referrer"
            animate={{
              scale: [1.02, 1.07, 1.02],
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Glass Overlay: Deep charcoal luxury gradient shield */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 z-10" />
          
          {/* Subtle noise texture or particles overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black z-15 opacity-60 pointer-events-none" />
        </div>

        {/* Ambient Moving Gold Light Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-luxury-orange/20 rounded-full blur-[100px] animate-pulse duration-[8000ms]" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-luxury-gold/15 rounded-full blur-[120px] animate-pulse duration-[12000ms]" />
          <div className="absolute top-12 left-1/3 w-2 h-2 bg-luxury-gold rounded-full blur-[1px] animate-float-dust-slow" />
          <div className="absolute bottom-24 right-1/3 w-3.5 h-3.5 bg-luxury-orange/30 rounded-full blur-[2px] animate-float-dust-fast" />
        </div>

        {/* Center Content: Pure Luxury Apple-style Presentation */}
        <div 
          id="hero-card" 
          className="relative z-20 max-w-5xl flex flex-col items-center px-6 md:px-12 py-12 md:py-16 rounded-[2.5rem] border border-luxury-gold/10 bg-[#0A0A0A]/40 backdrop-blur-xl mx-4 shadow-[0_50px_100px_rgba(0,0,0,0.9)] hover:border-luxury-gold/20 transition-all duration-700"
        >
          {/* Fine Dual Double-Metallic Inner Border Ornament */}
          <div className="absolute inset-3 border border-luxury-gold/5 rounded-[2rem] pointer-events-none" />
          <div className="absolute inset-4 border border-white/5 rounded-[1.8rem] pointer-events-none" />

          {/* Luxury Crown Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-6 text-luxury-gold flex items-center justify-center gap-3 relative"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-luxury-gold/50" />
            <div className="relative p-1 border border-luxury-gold/20 rounded-full">
              <svg className="w-8 h-8 fill-current text-luxury-gold drop-shadow-[0_0_12px_rgba(255,200,87,0.5)]" viewBox="0 0 24 24">
                <path d="M2.203 16.516l1.242-8.312a1 1 0 0 1 .843-.843l3.656-.61a1 1 0 0 1 .906.438l3.15 4.812 3.15-4.812a1 1 0 0 1 .906-.438l3.656.61a1 1 0 0 1 .843.843l1.242 8.312a1 1 0 0 1-.984 1.141H3.188a1 1 0 0 1-.984-1.141zm1.742-.328h16.11l-.977-6.538-2.508-.418-2.67 4.078a1 1 0 0 1-1.8 0L9.43 9.232l-2.508.418-.977 6.538zM12 19a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-luxury-gold/50" />
          </motion.div>

          {/* Imperial Gastronomy Tag */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.02] border border-luxury-orange/20 text-luxury-gold font-mono text-xs tracking-[0.35em] uppercase mb-6 shadow-inner"
          >
            <Sparkles size={11} className="text-luxury-orange animate-spin duration-[10000ms]" />
            Imperial Indian Gastronomy
          </motion.div>

          {/* Bold Luxury Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.06em] font-extrabold mb-4 select-none leading-none"
          >
            <span className="text-gradient-gold">SPICY</span> <span className="text-gradient-orange drop-shadow-[0_0_35px_rgba(255,107,0,0.4)]">BAWARCHI</span>
          </motion.h1>

          {/* Premium Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif italic text-xl sm:text-2xl text-luxury-gold/90 tracking-widest mb-12"
          >
            &ldquo;Every Bite Tells A Story&rdquo;
          </motion.p>

          {/* Large Premium Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 max-w-2xl"
          >
            <button
              onClick={() => onNavigate('menu')}
              id="cta-order-now"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-luxury-orange to-red-600 rounded-xl text-white font-bold tracking-[0.2em] text-xs uppercase hover:from-red-600 hover:to-luxury-orange shadow-[0_15px_30px_rgba(255,107,0,0.3)] hover:shadow-[0_20px_45px_rgba(255,107,0,0.45)] transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} />
              Order On WhatsApp
            </button>
            <button
              onClick={() => onNavigate('booking')}
              id="cta-book-event"
              className="w-full sm:w-auto px-8 py-4 bg-black/60 backdrop-blur-md border border-luxury-gold/30 hover:border-luxury-gold/70 rounded-xl text-white font-bold tracking-[0.2em] text-xs uppercase hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar size={14} className="text-luxury-gold" />
              Reserve A Table
            </button>
            <button
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-8 py-4 bg-white/[0.02] border border-white/10 hover:border-luxury-orange/40 rounded-xl text-white/90 font-bold tracking-[0.2em] text-xs uppercase hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles size={13} className="text-luxury-orange" />
              Book Private Event
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3.5 pointer-events-none">
          <span className="font-mono text-[8px] uppercase tracking-[0.45em] text-white/40 block">Explore Majesty</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold/70 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Subtle Metallic Transition */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/25 to-transparent mb-24" />

      {/* ==========================================
          2. THE MASTERPIECES SLIDER (FEATURED DISHES)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-luxury-orange font-bold block mb-1">Epicurean Selections</span>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-wide text-white font-bold">
              Featured Bawarchi Masterpieces
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('menu')}
            className="flex items-center gap-2 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] group mt-4 md:mt-0 hover:text-white transition-colors cursor-pointer"
          >
            Explore Complete Menu 
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Luxurious Slider Frame */}
        <div 
          id="featured-slider"
          className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory pt-4"
        >
          {featuredDishes.map((item) => (
            <Premium3DCard 
              key={item.id}
              intensity={12}
              className="min-w-[310px] md:min-w-[400px] max-w-[440px] snap-start relative group bg-transparent"
            >
              <div className="flex flex-col justify-between h-full p-5 border border-luxury-gold/15 rounded-3xl bg-neutral-900/50 backdrop-blur-md hover:border-luxury-orange/30 transition-all duration-500 shadow-2xl relative">
                {/* Visual Glass Shine Overlay */}
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-t-3xl" />
                
                <div>
                  {/* Premium Frame for Dish Thumbnail */}
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl mb-5 bg-neutral-950 border border-white/5 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    {/* Floating Luxury Glass Tags */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-luxury-gold/20 text-[9px] uppercase font-bold text-luxury-gold tracking-[0.15em] leading-none">
                        Chef Recommendation
                      </span>
                      <span className="px-2 py-1 rounded bg-green-950/90 backdrop-blur-md border border-green-500/30 text-[9px] font-bold text-green-400 tracking-wider flex items-center gap-1 leading-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
                        VEG
                      </span>
                    </div>
                    
                    {/* Overlaid Score Badge */}
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white flex items-center gap-1 shadow-md">
                      <Star size={11} className="fill-luxury-gold text-luxury-gold" />
                      {item.rating}
                    </div>
                  </div>

                  {/* Header Detail row */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-2xl text-white tracking-wide transition-colors group-hover:text-luxury-orange font-bold">
                      {item.name}
                    </h3>
                    <span className="font-mono text-lg font-bold text-luxury-orange bg-luxury-orange/10 px-3 py-1 rounded-lg ml-3">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description text */}
                  <p className="text-xs text-white/55 leading-relaxed font-sans line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Double Interactive Controllers */}
                <div className="mt-6 pt-5 border-t border-white/5 flex gap-3 relative z-10">
                  <button
                    onClick={() => onQuickOrder(item)}
                    className="w-full py-3 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-[10px] uppercase tracking-[0.2em] font-bold rounded-xl transition-all duration-500 cursor-pointer flex items-center justify-center gap-1.5 shadow-lg hover:shadow-luxury-orange/20"
                  >
                    <MessageSquare size={12} />
                    Book Now
                  </button>
                  <button 
                    onClick={() => {
                      onFilterCategory(item.category);
                      onNavigate('menu');
                    }}
                    className="px-4 py-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-xl transition-all text-[10px] font-mono uppercase tracking-[0.15em] border border-white/10 hover:border-white/20"
                  >
                    View
                  </button>
                </div>
              </div>
            </Premium3DCard>
          ))}
        </div>
      </section>

      {/* ==========================================
          3. EMOTIONAL BRAND STORY (THE ROYAL LEGACY)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32 relative">
        <div className="absolute -top-24 left-1/3 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Framed Photograph */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/15"
            >
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200"
                alt="Bawarchi Royal Cuisine Presentation" 
                className="w-full h-full object-cover brightness-[0.7] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Floating Stat Layer */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-around text-center">
                <div>
                  <div className="font-serif text-3xl font-bold text-luxury-gold">100%</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-0.5">Shuddha Vegetarian</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div>
                  <div className="font-serif text-3xl font-bold text-luxury-gold">24hr+</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-0.5">Dal Makhani Blend</div>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div>
                  <div className="font-serif text-3xl font-bold text-luxury-gold">Clay</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mt-0.5">Traditional Tandoor</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-luxury-orange font-bold block">The Legacy of Culinary Curation</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
              Where Time-Honored Heritage Meets Modern Culinary Craft
            </h2>
            <div className="w-20 h-[1px] bg-luxury-gold/50" />
            <p className="text-white/70 leading-relaxed font-sans text-sm">
              In Forbesganj, Bihar, Spicy Bawarchi stands not merely as a culinary outpost, but as a temple of royal gastronome curation. Our story is woven in long-grain basmati, cold-tempered ghee, and spices imported from micro-farms across the subcontinent.
            </p>
            <p className="text-white/60 leading-relaxed font-sans text-sm italic border-l border-luxury-orange pl-4">
              &ldquo;We slow-simmer our black Dal Makhani on burning red coals for twenty-four continuous hours, achieving a level of smoky majesty that cannot be replicated. Every item in our kitchen is crafted with absolute reverence.&rdquo;
            </p>
            
            <div className="pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-luxury-gold/25 flex items-center justify-center bg-white/5 text-luxury-gold">
                <Wine size={16} />
              </div>
              <div>
                <h5 className="font-serif text-sm font-bold text-white">Curated by Imperial Master Bawarchis</h5>
                <p className="text-[10px] font-mono uppercase tracking-widest text-luxury-gold/70">Crafting Fine Dining Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4. LEGENDARY CROWD FAVORITES (GRID)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-luxury-orange block mb-1 font-bold">Bawarchi Staples</span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white font-bold tracking-wide">
              The Legendary Favorites
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('menu')}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-luxury-gold hover:text-white transition-colors flex items-center gap-2 mt-4 cursor-pointer"
          >
            See Full Menu Collection ({MENU_ITEMS.length} items) <ArrowRight size={14} />
          </button>
        </div>

        {/* 3 Large Cards layout - Zomato/Swiggy Killer UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <Premium3DCard
              key={item.id}
              intensity={12}
              className="bg-transparent"
            >
              <div className="border border-luxury-gold/15 rounded-3xl overflow-hidden flex flex-col justify-between group h-full bg-neutral-900/40 hover:border-luxury-orange/45 transition-all duration-500 shadow-2xl relative">
                {/* Image display */}
                <div className="relative aspect-video overflow-hidden bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded bg-black/75 backdrop-blur-md border border-luxury-orange/20 text-[9px] tracking-wider uppercase font-bold text-luxury-gold">
                    Top Seller
                  </span>
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-green-950/95 backdrop-blur-md border border-green-500/30 text-[9px] font-bold text-green-400 flex items-center gap-1.5 leading-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    VEG
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-serif text-2xl text-white font-bold group-hover:text-luxury-orange transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-base font-bold text-luxury-orange bg-luxury-orange/5 px-2.5 py-0.5 rounded border border-luxury-orange/10 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Rating and active instant booking */}
                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-xs text-luxury-gold font-bold">
                      <Star size={12} className="fill-luxury-gold text-luxury-gold" />
                      {item.rating} Rating
                    </div>
                    <button
                      onClick={() => onQuickOrder(item)}
                      className="px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-luxury-orange hover:border-luxury-orange hover:text-white rounded-lg text-white font-bold text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Quick Buy
                    </button>
                  </div>
                </div>
              </div>
            </Premium3DCard>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. PARTY BANQUETING & EVENT SECTIONS
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <span className="font-mono text-sm uppercase tracking-[0.4em] text-luxury-orange font-bold block mb-1">Luxury Banquets</span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-bold tracking-wide">
            Celebrate In Impeccable Scale
          </h2>
          <p className="font-serif italic text-base text-luxury-gold/75 max-w-xl mx-auto mt-2">
            Host magnificent personal, corporate, or weddings celebrations within Forbesganj’s premier private dining coordinates.
          </p>
        </div>

        {/* Grid layout of beautiful events cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTY_SERVICES.slice(0, 3).map((serv, idx) => {
            const sampleImages = [
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', // Birthday
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', // Anniversary
              'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', // Wedding
            ];
            return (
              <div
                key={idx}
                onClick={() => onNavigate('booking')}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-luxury-gold/15 relative h-96 flex flex-col justify-end p-6 transition-all duration-700 hover:border-luxury-orange/50 shadow-2xl"
              >
                {/* Background Image of Event */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={sampleImages[idx]}
                    alt={serv.title}
                    className="w-full h-full object-cover brightness-[0.4] group-hover:scale-110 group-hover:brightness-[0.35] transition-transform duration-[1200ms]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle glass overlay inside card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                </div>

                {/* Floating Content */}
                <div className="relative z-20 space-y-3">
                  <span className="text-3xl filter drop-shadow">{serv.icon}</span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold block font-bold">
                    {serv.tagline}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-bold group-hover:text-luxury-orange transition-colors">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-sans mt-2">
                    {serv.description}
                  </p>
                  
                  <div className="pt-2 flex items-center gap-1.5 text-luxury-gold font-mono text-[10px] tracking-wider uppercase font-bold group-hover:text-white transition-colors">
                    Coordinate Now <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          6. GLASSMORPHISM TESTIMONIALS
          ========================================== */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32 relative">
        <div className="absolute -bottom-24 right-1/4 w-64 h-64 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-luxury-orange font-bold block mb-1">Elite Patronage</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-bold">
            The Guest Book Verdicts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-3xl p-7 relative flex flex-col justify-between"
            >
              <Quote size={36} className="absolute top-5 right-5 text-white/5 pointer-events-none" />

              <div>
                {/* 5 GOLD STAR DESIGN */}
                <div className="flex items-center gap-1 text-luxury-gold mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-serif italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Guest Profile Details */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/5 mt-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full border border-luxury-gold/20 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm text-white font-bold tracking-wide">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] font-mono text-luxury-orange tracking-widest uppercase block mt-0.5 font-bold">
                    {rev.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
