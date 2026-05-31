import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

interface Premium3DCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  intensity?: number; // 3D tilt intensity (default: 12)
  key?: string | number;
}

export default function Premium3DCard({
  children,
  className = '',
  onClick,
  id,
  intensity = 12
}: Premium3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // High-performance springs representing card tilt angles
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs smooth out the jittery mouse movements for an elegant, cinematic feel
  const springConfig = { damping: 30, stiffness: 300, mass: 0.6 };
  const rotateXSpring = useSpring(x, springConfig);
  const rotateYSpring = useSpring(y, springConfig);

  // Map mouse positions to rotational degrees
  const rotateX = useTransform(rotateXSpring, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(rotateYSpring, [-0.5, 0.5], [-intensity, intensity]);

  // Glare tracking variables
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    // Normalize position from -0.5 to 0.5
    const normX = (mouseX / width) - 0.5;
    const normY = (mouseY / height) - 0.5;
    
    x.set(normY); // maps to rotateX
    y.set(normX); // maps to rotateY
    
    // Convert to percentage for reflection/glare overlay
    const percentageX = (mouseX / width) * 100;
    const percentageY = (mouseY / height) * 100;
    setGlarePosition({ x: percentageX, y: percentageY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      id={id}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200,
      }}
      className={`relative rounded-2xl transition-shadow duration-300 select-none ${
        onClick ? 'cursor-pointer' : ''
      } ${
        isHovered 
          ? 'shadow-[0_20px_50px_rgba(255,107,0,0.18)] border-white/20' 
          : 'shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-white/10'
      } ${className}`}
    >
      {/* 3D Depth Inner Layer - creates a beautiful stacked depth effect */}
      <div 
        style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}
        className="w-full h-full relative z-10"
      >
        {children}
      </div>

      {/* Dynamic 3D Metallic Glow Border */}
      <div 
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 border ${
          isHovered ? 'opacity-100 border-luxury-orange/40 bg-gradient-to-r from-luxury-orange/5 via-transparent to-luxury-gold/5' : 'opacity-0 border-white/5'
        }`}
      />

      {/* Dynamic Moving Glare Reflection Mask Overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 transition-opacity duration-300 overflow-hidden"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle 250px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,200,87,0.3) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)`,
          mixBlendMode: 'overlay',
        }}
      />
    </motion.div>
  );
}
