"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function NewsIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    gsap.set(".news-intro-reveal", { y: 60, opacity: 0 });
    gsap.set(".news-intro-line", { scaleX: 0, transformOrigin: "left center" });

    tl.to(".news-intro-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.15,
    })
    .to(".news-intro-line", {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=1.0");
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="pt-28 md:pt-40 pb-8 md:pb-16 bg-background">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 lg:col-span-10 news-intro-reveal flex flex-col gap-6 md:gap-8">
             <div className="flex items-center gap-4">
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  12 — News
                </span>
                <span className="w-12 h-[1px] bg-primary" />
             </div>
             
             <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] text-foreground uppercase">
               Newsroom
             </h1>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-12 mt-8 md:mt-12 news-intro-reveal">
             <div className="news-intro-line w-full h-[1px] bg-border" />
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
