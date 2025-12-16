"use client";
import { motion } from "framer-motion";

export default function ProjectHeader({ title, subtitle }) {
  return (
    <div className="py-12 md:py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
          text-5xl md:text-7xl font-bold mb-4 md:mb-6
          bg-linear-to-r
          from-neutral-900 via-neutral-800 to-neutral-700
          dark:from-white dark:via-neutral-200 dark:to-neutral-400
          bg-clip-text text-transparent
        "
      >
        {title}
      </motion.h1>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            text-xl md:text-2xl
            text-gray-600 dark:text-gray-400
            max-w-3xl mx-auto px-4
          "
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}