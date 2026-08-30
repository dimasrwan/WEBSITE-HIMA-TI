"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

type OrganizationUnit = {
  id: string;
  category: string;
  description: string;
};

// Static Data - Conceptual mapping without fake claims or names
const ORG_UNITS: OrganizationUnit[] = [
  {
    id: "01",
    category: "Leadership",
    description: "Core structural leadership directing organizational vision and institutional relations.",
  },
  {
    id: "02",
    category: "Administrative",
    description: "Secretarial and financial operations ensuring organizational integrity.",
  },
  {
    id: "03",
    category: "Departments",
    description: "Specialized functional units executing focused programs and initiatives.",
  }
];

export function OrganizationStructure() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".org-reveal");
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
    <Section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <Container>
        <EditorialGrid>
          
          {/* Header Block */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12 mb-16 lg:mb-24 org-reveal">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
              Information Architecture
            </h2>
            <p className="mt-6 text-foreground-muted body-text max-w-2xl">
              This space is dedicated to the formal structural composition of HIMA-TI. 
              The organizational hierarchy and functional units will be outlined below upon availability of official tenure data.
            </p>
          </div>

          {/* Architecture List / Asymmetric Grid */}
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <div className="flex flex-col border-t border-border">
              {ORG_UNITS.map((unit) => (
                <div key={unit.id} className="relative group border-b border-border py-8 md:py-12 org-reveal flex flex-col md:flex-row gap-4 md:gap-12">
                  
                  {/* Left Marker & Number - Orange Accent */}
                  <div className="w-full md:w-24 flex flex-col pt-1">
                     <span className="text-primary font-bold text-sm tracking-widest">{unit.id}</span>
                  </div>

                  {/* Main Category */}
                  <div className="w-full md:w-1/3">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {unit.category}
                    </h3>
                  </div>

                  {/* Description / Future Placeholder */}
                  <div className="w-full md:flex-1 md:pl-12 md:border-l md:border-border/50 relative">
                    <p className="text-foreground-muted body-text">{unit.description}</p>
                    <div className="mt-6">
                      <span className="inline-flex items-center px-3 py-1 bg-surface-elevated border border-border/50 rounded-sm text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
                        Pending Data
                      </span>
                    </div>
                    {/* Hover vertical orange accent line on desktop */}
                    <div className="hidden md:block absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
                  </div>

                </div>
              ))}
            </div>
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
