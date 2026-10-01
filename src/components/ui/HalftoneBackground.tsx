"use client";

import React, { useEffect, useRef } from "react";

interface HalftoneBackgroundProps {
  className?: string;
  intensity?: "hero" | "subtle";
}

export default function HalftoneBackground({
  className = "",
  intensity = "hero",
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
    const isHero = intensity === "hero";
    const spacing = isHero ? 22 : 28; // Grid spacing in px
    const maxRadius = isHero ? 4.2 : 2.8;

    const render = () => {
      time += prefersReducedMotion ? 0 : 0.006;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      // Compute wave centers & organic flow fields
      const centerX1 = width * (0.65 + Math.sin(time * 0.4) * 0.15);
      const centerY1 = height * (0.45 + Math.cos(time * 0.5) * 0.15);

      const centerX2 = width * (0.3 + Math.cos(time * 0.3) * 0.12);
      const centerY2 = height * (0.7 + Math.sin(time * 0.35) * 0.15);

      const mousePxX = mouse.x * width;
      const mousePxY = mouse.y * height;

      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        for (let j = 0; j < rows; j++) {
          const y = j * spacing;

          // Distance to primary dynamic wave field
          const d1 = Math.hypot(x - centerX1, y - centerY1);
          const d2 = Math.hypot(x - centerX2, y - centerY2);
          const dMouse = Math.hypot(x - mousePxX, y - mousePxY);

          // Wave field equation with harmonic undulating layers
          const wave1 = Math.sin(d1 * 0.012 - time * 1.5);
          const wave2 = Math.cos(d2 * 0.015 - time * 1.2);
          const wave3 = Math.sin((x * 0.008 + y * 0.008) + time * 0.8);
          
          // Mouse proximity ripple effect
          const mouseInfluence = Math.max(0, 1 - dMouse / 280) * 0.6;

          // Composite intensity (0 to 1)
          let val = (wave1 * 0.45 + wave2 * 0.35 + wave3 * 0.2 + mouseInfluence);
          // Scale & normalize to range [0, 1]
          val = (val + 1) / 2;

          if (val < 0.12) continue; // Skip near-invisible dots to save draw calls

          const radius = Math.max(0.6, val * maxRadius);

          // Dark editorial color palette:
          // Near background: dark charcoal gray rgba(39, 39, 42, 0.4)
          // Mid intensity: deep amber/burnt orange rgba(194, 65, 12, 0.55)
          // High peaks: signature HIMA-TI orange rgba(249, 115, 22, 0.8)
          let fillStyle: string;
          if (val > 0.72) {
            const alpha = isHero ? (0.45 + val * 0.4) : (0.25 + val * 0.25);
            fillStyle = `rgba(249, 115, 22, ${alpha.toFixed(2)})`; // #F97316
          } else if (val > 0.45) {
            const alpha = isHero ? 0.35 : 0.2;
            fillStyle = `rgba(217, 84, 18, ${alpha})`; // Deep orange-red
          } else {
            const alpha = isHero ? 0.22 : 0.12;
            fillStyle = `rgba(113, 113, 122, ${alpha})`; // Subtle gray #71717A
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

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-90 transition-opacity duration-700"
      />
      {/* Subtle radial vignette gradient to seamlessly integrate with dark #0A0A0A background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-[#0A0A0A]/90 pointer-events-none" />
    </div>
  );
}
