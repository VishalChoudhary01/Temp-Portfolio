"use client";

import React from "react";

const SparkleShineButton = () => {
  return (
    <button className="relative group px-12 py-6 bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
      <span className="relative z-10 text-white font-bold text-xl">
        Sparkle Shine
      </span>

      {/* Shine border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 shine-sparkle animate-rotate-shine-slow opacity-70 blur-md" />
      </div>

      {/* Inner overlay */}
      <div className="absolute inset-[3px] bg-gray-900 rounded-2xl z-0" />

      {/* Glow effect */}
      <div className="absolute inset-0 shine-sparkle animate-rotate-shine-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl" />
    </button>
  );
};

export default SparkleShineButton;
