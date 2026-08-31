"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      }
    });

    return () => {
      tl.kill();
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-50 pointer-events-none">
      <div 
        ref={progressRef}
        className="w-full h-full bg-primary origin-left scale-x-0"
      />
    </div>
  );
}
