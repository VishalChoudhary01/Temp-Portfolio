"use client";
import React from "react";

const SimpleCircularShineButton = ({ children = "Click Me" }) => {
  return (
    <button className="relative px-8 py-4 bg-black rounded-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
      {/* Button text */}
      <span className="relative z-10 text-white font-semibold">
        {children}
      </span>

      {/* Circular shine effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 shine-ring animate-rotate-shine"
      />

      {/* Inner mask */}
      <div className="absolute inset-[1.5px] bg-black rounded-xl z-0" />
    </button>
  );
};

export default SimpleCircularShineButton;
