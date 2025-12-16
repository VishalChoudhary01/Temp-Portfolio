"use client";
import { motion } from "framer-motion";

export default function LoaderProgress({ progress, size, reduceMotion }) {
  return (
    <>
      <div 
        className="mt-4 w-48 h-1 bg-gray-300/40 dark:bg-gray-700/40 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, var(--grad-primary), var(--grad-secondary), var(--grad-tertiary))`,
            boxShadow: `0 0 10px rgba(221, 90, 3, 0.4)`,
            width: `${progress}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        className="mt-2 text-[10px] font-semibold text-para2 dark:text-darkPara2 tabular-nums tracking-wider"
        animate={reduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        aria-hidden="true"
      >
        {Math.round(progress)}%
      </motion.div>
    </>
  );
}