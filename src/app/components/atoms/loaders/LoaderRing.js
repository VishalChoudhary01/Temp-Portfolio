"use client";
import { motion } from "motion/react";

export default function LoaderRing({ type, size, speed, reduceMotion }) {
  const isOuter = type === "outer";

  const ringConfig = {
    outer: {
      width: size * 0.45,
      height: size * 0.45,
      gradient: `conic-gradient(from 0deg, 
        transparent 0deg,
        var(--grad-primary) 120deg,
        var(--grad-secondary) 240deg,
        transparent 360deg
      )`,
      mask: "radial-gradient(circle, transparent 65%, black 66%, black 88%, transparent 89%)",
      rotation: { rotate: 360 },
      transition: { duration: 3 / speed, repeat: Infinity, ease: "linear" },
    },
    inner: {
      width: size * 0.36,
      height: size * 0.36,
      gradient: `conic-gradient(from 180deg,
        transparent 0deg,
        var(--darkgrad-secondary) 90deg,
        var(--darkgrad-tertiary) 180deg,
        transparent 270deg
      )`,
      mask: "radial-gradient(circle, transparent 72%, black 74%, black 90%, transparent 92%)",
      rotation: { rotate: -360 },
      transition: { duration: 4 / speed, repeat: Infinity, ease: "linear" },
    },
  };

  const config = ringConfig[type];

  return (
    <motion.div
      className="absolute left-0 rounded-full"
      style={{
        width: config.width,
        height: config.height,
        background: config.gradient,
        maskImage: config.mask,
        WebkitMaskImage: config.mask,
      }}
      animate={reduceMotion ? {} : config.rotation}
      transition={config.transition}
      aria-hidden="true"
    />
  );
}
