"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function Magnetic({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", { duration: 1, ease: "power4.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 1, ease: "power4.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      // Subtle magnetic pull (max ~5-8px)
      xTo(x * 0.1);
      yTo(y * 0.1);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
