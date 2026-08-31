"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Split text by space for word-by-word reveal
  const words = text.split(" ");

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    gsap.fromTo(".text-reveal-word",
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: containerRef, dependencies: [shouldReduceMotion, text] });

  return (
    <h1 ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-2 lg:mr-4 mb-1 lg:mb-2">
          <span className="text-reveal-word inline-block">{word}</span>
        </span>
      ))}
    </h1>
  );
}
