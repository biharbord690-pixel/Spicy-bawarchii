import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, MessageSquare, Plus, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';
import Premium3DCard from './Premium3DCard';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onBuyNow: (item: MenuItem) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function MenuSection({ onAddToCart, onBuyNow, selectedCategory, setSelectedCategory }: MenuSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
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
      <div id="menu-items-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-luxury-gold/20 text-[8px] uppercase tracking-[0.18em] font-bold text-luxury-gold font-mono leading-none shadow-md">
                          {item.category}
                        </span>
                        {item.bestSeller && (
                          <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-luxury-orange to-red-600 text-[8px] uppercase tracking-[0.18em] font-extrabold text-white leading-none shadow-[0_4px_10px_rgba(255,107,0,0.3)] animate-pulse">
                            Best Seller
                          </span>
                        )}
                      </div>

                      {/* Veg Badge standard */}
                      <div className="absolute top-3 right-3 flex items-center justify-center p-1.5 bg-black/75 backdrop-blur-md border border-white/10 rounded-lg shadow-md">
                        <div className="border-2 border-green-500 w-4 h-4 flex items-center justify-center rounded-[3px] bg-green-950/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        </div>
                      </div>

                      {/* Overlaid Rating Pill */}
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white flex items-center gap-1 shadow-md">
                        <Star size={11} className="fill-luxury-gold text-luxury-gold" />
                        {item.rating}
                      </div>
                    </div>

                    {/* Detail Area */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-1.5 mb-1.5">
                        <h3 className="font-serif text-xl text-white font-bold group-hover:text-luxury-orange leading-snug transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-[11px] text-white/55 leading-relaxed font-sans line-clamp-3 mt-1.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Pricing & Control Panel */}
                  <div className="p-5 pt-0 relative z-10">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] leading-none">Price per serving</span>
                      <span className="font-mono text-base font-bold text-luxury-orange leading-none bg-luxury-orange/10 border border-luxury-orange/20 px-2.5 py-1 rounded-lg">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => handleAddClick(item)}
                        className={`py-3 rounded-xl text-[10px] tracking-widest uppercase font-bold transition-all duration-500 flex items-center justify-center gap-1.5 cursor-pointer border ${
                          successAnimationMap[item.id]
                            ? 'bg-green-600 border-green-600 text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)]'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-white hover:border-white/20'
                        }`}
                      >
                        {successAnimationMap[item.id] ? (
                          <>
                            <Check size={12} />
                            Added
                          </>
                        ) : (
                          <>
                            <Plus size={12} />
                            Add To Bag
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => onBuyNow(item)}
                        className="py-3 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-[10px] tracking-widest uppercase font-bold rounded-xl shadow-lg shadow-luxury-orange/15 transform hover:scale-102 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare size={11} />
                        Buy Now
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
