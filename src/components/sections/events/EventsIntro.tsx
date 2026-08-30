"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function EventsIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".evt-intro-reveal", { y: 50, opacity: 0 });

    tl.to(".evt-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.15,
    });
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-28 md:pt-40 pb-16 md:pb-20">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-8 lg:col-span-11 evt-intro-reveal flex flex-col gap-8 md:gap-10">
             <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-primary rounded-full block animate-pulse" style={{ animationDuration: '3s' }} />
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  10 — Events
                </span>
             </div>
             
             <h1 className="text-4xl md:text-6xl lg:text-[7rem] font-semibold tracking-tighter leading-[0.95] text-foreground">
               Chronicles of momentum and <span className="italic text-foreground-muted font-normal">activity</span>.
             </h1>
          </div>

          {/* Simple subtle divider to connect with timeline */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-12 md:mt-24 evt-intro-reveal">
             <div className="w-full h-[1px] bg-border" />
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
