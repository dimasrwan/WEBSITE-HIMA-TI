"use client";

import Link from "next/link";
import { HorizontalScroll } from "@/components/motion/HorizontalScroll";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { events } from "@/data/events";

export function EventsShowcase() {
  const featuredEvents = events.filter(e => e.featured).slice(0, 4);

  return (
    <section className="bg-surface border-t border-border overflow-hidden">
      <HorizontalScroll>
        
        {/* Intro Block (Pinned on Desktop) */}
        <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex flex-col justify-center h-full gap-8">
          <Reveal variant="fade-up">
            <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
              05 / HAPPENING
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={0.2}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Upcoming<br />
              <span className="text-primary">Events</span>
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={0.4}>
            <p className="text-lg text-foreground-muted max-w-md">
              Kegiatan rutin, lokakarya, dan kompetisi yang akan datang. Selalu update dengan kegiatan terbaru HIMA-TI.
            </p>
          </Reveal>
          <Reveal variant="fade-up" delay={0.6}>
            <Link href="/events" className="inline-block font-mono text-xs uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors mt-8">
              Explore All Events
            </Link>
          </Reveal>
        </div>

        {/* Event Cards */}
        {featuredEvents.map((event, i) => (
          <Link 
            key={event.id}
            href={`/events/${event.slug}`} 
            className="w-[85vw] md:w-[50vw] lg:w-[35vw] flex-shrink-0 group block border border-border h-[60vh] md:h-[70vh] relative overflow-hidden"
          >
            {/* Background Image */}
            <EditorialImage 
              src={event.image || `/images/placeholders/event-${(i % 3) + 1}.jpg`} 
              alt={event.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs uppercase tracking-widest bg-background/80 backdrop-blur-sm border border-border px-3 py-1 text-primary">
                  {event.category}
                </span>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-serif italic">
                  {event.date}
                </span>
                
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest text-foreground-muted mt-4">
                  <span>{event.time}</span>
                  <span>&mdash;</span>
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </HorizontalScroll>
    </section>
  );
}
