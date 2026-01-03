"use client";
import { useRef, useEffect, useCallback } from "react";
import useDarkMode from "@/app/hooks/useDarkMode";

export default function ParticleOverlayBackground() {
  const canvasRef = useRef(null);
  const animationId = useRef(null);
  const particles = useRef([]);

  const { isDarkMode, isLoaded } = useDarkMode();

  const PARTICLE_COUNT = 70;

  const getPalette = useCallback(() => {
  return isDarkMode
    ? [
        // Dark mode → soft white / light gray
        "rgba(255,255,255,0.35)",
        "rgba(210,210,210,0.25)",
      ]
    : [
        // Light mode → bluish + subtle accent
        "rgba(0, 122, 255, 0.25)",   // Soft Apple-like blue
        "rgba(0, 180, 216, 0.22)",   // Cyan / sky blue
        "rgba(80, 80, 80, 0.12)",    // Neutral gray for balance
      ];
}, [isDarkMode]);


  const createParticles = useCallback((width, height) => {
    const colors = getPalette();
    particles.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.6,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [getPalette]);

  const draw = useCallback((ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);

    particles.current.forEach((p) => {
      p.x += p.speedX;
      p.y += p.speedY;

      // wrap edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const { width, height } = canvas;
    draw(ctx, width, height);

    animationId.current = requestAnimationFrame(animate);
  }, [draw]);

  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId.current);
    };
  }, [animate, createParticles, isLoaded]);

  // re-create particles when mode changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    createParticles(canvas.width, canvas.height);
  }, [isDarkMode, createParticles]);

  if (!isLoaded) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-9 pointer-events-none"
    />
  );
}
