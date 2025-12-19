"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DigitSlideCounter } from "@/app/components/atoms/animation";
import { useDarkMode } from '@/app/hooks/useDarkMode';

const ProgressBar = ({ score, label, colorClass, showScore = true }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const getScoreColorClasses = (scoreValue) => {
    if (scoreValue >= 90) return {
      bar: " bg-linear-to-r from-emerald-500 to-emerald-600 dark:from-emerald-700/85 dark:to-emerald-300/85",
      glow: "dark:bg-emerald-200/75 bg-emerald-400",
      text: "text-emerald-600 dark:text-emerald-300"
    };
    if (scoreValue >= 70) return {
      bar: " dark:from-amber-600/85 dark:to-yellow-300/95  bg-linear-to-r from-amber-500 to-yellow-600",
      glow: "dark:bg-amber-400/75 bg-amber-400",
      text: "text-yellow-600  dark:text-yellow-300/95"
    };
    return {
      bar: "bg-red-600 bg-linear-to-r from-red-500 to-red-600 dark:from-red-800/45 dark:to-red-400/85  ",
      glow: "bg-red-400",
      text: "text-red-500"
    };
  };
  
  const colorClasses = colorClass ? {
    bar: colorClass.bar || colorClass,
    glow: colorClass.glow || colorClass,
    text: colorClass.text || colorClass
  } : getScoreColorClasses(score);
  
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        {showScore && (
          <div className={colorClasses.text}>
            <DigitSlideCounter
              value={score}
              duration={1200}
              className="text-xs sm:text-sm font-medium  tabular-nums"
              textColorClass="" 
            />
          </div>
        )}
      </div>
      
      <div className="relative h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full absolute left-0 top-0 ${colorClasses.bar}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${score}%` } : { width: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut", 
            delay: 0.2 
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className={`h-full rounded-full absolute left-0 top-0 opacity-20 blur-sm ${colorClasses.glow}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${score}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut", 
            delay: 0.1 
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;