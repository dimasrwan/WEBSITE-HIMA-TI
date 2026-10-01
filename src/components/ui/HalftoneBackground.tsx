"use client";

import React, { useEffect, useRef } from "react";

interface HalftoneBackgroundProps {
  className?: string;
  intensity?: "hero" | "subtle" | "global";
}

export default function HalftoneBackground({
  className = "",
  intensity = "global",
}: HalftoneBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates (normalized 0..1 or center default)
    const mouse = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.targetX = (e.clientX - rect.left) / width;
        mouse.targetY = (e.clientY - rect.top) / height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;
    const isGlobal = intensity === "global";
    const isHero = intensity === "hero";
    const spacing = isGlobal ? 24 : isHero ? 22 : 28; // Grid spacing in px
    const maxRadius = isGlobal ? 3.6 : isHero ? 4.2 : 2.8;

    const render = () => {
      time += prefersReducedMotion ? 0 : 0.003; // Smooth visible flowing motion

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      // Dynamic wave epicenters
      const centerX1 = width * (0.62 + Math.sin(time * 0.5) * 0.18);
      const centerY1 = height * (0.45 + Math.cos(time * 0.6) * 0.16);

      const centerX2 = width * (0.28 + Math.cos(time * 0.4) * 0.14);
      const centerY2 = height * (0.68 + Math.sin(time * 0.45) * 0.16);

      const mousePxX = mouse.x * width;
      const mousePxY = mouse.y * height;

      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        for (let j = 0; j < rows; j++) {
          const y = j * spacing;

          // Distance to wave epicenters & mouse
          const d1 = Math.hypot(x - centerX1, y - centerY1);
          const d2 = Math.hypot(x - centerX2, y - centerY2);
          const dMouse = Math.hypot(x - mousePxX, y - mousePxY);

          // Flowing wave oscillations
          const wave1 = Math.sin(d1 * 0.014 - time * 1.2);
          const wave2 = Math.cos(d2 * 0.016 - time * 0.9);
          const wave3 = Math.sin((x * 0.006 + y * 0.006) + time * 0.7);
          
          // Enhanced mouse proximity ripple & glow effect (15% wider radius: 300px)
          const mouseInfluence = Math.max(0, 1 - dMouse / 300) * 0.55;
          const mouseWave = Math.sin(dMouse * 0.02 - time * 1.5) * Math.max(0, 1 - dMouse / 300) * 0.15;

          // Composite intensity (0 to 1)
          let val = (wave1 * 0.42 + wave2 * 0.33 + wave3 * 0.18 + mouseInfluence + mouseWave);
          val = (val + 1) / 2;

          if (val < 0.1) continue;

          const radius = Math.max(0.6, val * maxRadius);

          // Softened Dark Editorial Palette
          let fillStyle: string;
          if (val > 0.7) {
            const alpha = (isGlobal || isHero) ? (0.32 + val * 0.3) : (0.18 + val * 0.18);
            fillStyle = `rgba(249, 115, 22, ${alpha.toFixed(2)})`; // Softened HIMA-TI Orange #F97316
          } else if (val > 0.42) {
            const alpha = (isGlobal || isHero) ? 0.25 : 0.14;
            fillStyle = `rgba(217, 84, 18, ${alpha})`; // Deep Amber
          } else {
            const alpha = (isGlobal || isHero) ? 0.15 : 0.08;
            fillStyle = `rgba(113, 113, 122, ${alpha})`; // Charcoal Gray
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = fillStyle;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  const isGlobal = intensity === "global";

  return (
    <div
      className={`${
        isGlobal
          ? "fixed inset-0 z-0 pointer-events-none"
          : "absolute inset-0 overflow-hidden pointer-events-none"
      } ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 transition-opacity duration-700"
      />
      {/* Soft Radial Vignette for focused center content */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(10, 10, 10, 0.45) 75%, rgba(10, 10, 10, 0.88) 100%)"
        }}
      />
      {/* Side edge softening */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-transparent to-[#0A0A0A]/85 pointer-events-none" />
      {/* Top & Bottom depth gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-transparent to-[#0A0A0A]/85 pointer-events-none" />
    </div>
  );
}



