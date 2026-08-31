"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    // Page Entrance - Animates from 0 if JS runs, otherwise stays visible (default CSS)
    gsap.from(containerRef.current, {
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    });
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
