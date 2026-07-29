'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] text-xs font-semibold px-7 py-3.5 border border-bronze-light/50 text-ivory bg-stone-900/80 backdrop-blur-md rounded-none hover:border-bronze-light hover:bg-bronze/10 transition-all duration-300 group cursor-pointer ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2 group-hover:text-bronze-light transition-colors duration-300">
        {children}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-bronze/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {Content}
      </a>
    );
  }

  return Content;
}
