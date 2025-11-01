'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useDarkMode from '@/app/hooks/useDarkMode';

const GlowingCornerHover = ({ color }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const {isDarkMode}=useDarkMode()
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Card colors based on theme
  const cardBg = isDarkMode ? 'rgba(45, 45, 45, 1)' : 'rgba(255, 255, 255, 1)';
  const innerCardBg = isDarkMode ? 'rgba(45, 45, 45, 0.75)' : 'rgba(255, 255, 255, 0.75)';

  return (
    <motion.div
      className="relative w-[260px] h-[340px] rounded-[20px] overflow-hidden"
      style={{ background: cardBg }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glowing gradient effect */}
      <motion.div
        className="absolute w-[640px] h-[640px] pointer-events-none"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, ${color}, transparent 40%, transparent 70%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Inner card with slight transparency */}
      <div 
        className="absolute inset-[2px] rounded-[18px] z-10"
        style={{ background: innerCardBg }}
      />
      
      {/* Edge glow effect */}
      <motion.div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{
          boxShadow: isHovered ? `0 0 30px ${color}, inset 0 0 20px ${color}` : 'none',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default GlowingCornerHover