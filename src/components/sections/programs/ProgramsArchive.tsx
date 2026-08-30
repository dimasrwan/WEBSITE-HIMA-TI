"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

type Program = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  period?: string;
  status?: "active" | "upcoming" | "completed" | "pending";
};

// Static Data - Conceptual mapping without fake claims or names
const PROGRAM_DATA: Program[] = [
  {
    id: "00",
    title: "Program Information Repository",
    category: "System",
    description: "Official program data will be populated here upon institutional release.",
    status: "pending"
  }
];

export function ProgramsArchive() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".prog-archive-reveal");
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

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="py-8 md:py-16">
      <Container>
        <div className="w-full">
          
          {/* Archive Header / Columns (Desktop only) */}
          <div className="hidden md:flex border-b border-border pb-4 mb-4 prog-archive-reveal text-xs font-semibold tracking-widest uppercase text-foreground-muted">
            <div className="w-20">No</div>
            <div className="flex-1">Title & Description</div>
            <div className="w-48">Category</div>
            <div className="w-32 text-right">Status</div>
          </div>

          {/* Archive List */}
          <div className="flex flex-col border-t border-border md:border-transparent">
            {PROGRAM_DATA.length > 0 ? PROGRAM_DATA.map((prog) => (
              <div 
                key={prog.id} 
                className="group relative flex flex-col md:flex-row md:items-start border-b border-border py-10 md:py-12 prog-archive-reveal hover:bg-surface-elevated/30 transition-colors duration-500 cursor-default"
              >
                 {/* Hover line indicator */}
                 <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
                 
                 {/* Mobile Labels (Hidden on Desktop) */}
                 <div className="md:hidden flex justify-between items-center mb-6 pl-4 border-l-2 border-primary">
                   <span className="text-primary font-bold font-mono text-sm tracking-widest">{prog.id}</span>
                   {prog.status && (
                     <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-1 rounded-sm bg-primary/5">
                       {prog.status}
                     </span>
                   )}
                 </div>

                 {/* Number (Desktop) */}
                 <div className="hidden md:block w-20 pt-2 pl-4">
                   <span className="text-primary font-bold font-mono text-sm tracking-widest transition-transform duration-300 group-hover:translate-x-2 inline-block">
                     {prog.id}
                   </span>
                 </div>

                 {/* Title & Description */}
                 <div className="flex-1 md:pr-12 flex flex-col gap-4">
                   <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                     {prog.title}
                   </h2>
                   {prog.description && (
                     <p className="body-text text-foreground-muted max-w-2xl leading-relaxed">
                       {prog.description}
                     </p>
                   )}
                 </div>

                 {/* Category */}
                 <div className="md:w-48 mt-8 md:mt-0 pt-2">
                    <span className="md:hidden text-xs uppercase tracking-widest text-foreground-muted block mb-2">Category</span>
                    <span className="text-base font-medium text-foreground">{prog.category || "—"}</span>
                 </div>

                 {/* Status (Desktop) */}
                 <div className="hidden md:flex w-32 pt-2 justify-end">
                    {prog.status && (
                      <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-3 py-1 rounded-sm bg-primary/5">
                        {prog.status}
                      </span>
                    )}
                 </div>
              </div>
            )) : (
              <div className="py-24 text-center prog-archive-reveal border-b border-border">
                <span className="text-primary text-sm uppercase tracking-widest font-bold">No Program Data</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-6 text-foreground-muted">
                  Information Archive is pending official release.
                </h2>
              </div>
            )}
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
