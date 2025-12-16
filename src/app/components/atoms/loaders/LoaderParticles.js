"use client";
import { motion } from "framer-motion";

export default function LoaderParticles({ size, reduceMotion }) {
  if (reduceMotion) return null;

  const particles = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60) * Math.PI / 180;
    const radius = size * 0.28;
    const color = i % 2 === 0 ? 'primary' : 'tertiary';

    return {
      id: i,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      color,
      delay: i * 0.2
    };
  });

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute left-0 w-1.5 h-1.5 rounded-full"
          style={{
            background: `var(--grad-${particle.color})`,
            boxShadow: `0 0 8px var(--grad-${particle.color})`,
          }}
          animate={{
            x: [
              particle.x,
              Math.cos(((particle.id * 60 + 360) * Math.PI) / 180) * (size * 0.28),
            ],
            y: [
              particle.y,
              Math.sin(((particle.id * 60 + 360) * Math.PI) / 180) * (size * 0.28),
            ],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}