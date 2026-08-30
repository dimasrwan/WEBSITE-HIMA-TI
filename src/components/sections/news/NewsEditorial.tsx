"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

type NewsArticle = {
  id: string;
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
  author?: string;
  image?: string;
  href?: string;
  featured?: boolean;
};

// Static Conceptual Data without fake claims
const FEATURED_STORY: NewsArticle = {
  id: "feat-1",
  title: "Publication Pipeline Synchronization",
  excerpt: "Official announcements, organizational reports, and institutional dispatches will be archived within this editorial index.",
  category: "Editorial",
  date: "Pending Data",
  author: "HIMA-TI Press",
  featured: true,
};

const ARTICLE_LIST: NewsArticle[] = [
  {
    id: "01",
    title: "Awaiting Initial Dispatches",
    category: "System",
    date: "TBA",
  },
  {
    id: "02",
    title: "Pending Operational Reports",
    category: "Archive",
    date: "TBA",
  }
];

export function NewsEditorial() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    // Featured Reveal
    const featTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".news-featured",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
    
    featTl.fromTo(".news-featured-reveal", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15 }
    );

    // List Reveal
    const elements = gsap.utils.toArray<HTMLElement>(".news-list-reveal");
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
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <Section ref={containerRef} className="py-8 md:py-16 bg-background">
      <Container>
        <EditorialGrid>
          
          {/* Featured Area (Left column on large screens) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-7 news-featured flex flex-col gap-6 md:gap-8 mb-16 lg:mb-0">
             
             {/* Large Typographic / Geometric Placeholder */}
             <div className="w-full aspect-square md:aspect-[4/3] bg-surface border border-border flex flex-col justify-between p-6 md:p-10 relative group overflow-hidden news-featured-reveal cursor-not-allowed">
               
               <div className="flex justify-between items-start z-10">
                 <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted border border-border px-3 py-1 bg-background group-hover:border-primary/50 transition-colors duration-300">
                   {FEATURED_STORY.category}
                 </span>
                 <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                   FEATURED
                 </span>
               </div>
               
               <div className="z-10 mt-auto">
                 <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tighter leading-[1.05] text-foreground group-hover:text-primary transition-colors duration-500">
                   {FEATURED_STORY.title}
                 </h2>
               </div>

               {/* Background huge typography */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                 <div className="text-[14rem] md:text-[20rem] font-bold tracking-tighter leading-none select-none group-hover:scale-110 transition-transform duration-1000 ease-out origin-left">
                   EDIT
                 </div>
               </div>
               
               {/* Accent line on hover */}
               <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />
             </div>

             {/* Featured Metadata & Excerpt */}
             <div className="news-featured-reveal flex flex-col gap-5">
               <div className="flex items-center gap-4 text-xs font-semibold tracking-widest uppercase text-foreground-muted">
                 <span>{FEATURED_STORY.author}</span>
                 <span className="w-1 h-1 bg-border rounded-full" />
                 <span>{FEATURED_STORY.date}</span>
               </div>
               
               <p className="body-text text-foreground-muted text-lg md:text-xl leading-relaxed max-w-xl">
                 {FEATURED_STORY.excerpt}
               </p>
             </div>

          </div>

          {/* List Area (Right column on large screens) */}
          <div className="col-span-4 md:col-span-8 lg:col-span-5 flex flex-col lg:pl-12 lg:border-l lg:border-border">
             <div className="flex flex-col gap-10 md:gap-12">
               
               {/* Section Label */}
               <div className="news-list-reveal hidden lg:flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-foreground-muted pb-4 border-b border-border">
                 <span className="w-2 h-2 bg-primary block" />
                 LATEST DISPATCHES
               </div>

               <div className="flex flex-col border-t border-border lg:border-none">
                 {ARTICLE_LIST.map((article) => (
                   <article 
                     key={article.id} 
                     className="news-list-reveal group flex flex-col gap-4 py-8 md:py-10 border-b border-border cursor-not-allowed relative"
                   >
                     <div className="flex justify-between items-center text-xs font-semibold tracking-widest uppercase">
                       <span className="text-primary group-hover:text-primary/70 transition-colors duration-300">{article.category}</span>
                       <span className="text-foreground-muted">{article.date}</span>
                     </div>
                     
                     <div className="flex items-start gap-5">
                       <span className="text-foreground-muted/30 font-bold font-mono text-xs tracking-widest mt-1.5 group-hover:translate-x-1 group-hover:text-primary/50 transition-all duration-300">
                         {article.id}
                       </span>
                       <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                         {article.title}
                       </h3>
                     </div>

                     {/* Accent border on hover */}
                     <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                   </article>
                 ))}
               </div>

             </div>
          </div>

        </EditorialGrid>
      </Container>
    </Section>
  );
}
