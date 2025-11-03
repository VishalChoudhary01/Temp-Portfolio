"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@/app/components/atoms/typography/index";
import TickerTrack from "./TickerTrack";

const TickerTech = () => {
  return (
    <section className="md:py-16 bg-contextBG dark:bg-contextDarkBG">
      
      <div className="w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col items-center text-center  px-4"
        >
          <Heading heading="Skills" />
        </motion.div>

        {/* Carousel */}
        <div className="w-full md:py-8 py-3 relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 h-full w-14 md:w-64 z-20 pointer-events-none bg-gradient-to-r from-contextBG via-contextBG/50 to-transparent dark:from-contextDarkBG dark:via-contextDarkBG/50 dark:to-transparent" />
          <div className="absolute top-0 right-0 h-full w-14 md:w-64 z-20 pointer-events-none bg-gradient-to-l from-contextBG via-contextBG/50 to-transparent dark:from-contextDarkBG dark:via-contextDarkBG/50 dark:to-transparent" />

          {/* Scrolling track (moved to its own component) */}
          <TickerTrack />
        </div>
      </div>
    </section>
  );
};

export default TickerTech;
