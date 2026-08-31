"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 1 = normal scroll, < 1 = slower, > 1 = faster. Generally use small values like 0.8 or 1.2
}

export function Parallax({ children, className = "", speed = 0.9 }: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // Disable on touch devices for performance

    // Calculate Y movement based on speed. 
    // If speed is 0.8, it means it moves 20% slower than scroll.
    const yPercent = (1 - speed) * 100;

    gsap.fromTo(targetRef.current,
      { yPercent: -yPercent },
      {
        yPercent: yPercent,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // when top of container hits bottom of viewport
          end: "bottom top",   // when bottom of container hits top of viewport
          scrub: true,
        }
      }
    );
  }, { scope: containerRef, dependencies: [shouldReduceMotion, speed] });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={targetRef} className="absolute inset-0 w-full h-full scale-[1.15]">
        {children}
      </div>
    </div>
  );
}
