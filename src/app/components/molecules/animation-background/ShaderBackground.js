import React, { useEffect, useRef, useState, useCallback } from 'react';
import useDarkMode from '@/app/hooks/useDarkMode';

export default function GridBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const { isDark } = useDarkMode();
  
  const animationFrameId = useRef();
  const particlesRef = useRef([]);
  const mousePositionRef = useRef({ x: -100, y: -100 });
  const isMouseDownRef = useRef(false);

  // Enhanced color palettes with darker lines in light mode
  const palettes = {
    dark: {
      grid: 'rgba(255, 255, 255, 0.9)',
      gridHighlight: 'rgba(120, 170, 255, 0.2)',
      particleGlow: 'rgba(100, 150, 255, 0.8)',
      particleSparkle: 'rgba(255, 255, 255, 0.9)'
    },
    light: {
      grid: 'rgba(30, 64, 175, 0.1)', // Darker blue for better visibility in light mode
      gridHighlight: 'rgba(59, 130, 246, 0.25)',
      particleGlow: 'rgba(59, 130, 246, 0.7)',
      particleSparkle: 'rgba(30, 64, 175, 0.8)'
    }
  };

  const drawGrid = useCallback((ctx, width, height) => {
    const palette = isDark ? palettes.dark : palettes.light;
    const gridSize = 30;
    
    ctx.lineWidth = 0.8; // Slightly thicker lines for better visibility
    
    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      const fadeFactorX = 1 - Math.abs((x - width / 2) / (width / 2)) * 0.5;
      
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      const rgbMatch = palette.grid.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const baseAlpha = parseFloat(palette.grid.match(/[\d.]+\)$/)[0].slice(0, -1) || '0.15');
      
      gradient.addColorStop(0, `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${baseAlpha * fadeFactorX})`);
      gradient.addColorStop(0.7, `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${baseAlpha * fadeFactorX * 0.6})`);
      gradient.addColorStop(1, `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, 0)`);
      
      ctx.strokeStyle = gradient;
      ctx.stroke();
    }
    
    // Draw horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      const verticalFade = 1 - Math.pow(y / height, 1.3);
      
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      
      const rgbMatch = palette.grid.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      const baseAlpha = parseFloat(palette.grid.match(/[\d.]+\)$/)[0].slice(0, -1) || '0.15');
      
      ctx.strokeStyle = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${baseAlpha * verticalFade})`;
      ctx.stroke();
    }
    
    // Draw subtle intersection points on hover
    if (!isMouseDownRef.current) {
      ctx.fillStyle = palette.gridHighlight;
      for (let x = 0; x <= width; x += gridSize) {
        for (let y = 0; y <= height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - mousePositionRef.current.x, 2) + 
            Math.pow(y - mousePositionRef.current.y, 2)
          );
          
          if (distance < 150) {
            const size = Math.max(0, (1 - distance / 150) * 3);
            if (size > 0) {
              ctx.beginPath();
              ctx.arc(x, y, size, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    }
  }, [isDark]);

  const createParticles = useCallback((x, y, count = 5) => {
    const palette = isDark ? palettes.dark : palettes.light;
    const gridSize = 30;
    
    // Find nearest grid intersection point
    const gridX = Math.round(x / gridSize) * gridSize;
    const gridY = Math.round(y / gridSize) * gridSize;
    
    const newParticles = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.5 + Math.random() * 1.5;
      const type = Math.random() > 0.7 ? 'sparkle' : Math.random() > 0.5 ? 'glow' : 'pulse';
      
      newParticles.push({
        x: gridX,
        y: gridY,
        size: type === 'sparkle' ? 1.5 : type === 'glow' ? 4 : 2,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        color: type === 'sparkle' ? palette.particleSparkle : palette.particleGlow,
        life: 1,
        maxLife: type === 'sparkle' ? 0.8 : type === 'glow' ? 1.2 : 1,
        type
      });
    }
    
    particlesRef.current.push(...newParticles);
  }, [isDark]);

  const drawParticles = useCallback((ctx) => {
    const particles = particlesRef.current;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      
      // Update particle position and life
      p.x += p.speedX;
      p.y += p.speedY;
      p.life -= 0.02;
      
      // Apply friction for smooth decay
      p.speedX *= 0.97;
      p.speedY *= 0.97;
      
      // Calculate opacity based on remaining life
      const alpha = p.life / p.maxLife;
      
      // Draw different particle types
      if (p.type === 'sparkle') {
        ctx.fillStyle = p.color.replace('0.8', alpha.toString()).replace('0.9', alpha.toString());
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect around sparkles
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, p.color.replace('0.9', (alpha * 0.8).toString()));
        gradient.addColorStop(1, p.color.replace('0.9', '0'));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      } 
      else if (p.type === 'glow') {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        gradient.addColorStop(0, p.color.replace('0.8', (alpha * 0.9).toString()));
        gradient.addColorStop(1, p.color.replace('0.8', '0'));
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      else { // pulse particles
        const pulseSize = p.size * (1 + Math.sin(Date.now() * 0.01) * 0.3);
        ctx.fillStyle = p.color.replace('0.8', (alpha * 0.6).toString());
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Remove particles that have ended their life
      if (p.life <= 0) {
        particles.splice(i, 1);
      }
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mousePositionRef.current = { x, y };
    
    // Create occasional particles on mouse movement
    if (Math.random() > 0.7) {
      createParticles(x, y, 1);
    }
  }, [createParticles]);

  const handleMouseDown = useCallback((e) => {
    isMouseDownRef.current = true;
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create particle burst on mouse down
    createParticles(x, y, 12);
  }, [createParticles]);

  const handleMouseUp = useCallback(() => {
    isMouseDownRef.current = false;
  }, []);

  const handleClick = useCallback((e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create particles at click location
    createParticles(x, y, 8);
  }, [createParticles]);

  // Animation loop
  const animate = useCallback((time, lastTime) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const container = containerRef.current;
    
    if (!canvas || !ctx || !container) {
      animationFrameId.current = requestAnimationFrame((t) => animate(t, time));
      return;
    }
    
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Update canvas dimensions if needed
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
    
    // Clear canvas with subtle fade effect
    ctx.fillStyle = isDark ? 'rgba(10, 10, 20, 0.05)' : 'rgba(255, 255, 255, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    drawGrid(ctx, width, height);
    
    // Draw particles
    drawParticles(ctx);
    
    // Continue animation loop
    animationFrameId.current = requestAnimationFrame((t) => animate(t, time));
  }, [drawGrid, drawParticles, isDark]);

  // Setup and cleanup
  useEffect(() => {
    setMounted(true);
    
    const lastTime = performance.now();
    animationFrameId.current = requestAnimationFrame((time) => animate(time, lastTime));
    
    // Handle mouse leave event
    const handleMouseLeave = () => {
      mousePositionRef.current = { x: -100, y: -100 };
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [animate]);

  // Redraw when dark mode changes
  useEffect(() => {
    if (containerRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const container = containerRef.current;
      
      if (canvas && ctx && container) {
        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        ctx.clearRect(0, 0, width, height);
        drawGrid(ctx, width, height);
      }
    }
  }, [isDark, drawGrid]);

  return (
    <div className="relative w-full h-screen  overflow-hidden">
      <div 
        ref={containerRef}
        className="relative w-full h-full cursor-pointer"
        style={{ background: 'transparent' }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            willChange: 'transform, opacity',
            background: 'transparent'
          }}
        />
      </div>
    </div>
  );
}