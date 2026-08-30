"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;

    // Editorial text reveal on scroll
    const elements = gsap.utils.toArray<HTMLElement>(".about-reveal");
    
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
            start: "top 85%", // Triggers slightly before coming fully into view
            toggleActions: "play none none reverse",
          }
        }
      );
    });
    
    gsap.fromTo(".about-line", 
      { scaleX: 0 },
      { 
        scaleX: 1, 
        duration: 1.5, 
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".about-line",
          start: "top 90%",
        }
      }
    );

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section id="about" ref={containerRef} className="relative bg-surface">
      <Container>
        <EditorialGrid>
          
          {/* Editorial Section Header */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mb-12 lg:mb-24 about-reveal">
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-primary rounded-full block" />
              <h2 className="label-text">Identity</h2>
            </div>
            <div className="about-line w-full h-[1px] bg-border mt-8 origin-left" />
          </div>

          {/* Main Editorial Statement */}
          <div className="col-span-4 md:col-span-8 lg:col-span-10 lg:col-start-2 about-reveal">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-foreground">
              Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) adalah wadah organisasi mahasiswa tingkat program studi di Fakultas Sains dan Teknologi, Universitas Islam Negeri (UIN) Ar-Raniry Banda Aceh.
            </h3>
          </div>

          {/* Sub Detail / Negative Space Balance */}
          <div className="col-span-4 md:col-span-4 lg:col-span-4 lg:col-start-8 mt-12 md:mt-24 about-reveal">
            <p className="body-text">
              Kami berdedikasi sebagai pusat kolaborasi dan pergerakan mahasiswa Teknologi Informasi untuk mengembangkan potensi secara akademis, sosial, dan kepemimpinan.
            </p>
          </div>
          
        </EditorialGrid>
      </Container>
    </Section>
  );
}
