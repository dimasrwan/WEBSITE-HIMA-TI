"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = "" }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    // Disable horizontal scroll on mobile for better UX unless strictly needed.
    // For this implementation, we allow it on tablet and desktop.
    if (window.innerWidth < 768) return; 

    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Calculate how far to scroll horizontally
    // It's the total width of the content minus the width of the viewport
    const getScrollAmount = () => {
      return -(content.scrollWidth - window.innerWidth);
    };

    const tween = gsap.to(content, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${content.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true, // Recalculates on resize
      }
    });

    return () => {
      tween.kill();
    };
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  // On mobile (or when reduced motion is on), this gracefully degrades to standard vertical/horizontal overflow based on CSS
  return (
    <section ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div 
        ref={contentRef} 
        className="flex md:w-max min-h-screen items-center px-4 md:px-12 lg:px-24 flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-0"
      >
        {children}
      </div>
    </section>
  );
}
