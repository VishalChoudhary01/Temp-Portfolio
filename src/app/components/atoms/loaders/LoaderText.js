"use client";
import { motion } from "motion/react";

export default function LoaderText({ reduceMotion }) {
  return (
    <motion.div
      className="flex items-baseline gap-1 text-h1 dark:text-Head1dark ml-12 "
      animate={
        reduceMotion
          ? {}
          : {
              opacity: [0.92, 1, 0.92],
            }
      }
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      aria-label="VKr Loader"
    >
      <div className="md:text-4xl font-bold text-lg flex gap-x-2 font-arimo">
        <span>V</span>
        <span>Kr</span>
      </div>
    </motion.div>
  );
}
