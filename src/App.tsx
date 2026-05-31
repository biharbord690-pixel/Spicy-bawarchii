import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChefHat } from 'lucide-react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import BookingSection from './components/BookingSection';
import InfoSection from './components/InfoSection';
import GallerySection from './components/GallerySection';
import CartOverlay from './components/CartOverlay';
import { MenuItem, CartItem, ActiveSection } from './types';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Cart management states & hooks
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Auto-scroller block for pages loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.menuItem.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.menuItem.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { menuItem: item, quantity: 1 }];
    });
  };

  const handleBuyNow = (item: MenuItem) => {
    // Adds item to cart, slide opens cart, and triggers downstream modal buy flow automatically.
    handleAddToCart(item);
    setCartOpen(true);
    // Focus the checkout button inside CartOverlay
    setTimeout(() => {
      const checkoutBtn = document.getElementById('cart-checkout-btn');
      if (checkoutBtn) checkoutBtn.click();
    }, 300);
  };

  const handleUpdateQuantity = (itemId: string, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.menuItem.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.menuItem.id === itemId ? { ...i, quantity: qty } : i))
      );
    }
  };

  const handleClearCart = () => setCartItems([]);

  const handleFilterCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleQuickOrder = (item: MenuItem) => {
    handleBuyNow(item);
  };

  // Render the current active panel
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <HeroSection
            onNavigate={setActiveSection}
            onFilterCategory={handleFilterCategory}
            onQuickOrder={handleQuickOrder}
          />
        );
      case 'menu':
        return (
          <MenuSection
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'booking':
        return <BookingSection />;
      case 'info':
        return (
          <div className="space-y-12">
            <InfoSection />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />
            <GallerySection />
          </div>
        );
      default:
        return (
          <HeroSection
            onNavigate={setActiveSection}
            onFilterCategory={handleFilterCategory}
            onQuickOrder={handleQuickOrder}
          />
        );
    }
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-luxury-black text-white min-h-screen selection:bg-luxury-orange selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col relative"
          >
            {/* Top brand headers and cart triggers */}
            <Navbar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              cartCount={cartCount}
              onCartToggle={() => setCartOpen(true)}
            />

            {/* Quick connect floating buttons for WhatsApp and Direct Calls */}
            <FloatingActions />

            {/* Current Active Layout View */}
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {renderSection()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Sliding Drawer Cart */}
            <CartOverlay
              isOpen={cartOpen}
              onClose={() => setCartOpen(false)}
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onClearCart={handleClearCart}
            />

            {/* Static Luxury Footer */}
            <footer className="w-full border-t border-white/5 py-12 px-6 md:px-12 bg-neutral-950 pb-36 text-center md:text-left">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg tracking-wider font-semibold text-white">
                    SPICY <span className="text-luxury-orange">BAWARCHI</span>
                  </h3>
                  <p className="font-serif italic text-xs text-luxury-gold/75 mt-1">&ldquo;FAMILY AC RESTAURANT&rdquo;</p>
                  <p className="text-[10px] text-white/30 font-sans mt-3">
                    © 2026 Spicy Bawarchi Fine Indian dining. All Rights Reserved.
                  </p>
                </div>

                <div className="flex flex-col items-center md:items-start text-xs text-white/50 font-sans space-y-1.5">
                  <span className="font-serif text-sm font-semibold text-white mb-1.5 tracking-wide">Forbesganj Outpost</span>
                  <span>Near Forbesganj College Flyover</span>
                  <span>In Front of Sant Nirankari Satsang Bhawan</span>
                  <span>Bihar, 854318</span>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FFC857]/50 block">Design and Development</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border border-luxury-orange flex items-center justify-center rotate-45 bg-luxury-black text-luxury-gold">
                      <ChefHat size={11} className="rotate-[-45deg]" />
                    </div>
                    <span className="font-sans text-xs tracking-wider text-white/70 font-semibold uppercase">
                      Bawarchi Chain Co.
                    </span>
                  </div>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
