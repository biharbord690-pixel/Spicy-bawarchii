import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Sparkles, MessageSquare, Star, ArrowRight, Quote, Clock, 
  MapPin, Calendar, Shield, Flame, Compass, ChevronRight, Award, Info, ChefHat
} from 'lucide-react';
import { MenuItem, Review, ActiveSection } from '../types';
import { MENU_ITEMS, REVIEWS, PARTY_SERVICES } from '../data';
import restaurantFront from '../assets/images/restaurant_front_1780214774320.png';

interface HeroSectionProps {
  onNavigate: (section: ActiveSection) => void;
  onFilterCategory: (category: string) => void;
  onQuickOrder: (item: MenuItem) => void;
}

export default function HeroSection({ onNavigate, onFilterCategory, onQuickOrder }: HeroSectionProps) {
  // Extract elite menu items for highlight
  const featuredDishes = MENU_ITEMS.filter(item => item.popular && item.bestSeller);
  const bestSellers = MENU_ITEMS.filter(item => item.bestSeller && !item.popular).slice(0, 3);
  
  // Find the signature Special Thali item
  const specialThaliItem = MENU_ITEMS.find(item => item.id === 'thali-spec') || MENU_ITEMS[0];

  // State for Special Thali interactive hotspot explorer (Apple Tech Specs style)
  const [activeHotspot, setActiveHotspot] = useState<string>('dal');

  // State to toggle between the Royal Facade image and the Signature Thali plate image in the circle
  const [circleView, setCircleView] = useState<'facade' | 'platter'>('facade');

  // Thali specifications dataset
  const thaliSpecs: Record<string, { title: string; subtitle: string; spec: string; description: string; detail: string; bg: string }> = {
    paneer: {
      title: "Traditional Velvet Core",
      subtitle: "PANEER BUTTER MASALA",
      spec: "18% Butter Fat Cottage Cheese",
      description: "Artisanal hand-cut cottage cheese simmered in on-demand velvet-textured, rich buttery tomato cashew reduction.",
      detail: "Prepared using double-strained cow cream and organic fenugreek rubbed by hand for majestic aromatics.",
      bg: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600"
    },
    dal: {
      title: "24-Hour Continuous Searing Embers",
      subtitle: "LEGENDARY DAL MAKHANI",
      spec: "Slow Smoldering for 1440 Minutes",
      description: "Black urad lentils cooked patiently on ancient clay ovens fueled by slow-burning charcoal embers.",
      detail: "Finished infinitely with pure house-churned white butter, rich fresh cream, and slow spiced tomato purée.",
      bg: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600"
    },
    rice: {
      title: "Aged Basmati Core",
      subtitle: "PREMIUM JEERA RICE",
      spec: "3-Year Aged Dehradun Long Grain",
      description: "Exquisite fragrant rice cooked to fluffy perfection, tempered with heated mountain cumin seeds.",
      detail: "Each long grain is hand-selected and stands completely fluffy, light, and separate. Folded in pure organic cow ghee.",
      bg: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=600"
    },
    naan: {
      title: "Clay Oven Blister",
      subtitle: "BUTTER TANDOORI NAAN",
      spec: "480°C Traditional Clay Searing",
      description: "Leavened refined white flour flatbread hand-slapped inside our high-heat red clay tandoor oven.",
      detail: "Features delicate smoke charred bubbles and is brushed with premium salted golden dairy butter.",
      bg: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600"
    }
  };

  return (
    <div className="w-full bg-[#030303] pb-32 overflow-hidden selection:bg-luxury-orange selection:text-white">
      
      {/* ==========================================
          1. ULTRA CINEMATIC HERO EXPERIENCE (AMAN & BUGATTI INTRO)
          ========================================== */}
      <section 
        id="hero-section" 
        className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* Full-Screen Ultra Cinematic Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.05] brightness-[0.3] hover:scale-100 transition-transform duration-[20000ms]"
            poster={restaurantFront}
          >
            {/* Super premium cooking fire / plating slow-motion stream fallback links */}
            <source 
              src="https://player.vimeo.com/external/435674703.sd.mp4?s=7feed6850a5ebee530f2f01f038ca440b82eb694&profile_id=165&oauth2_token_id=57447761" 
              type="video/mp4" 
            />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-chef-preparing-a-fresh-vegetable-salad-41595-large.mp4"
              type="video/mp4"
            />
          </video>

          {/* Luxury Ambient Darkness Overlay: Creates perfect cinema contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/90 z-10" />
        </div>

        {/* Shifting Golden Lens Flare Spot */}
        <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] rounded-full bg-luxury-gold/5 blur-[120px] pointer-events-none z-10" />
        
        {/* Floating stardust container */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-luxury-gold rounded-full blur-[1px] animate-float-dust-slow" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-luxury-orange rounded-full blur-[2px] animate-float-dust-fast" />
        </div>

        {/* Core Presentation Sheet: Minimalist Floating Plate with extremely sleek layout */}
        <div 
          id="hero-card" 
          className="relative z-20 max-w-5xl flex flex-col items-center px-4 md:px-12 py-10 md:py-16 rounded-[2.5rem] border border-luxury-gold/20 bg-black/65 backdrop-blur-[12px] mx-4 transition-all duration-1000 shadow-[0_25px_60px_-15px_rgba(255,107,0,0.15)]"
        >
          {/* Sovereign Frame Ornamentation & Royal Corner Accents */}
          <div className="absolute inset-4 border border-luxury-gold/15 rounded-[1.8rem] pointer-events-none" />
          <div className="absolute inset-5 border border-white/[0.04] rounded-[1.6rem] pointer-events-none" />
          
          {/* Luxury Corner L-Shape Accents for extreme high-end look */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-luxury-gold rounded-tl pointer-events-none" />
          <div className="absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-luxury-gold rounded-tr pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-luxury-gold rounded-bl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-luxury-gold rounded-br pointer-events-none" />

          {/* Royal Heraldic Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="mb-8 flex items-center justify-center gap-4 relative"
          >
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-luxury-gold/50" />
            <div className="w-11 h-11 rounded-full border border-luxury-gold flex items-center justify-center bg-zinc-950 relative shadow-[0_0_15px_rgba(255,200,87,0.3)]">
              <ChefHat size={18} className="text-luxury-gold" />
              <div className="absolute -inset-1.5 bg-luxury-gold/5 rounded-full animate-ping duration-[6000ms]" />
            </div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-luxury-gold/50" />
          </motion.div>

          {/* Premium Tagline Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-neutral-950/85 border border-luxury-gold/25 text-luxury-gold font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
          >
            <Flame size={12} className="text-luxury-orange animate-pulse" />
            Forbesganj&#39;s Sovereign Culinary House
          </motion.div>

          {/* Giant Monumental Branding Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.16em] font-extrabold mb-5 uppercase leading-none select-none"
          >
            <span className="text-gradient-gold block md:inline">SPICY</span> <span className="text-gradient-orange block md:inline drop-shadow-[0_0_50px_rgba(255,107,0,0.3)]">BAWARCHI</span>
          </motion.h1>

          {/* Animated Subtitle (The Philosophy) */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="font-serif italic text-lg sm:text-2xl text-white/90 tracking-[0.25em] mb-14 uppercase font-bold"
          >
            FAMILY AC RESTAURANT
          </motion.p>

          {/* Tactile Luxury Action Controls (Designed like high-end vehicle configurator options) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full px-4 max-w-3xl z-30"
          >
            {/* The Bugatti Order Trigger */}
            <button
              onClick={() => onNavigate('menu')}
              id="cta-order-now"
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-luxury-orange via-red-600 to-luxury-orange bg-size-200 bg-[0%_50%] hover:bg-[100%_50%] transition-all duration-700 rounded-lg text-white font-bold tracking-[0.3em] text-[10px] uppercase cursor-pointer hover:scale-[1.03] shadow-[0_20px_40px_rgba(255,107,0,0.25)] flex items-center justify-center gap-3 relative overflow-hidden group border border-white/10"
              style={{ backgroundSize: '200% auto' }}
            >
              <MessageSquare size={13} className="text-white group-hover:scale-110 transition-transform" />
              <span>Order On WhatsApp</span>
              <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            </button>

            {/* The Rolls Table Reserve */}
            <button
              onClick={() => onNavigate('booking')}
              id="cta-book-event"
              className="w-full sm:w-auto px-10 py-5 bg-black/80 backdrop-blur-md border border-luxury-gold/30 hover:border-luxury-gold/80 rounded-lg text-white font-bold tracking-[0.3em] text-[10px] uppercase hover:bg-neutral-900/60 transition-all duration-500 hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-3 shadow-lg"
            >
              <Calendar size={13} className="text-luxury-gold" />
              <span>Reserve A Table</span>
            </button>

            {/* The Aman Event Coordinate */}
            <button
              onClick={() => onNavigate('booking')}
              className="w-full sm:w-auto px-10 py-5 bg-white/[0.01] hover:bg-white/[0.05] border border-white/10 hover:border-luxury-orange/40 rounded-lg text-white/50 hover:text-white font-bold tracking-[0.3em] text-[10px] uppercase transition-all duration-500 hover:scale-[1.03] cursor-pointer flex items-center justify-center gap-3 group"
            >
              <Sparkles size={12} className="text-luxury-gold group-hover:text-luxury-orange transition-colors" />
              <span>Book Private Event</span>
            </button>
          </motion.div>
        </div>

        {/* Minimal Bottom Horizon Scroll Line */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 pointer-events-none select-none">
          <span className="font-mono text-[9px] uppercase tracking-[0.55em] text-white/35">EXPLORE THE MAJESTY</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-luxury-gold/80 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Elegant horizontal copper lining */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent mb-28" />

      {/* ==========================================
          2. THE FLAGSHIP MASTERPIECE: SPECIAL THALI (IPHONE PRO TECH LAUNCH INSPIRED)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-36 relative">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold block mb-2">Flagship Engineering</span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-extrabold tracking-tight">
            THE SPECIAL THALI
          </h2>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-luxury-gold/70 mt-2">
            A Masterwork of Imperial Flavor Calibration
          </p>
        </div>

        {/* Main Product Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-950/40 rounded-[3rem] border border-white/[0.04] p-8 md:p-14 relative overflow-hidden shadow-3xl">
          {/* Subtle gold spotlights on the background */}
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Left Block: Giant High-Fidelity Interactive Image Canvas with Compass Rings */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full">
            <motion.div 
              layout
              className={`relative w-full max-w-xl border border-luxury-gold/20 bg-gradient-to-b from-neutral-900/80 to-[#030303] shadow-[0_25px_80px_-15px_rgba(255,107,0,0.3)] overflow-hidden flex items-center justify-center group/circle transition-all duration-[800ms] ease-out ${
                circleView === 'facade' 
                  ? 'rounded-[2rem] aspect-[16/11] p-3' 
                  : 'rounded-full aspect-square p-6'
              }`}
            >
              
              {/* Luxury Tech Spec Compass Outer Ring - Dashed golden circle rotating slowly */}
              {circleView === 'platter' && (
                <div className="absolute inset-2 border border-dashed border-luxury-gold/30 rounded-full animate-[spin_100s_linear_infinite] pointer-events-none" />
              )}
              {circleView === 'platter' && (
                <div className="absolute inset-5 border border-double border-luxury-gold/10 rounded-full animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />
              )}
              
              {/* Mechanical Grid Overlay Accent */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              {/* Radial backdrop light matching active spec */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxury-orange/10 via-transparent to-transparent pointer-events-none" />

              {/* High-Contrast Fast-Sensing Beautiful Image Presentation */}
              <motion.img 
                key={circleView}
                layout
                src={circleView === 'facade' ? restaurantFront : "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=800"} 
                alt={circleView === 'facade' ? "Spicy Bawarchi Royal Storefront" : "Special Thali Product Platter"} 
                className={`object-cover shadow-2xl brightness-[1.02] border border-white/10 relative z-10 transition-all duration-[800ms] ${
                  circleView === 'facade'
                    ? 'w-full h-full rounded-[1.5rem]'
                    : 'w-[85%] h-[85%] rounded-full group-hover/circle:scale-[1.02]'
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, rotate: circleView === 'facade' ? 0 : 360 }}
                transition={circleView === 'facade' ? { duration: 0.8 } : { rotate: { duration: 180, repeat: Infinity, ease: "linear" }, default: { duration: 0.8 } }}
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Coordinate Radar markers (High caliber UX lines connecting from edge to active ingredient) */}
              {circleView === 'platter' && (
                <>
                  <div className={`absolute top-[18%] left-[18%] text-[8px] font-mono tracking-widest text-luxury-gold/60 pointer-events-none z-20 ${activeHotspot === 'paneer' ? 'opacity-100' : 'opacity-20'}`}>
                    LAT: 26.29° N | MSG_01
                  </div>
                  <div className={`absolute bottom-[18%] left-[18%] text-[8px] font-mono tracking-widest text-luxury-gold/60 pointer-events-none z-20 ${activeHotspot === 'dal' ? 'opacity-100' : 'opacity-20'}`}>
                    LAT: 26.30° N | MSG_02
                  </div>
                  <div className={`absolute bottom-[18%] right-[18%] text-[8px] font-mono tracking-widest text-luxury-gold/60 pointer-events-none z-20 ${activeHotspot === 'rice' ? 'opacity-100' : 'opacity-20'}`}>
                    LON: 87.25° E | MSG_03
                  </div>
                  <div className={`absolute top-[18%] right-[18%] text-[8px] font-mono tracking-widest text-luxury-gold/60 pointer-events-none z-20 ${activeHotspot === 'naan' ? 'opacity-100' : 'opacity-20'}`}>
                    LON: 87.26° E | MSG_04
                  </div>
                </>
              )}

              {/* Plate center metallic core */}
              <div className="absolute inset-0 border border-white/[0.02] rounded-full pointer-events-none" />
            </motion.div>

            {/* View Configurator Tabs */}
            <div className="mt-6 flex gap-3 bg-black/60 border border-white/[0.05] p-1 rounded-full z-15 relative shadow-lg">
              <button
                onClick={() => setCircleView('facade')}
                className={`px-5 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold transition-all duration-300 ${circleView === 'facade' ? 'bg-luxury-gold text-neutral-950 font-black shadow-lg scale-105' : 'text-white/60 hover:text-white'}`}
              >
                Royal Facade
              </button>
              <button
                onClick={() => setCircleView('platter')}
                className={`px-5 py-2 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold transition-all duration-300 ${circleView === 'platter' ? 'bg-luxury-gold text-neutral-950 font-black shadow-lg scale-105' : 'text-white/60 hover:text-white'}`}
              >
                Signature Platter
              </button>
            </div>

            {/* Micro instruction badge */}
            <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#FFC857]/65 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.05]">
              <Compass size={11} className="text-luxury-orange" />
              SELECT AN INGREDIENT TAB TO BROWSE DETAILS
            </div>
          </div>

          {/* Right Block: Dynamic Specifications Sheet (The Apple M-Series styling) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 relative z-20">
            {/* Interactive Component Navigation Tabs */}
            <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-black/40 border border-white/[0.03]">
              {Object.entries(thaliSpecs).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setActiveHotspot(key)}
                  className={`flex-1 min-w-[100px] text-center px-3 py-2.5 rounded-lg font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-extrabold transition-all duration-500 border ${
                    activeHotspot === key
                      ? 'bg-gradient-to-r from-luxury-orange to-red-600 text-white border-white/10 shadow-[0_4px_15px_rgba(255,107,0,0.15)] scale-[1.02]'
                      : 'bg-transparent text-white/40 hover:text-white border-transparent hover:bg-white/[0.02]'
                  }`}
                >
                  {key === 'paneer' ? 'Paneer' : key === 'dal' ? 'Dal Makhani' : key === 'rice' ? 'Jeera Rice' : 'Butter Naan'}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* Active index banner */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] px-2.5 py-0.5 bg-luxury-orange/10 text-luxury-orange border border-luxury-orange/25 rounded">
                    Component Spec 0{activeHotspot === 'paneer' ? '1' : activeHotspot === 'dal' ? '2' : activeHotspot === 'rice' ? '3' : '4'}
                  </span>
                  <div className="h-[1px] flex-grow bg-white/[0.05]" />
                </div>

                {/* Specification Headers */}
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-bold">
                    {thaliSpecs[activeHotspot].subtitle}
                  </h4>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white font-extrabold mt-1 tracking-wide">
                    {thaliSpecs[activeHotspot].title}
                  </h3>
                  <p className="font-mono text-xs text-luxury-orange font-semibold tracking-wider mt-1.5">
                    {thaliSpecs[activeHotspot].spec}
                  </p>
                </div>

                {/* Ingredient Description Story block */}
                <p className="text-xs text-white/70 font-sans leading-relaxed">
                  {thaliSpecs[activeHotspot].description}
                </p>

                {/* Intricate mechanical data points */}
                <div className="p-5 rounded-2xl bg-[#080808] border border-white/[0.05] relative space-y-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/45 block">LAB CALIBRATED NOTES</span>
                  <p className="text-[11px] text-white/55 leading-relaxed italic">
                    &ldquo;{thaliSpecs[activeHotspot].detail}&rdquo;
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Sovereign specs summary table (Rolls Royce specs block style) */}
            <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/[0.05]">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/45">Bawarchi Classification</span>
                <span className="text-xs text-white font-serif font-semibold mt-0.5 block flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                  Royal Platter Complete
                </span>
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/45">Acquisition Value</span>
                <span className="text-xs text-white font-mono font-semibold mt-0.5 block">
                  ₹210 Standard Gold Plat
                </span>
              </div>
            </div>

            {/* Direct Purchase Actions block */}
            <div className="pt-2">
              <button
                onClick={() => onQuickOrder(specialThaliItem)}
                className="w-full py-4.5 bg-gradient-to-r from-luxury-orange text-white text-[10px] uppercase tracking-[0.3em] font-extrabold rounded-lg transition-all duration-500 hover:brightness-110 cursor-pointer flex items-center justify-center gap-2 shadow-[0_15px_30px_rgba(255,107,0,0.15)] ring-1 ring-white/10"
              >
                <Award size={13} className="text-white" />
                <span>Acquire Sovereignty (Order on WhatsApp)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. SIGNATURE MASTERPIECES SLIDER (SELECT REVEAL)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold block mb-1">Couture Selections</span>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-white font-bold">
              The Sovereign Collection
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('menu')}
            className="flex items-center gap-2 text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] group mt-4 md:mt-0 hover:text-white transition-colors cursor-pointer"
          >
            <span>Inspect Complete Lineup</span> 
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Clean, spacious layout similar to a watch preview catalog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredDishes.slice(0, 2).map((item) => (
            <div 
              key={item.id}
              className="group border border-white/[0.05] rounded-[2rem] p-6 bg-[#040404]-50 backdrop-blur-md hover:border-luxury-gold/30 transition-all duration-700 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Immersive Image Display */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-black border border-white/5 shadow-inner">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-[0.8] group-hover:scale-[1.04] transition-all duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Luxury Spot shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category overlay label */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[8px] uppercase tracking-[0.25em] font-mono text-luxury-gold bg-black/80 rounded border border-luxury-gold/25 font-bold">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>

                {/* Text and specs details */}
                <div className="flex items-baseline justify-between mb-3 border-b border-white/[0.04] pb-4">
                  <h3 className="font-serif text-3xl text-white tracking-wide font-extrabold group-hover:text-luxury-orange transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-xl font-bold text-luxury-orange">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-xs text-white/55 leading-relaxed font-sans mt-2 mb-4">
                  {item.description}
                </p>
                
                {/* Details list item matching Apple specs sheet layout */}
                <ul className="space-y-1.5 mb-6 text-[10px] font-mono text-white/40 border-t border-white/[0.03] pt-4.5">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-luxury-orange" />
                    Ingredient fat index optimized for rich texture
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-luxury-orange" />
                    Hand-prepared by senior gourmet executive chefs
                  </li>
                </ul>
              </div>

              {/* Elegant Purchase Trigger resembling high-luxury watch ordering */}
              <div className="pt-3 border-t border-white/[0.03]">
                <button
                  onClick={() => onQuickOrder(item)}
                  className="w-full py-4.5 bg-white/[0.01] hover:bg-[#111111] hover:text-white border border-white/[0.08] hover:border-luxury-gold/50 text-white/80 text-[9px] uppercase tracking-[0.3em] font-bold rounded-xl transition-all duration-500 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Acquire Masterpiece</span>
                  <ArrowRight size={12} className="text-luxury-gold group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          4. AMAN-THEMED PRIVATE BANQUETING (VENUES)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-36">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-luxury-orange font-bold block mb-2">Exclusive Venues</span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-extrabold tracking-tight">
            THE PRIVATE BANQUETS
          </h2>
          <p className="text-xs text-white/40 font-mono tracking-[0.3em] mt-3 uppercase">
            Aman-styled Luxury Gathering coordinates
          </p>
        </div>

        {/* 3 Ultra Luxurious horizontal list style elements for events */}
        <div className="space-y-8">
          {[
            {
              title: "The Sovereign Marriages & Receptions",
              tag: "Grand scale weddings",
              description: "Splendid layout adjustments incorporating custom gourmet food pathways, master buffet grids, private dining rooms for bridal crews and live clay ovens.",
              capacity: "Up to 500 Nobles",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
              slug: "Exclusive Bridal Coordination"
            },
            {
              title: "Anniversaries & Private Jubilees",
              tag: "Milestones Celebration",
              description: "Understated candelabra placements, customized multi-tiered luxury dessert models, bespoke background instrumentals, and course-by-course presentation schedules.",
              capacity: "20 to 120 Guests",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
              slug: "Atmospheric Candlelit Lounges"
            }
          ].map((venue, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate('booking')}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/[0.04] hover:border-luxury-gold/30 rounded-[2.5rem] bg-[#050505] p-6 transition-all duration-700 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

              {/* Venue Preview Image with Parallax scaling */}
              <div className="lg:col-span-5 aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/5">
                <img 
                  src={venue.image} 
                  alt={venue.title} 
                  className="w-full h-full object-cover brightness-[0.7] group-hover:scale-[1.04] transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Venue details descriptions */}
              <div className="lg:col-span-7 flex flex-col justify-between py-2 space-y-6 lg:pl-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#FFC857] bg-white/[0.03] border border-white/10 px-3 py-1 rounded">
                      {venue.tag}
                    </span>
                    <span className="text-[10px] text-white/30 font-mono tracking-widest uppercase">
                      {venue.capacity}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-3xl text-white font-bold group-hover:text-luxury-orange transition-all tracking-wide">
                    {venue.title}
                  </h3>
                  
                  <p className="text-xs text-white/55 leading-relaxed font-sans max-w-xl">
                    {venue.description}
                  </p>
                </div>

                {/* Specs metadata details block */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/[0.04] pt-5.5">
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/35">Atmospheric Design</span>
                    <span className="text-xs text-white/80 font-serif font-bold mt-1 block">
                      {venue.slug}
                    </span>
                  </div>
                  <div>
                    <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/35">Catering Masterclass</span>
                    <span className="text-xs text-white/80 font-serif font-bold mt-1 block">
                      Custom Bawarchi Buffets
                    </span>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-luxury-gold group-hover:text-white transition-all font-bold pt-2">
                  <span>Draft Venue Configuration</span>
                  <ChevronRight size={12} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          5. EMOTIONAL PATRON REVIEWS (THE GLASS PAGES)
          ========================================== */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto mb-36">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.45em] text-luxury-orange block mb-2 font-bold">The Guest Chronology</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-extrabold tracking-normal">
            Luminaries In Agreement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-[2rem] p-8 relative flex flex-col justify-between border border-white/5 hover:border-luxury-orange/30 transition-all duration-700 bg-black"
            >
              <Quote size={32} className="absolute top-6 right-6 text-white/[0.03] pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-luxury-gold mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                
                <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-serif italic mb-6">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Profile card row */}
              <div className="flex items-center gap-4.5 pt-5 border-t border-white/[0.04]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full border border-luxury-gold/25 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-sm text-white font-bold">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] font-mono text-luxury-orange font-bold tracking-widest uppercase block mt-0.5">
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
