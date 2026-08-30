"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function OrganizationIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".org-intro-reveal", { y: 40, opacity: 0 });
    gsap.set(".org-intro-line", { scaleX: 0, transformOrigin: "left center" });

    tl.to(".org-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
    })
    .to(".org-intro-line", {
      scaleX: 1,
      duration: 1,
      ease: "power3.inOut"
    }, "-=0.8");
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-28 md:pt-40 pb-16 md:pb-24">
      <Container>
        <EditorialGrid>
          
          {/* Label & Numbering with Orange Accent */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 lg:mb-20 org-intro-reveal flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              08 — Organization
            </span>
            <div className="org-intro-line hidden md:block flex-1 h-[1px] bg-border" />
          </div>

          {/* Large Introduction Typography */}
          <div className="col-span-4 md:col-span-7 lg:col-span-10 org-intro-reveal">
            <h1 className="text-4xl md:text-6xl lg:text-[6rem] font-semibold tracking-tighter leading-[1.05] text-foreground">
              Organizational identity and structural overview.
            </h1>
          </div>
          
        </EditorialGrid>
      </Container>
    </Section>
  );
}
