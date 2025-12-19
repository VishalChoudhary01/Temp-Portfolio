"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SimpleDigitAnimation = ({
  value,
  duration = 1200,
  triggerAnimation = true,
  className = "",
  fontSize = "text-3xl",
  fontWeight = "font-bold",
  color = "text-gray-900",
  darkColor = "text-white",
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    let rafId;
    let timeoutId;

    if (isInView && triggerAnimation && value !== null) {
      timeoutId = setTimeout(() => {
        setDisplayValue(0);

        const startTime = Date.now();
        const startValue = 0;
        const endValue = value;

        const animate = () => {
          const currentTime = Date.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Smooth easing
          const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(startValue + (endValue - startValue) * easeOutExpo);

          setDisplayValue(current);

          if (progress < 1) {
            rafId = requestAnimationFrame(animate);
          }
        };

        rafId = requestAnimationFrame(animate);
      }, 0);
    } else if (value !== null) {
      timeoutId = setTimeout(() => {
        setDisplayValue(value);
      }, 0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, value, duration, triggerAnimation]);

  const digits = displayValue.toString().split("");

  return (
    <div
      ref={ref}
      className={`flex items-center justify-center gap-0 ${className} ${fontSize} ${fontWeight} ${color} dark:${darkColor}`}
      style={{
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {digits.map((digit, index) => (
        <motion.span
          key={`${digit}-${index}-${displayValue}`}
          className="inline-block"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: index * 0.05,
          }}
          style={{
            lineHeight: 1,
            minWidth: "0.5em",
            textAlign: "center",
          }}
        >
          {digit}
        </motion.span>
      ))}
    </div>
  );
};

export default SimpleDigitAnimation;