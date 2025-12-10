"use client";

import React, { useState } from "react";

const AdvancedCircularShineButton = () => {
  const [shineType, setShineType] = useState("continuous");

  const shineConfigs = {
    continuous: {
      gradientClass: "shine-continuous",
      speedClass: "animate-rotate-shine-fast",
    },
    double: {
      gradientClass: "shine-double",
      speedClass: "animate-rotate-shine-medium",
    },
    sparkle: {
      gradientClass: "shine-sparkle",
      speedClass: "animate-rotate-shine-slow",
    },
  };

  const currentConfig = shineConfigs[shineType];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4 space-y-8">
      {/* Shine Type Selector */}
      <div className="flex space-x-4 mb-8">
        {Object.keys(shineConfigs).map((type) => (
          <button
            key={type}
            onClick={() => setShineType(type)}
            className={`px-4 py-2 rounded-lg capitalize ${
              shineType === type
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Main Button */}
      <button className="relative group px-12 py-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
        {/* Button text */}
        <span className="relative z-10 text-white font-bold text-xl tracking-wide">
          Circular Shine Effect
        </span>

        {/* Moving shine border */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div
            className={`absolute inset-0 opacity-70 rounded-2xl ${currentConfig.gradientClass} ${currentConfig.speedClass} blur-md`}
          />
        </div>

        {/* Inner overlay to hide shine inside the button */}
        <div className="absolute inset-[3px] bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl z-0" />

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${currentConfig.gradientClass} ${currentConfig.speedClass}`}
        />
      </button>

      {/* Instructions */}
      <p className="text-gray-400 text-center max-w-md">
        The shining effect continuously moves around the entire border of the
        button. Hover to see the glow effect and click the buttons above to
        change shine styles.
      </p>
    </div>
  );
};

export default AdvancedCircularShineButton;
