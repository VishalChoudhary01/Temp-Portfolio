import React, { useEffect, useRef, useState, useCallback } from 'react';
import useDarkMode from '@/app/hooks/useDarkMode';

export default function GridBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { isDarkMode, isLoaded } = useDarkMode(); 
  
  const animationFrameId = useRef();

  const getCurrentPalette = useCallback(() => {
    return isDarkMode ? {
      bgSolid: '#050505', // Pure dark black
      grid: 'rgba(255, 255, 255, 0.08)', // Subtle white grid
    } : {
      bgSolid: '#ffffff', // Pure white background
      grid: 'rgba(0, 0, 0, 0.06)', // Subtle black grid
    };
  }, [isDarkMode]);

  const drawGrid = useCallback((ctx, width, height) => {
    const palette = getCurrentPalette();
    const gridSize = 30;
    
    // Clear with solid background
    ctx.fillStyle = palette.bgSolid;
    ctx.fillRect(0, 0, width, height);
    
    ctx.lineWidth = 0.5; // Thinner lines
    
    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      const rgbMatch = palette.grid.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const baseAlpha = parseFloat(palette.grid.match(/[\d.]+\)$/)?.[0]?.slice(0, -1) || '0.08');
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      
      ctx.strokeStyle = `rgba(${rgbMatch?.[1] || '0'}, ${rgbMatch?.[2] || '0'}, ${rgbMatch?.[3] || '0'}, ${baseAlpha})`;
      ctx.stroke();
    }
    
    // Draw horizontal lines with fade effect
    for (let y = 0; y <= height; y += gridSize) {
      const verticalProgress = y / height;
      // Strong fade at bottom - starts at 70% height
      let verticalFade = 1;
      if (verticalProgress > 0.7) {
        // From 70% to 100%, fade from 1 to 0
        const fadeProgress = (verticalProgress - 0.7) / 0.3;
        verticalFade = 1 - Math.pow(fadeProgress, 2); // Quadratic fade for smoothness
      }
      
      const rgbMatch = palette.grid.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const baseAlpha = parseFloat(palette.grid.match(/[\d.]+\)$/)?.[0]?.slice(0, -1) || '0.08');
      
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      
      ctx.strokeStyle = `rgba(${rgbMatch?.[1] || '0'}, ${rgbMatch?.[2] || '0'}, ${rgbMatch?.[3] || '0'}, ${baseAlpha * verticalFade})`;
      ctx.stroke();
    }
  }, [getCurrentPalette]);

  // Animation loop
  const animate = useCallback((time) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const container = containerRef.current;
    
    if (!canvas || !ctx || !container) {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      return;
    }
    
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    
    drawGrid(ctx, width, height);
    
    animationFrameId.current = requestAnimationFrame(animate);
  }, [drawGrid]);

  // Setup animation
  useEffect(() => {
    if (!isLoaded) return;
    
    setMounted(true);
    animationFrameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, isLoaded]);

  // Handle resize and dark mode changes
  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const container = containerRef.current;
    
    if (canvas && ctx && container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      drawGrid(ctx, rect.width, rect.height);
    }
  }, [isDarkMode, isLoaded, drawGrid]);

  // Show nothing while loading
  if (!isLoaded) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0 bg-transparent" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full h-full"
      >
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}