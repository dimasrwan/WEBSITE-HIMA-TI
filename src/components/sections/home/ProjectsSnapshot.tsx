"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";
import { projects } from "@/data";

export function ProjectsSnapshot() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".home-proj-reveal");
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
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 lg:col-span-3 home-proj-reveal">
            <div className="flex items-center gap-3 mb-12 lg:mb-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                04 — Creation
              </span>
              <span className="w-8 h-[1px] bg-primary block" />
            </div>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col gap-12">
             
             <div className="home-proj-reveal group flex flex-col cursor-pointer">
               
               <div className="w-full aspect-square md:aspect-[21/9] bg-background border border-border flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-surface grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url(${projects[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />

                  {/* Accent corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
               </div>
               
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-6">
                 <div className="flex flex-col gap-3">
                   <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                     {projects[0].title}
                   </h3>
                   <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted">
                     {projects[0].category} — {projects[0].year}
                   </span>
                 </div>
                 
                 <div className="flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
                   <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted group-hover:text-primary transition-colors duration-300">
                     {projects[0].technologies[0]}
                   </span>
                 </div>
               </div>

             </div>

             <div className="mt-4 flex justify-start home-proj-reveal">
               <Link href="/projects" className="group flex items-center gap-3 text-foreground font-bold tracking-widest text-xs uppercase hover:text-primary transition-colors duration-300">
                 View Portfolio
                 <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:translate-x-2 transition-all duration-300" />
               </Link>
             </div>

          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
