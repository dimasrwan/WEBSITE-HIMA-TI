"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function ProgramsIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".prog-intro-reveal", { y: 60, opacity: 0 });
    gsap.set(".prog-intro-line", { scaleX: 0, transformOrigin: "left center" });

    tl.to(".prog-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.15,
    })
    .to(".prog-intro-line", {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=1.0");
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-28 md:pt-40 pb-16 md:pb-24">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 prog-intro-reveal flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-border pb-12 md:pb-16 relative">
             <div className="flex flex-col gap-6 md:gap-8 max-w-3xl">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  09 — Programs
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-semibold tracking-tighter leading-[0.9] text-foreground uppercase">
                  Program<br/>Work
                </h1>
             </div>
             <div className="md:w-1/3 text-foreground-muted body-text text-lg pb-2">
               Archive of structural activities, initiatives, and professional development programs.
             </div>
             
             {/* Base animating line - emphasizing the structure */}
             <div className="prog-intro-line absolute bottom-[-1px] left-0 w-full h-[1px] bg-primary/40 origin-left" />
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
