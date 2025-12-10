"use client";

import React from "react";

const DoubleShineButton = () => {
  return (
    <button className="relative group px-12 py-6 bg-gray-900 rounded-2xl overflow-hidden  cursor-pointer transition-transform duration-300">
      <span className="relative z-10 text-white font-bold text-xl">
        Double Shine
      </span>

      {/* Shine border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 shine-double animate-rotate-shine-medium opacity-70 blur-md" />
      </div>

      {/* Inner overlay */}
      <div className="absolute inset-[2px] bg-gray-900 group-hover:bg-gray-950 transition-all rounded-2xl z-0" />

      {/* Glow effect */}
      <div className="absolute inset-0 shine-double animate-rotate-shine-medium opacity-0 transition-opacity duration-500 blur-xl rounded-2xl" />
    </button>
  );
};

export default DoubleShineButton;
