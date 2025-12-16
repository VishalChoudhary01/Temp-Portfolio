"use client";
import { motion } from "framer-motion";

export default function LoaderShimmer({ size, reduceMotion }) {
  if (reduceMotion) return null;

  return (
    <motion.div
      className="absolute left-0 w-full h-full pointer-events-none overflow-hidden"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 30%, black 70%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 30%, black 70%, transparent)',
      }}
      aria-hidden="true"
    >
      <motion.div
        className="w-16 h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        }}
        animate={{
          x: [-100, size * 2 + 100],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />
    </motion.div>
  );
}