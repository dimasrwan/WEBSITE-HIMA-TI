"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";
import { events } from "@/data";

export function EventsSnapshot() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".home-evt-reveal");
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
          
          <div className="col-span-4 md:col-span-12 lg:col-span-3 home-evt-reveal">
            <div className="flex items-center gap-3 mb-12 lg:mb-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                03 — Chronology
              </span>
              <span className="w-8 h-[1px] bg-primary block" />
            </div>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-9 relative">
             <div className="absolute top-0 bottom-0 left-[2.5rem] md:left-[8rem] w-[1px] bg-border hidden md:block" />
             
             <div className="flex flex-col gap-16 md:gap-24">
               {events.slice(0, 2).map((item) => (
                 <div key={item.id} className="home-evt-reveal group relative flex flex-col md:flex-row gap-6 md:gap-24 cursor-pointer">
                   <div className="flex flex-col md:w-32 flex-shrink-0 relative z-10 md:bg-background">
                     <span className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground group-hover:text-primary transition-colors duration-500">
                       {item.date.split(' ')[0]}
                     </span>
                     <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted mt-2">
                       {item.date.split(' ').slice(1).join(' ')}
                     </span>
                   </div>

                   <div className="absolute top-6 md:top-8 left-[2.5rem] md:left-[8rem] w-3 h-3 rounded-full border-2 border-border bg-background -translate-x-[6px] md:-translate-x-[6px] group-hover:border-primary group-hover:scale-150 transition-all duration-300 hidden md:block z-20" />

                   <div className="flex flex-col gap-4 z-10 md:pt-4">
                     <span className="text-xs font-bold tracking-widest uppercase border border-border px-3 py-1 w-fit bg-background text-foreground-muted group-hover:border-primary/50 transition-colors duration-300">
                       {item.category}
                     </span>
                     <h3 className="text-2xl md:text-4xl font-medium tracking-tight text-foreground group-hover:translate-x-2 transition-transform duration-500 ease-out">
                       {item.title}
                     </h3>
                     <p className="body-text text-foreground-muted max-w-lg leading-relaxed">
                       {item.excerpt}
                     </p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="mt-16 md:mt-24 md:pl-56 flex justify-start home-evt-reveal">
               <Link href="/events" className="group flex items-center gap-3 text-foreground font-bold tracking-widest text-xs uppercase hover:text-primary transition-colors duration-300">
                 Explore Timeline
                 <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:translate-x-2 transition-all duration-300" />
               </Link>
             </div>

          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
