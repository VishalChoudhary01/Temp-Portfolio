"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const YearCounter = ({
  year,
  duration = 2000,
  triggerAnimation = true,
  textColorClass = "text-gray-900 dark:text-white",
  className = "",
  startFrom = null, 
}) => {
  const [displayYear, setDisplayYear] = useState(startFrom || year - 10);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    let rafId;
    let timeoutId;

    if (isInView && triggerAnimation && year !== null) {
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
        const startValue = startFrom || Math.max(year - 10, 2000); // Start from 10 years ago or 2000
        setDisplayYear(startValue);

        const startTime = Date.now();
        const endValue = year;

        const animate = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function that slows down as it approaches the target
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

          setDisplayYear(current);

          if (progress < 1) {
            rafId = requestAnimationFrame(animate);
          } else {
            setIsAnimating(false);
          }
        };

        rafId = requestAnimationFrame(animate);
      }, 0);
    } else if (year !== null) {
      timeoutId = setTimeout(() => {
        setDisplayYear(year);
      }, 0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, year, duration, triggerAnimation, startFrom]);

  const digits = displayYear.toString().split("");
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return (
    <div 
      ref={ref} 
      className={`relative flex items-center justify-center gap-0.5 ${textColorClass} ${className}`}
    >
      {/* Animated year digits */}
      <div className="flex items-center">
        {digits.map((digit, index) => {
          // Different entrance animation for each digit
          const getAnimationDelay = (idx) => idx * 0.15;
          
          return (
            <motion.span
              key={`${digit}-${index}-${displayYear}`}
              className={`
                inline-block min-w-[0.65em] text-center font-bold
                text-2xl sm:text-3xl md:text-4xl
                ${isLeapYear ? 'text-blue-600 dark:text-blue-400' : ''}
                font-mono tracking-wider
              `}
              initial={{ 
                y: index % 2 === 0 ? -100 : 100,
                opacity: 0,
                scale: 0.3,
                rotateX: 90
              }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                rotateX: 0
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: getAnimationDelay(index),
              }}
              style={{
                lineHeight: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "500px",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {digit}
            </motion.span>
          );
        })}
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: duration / 1000 }}
        className="flex flex-col ml-2"
      >
        {/* Century indicator */}
        <span className="text-xs font-semibold opacity-60">
          {Math.floor(year / 100) + 1}st C
        </span>
        
        {/* Leap year indicator */}
        {isLeapYear && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: duration / 1000 + 0.3 }}
            className="text-[8px] text-blue-500 font-bold mt-0.5"
          >
            LEAP
          </motion.span>
        )}
      </motion.div>

      {/* Timeline progress bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ delay: 0.5, duration: duration / 1000 }}
        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"
      />
    </div>
  );
};

export default YearCounter;