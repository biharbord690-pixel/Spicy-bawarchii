import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = '+917643097915';
  const whatsappNumber = '917643097915';
  const welcomeMessage = encodeURIComponent("Hello Spicy Bawarchi, I would like to inquiry about catering or home delivery!");

  return (
    <div className="fixed bottom-28 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp Floating Action Button */}
      <motion.a
        id="whatsapp-floating-action"
        href={`https://wa.me/${whatsappNumber}?text=${welcomeMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        className="group relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-[0_8px_30px_rgb(16,185,129,0.3)] border border-emerald-400/20 transition-all cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={22} className="stroke-[2.2] animate-pulse" />
        
        {/* Animated outer glowing ring */}
        <span className="absolute -inset-1.5 rounded-full border border-emerald-500/30 animate-ping duration-[3500ms] pointer-events-none" />

        {/* Custom Premium Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-right py-1 px-3.5 rounded-lg bg-neutral-950/95 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] uppercase tracking-widest whitespace-nowrap shadow-xl pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Direct Action Button */}
      <motion.a
        id="phone-floating-action"
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.7 }}
        className="group relative w-12 h-12 rounded-full bg-luxury-orange hover:bg-orange-505 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(255,107,0,0.35)] border border-luxury-orange/20 transition-all cursor-pointer"
        title="Call Spicy Bawarchi"
      >
        <Phone size={20} className="stroke-[2.2]" />

        {/* Animated outer glowing ring */}
        <span className="absolute -inset-1.5 rounded-full border border-luxury-orange/30 animate-ping duration-[4000ms] pointer-events-none" />

        {/* Custom Premium Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 origin-right py-1 px-3.5 rounded-lg bg-neutral-950/95 border border-luxury-gold/30 text-luxury-gold font-mono text-[10px] uppercase tracking-widest whitespace-nowrap shadow-xl pointer-events-none">
          Call Live
        </span>
      </motion.a>

    </div>
  );
}
