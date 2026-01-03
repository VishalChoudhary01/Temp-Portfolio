"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuArrowDownToLine, LuCheck } from "react-icons/lu";

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          const link = document.createElement("a");
          link.href = "/documents/Vishal Kumar Choudhary.pdf";
          link.download = "Vishal_Kumar_Choudhary_Resume.pdf";
          link.click();

          setTimeout(() => {
            setIsDownloading(false);
            setProgress(0);
          }, 1200);

          return 100;
        }
        return prev + 4;
      });
    }, 80);
  };

  return (
    <div className="w-fit font-roboto">
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        whileTap={{ scale: 0.97 }}
        className={`
          relative overflow-hidden
          flex items-center gap-3
          px-6 sm:px-8 py-3 sm:py-4
          rounded-xl
          text-sm sm:text-base font-medium tracking-wide
          border
          transition-colors duration-300
          ${
            progress === 100
              ? "bg-emerald-500 text-white border-emerald-500"
              : isDownloading
              ? "bg-transparent text-neutral-800 dark:text-neutral-100 border-neutral-300 dark:border-neutral-700"
              : `
                  bg-[var(--grad-primary)]
                  dark:bg-[var(--darkgrad-primary)]
                  text-white
                  border-transparent
                  hover:opacity-90
                `
          }
        `}
      >
        {/* Progress Bar */}
        {isDownloading && progress < 100 && (
          <motion.div
            className="
              absolute left-0 bottom-0 h-[2px]
              bg-[var(--grad-secondary)]
              dark:bg-[var(--darkgrad-secondary)]
            "
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.08 }}
          />
        )}

        {/* Icon */}
        <span className="relative z-10">
          {progress === 100 ? (
            <LuCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : isDownloading ? (
            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <LuArrowDownToLine className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </span>

        {/* Text */}
        <span className="relative z-10 whitespace-nowrap">
          {progress === 100
            ? "Downloaded"
            : isDownloading
            ? `Downloading ${progress}%`
            : "Download Resume"}
        </span>
      </motion.button>
    </div>
  );
};

export default DownloadButton;
