"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  variant?: "fade-up" | "fade" | "scale-up";
}

export function Reveal({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1.2,
  yOffset = 30,
  variant = "fade-up"
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const fromState: gsap.TweenVars = { opacity: 0 };
    const toState: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" };

    if (variant === "fade-up") {
      fromState.y = yOffset;
      toState.y = 0;
    } else if (variant === "scale-up") {
      fromState.y = yOffset;
      fromState.scale = 0.95;
      toState.y = 0;
      toState.scale = 1;
      toState.ease = "power4.out";
    }

    toState.scrollTrigger = {
      trigger: containerRef.current,
      start: "top 85%",
      toggleActions: "play none none reverse",
    };
    
    gsap.fromTo(containerRef.current, fromState, toState);

  }, { scope: containerRef, dependencies: [shouldReduceMotion, variant, yOffset, delay, duration] });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
