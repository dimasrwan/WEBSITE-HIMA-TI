"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";
import { news } from "@/data";

export function NewsSnapshot() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(() => {
    if (shouldReduceMotion) return;
    
    const elements = gsap.utils.toArray<HTMLElement>(".home-news-reveal");
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
          
          <div className="col-span-4 md:col-span-12 lg:col-span-3 home-news-reveal">
            <div className="flex items-center gap-3 mb-12 lg:mb-0">
              <span className="text-primary font-bold tracking-widest text-xs uppercase">
                05 — Publication
              </span>
              <span className="w-8 h-[1px] bg-primary block" />
            </div>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col gap-16 lg:pl-12 lg:border-l lg:border-border">
             
             {/* Featured News */}
             <div className="home-news-reveal group flex flex-col gap-6 cursor-pointer">
               <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface border border-border flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-surface grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: `url(${news[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out z-10" />
               </div>
               
               <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-foreground-muted">
                   <span className="text-primary">{news[0].category}</span>
                   <span className="w-1 h-1 bg-border rounded-full" />
                   <span>{news[0].date}</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                   {news[0].title}
                 </h3>
               </div>
             </div>

             {/* Small dispatch lines */}
             <div className="flex flex-col border-t border-border">
               {news.slice(1, 4).map((item) => (
                 <div key={item.id} className="home-news-reveal group flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-8 border-b border-border cursor-pointer relative">
                   <div className="flex flex-col gap-2">
                     <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                       {item.category}
                     </span>
                     <h4 className="text-xl md:text-2xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                       {item.title}
                     </h4>
                   </div>
                   <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted group-hover:text-foreground transition-colors duration-300">
                     {item.date}
                   </span>
                   <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                 </div>
               ))}
             </div>

             <div className="mt-8 flex justify-start home-news-reveal">
               <Link href="/news" className="group flex items-center gap-3 text-foreground font-bold tracking-widest text-xs uppercase hover:text-primary transition-colors duration-300">
                 Read Newsroom
                 <span className="w-8 h-[1px] bg-foreground group-hover:bg-primary group-hover:translate-x-2 transition-all duration-300" />
               </Link>
             </div>

          </div>

        </EditorialGrid>
      </Container>
    </section>
  );
}
