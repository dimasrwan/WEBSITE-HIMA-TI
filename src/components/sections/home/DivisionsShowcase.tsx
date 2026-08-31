"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { divisions } from "@/data/divisions";
import { Magnetic } from "@/components/motion/Magnetic";

export function DivisionsShowcase() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <Reveal variant="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              Structure
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.2}>
            <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              03 / DIVISIONS
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col border-t border-border">
          {divisions.sort((a, b) => a.order - b.order).map((division, index) => {
            const isHovered = hoveredId === division.id;
            const numberString = `0${index + 1}`;

            return (
              <div 
                key={division.id}
                className="group relative border-b border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-surface/50"
                onMouseEnter={() => setHoveredId(division.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Hover Accent */}
                <div 
                  className={`absolute top-0 left-0 h-full w-1 bg-primary transform origin-bottom transition-transform duration-500 ease-out ${isHovered ? 'scale-y-100' : 'scale-y-0'}`} 
                />

                {/* Number */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <span className={`font-mono text-sm md:text-lg tracking-widest transition-all duration-500 ease-out inline-block ${isHovered ? 'text-primary translate-x-4 md:translate-x-8' : 'text-foreground-muted'}`}>
                    {numberString}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="w-full md:w-2/4 flex flex-col gap-4">
                  <h3 className={`text-3xl md:text-5xl font-bold tracking-tight uppercase transition-colors duration-500 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                    {division.name}
                  </h3>
                  
                  {/* Expandable description on mobile, always visible on desktop or revealed via height transition */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:grid-rows-[1fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="text-foreground-muted md:text-lg mt-2 md:mt-4 md:max-w-md">
                        {division.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata & Arrow */}
                <div className="w-full md:w-1/4 mt-8 md:mt-0 flex flex-col md:items-end justify-between self-stretch">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {division.focus.map((item, i) => (
                      <span key={i} className="font-mono text-xs uppercase tracking-widest text-foreground-muted border border-border px-2 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-8 md:mt-auto self-start md:self-end">
                    <Magnetic>
                      <div className={`w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-primary border-primary text-primary-foreground scale-110' : 'bg-transparent text-foreground'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </Magnetic>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
