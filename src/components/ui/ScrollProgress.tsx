'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-bronze-light z-50 origin-left shadow-[0_0_8px_#C09A5A]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
