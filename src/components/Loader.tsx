import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChefHat } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-luxury-black z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-luxury-orange/10 blur-[130px] animate-slow-pulse pointer-events-none" />
      
      {/* Golden particles floating */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-luxury-gold/30 rounded-full blur-[2px] animate-float-dust-slow" />
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-luxury-orange/20 rounded-full blur-[3px] animate-float-dust-fast" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-luxury-gold/40 rounded-full blur-[1px] animate-float-dust-fast" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center px-6 relative z-10"
      >
        {/* Decorative Luxury Frame Accent with ChefHat Logo */}
        <div className="flex justify-center mb-6">
          <motion.div 
            initial={{ scale: 0.8, rotate: -45, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="w-16 h-16 border-2 border-luxury-orange flex items-center justify-center rotate-45 relative"
          >
            <div className="w-12 h-12 border border-luxury-gold/50 flex items-center justify-center rotate-[45deg] bg-luxury-black/95">
              <ChefHat size={20} className="text-luxury-gold rotate-[-45deg] animate-pulse" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-luxury-gold" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-luxury-gold" />
          </motion.div>
        </div>

        <motion.h1 
          className="font-serif text-4xl sm:text-5xl tracking-[0.2em] font-bold text-white mb-2"
          style={{ textShadow: '0 0 40px rgba(255, 107, 0, 0.2)' }}
        >
          SPICY <span className="text-luxury-orange">BAWARCHI</span>
        </motion.h1>
        
        <p className="font-sans text-xs tracking-[0.4em] uppercase text-luxury-gold/80 mb-12 font-semibold">
          Every Bite Tells A Story
        </p>

        {/* Cinematic Progress Bar */}
        <div className="w-64 h-[1px] bg-white/10 mx-auto relative mb-3 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-luxury-orange to-luxury-gold absolute left-0 top-0"
            style={{ width: `${percent}%` }}
          />
        </div>
        
        <div className="font-mono text-[10px] tracking-widest text-[#FFC857]/60 uppercase">
          Curating Culinary Majesty • {percent}%
        </div>
      </motion.div>

      {/* Decorative footer details */}
      <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
        <p className="font-serif italic text-white/30 text-xs tracking-wider">
          Bihar&#39;s Premier Culinary Boutique
        </p>
      </div>
    </div>
  );
}
