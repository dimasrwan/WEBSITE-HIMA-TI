"use client";

import { useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

import { Magnetic } from "@/components/ui/Magnetic";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Initial state setup for animation
    gsap.set(".hero-reveal", { y: 60, opacity: 0 });
    gsap.set(".hero-title-word", { y: "100%" });
    gsap.set(".hero-logo", { scale: 0.9, opacity: 0, rotate: -2 });
    gsap.set(".hero-line", { scaleX: 0, transformOrigin: "left center" });

    // Choreograph the entrance
    tl.to(".hero-title-word", {
      y: "0%",
      duration: 1.4,
      stagger: 0.15,
      ease: "power4.out"
    })
    .to(".hero-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.4,
      stagger: 0.15,
    }, "-=1.0")
    .to(".hero-line", {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=1.2")
    .to(".hero-logo", {
      scale: 1,
      opacity: 0.15, // Keep it subtle initially as an architectural watermark
      rotate: 0,
      duration: 2,
      ease: "expo.out"
    }, "-=1.4");

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden w-full pt-20 pb-24 md:pt-32">
      <Container>
        <EditorialGrid className="items-end relative z-10">
          
          {/* Main Typography Header (Full Width on Grid) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 lg:mb-20 flex flex-col justify-end">
             <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter leading-[0.85] text-foreground uppercase flex gap-4 overflow-hidden">
               <span className="hero-title-word block">HIMA</span>
               <span className="hero-title-word block text-foreground-muted">-TI</span>
             </h1>
             <div className="hero-line w-full h-[1px] bg-border mt-8 md:mt-16" />
          </div>

          {/* Institutional Details (Offset Left) */}
          <div className="col-span-4 md:col-span-5 lg:col-span-5 lg:col-start-1 flex flex-col gap-8 hero-reveal">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground-muted leading-snug">
              Himpunan Mahasiswa Teknologi Informasi
            </h2>
            
            <div className="flex flex-col gap-2 border-l-2 border-primary/40 pl-5">
              <p className="label-text">Fakultas Sains dan Teknologi</p>
              <p className="body-text">UIN Ar-Raniry Banda Aceh</p>
            </div>
            
            {/* Minimalist CTA */}
            <div className="mt-4 lg:mt-8 w-fit">
              <Magnetic>
                <a href="#about" className="btn-text inline-flex items-center gap-3 group p-4 -ml-4 rounded-full">
                  <span className="font-semibold tracking-widest uppercase text-xs text-foreground group-hover:text-primary transition-colors">Discover More</span>
                  <span className="w-10 h-[1px] bg-foreground group-hover:bg-primary transition-all duration-300 group-hover:w-16 group-hover:translate-x-2" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Visual Anchor Logo (Offset Right, acting as negative space balance) */}
          <div className="col-span-4 md:col-span-3 lg:col-span-6 lg:col-start-7 mt-16 md:mt-0 flex justify-end items-end h-full pointer-events-none">
            <div className="hero-logo relative w-64 h-64 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] opacity-15 grayscale">
              <Image 
                src="/images/logo/hima-ti-logo.png" 
                alt="Visual Anchor Logo" 
                fill 
                className="object-contain drop-shadow-2xl" 
                priority 
              />
            </div>
          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
