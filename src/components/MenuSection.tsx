import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, MessageSquare, Plus, Check, ShoppingBag, ChefHat, Sparkles, Sliders } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';
import Premium3DCard from './Premium3DCard';
import ThaliBuilder from './ThaliBuilder';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onBuyNow: (item: MenuItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MenuSection({ onAddToCart, onBuyNow, selectedCategory, setSelectedCategory }: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showKitchen, setShowKitchen] = useState(false);
  const [successAnimationMap, setSuccessAnimationMap] = useState<Record<string, boolean>>({});

  // Trigger brief visual feedback for item added to cart
  const handleAddClick = (item: MenuItem) => {
    onAddToCart(item);
    setSuccessAnimationMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setSuccessAnimationMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  // Filter items based on category tabs and live text queries
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-luxury-black min-h-screen pt-28 pb-32 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Page Title Header */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-luxury-orange font-bold">The Imperial Dining Directory</span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-wide mt-2 mb-4 leading-tight">
          Spicy Bawarchi Signature Menu
        </h1>
        <p className="font-serif italic text-base text-luxury-gold/80 max-w-lg mx-auto">
          Mouth-watering selections prepared meticulously with freshly toasted spices, Himalayan rock salts, and premium hand-churned dairy.
        </p>
      </div>

      {/* Dynamic Digital Kitchen Curator Banner */}
      <div className="w-full max-w-5xl mx-auto mb-12">
        <AnimatePresence mode="wait">
          {!showKitchen ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative p-6 sm:p-10 rounded-[2.5rem] border border-luxury-gold/20 bg-gradient-to-r from-neutral-950 via-[#0a0a0a] to-[#12100e] overflow-hidden group shadow-[0_20px_50px_rgba(255,107,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-6"
            >
              {/* Gold light sweeps */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] cubic-bezier(0.4, 0, 0.2, 1) pointer-events-none" />
              
              <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-orange to-red-650 flex items-center justify-center text-white shadow-xl relative flex-shrink-0 animate-pulse">
                  <ChefHat size={28} className="stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#FFC857]/65 px-2.5 py-0.5 bg-[#FFC857]/5 border border-[#FFC857]/20 rounded-md">
                      Interactive Feature
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-orange-400 px-2.5 py-0.5 bg-orange-450/5 border border-orange-500/20 rounded-md flex items-center gap-1">
                      <Sparkles size={8} className="animate-spin" /> Advanced AI UI
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium tracking-wide">
                    The Apna Thali Curation Suite
                  </h3>
                  <p className="text-white/55 text-xs font-sans mt-1 max-w-xl">
                    Don&#39;t settle for fixed choices. Tailor your royal multi-course vegetarian platter in our virtual sandbox and add it directly to your dining bag.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowKitchen(true)}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white font-mono text-xs uppercase tracking-widest font-black rounded-xl shadow-lg shadow-luxury-orange/15 transition-all duration-300 transform hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center justify-center gap-2 shrink-0"
              >
                <Sliders size={14} />
                Launch Suite
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="thali-builder-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ThaliBuilder onAddToCart={onAddToCart} onClose={() => setShowKitchen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modern Search Field Area */}
      <div className="w-full max-w-xl mx-auto mb-12 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
          <Search size={18} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for any of our premium dishes (e.g., Paneer, Thali, Dal)..."
          className="w-full py-4 pl-12 pr-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 focus:border-luxury-orange outline-none text-white text-sm tracking-wide font-sans placeholder-white/30 transition-all duration-300"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-luxury-orange uppercase hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Tabs System - Horizontally scrollable on mobile */}
      <div className="w-full mb-12 border-b border-white/5 flex flex-col items-center">
        <div 
          id="category-navigation-scroller"
          className="flex items-center gap-1.5 overflow-x-auto w-full max-w-5xl no-scrollbar pb-3 justify-start md:justify-center snap-x"
        >
          {/* Include an "All" option */}
          {['All', ...CATEGORIES].map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-mono font-semibold transition-all duration-500 whitespace-nowrap snap-start cursor-pointer border ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-luxury-orange to-red-600 border-luxury-orange shadow-[0_5px_15px_rgba(255,107,0,0.3)] scale-102 font-bold'
                    : 'text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/15'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Grid Items */}
      <div id="menu-items-grid" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              id={`menu-card-${item.id}`}
              className="h-full"
            >
              <Premium3DCard
                intensity={10}
                className="h-full bg-transparent"
              >
                <div className="border border-luxury-gold/15 rounded-3xl overflow-hidden flex flex-col justify-between h-full bg-[#0E0E0E]/50 backdrop-blur-md group hover:border-luxury-orange/40 hover:shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-all duration-500 shadow-2xl relative">
                  {/* Subtle glass reflection effect overlay */}
                  <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-t-[1.75rem]" />
                  
                  <div>
                    {/* Premium Image Frame */}
                    <div className="relative aspect-4/3 overflow-hidden bg-neutral-950 border-b border-luxury-gold/10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Real Premium Glass Badges */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 sm:gap-1.5 items-start">
                        <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-sm sm:rounded-md bg-black/75 backdrop-blur-md border border-luxury-gold/20 text-[6px] sm:text-[8px] uppercase tracking-[0.18em] font-bold text-luxury-gold font-mono leading-none shadow-md">
                          {item.category}
                        </span>
                        {item.bestSeller && (
                          <span className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-sm sm:rounded-md bg-gradient-to-r from-luxury-orange to-red-600 text-[6px] sm:text-[8px] uppercase tracking-[0.18em] font-extrabold text-white leading-none shadow-[0_4px_10px_rgba(255,107,0,0.3)] animate-pulse">
                            Best Seller
                          </span>
                        )}
                      </div>

                      {/* Veg Badge standard */}
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center justify-center p-1 sm:p-1.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-md sm:rounded-lg shadow-md">
                        <div className="border-2 border-green-500 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center rounded-[3px] bg-green-950/20">
                          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                      </div>

                      {/* Overlaid Rating Pill */}
                      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[8px] sm:text-[10px] font-mono font-bold text-white flex items-center gap-1 shadow-md">
                        <Star size={9} className="fill-luxury-gold text-luxury-gold sm:w-2.5 sm:h-2.5" />
                        {item.rating}
                      </div>
                    </div>

                    {/* Detail Area */}
                    <div className="p-3 sm:p-5">
                      <div className="flex items-start justify-between gap-1 mb-1">
                        <h3 className="font-serif text-[13px] sm:text-base md:text-xl text-white font-bold group-hover:text-luxury-orange leading-snug transition-colors line-clamp-1 sm:line-clamp-none">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-[10px] sm:text-[11px] text-white/55 leading-relaxed font-sans line-clamp-2 md:line-clamp-3 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Control Panel */}
                  <div className="p-3 sm:p-5 pt-0 relative z-10">
                    <div className="flex items-center justify-between pb-2 sm:pb-4 mb-2 sm:mb-4 border-b border-white/5">
                      <span className="text-[8px] sm:text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] leading-none">Price per serving</span>
                      <span className="font-mono text-xs sm:text-base font-bold text-luxury-orange leading-none bg-luxury-orange/10 border border-luxury-orange/20 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5">
                      <button
                        onClick={() => handleAddClick(item)}
                        className={`py-2 sm:py-3 rounded-lg sm:rounded-xl text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase font-bold transition-all duration-500 flex items-center justify-center gap-1 cursor-pointer border ${
                          successAnimationMap[item.id]
                            ? 'bg-green-600 border-green-600 text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)]'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-white hover:border-white/20'
                        }`}
                      >
                        {successAnimationMap[item.id] ? (
                          <>
                            <Check size={10} />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus size={10} />
                            <span>Add</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onBuyNow(item)}
                        className="py-2 sm:py-3 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-[8px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase font-bold rounded-lg sm:rounded-xl shadow-lg shadow-luxury-orange/15 transform hover:scale-102 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1"
                      >
                        <MessageSquare size={10} />
                        <span>Buy</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Premium3DCard>
            </motion.div>
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full py-16 text-center text-white/40">
              <p className="font-serif text-xl tracking-wider mb-2">No matching dishes found</p>
              <p className="text-xs font-sans">Try searching for other food items or reset categories.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 bg-white/5 text-white underline text-xs tracking-widest font-mono uppercase rounded-lg hover:bg-white/10"
              >
                Reset Filter
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
