// components/atoms/DigitSlideCounter.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const DigitSlideCounter = ({ value, duration = 1800, triggerAnimation = true }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousValue, setPreviousValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  useEffect(() => {
    if (isInView && triggerAnimation && value !== null) {
      setIsAnimating(true);
      setPreviousValue(displayValue);
      setDisplayValue(0);
      
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Smooth easing function
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutExpo);
        
        setDisplayValue(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };

      requestAnimationFrame(animate);
    } else if (value !== null) {
      // Set directly without animation
      setPreviousValue(displayValue);
      setDisplayValue(value);
    }
  }, [isInView, value, duration, triggerAnimation]);

  const digits = displayValue.toString().split('');
  const prevDigits = previousValue.toString().split('');

  return (
    <div 
      ref={ref} 
      className="flex items-center justify-center gap-0 text-github-repo-count dark:text-github-repo-count-dark"
      style={{ 
        fontVariantNumeric: 'tabular-nums' // Ensures consistent digit width
      }}
    >
      {digits.map((digit, index) => {
        // Determine animation direction based on position
        // Even indices slide up, odd indices slide down
        const direction = index % 2 === 0 ? 'up' : 'down';
        
        const initialY = direction === 'up' ? 25 : -25;
        
        return (
          <motion.span
            key={`${digit}-${index}-${displayValue}`}
            className="inline-block min-w-[0.5em] text-center font-bold text-base sm:text-lg font-poppins"
            initial={{ y: initialY, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              delay: index * 0.05, // Slightly increased delay for better visual separation
            }}
            style={{
              lineHeight: 1,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {digit}
          </motion.span>
        );
      })}
      
      {/* Optional: Show loading indicator during animation */}
      {isAnimating && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="ml-1 text-xs text-github-repo-count dark:text-github-repo-count-dark"
        >
          ●
        </motion.span>
      )}
    </div>
  );
};

export default DigitSlideCounter;