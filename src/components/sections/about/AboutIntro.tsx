"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function AboutIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".about-intro-reveal", { y: 40, opacity: 0 });
    gsap.set(".about-intro-line", { scaleX: 0, transformOrigin: "left center" });

    tl.to(".about-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
    })
    .to(".about-intro-line", {
      scaleX: 1,
      duration: 1,
      ease: "power3.inOut"
    }, "-=0.8");
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-24 md:pt-40 pb-16 md:pb-24">
      <Container>
        <EditorialGrid>
          
          {/* Label & Numbering with Orange Accent Refinement */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 lg:mb-20 about-intro-reveal flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              01 — About HIMA-TI
            </span>
            <div className="about-intro-line hidden md:block flex-1 h-[1px] bg-border" />
          </div>

          {/* Large Introduction Typography */}
          <div className="col-span-4 md:col-span-7 lg:col-span-10 about-intro-reveal">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-foreground">
              Understanding the organization behind the community.
            </h1>
          </div>
          
        </EditorialGrid>
      </Container>
    </Section>
  );
}
