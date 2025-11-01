"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuArrowDownToLine, LuCheck } from "react-icons/lu";

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
      <div className="relative group">
        {/* Animated Glowing Border - Light Mode */}
        {!isDownloading && (
          <motion.div
            className="absolute -inset-[3px] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm dark:hidden"
            style={{
              background: "linear-gradient(90deg, var(--grad-primary), var(--grad-secondary), var(--grad-tertiary), var(--grad-quaternary), var(--grad-primary))",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "300% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Animated Glowing Border - Dark Mode */}
        {!isDownloading && (
          <motion.div
            className="absolute -inset-[3px] rounded-xl sm:rounded-2xl opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 blur-sm hidden dark:block"
            style={{
              background: "linear-gradient(90deg, var(--darkgrad-primary), var(--darkgrad-secondary), var(--darkgrad-tertiary), var(--darkgrad-quaternary), var(--darkgrad-primary))",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "300% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}

        {/* Button Container */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
          {/* Progress Fill Background */}
          {isDownloading && (
            <motion.div
              className="absolute inset-0 z-0 bg-gradient-to-r from-[var(--grad-primary)] via-[var(--grad-secondary)] to-[var(--grad-tertiary)] dark:from-[var(--darkgrad-primary)] dark:via-[var(--darkgrad-secondary)] dark:to-[var(--darkgrad-tertiary)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.1 }}
            />
          )}

          {/* Success Background */}
          {progress === 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
              style={{
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.7)",
              }}
            />
          )}

          {/* Shine Effect */}
          {!isDownloading && (
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden pointer-events-none z-[1]">
              <motion.div
                animate={{ x: ["-150%", "150%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "linear",
                }}
                className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
              />
            </div>
          )}

          {/* Button */}
          <button
            onClick={handleDownloadResume}
            disabled={isDownloading}
            className={`relative z-[2] flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold tracking-wide border-2 transition-all duration-300 ease-in-out w-full ${
              progress === 100
                ? "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white border-emerald-400 cursor-default"
                : isDownloading
                ? "bg-transparent border-gray-300 dark:border-gray-700"
                : "bg-gradient-to-r from-[var(--grad-primary)] via-[var(--grad-secondary)] to-[var(--grad-tertiary)] dark:from-[var(--darkgrad-primary)] dark:via-[var(--darkgrad-secondary)] dark:to-[var(--darkgrad-tertiary)] text-white border-[var(--grad-primary)]/50 dark:border-[var(--darkgrad-primary)]/50 hover:border-[var(--grad-secondary)] dark:hover:border-[var(--darkgrad-secondary)] hover:shadow-[0_0_30px_rgba(221,90,3,0.6)] dark:hover:shadow-[0_0_30px_rgba(255,107,107,0.6)] transform hover:scale-105"
            }`}
          >
            {/* Icon */}
            <span
              className={`relative z-10 transition-transform duration-300 ${
                !isDownloading && "group-hover:scale-110"
              }`}
            >
              {progress === 100 ? (
                <LuCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              ) : isDownloading ? (
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 sm:border-3 rounded-full border-t-transparent animate-spin border-amber-900 dark:border-white" />
              ) : (
                <LuArrowDownToLine className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              )}
            </span>

            {/* Text */}
            <span className={`relative z-10 font-semibold tracking-wide ${
              progress === 100
                ? "text-white"
                : isDownloading
                ? "text-amber-950 dark:text-white"
                : "text-white"
            }`}>
              {progress === 100
                ? "Downloaded!"
                : isDownloading
                ? `Downloading ${progress}%`
                : "Download Resume"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;