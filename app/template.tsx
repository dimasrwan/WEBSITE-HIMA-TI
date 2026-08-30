"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) {
      gsap.set(containerRef.current, { opacity: 1 });
      return;
    }
    
    // Page Entrance
    gsap.fromTo(containerRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <div ref={containerRef} className="opacity-0 min-h-screen flex flex-col">
      {children}
    </div>
  );
}
