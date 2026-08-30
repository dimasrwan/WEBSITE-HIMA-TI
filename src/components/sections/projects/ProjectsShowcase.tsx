"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

type Project = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  year?: string;
  technologies?: string[];
  image?: string;
  href?: string;
  repository?: string;
};

// Static Data - Conceptual mapping without fake claims
const PROJECT_DATA: Project[] = [
  {
    id: "01",
    title: "Institutional Digital Infrastructure",
    category: "System architecture",
    description: "Official organizational platforms, member portals, and internal tools will be showcased here upon public deployment.",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  }
];

export function ProjectsShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".proj-reveal");
    elements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
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
    <Section ref={containerRef} className="py-16 md:py-32 bg-background">
      <Container>
        <div className="flex flex-col gap-32 md:gap-48">
          {PROJECT_DATA.length > 0 ? PROJECT_DATA.map((proj) => (
            <div 
              key={proj.id} 
              className="group flex flex-col proj-reveal"
            >
               {/* Header Area */}
               <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-10 md:mb-16">
                 
                 <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 lg:gap-16">
                    <span className="text-5xl md:text-6xl lg:text-[6rem] leading-none font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500">
                      {proj.id}
                    </span>
                    
                    <div className="flex flex-col gap-4">
                       <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground group-hover:translate-x-3 transition-transform duration-500 ease-out">
                         {proj.title}
                       </h2>
                       <p className="body-text text-foreground-muted max-w-xl leading-relaxed">
                         {proj.description}
                       </p>
                    </div>
                 </div>

                 {/* Metadata top right on desktop */}
                 <div className="flex flex-col items-start md:items-end gap-2 border-l-2 md:border-l-0 md:border-r-2 border-primary pl-4 md:pl-0 md:pr-4 py-1">
                    {proj.category && (
                      <span className="text-xs font-bold tracking-widest uppercase text-primary">
                        {proj.category}
                      </span>
                    )}
                    {proj.year && (
                      <span className="text-sm font-mono font-medium text-foreground-muted tracking-widest">
                        {proj.year}
                      </span>
                    )}
                 </div>

               </div>
               
               {/* Large Visual Area (Typography driven empty state) */}
               <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-surface border border-border flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                  {proj.image ? (
                    // Placeholder for future next/image
                    <div className="w-full h-full bg-surface-elevated" />
                  ) : (
                    // Typographic Geometric Pattern for empty state
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                       <div className="text-[12rem] md:text-[24rem] font-bold text-foreground/5 tracking-tighter leading-none select-none group-hover:scale-110 transition-transform duration-1000 ease-out origin-center">
                         PENDING
                       </div>
                    </div>
                  )}

                  {/* Corner Accents - Reveal on hover */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               </div>
               
               {/* Bottom Info & Tech Stack */}
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-10 gap-6 pt-8 border-t border-border group-hover:border-border transition-colors duration-500">
                  <div className="flex flex-wrap items-center gap-3">
                    {proj.technologies?.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted border border-border px-3 py-1 bg-surface group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-8">
                    <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted/50 cursor-not-allowed">
                      REPOSITORY
                    </span>
                    <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted/50 cursor-not-allowed">
                      LIVE SITE
                    </span>
                  </div>
               </div>

            </div>
          )) : (
             <div className="py-24 text-center proj-reveal border-b border-border">
                <span className="text-primary text-sm uppercase tracking-widest font-bold">No Project Data</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-6 text-foreground-muted">
                  Showcase is pending official deployment.
                </h2>
             </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
