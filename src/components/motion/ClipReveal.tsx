"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function ClipReveal({ children, className = "", delay = 0, direction = "up" }: ClipRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) {
      gsap.set(containerRef.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
      return;
    }

    let clipStart = "";
    switch (direction) {
      case "up":
        clipStart = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        break;
      case "down":
        clipStart = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
        break;
      case "left":
        clipStart = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
        break;
      case "right":
        clipStart = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
        break;
    }
    
    gsap.from(containerRef.current, {
      clipPath: clipStart,
      duration: 1.5,
      delay,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
