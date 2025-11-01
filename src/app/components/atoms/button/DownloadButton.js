"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuArrowDownToLine } from "react-icons/lu";
import Button from "@/app/components/atoms/button/Button";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownloadResume = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const link = document.createElement("a");
          link.href = "/documents/Vishal Kumar Choudhary.pdf";
          link.download = "Resume.pdf";
          link.click();

          setTimeout(() => {
            setIsDownloading(false);
            setProgress(0);
          }, 1500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <div className="relative w-fit">
      <div className="relative group overflow-hidden rounded-2xl">
        {/* Progress Gradient Fill */}
        {isDownloading && (
          <ProgressFill progress={progress} />
        )}

        {/* Success Glow */}
        {progress === 100 && <SuccessGlow />}

        {/* Shine Overlay */}
        <ShineOverlay />

        {/* Foreground Button */}
        <Button
          buttonText={
            isDownloading
              ? progress === 100
                ? "Downloaded!"
                : `Downloading ${progress}%`
              : "Download Resume"
          }
          leftIcon={
            isDownloading ? (
              <SpinnerIcon />
            ) : (
              <LuArrowDownToLine className="w-5 h-5" />
            )
          }
          buttonStyle={`relative overflow-hidden z-[2]   flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold tracking-wide backdrop-blur-xl border border-white/20 shadow-lg ${
            isDownloading
              ? "bg-transparent pointer-events-none border border-red-500 text-white dark:text-cyan-100"
              : "bg-gradient-to-r from-[var(--color-grad-primary)] via-[var(--color-grad-secondary)] to-[var(--color-grad-tertiary)] text-white hover:from-[var(--color-grad-secondary)] hover:via-[var(--color-grad-tertiary)] hover:to-[var(--color-grad-quaternary)] hover:shadow-[0_0_25px_rgba(246,137,177,0.5)] dark:bg-gradient-to-r dark:from-[var(--color-darkgrad-primary)] dark:via-[var(--color-darkgrad-secondary)] dark:to-[var(--color-darkgrad-tertiary)] dark:text-cyan-100 dark:hover:from-[var(--color-darkgrad-secondary)] dark:hover:via-[var(--color-darkgrad-tertiary)] dark:hover:to-[var(--color-darkgrad-quaternary)] dark:hover:shadow-[0_0_25px_rgba(244,126,126,0.5)]"
          } ${
            !isDownloading && "transform hover:scale-105 transition-all"
          } transition-all duration-300 ease-in-out`}
          leftStyle={`relative z-10 ${
            !isDownloading && "group-hover:scale-110 transition-transform"
          }`}
          textStyle="relative z-10 font-semibold tracking-wide"
          onClick={handleDownloadResume}
        />
      </div>
    </div>
  );
};

// Sub-components for DownloadButton
const ProgressFill = ({ progress }) => (
  <motion.div
    className="absolute inset-0 z-0 rounded-2xl bg-gradient-to-r from-[var(--color-grad-primary)] via-[var(--color-grad-secondary)] to-[var(--color-grad-tertiary)] dark:from-[var(--color-darkgrad-primary)] dark:via-[var(--color-darkgrad-secondary)] dark:to-[var(--color-darkgrad-tertiary)]"
    initial={{ scaleX: 0 }}
    animate={{ scaleX: progress / 100 }}
    transition={{ ease: "easeInOut", duration: 0.2 }}
    style={{ transformOrigin: "left" }}
  />
);

const SuccessGlow = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#059669] via-emerald-400 to-green-500 shadow-[0_0_25px_rgba(34,197,94,0.5)] dark:from-[#10b981] dark:via-teal-500 dark:to-emerald-600 dark:shadow-[0_0_25px_rgba(16,185,129,0.5)] z-0"
  />
);

const ShineOverlay = () => (
  <div className="absolute inset-0 rounded-2xl overflow-hidden z-[1] pointer-events-none">
    <motion.div
      animate={{ x: ["-150%", "150%"] }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
        ease: "linear",
      }}
      className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[45deg]"
    />
  </div>
);

const SpinnerIcon = () => (
  <div className="w-5 h-5 border-2 rounded-full border-t-transparent animate-spin border-[var(--color-grad-tertiary)] dark:border-[var(--color-darkgrad-tertiary)]" />
);

export default DownloadButton;