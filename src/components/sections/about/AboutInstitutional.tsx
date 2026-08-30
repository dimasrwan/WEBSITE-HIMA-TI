"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function AboutInstitutional() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".inst-reveal");
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
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.utils.toArray<HTMLElement>(".inst-line").forEach((el) => {
      gsap.fromTo(el,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          }
        }
      );
    });
  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <Container>
        <EditorialGrid>
          
          {/* Identity Block */}
          <div className="col-span-4 md:col-span-4 lg:col-span-6 inst-reveal flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="w-2 h-2 bg-primary rounded-full block" />
              <h2 className="label-text">Identity</h2>
            </div>
            <p className="text-2xl md:text-3xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-foreground">
              Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) adalah wadah organisasi mahasiswa tingkat program studi.
            </p>
          </div>

          {/* Institutional Context / Vertical Flow */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-8 mt-16 md:mt-0 inst-reveal">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-2 h-2 bg-border rounded-full block" />
              <h2 className="label-text text-foreground-muted">Institutional Context</h2>
            </div>
            
            <div className="relative pl-8 border-l border-border flex flex-col gap-12 py-4">
               {/* Decorative Orange Line Overlap - Controlled Orange Accent */}
               <div className="inst-line absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary origin-top" />
               
               <div className="flex flex-col gap-2">
                 <span className="small-text uppercase tracking-widest text-primary font-medium">Program Studi</span>
                 <p className="text-xl md:text-2xl font-medium text-foreground">Teknologi Informasi</p>
               </div>
               
               <div className="flex flex-col gap-2">
                 <span className="small-text uppercase tracking-widest text-primary font-medium">Fakultas</span>
                 <p className="text-xl md:text-2xl font-medium text-foreground">Sains dan Teknologi</p>
               </div>
               
               <div className="flex flex-col gap-2">
                 <span className="small-text uppercase tracking-widest text-primary font-medium">Universitas</span>
                 <p className="text-xl md:text-2xl font-medium text-foreground">UIN Ar-Raniry Banda Aceh</p>
               </div>
            </div>
            
            {/* CTA */}
            <div className="mt-16 inst-reveal">
              <a href="/organization" className="group inline-flex items-center gap-4 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                <span className="text-sm font-semibold tracking-widest uppercase">Explore Organization</span>
                <span className="text-primary transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
