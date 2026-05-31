import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChefHat } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Elegant delay before logo slowly fades in
    const logoTimer = setTimeout(() => setShowLogo(true), 200);

    // Dynamic easing loader, similar to Tesla's calibration sequence
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }
        // Slower and more dramatic near completion
        const remaining = 100 - prev;
        const increment = remaining > 30 
          ? Math.floor(Math.random() * 12) + 4 
          : Math.floor(Math.random() * 3) + 1;
        return Math.min(100, prev + increment);
      });
    }, 85);

    return () => {
      clearInterval(interval);
      clearTimeout(logoTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#030303] z-[9999] flex flex-col items-center justify-center overflow-hidden select-none">
      
      {/* Cinematic Golden Nebula Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-black to-black pointer-events-none" />
      
      {/* Shimmering Ambient Light Rays */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-luxury-orange/5 via-luxury-gold/5 to-transparent blur-[120px] mix-blend-screen pointer-events-none animate-slow-pulse" />
      
      {/* Microscopic Drifting Dust Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-5">
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-luxury-gold/40 rounded-full blur-[1px] animate-float-dust-slow" />
        <div className="absolute top-[70%] right-[15%] w-2 h-2 bg-luxury-orange/30 rounded-full blur-[2px] animate-float-dust-fast" />
        <div className="absolute bottom-[20%] left-[30%] w-1 h-1 bg-luxury-gold/50 rounded-full blur-[0.5px] animate-float-dust-slow" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full blur-[1px] animate-float-dust-fast" />
      </div>

      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center px-6 relative z-10 max-w-lg flex flex-col items-center"
          >
            {/* The Sovereign Emblem: Elegant double-ringed geometric insignia */}
            <div className="relative mb-10 group">
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 h-20 rounded-full border border-luxury-gold/25 flex items-center justify-center relative p-1 backdrop-blur-2xl bg-black/60 shadow-[0_0_50px_rgba(255,200,87,0.05)]"
              >
                {/* Thin Inner Octagon border */}
                <div className="absolute inset-1.5 border border-luxury-gold/10 rounded-full" />
                <div className="absolute inset-3 border border-white/5 rounded-full" />
                
                {/* Micro logo crown typography */}
                <div className="text-white relative z-10 flex flex-col items-center justify-center">
                  <ChefHat size={18} className="text-luxury-gold" />
                  <div className="w-5 h-[1px] bg-luxury-gold/40 my-0.5" />
                  <Sparkles size={8} className="text-luxury-orange animate-spin duration-[15000ms]" />
                </div>

                {/* Animated surrounding halo rings representing cinematic calibration */}
                <svg className="absolute inset-0 w-full h-full -rotate-95 pointer-events-none" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="url(#emblem-gradient)"
                    strokeWidth="1"
                    strokeDasharray="295"
                    strokeDashoffset={295 - (295 * percent) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                  <defs>
                    <linearGradient id="emblem-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B00" />
                      <stop offset="100%" stopColor="#FFC857" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Gentle Backlit Spotlight Accent */}
              <div className="absolute -inset-4 bg-luxury-orange/10 rounded-full blur-[20px] -z-10 animate-pulse duration-[5000ms]" />
            </div>

            {/* Noble Brand Typography with High-End Golden Shimmer Effect */}
            <div className="relative mb-5 overflow-hidden py-2 px-10">
              <h1 className="font-serif text-5xl sm:text-6xl tracking-[0.25em] font-extrabold text-white leading-none relative z-10">
                SPICY <span className="text-gradient-orange drag-none">BAWARCHI</span>
              </h1>
              
              {/* Luxury brand subheader */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer pointer-events-none" style={{ animationDuration: '2.5s' }} />
            </div>

            {/* Delicate Tagline matching high-end watch face styling */}
            <div className="flex items-center gap-4 mb-16">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-luxury-gold/40" />
              <p className="font-serif italic text-xs tracking-[0.35em] text-luxury-gold/80 uppercase font-extrabold">
                FAMILY AC RESTAURANT
              </p>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-luxury-gold/40" />
            </div>

            {/* Apple & Tesla-Style Minimal Precision Progress Line */}
            <div className="w-72 h-[1px] bg-white/[0.05] relative mb-4 overflow-hidden rounded-full">
              <motion.div 
                className="h-full bg-gradient-to-r from-luxury-orange via-luxury-gold to-white absolute left-0 top-0 shadow-[0_0_10px_rgba(255,107,0,0.5)]"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            
            {/* Elegant telemetry loading counter */}
            <div className="font-mono text-[8px] tracking-[0.45em] text-[#FFC857]/50 uppercase flex items-center gap-1.5">
              <span>CALIBRATING SENSES</span>
              <span className="font-bold text-luxury-gold">{percent.toString().padStart(3, '0')}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exquisite footer label representing high heritage */}
      <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none z-10">
        <p className="font-sans text-[8px] tracking-[0.5em] text-white/25 uppercase font-medium">
          CHEF-CURATED EXCELLENCE • EST. 2011
        </p>
      </div>

      {/* Global CSS Shimmer animation injection */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
