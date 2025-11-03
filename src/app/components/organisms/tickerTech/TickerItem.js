"use client";
import React from "react";
import { motion } from "framer-motion";
import GlowingCard from "@/app/components/molecules/cards/GlowingCard";

const TickerItem = ({ tech, index, techStackLength, isMounted }) => {
  return (
    <motion.div
      className="mx-3 md:mx-4 shrink-0"
      initial={isMounted ? { opacity: 0, scale: 0.8 } : false}
      animate={isMounted ? { opacity: 1, scale: 1 } : false}
      transition={{ delay: (index % techStackLength) * 0.05, duration: 0.3 }}
    >
      <GlowingCard
        color={tech.color}
        className="w-24 h-24 md:w-32 md:h-32 md:rounded-[32px] rounded-[8px] group"
      >
        <div className="relative flex flex-col items-center justify-center w-full h-full md:p-4 z-20">
          <div
            className="text-2xl md:text-3xl mb-2 transition-colors duration-300"
            style={{ color: tech.color }}
          >
            {tech.icon}
          </div>
          <h3 className="text-[0.7rem] md:text-sm select-none  font-semibold text-gray-900 dark:text-white text-center leading-tight">
            {tech.name}
          </h3>
        </div>
      </GlowingCard>
    </motion.div>
  );
};


export default TickerItem;
