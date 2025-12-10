"use client";

import React from 'react';

const AdvancedShinyButton = ({ children = "Advanced Shiny Button" }) => {
  return (
    <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-500 bg-gradient-to-r from-gray-900 to-black rounded-2xl group hover:scale-105">
      
      {/* Main button content */}
      <span className="relative z-10 flex items-center">
        {children}
      </span>

      {/* Double shine layers */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `conic-gradient(
              from 0deg at 50% 50%,
              transparent 0deg,
              rgba(255,255,255,0.8) 60deg,
              rgba(255,255,255,1) 70deg,
              rgba(255,255,255,0.8) 80deg,
              transparent 90deg
            )`,
            animation: 'spin 3s linear infinite',
            filter: 'blur(12px)',
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: `conic-gradient(
              from 180deg at 50% 50%,
              transparent 0deg,
              rgba(255,255,255,0.6) 120deg,
              rgba(255,255,255,0.9) 150deg,
              rgba(255,255,255,0.6) 180deg,
              transparent 210deg
            )`,
            animation: 'spin 4s linear infinite reverse',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* Inner glow */}
      <div className="absolute inset-0.5     rounded-2xl bg-gradient-to-r from-gray-800 to-black z-0" />

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </button>
  );
};

export default AdvancedShinyButton;