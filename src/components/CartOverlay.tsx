import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, Plus, Minus, MessageSquare, ClipboardCheck } from 'lucide-react';
import { CartItem, MenuItem } from '../types';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, qty: number) => void;
  onClearCart: () => void;
}

export default function CartOverlay({ isOpen, onClose, cartItems, onUpdateQuantity, onClearCart }: CartOverlayProps) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderTransferred, setOrderTransferred] = useState(false);

  const cartTotal = cartItems.reduce((acc, item) => acc + item.menuItem.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName || !tableNumber) {
      alert('Please provide your name and table number to authorize the instant order.');
      return;
    }

    // Compile items list for message template
    const formattedItems = cartItems
      .map((item) => `- ${item.menuItem.name} x ${item.quantity} (₹${item.menuItem.price * item.quantity})`)
      .join('\n');

    // WhatsApp Message compilation
    const whatsappMessage = `Hello SPICY BAWARCHI,

New Table Order

Customer Name:
${customerName}

Table Number:
${tableNumber}

Ordered Items:
${formattedItems}

Total Amount:
₹${cartTotal}

Please prepare my order.`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917643097915?text=${encodedText}`;

    setOrderTransferred(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClearCart();
      setCustomerName('');
      setTableNumber('');
      setCheckoutOpen(false);
      setOrderTransferred(false);
      onClose();
    }, 1500);
  };

  return (
    <>
      {/* 1. PRIMARY SLIDER DRAWER PANEL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Dark glass backdrop cover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm pointer-events-auto"
            />

            {/* Slider panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-md h-full bg-luxury-black border-l border-white/5 flex flex-col justify-between shadow-2xl z-10"
            >
              {/* Header block */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={18} className="text-luxury-orange" />
                  <h2 className="font-serif text-xl font-semibold text-white tracking-wide">
                    Your Dining Bag ({cartItems.length})
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Items Scroller List */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-white/30 space-y-4 py-20">
                    <ShoppingBag size={48} className="stroke-1 text-white/15" />
                    <div>
                      <h4 className="font-serif text-lg text-white/50 tracking-wide">Your bag is currently empty</h4>
                      <p className="text-xs font-sans mt-1">Browse our luxury menu and add signature items.</p>
                    </div>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.menuItem.id}
                      className="flex gap-4 p-3 bg-white/[0.01] border border-white/5 rounded-xl hover:bg-white/[0.03] transition-all duration-300"
                    >
                      {/* Thumbnail frame */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/5">
                        <img
                          src={item.menuItem.image}
                          alt={item.menuItem.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-serif text-sm font-medium text-white line-clamp-1 leading-snug">
                              {item.menuItem.name}
                            </h4>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, 0)}
                              className="text-white/30 hover:text-red-500 transition-colors p-0.5"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-[10px] font-mono text-white/40 uppercase">Veg</span>
                          </div>
                        </div>

                        {/* Quantity and Price controllers */}
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center gap-2 bg-neutral-900 border border-white/5 py-1 px-1.5 rounded-md">
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity - 1)}
                              className="text-white/50 hover:text-white p-0.5"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="font-mono text-xs font-semibold text-white px-1">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.menuItem.id, item.quantity + 1)}
                              className="text-white/50 hover:text-white p-0.5"
                            >
                              <Plus size={11} />
                            </button>
                          </div>

                          <span className="font-mono text-xs font-semibold text-luxury-orange">
                            ₹{item.menuItem.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Total calculations board and CTA triggers */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-white/5 bg-neutral-950/40 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-white/40">
                      <span>Total items added</span>
                      <span>{cartItems.reduce((acc, i) => acc + i.quantity, 0)} items</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="font-serif text-base text-white">Subtotal Sum</span>
                      <span className="font-mono text-xl font-bold text-luxury-gold">
                        ₹{cartTotal}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-2">
                    <button
                      onClick={() => setCheckoutOpen(true)}
                      id="cart-checkout-btn"
                      className="w-full py-4 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white font-semibold text-xs tracking-widest uppercase rounded-lg shadow-xl shadow-luxury-orange/15 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer transform hover:scale-[1.01]"
                    >
                      <MessageSquare size={13} />
                      Proceed To Checkout
                    </button>
                    <button
                      onClick={onClearCart}
                      className="w-full py-2.5 bg-transparent text-white/30 hover:text-white text-[10px] tracking-widest uppercase font-mono transition-colors"
                    >
                      Clear All Items
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. CHOSEN CHECKOUT DIALOG WITH Glassmorphic styling */}
      <AnimatePresence>
        {checkoutOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Modal backdrop banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Main overlay Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-panel w-full max-w-md rounded-2xl p-8 border border-white/10 relative z-10"
            >
              {/* Close pin */}
              <button
                onClick={() => setCheckoutOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white"
              >
                <X size={16} />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-luxury-orange/10 flex items-center justify-center text-luxury-orange mx-auto mb-3 border border-luxury-orange/20">
                  <ClipboardCheck size={20} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Finalize Table Order
                </h3>
                <p className="text-xs text-white/40 mt-1">
                  We generate your direct WhatsApp slip instantly.
                </p>
              </div>

              {/* Main inputs form */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                {/* Customer Name */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#FFC857]/80 mb-2">
                    Customer Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="E.g., Rajesh Kumar"
                    className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all"
                  />
                </div>

                {/* Table Number */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#FFC857]/80 mb-2">
                    Table Number *
                  </label>
                  <input
                    required
                    type="text"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="E.g., Table 5 or Cabin A"
                    className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 focus:border-luxury-orange outline-none text-white text-xs tracking-wide transition-all"
                  />
                  <span className="text-[10px] text-white/30 block mt-1.5 italic">
                    * Do NOT ask for address. This ensures lightning-fast local dining service.
                  </span>
                </div>

                {/* Bill details display */}
                <div className="py-3 px-4 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-between mt-6">
                  <div>
                    <span className="text-[9px] font-mono uppercase text-white/40 tracking-wider">Estimated total bill</span>
                    <span className="block text-xs text-white/70 font-sans mt-0.5">Including all taxes</span>
                  </div>
                  <span className="font-mono text-lg font-bold text-luxury-gold">
                    ₹{cartTotal}
                  </span>
                </div>

                {/* Redirection launch trigger */}
                <button
                  type="submit"
                  id="checkout-finalize-btn"
                  className="w-full py-4 mt-4 bg-gradient-to-r from-luxury-orange to-red-600 hover:from-red-600 hover:to-luxury-orange text-white text-xs tracking-[0.2em] uppercase font-bold rounded-lg shadow-xl shadow-luxury-orange/15 transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {orderTransferred ? (
                    <>Creating WhatsApp slip...</>
                  ) : (
                    <>
                      <MessageSquare size={13} />
                      Send Order To WhatsApp
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
