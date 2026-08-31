"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface LineRevealProps {
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "center";
}

export function LineReveal({ 
  className = "", 
  delay = 0, 
  duration = 1.2,
  direction = "left" 
}: LineRevealProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) {
      gsap.set(lineRef.current, { scaleX: 1 });
      return;
    }

    let origin = "left";
    if (direction === "right") origin = "right";
    if (direction === "center") origin = "center";

    gsap.fromTo(lineRef.current,
      { scaleX: 0, transformOrigin: origin },
      {
        scaleX: 1,
        duration,
        delay,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: lineRef, dependencies: [shouldReduceMotion, direction, delay, duration] });

  return (
    <div ref={lineRef} className={`w-full bg-border origin-${direction} ${className}`} />
  );
}
