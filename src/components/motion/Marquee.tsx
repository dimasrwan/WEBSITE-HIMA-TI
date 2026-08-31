"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: number; // Pixels per frame
}

export function Marquee({ text, className = "", speed = 1 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    
    let xPos = 0;
    let animationFrameId: number;

    const render = () => {
      if (!textRef.current || !containerRef.current) return;
      
      const el = textRef.current;
      const rect = el.getBoundingClientRect();
      const halfWidth = rect.width / 2;

      xPos -= speed;
      
      // Reset position when half the content (one full copy) has scrolled
      if (Math.abs(xPos) >= halfWidth) {
        xPos = 0;
      }

      gsap.set(el, { x: xPos });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion, speed]);

  // We render the text twice to ensure seamless loop
  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden whitespace-nowrap flex items-center ${className}`}
      aria-label={text} // Screen reader reads this once
    >
      <div 
        ref={textRef} 
        className="flex gap-4 min-w-max pr-4" 
        aria-hidden="true" // Hide duplicated text from screen readers
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
