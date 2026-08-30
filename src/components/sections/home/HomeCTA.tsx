"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

import { Magnetic } from "@/components/ui/Magnetic";

export function HomeCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    gsap.fromTo(".home-cta-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <section ref={containerRef} className="py-32 md:py-48 bg-surface">
      <Container className="flex flex-col items-center text-center">
        
        <div className="flex items-center gap-4 home-cta-reveal mb-8 md:mb-12">
           <span className="w-2 h-2 bg-primary rounded-full block" />
           <span className="text-primary font-bold tracking-widest text-xs uppercase">
             Join The Movement
           </span>
           <span className="w-2 h-2 bg-primary rounded-full block" />
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-foreground max-w-4xl home-cta-reveal">
          SHAPING THE FUTURE <span className="text-foreground-muted">OF TECHNOLOGY.</span>
        </h2>

        <div className="home-cta-reveal mt-16 md:mt-24">
          <Magnetic>
            <Link 
              href="/about" 
              className="group flex flex-col items-center gap-6 cursor-pointer"
            >
              <span className="text-sm font-bold tracking-widest uppercase text-foreground group-hover:text-primary transition-colors duration-300">
                Discover Our Identity
              </span>
              <div className="w-px h-16 bg-border group-hover:h-24 group-hover:bg-primary transition-all duration-500 ease-out" />
            </Link>
          </Magnetic>
        </div>

      </Container>
    </section>
  );
}

