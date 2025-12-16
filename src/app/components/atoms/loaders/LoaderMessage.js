"use client";
import { motion } from "framer-motion";

export default function LoaderMessage({ messages, currentMessage }) {
  return (
    <motion.div
      key={currentMessage}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-6 text-xs font-medium tracking-[0.2em] uppercase text-para1 dark:text-darkPara1"
      aria-live="polite"
      aria-label={`Loading: ${messages[currentMessage]}`}
    >
      {messages[currentMessage]}
    </motion.div>
  );
}