"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function ProjectsIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".proj-intro-reveal", { y: 60, opacity: 0 });

    tl.to(".proj-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.15,
    });
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-28 md:pt-40 pb-16 md:pb-24 bg-background border-b border-border">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 lg:col-span-10 proj-intro-reveal flex flex-col gap-6 md:gap-8">
             <div className="flex items-center gap-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  11 — Projects
                </span>
                <span className="w-12 h-[1px] bg-primary" />
             </div>
             
             <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] text-foreground uppercase">
               Work <span className="text-foreground-muted block lg:inline">In Progress</span>
             </h1>
          </div>

          <div className="col-span-4 md:col-span-8 lg:col-span-6 mt-8 md:mt-12 proj-intro-reveal">
             <p className="body-text text-foreground-muted text-lg md:text-xl leading-relaxed">
               Showcase of technical creations, institutional platforms, and developmental initiatives.
             </p>
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
