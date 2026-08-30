"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

type EventItem = {
  id: string;
  title: string;
  date?: string;
  month?: string;
  time?: string;
  location?: string;
  category?: string;
  description?: string;
  status?: "active" | "upcoming" | "completed" | "pending";
};

// Static Data - Conceptual mapping without fake claims
const EVENT_DATA: EventItem[] = [
  {
    id: "e1",
    title: "Event Calendar Synchronization",
    date: "TBA",
    month: "2026",
    location: "UIN Ar-Raniry",
    category: "System Update",
    description: "Official event schedules, academic seminars, and organizational activities will appear here once the official calendar is released.",
    status: "pending"
  }
];

export function EventsArchive() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".evt-reveal");
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
        <div className="flex flex-col">
          {EVENT_DATA.length > 0 ? EVENT_DATA.map((evt, index) => (
            <div 
              key={evt.id} 
              className="group relative flex flex-col md:flex-row evt-reveal pb-16 md:pb-28 last:pb-8"
            >
               {/* Date Column (Massive Typography) */}
               <div className="w-full md:w-32 lg:w-48 flex flex-col mb-8 md:mb-0 md:pt-2">
                  <span className="text-5xl lg:text-[5rem] font-bold tracking-tighter leading-none text-foreground group-hover:text-primary transition-colors duration-500">
                    {evt.date}
                  </span>
                  <span className="text-sm md:text-base font-semibold tracking-widest uppercase text-foreground-muted mt-2 md:mt-4">
                    {evt.month}
                  </span>
               </div>
               
               {/* Content Column (with Timeline styling on Desktop) */}
               <div className="flex-1 md:pl-10 lg:pl-16 relative">
                  
                  {/* Timeline Border & Marker (Desktop) */}
                  <div className="hidden md:block absolute left-0 top-6 bottom-[-7rem] w-[1px] bg-border group-last:bg-transparent" />
                  <div className="hidden md:block absolute left-[-4px] top-6 w-2 h-2 bg-border rounded-full group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
                  
                  {/* Event Details */}
                  <div className="flex flex-col gap-6 md:gap-8 border-t border-border md:border-transparent pt-6 md:pt-0">
                    
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs font-semibold tracking-widest uppercase text-foreground-muted">
                       {evt.category && <span className="text-primary">{evt.category}</span>}
                       
                       {evt.location && (
                         <span className="flex items-center gap-2 md:gap-3">
                           <span className="w-1 h-1 bg-border rounded-full hidden sm:block" />
                           {evt.location}
                         </span>
                       )}
                       
                       {evt.status && (
                         <span className="flex items-center gap-2 md:gap-3">
                           <span className="w-1 h-1 bg-border rounded-full hidden sm:block" /> 
                           <span className="border border-primary/30 text-primary bg-primary/5 px-3 py-1 rounded-sm">
                             {evt.status}
                           </span>
                         </span>
                       )}
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {evt.title}
                    </h2>
                    
                    {/* Description */}
                    {evt.description && (
                      <p className="body-text text-foreground-muted max-w-2xl leading-relaxed">
                        {evt.description}
                      </p>
                    )}
                    
                    {/* Hover CTA Indicator */}
                    <div className="mt-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block">
                      <span className="text-xs font-bold tracking-widest uppercase text-primary flex items-center gap-4">
                        Pending Details <span className="w-8 h-[1px] bg-primary" />
                      </span>
                    </div>
                  </div>

               </div>
            </div>
          )) : (
             <div className="py-24 text-center evt-reveal border-b border-border">
                <span className="text-primary text-sm uppercase tracking-widest font-bold">No Event Data</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-6 text-foreground-muted">
                  Timeline is pending official release.
                </h2>
             </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
