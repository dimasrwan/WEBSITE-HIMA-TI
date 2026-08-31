"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { programs } from "@/data/programs";
import { Magnetic } from "@/components/motion/Magnetic";

export function ProgramsShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // We only show a subset on the homepage
  const featuredPrograms = programs.slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal variant="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              What We Do
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.2}>
            <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              04 / PROGRAMS
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col border-t border-border">
          {featuredPrograms.map((program, index) => {
            const isHovered = hoveredId === program.id;
            const numberString = `0${index + 1}`;

            return (
              <div 
                key={program.id}
                className="group relative border-b border-border py-6 md:py-10 flex flex-col md:flex-row md:items-center cursor-pointer overflow-hidden transition-all duration-500 hover:bg-surface"
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Horizontal Hover Accent Line */}
                <div 
                  className={`absolute top-0 left-0 w-full h-[1px] bg-primary transform origin-left transition-transform duration-700 ease-out ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} 
                />

                {/* Number & Division */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col gap-2">
                  <span className={`font-mono text-sm tracking-widest transition-all duration-500 ease-out ${isHovered ? 'text-primary translate-x-2' : 'text-foreground-muted'}`}>
                    {numberString}
                  </span>
                  <span className={`font-mono text-xs uppercase tracking-widest transition-colors duration-500 ${isHovered ? 'text-foreground' : 'text-foreground-muted'}`}>
                    {program.division || "Cross-Division"}
                  </span>
                </div>

                {/* Title */}
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                  <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight uppercase transition-all duration-500 ${isHovered ? 'text-primary translate-x-2' : 'text-foreground'}`}>
                    {program.title}
                  </h3>
                </div>

                {/* Status & Arrow */}
                <div className="w-full md:w-1/3 mt-6 md:mt-0 flex items-center justify-between md:justify-end gap-8">
                  <span className={`font-mono text-xs uppercase tracking-widest border px-3 py-1 transition-colors duration-500 ${program.status === 'Ongoing' ? 'border-primary text-primary' : 'border-border text-foreground-muted'}`}>
                    {program.status}
                  </span>
                  
                  <Magnetic>
                    <div className={`transition-transform duration-500 ${isHovered ? 'translate-x-2 text-primary' : 'text-foreground-muted'}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </Magnetic>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Reveal variant="fade-up">
            <a href="/programs" className="font-mono text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors border-b border-primary hover:border-foreground pb-1">
              View All Programs
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
