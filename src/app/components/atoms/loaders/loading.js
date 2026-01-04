"use client";
import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";
import LoaderRing from "./LoaderRing";
import LoaderDot from "./LoaderDot";
import LoaderParticles from "./LoaderParticles";
import LoaderText from "./LoaderText";
import LoaderShimmer from "./LoaderShimmer";
import LoaderMessage from "./LoaderMessage";
import LoaderProgress from "./LoaderProgress";

export default function ModernVKrLoader({
  size = 80,
  messages = [
    "Crafting excellence",
    "Engineering precision",
    "Optimizing performance",
    "Finalizing details",
  ],
  speed = 1,
}) {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  // Message rotation effect
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setCurrentMessage((p) => (p + 1) % messages.length);
    }, 2800 * speed);
    return () => clearInterval(interval);
  }, [messages.length, speed, reduceMotion]);

  // Progress animation
  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 0.5));
    }, 30 * speed);
    return () => clearInterval(interval);
  }, [speed, reduceMotion]);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-contextBG dark:bg-contextDarkBG "
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="relative flex items-center justify-center">
        <LoaderRing
          type="outer"
          size={size}
          speed={speed}
          reduceMotion={reduceMotion}
        />

        <LoaderRing
          type="inner"
          size={size}
          speed={speed}
          reduceMotion={reduceMotion}
        />

        <LoaderDot size={size} reduceMotion={reduceMotion} />

        <LoaderParticles size={size} reduceMotion={reduceMotion} />

        <LoaderText size={size} reduceMotion={reduceMotion} />

        <LoaderShimmer size={size} reduceMotion={reduceMotion} />
      </div>

      <LoaderMessage messages={messages} currentMessage={currentMessage} />

      <LoaderProgress
        progress={progress}
        size={size}
        reduceMotion={reduceMotion}
      />
    </div>
  );
}
