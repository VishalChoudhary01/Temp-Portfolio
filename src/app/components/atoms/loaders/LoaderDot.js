"use client";
import { motion } from "framer-motion";

export default function LoaderDot({ size, reduceMotion }) {
  return (
    <motion.div
      className="absolute left-0 rounded-full"
      style={{
        width: size * 0.22,
        height: size * 0.22,
        background: `radial-gradient(circle, var(--grad-primary), var(--grad-secondary))`,
        boxShadow: `0 0 25px rgba(221, 90, 3, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2)`,
      }}
      animate={reduceMotion ? {} : {
        scale: [1, 1.15, 1],
        boxShadow: [
          "0 0 25px rgba(221, 90, 3, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2)",
          "0 0 35px rgba(221, 90, 3, 0.7), inset 0 0 20px rgba(255, 255, 255, 0.3)",
          "0 0 25px rgba(221, 90, 3, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.2)"
        ],
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}