import { motion } from 'motion/react';
import { Home, Utensils, CalendarDays, MapPin, Phone, ShoppingBag, ChefHat } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavbarProps {
  activeSection: ActiveSection;
  setActiveSection: (section: ActiveSection) => void;
  cartCount: number;
  onCartToggle: () => void;
}

export default function Navbar({ activeSection, setActiveSection, cartCount, onCartToggle }: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'menu', label: 'Menu', icon: Utensils },
    { id: 'booking', label: 'Book Event', icon: CalendarDays },
    { id: 'info', label: 'Info', icon: MapPin },
  ];

  return (
    <>
      {/* Top Luxury Header - Premium Floating glass panel */}
      <header className="fixed top-4 left-4 right-4 max-w-7xl mx-auto z-40 glass-panel rounded-2xl py-3 px-6 md:px-10 flex items-center justify-between border border-luxury-gold/15">
        <div className="flex items-center gap-3">
          {/* Majestic Hexagonal Logo */}
          <div className="w-9 h-9 border border-luxury-orange flex items-center justify-center rotate-45 bg-neutral-950 relative shadow-[0_0_15px_rgba(255,107,0,0.15)]">
            <ChefHat size={16} className="text-luxury-gold rotate-[-45deg]" />
            {/* Fine decoration dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/5 rounded-full" />
          </div>
          <div>
            <h2 className="font-serif text-xl tracking-wider font-bold text-white leading-none">
              SPICY <span className="text-luxury-orange">BAWARCHI</span>
            </h2>
            <p className="font-sans text-[8px] tracking-[0.25em] text-luxury-gold uppercase mt-0.5 font-bold">
              FAMILY AC RESTAURANT
            </p>
          </div>
        </div>

        {/* Action Header Items */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+917643097915"
            className="hidden sm:flex items-center gap-2 font-mono text-xs tracking-wider text-white/80 hover:text-luxury-orange transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-luxury-orange/30"
          >
            <Phone size={12} className="text-luxury-orange" />
            076430 97915
          </a>
          
          <button
            onClick={onCartToggle}
            id="cart-trigger"
            className="relative p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:text-luxury-orange transition-all flex items-center justify-center cursor-pointer shadow-lg"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-luxury-orange text-white font-mono text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-luxury-black"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </header>

      {/* FIXED BOTTOM NAVIGATION BAR ALWAYS VISIBLE */}
      <nav 
        id="bottom-nav-bar"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md glass-panel rounded-2xl px-4 py-2 hover:border-luxury-orange/40 transition-all duration-500 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-luxury-gold/20"
      >
        <div className="flex items-center justify-around relative">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  setActiveSection(item.id as ActiveSection);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="relative py-2 px-3 flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 min-w-16 touch-manipulation focus:outline-none"
              >
                {/* Active Backdrop Highlight */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-t from-luxury-orange/15 to-luxury-orange/5 rounded-xl border-t border-luxury-orange/20 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <IconComponent
                  size={19}
                  className={`transition-colors duration-300 ${
                    isActive ? 'text-luxury-orange' : 'text-white/60 hover:text-white'
                  }`}
                />

                <span
                  className={`text-[10px] uppercase tracking-widest font-medium transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'text-white/40'
                  }`}
                >
                  {item.label}
                </span>

                {/* Micro Gold indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicatorDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
