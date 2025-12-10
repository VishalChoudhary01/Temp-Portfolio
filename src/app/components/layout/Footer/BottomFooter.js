"use client";

import React from 'react';

export default function BottomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 border-t border-gray-400/40 dark:border-gray-700/30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="md:text-sm text-[0.75rem]   text-h3 dark:text-Head5dark text-center md:text-left">
          © {currentYear} Vishal Kumar Choudhary. Crafted with precision & passion.
        </p>
        <div className="flex items-center gap-4 text-xs text-h3 dark:text-Head5dark">
          <span className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer">
            Frontend Developer
          </span>
          <span>•</span>
          <span className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer">
            React Specialist
          </span>
        </div>
      </div>
    </div>
  );
}