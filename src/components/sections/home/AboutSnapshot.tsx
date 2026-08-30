"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function AboutSnapshot() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".home-about-reveal");
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 lg:col-span-3 home-about-reveal">
            <div className="flex items-center gap-3 mb-8 lg:mb-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                01 — Identity
              </span>
              <span className="w-8 h-[1px] bg-primary block" />
            </div>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col gap-12 lg:pl-12 lg:border-l lg:border-border">
             <div className="home-about-reveal">
               <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tighter leading-[1.05] text-foreground">
                 We are the epicenter of <span className="text-foreground-muted">information technology</span> movement at UIN Ar-Raniry.
               </h2>
             </div>

             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 home-about-reveal mt-8">
               
               <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-foreground-muted">
                 <span className="flex items-center gap-3">
                   <span className="w-2 h-2 bg-primary" /> HIMA-TI
                 </span>
                 <span className="flex items-center gap-3 pl-5">
                   <span className="w-1 h-1 bg-border" /> Teknologi Informasi
                 </span>
                 <span className="flex items-center gap-3 pl-9">
                   <span className="w-1 h-1 bg-border" /> Fakultas Sains dan Teknologi
                 </span>
                 <span className="flex items-center gap-3 pl-14">
                   <span className="w-1 h-1 bg-border" /> UIN Ar-Raniry Banda Aceh
                 </span>
               </div>

               <Link href="/about" className="group flex items-center gap-3 text-foreground font-bold tracking-widest text-xs uppercase hover:text-primary transition-colors duration-300">
                 Read Manifesto
                 <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:translate-x-2 transition-all duration-300" />
               </Link>

             </div>
          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
