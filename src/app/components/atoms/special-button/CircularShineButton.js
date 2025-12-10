"use client";

import React from "react";

const CircularShineButton = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button className="relative group px-8 py-4 bg-gray-900 rounded-lg overflow-hidden">

        {/* Button Text */}
        <span className="relative z-10 text-white font-bold text-lg">
          Circular Shine Button
        </span>

        {/* Shine Wrapper */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div
            className="
              absolute inset-0 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-500
              shine-conic
              animate-rotate-shine
            "
          />
        </div>

        {/* Inner Mask */}
        <div className="absolute inset-[2px] bg-gray-900 rounded-lg z-0" />
      </button>
    </div>
  );
};

export default CircularShineButton;
