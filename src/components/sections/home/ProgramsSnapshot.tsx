"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";
import { programs } from "@/data";

export function ProgramsSnapshot() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".home-prog-reveal");
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
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
    <section ref={containerRef} className="py-24 md:py-32 bg-surface">
      <Container>
        <EditorialGrid>
          
          <div className="col-span-4 md:col-span-12 lg:col-span-3 home-prog-reveal">
            <div className="flex items-center gap-3 mb-12 lg:mb-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                02 — Structure
              </span>
              <span className="w-8 h-[1px] bg-primary block" />
            </div>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col">
             
             <div className="flex flex-col border-t border-border">
               {programs.slice(0, 3).map((item, index) => (
                 <div key={item.id} className="home-prog-reveal group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-b border-border cursor-pointer relative">
                   <div className="flex items-start md:items-center gap-6 md:gap-12">
                     <span className="text-foreground-muted/40 font-mono text-sm tracking-widest group-hover:text-primary/50 transition-colors duration-300">
                       0{index + 1}
                     </span>
                     <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                       {item.title}
                     </h3>
                   </div>
                   <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-foreground-muted">
                     <span>{item.category}</span>
                     <span className="w-2 h-2 rounded-full bg-border group-hover:bg-primary transition-colors duration-300" />
                   </div>
                   <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                 </div>
               ))}
             </div>

             <div className="mt-12 flex justify-start home-prog-reveal">
               <Link href="/programs" className="group flex items-center gap-3 text-foreground font-bold tracking-widest text-xs uppercase hover:text-primary transition-colors duration-300">
                 View All Programs
                 <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:translate-x-2 transition-all duration-300" />
               </Link>
             </div>

          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
