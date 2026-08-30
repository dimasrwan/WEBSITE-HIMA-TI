"use client";

import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { gsap, useGSAP } from "@/animations/gsap-setup";
import { useReducedMotion } from "@/animations/use-reduced-motion";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Organization", href: "/organization" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

export function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear().toString();

  useGSAP(() => {
    if (shouldReduceMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });

    gsap.set(".footer-accent-line", { scaleX: 0, transformOrigin: "left center" });
    gsap.set(".footer-reveal", { y: 30, opacity: 0 });

    tl.to(".footer-reveal", {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(".footer-accent-line", {
      scaleX: 1,
      duration: 1.4,
      ease: "power4.out"
    }, "-=1.0");

  }, { scope: containerRef, dependencies: [shouldReduceMotion] });

  return (
    <footer ref={containerRef} className="pt-24 md:pt-40 pb-8 bg-background border-t border-border mt-auto overflow-hidden">
      <Container>
        <div className="flex flex-col gap-16 md:gap-32">
          
          <EditorialGrid>
             
             {/* Left Column: Big Identity */}
             <div className="col-span-4 md:col-span-12 lg:col-span-8 flex flex-col gap-8 footer-reveal">
                
                {/* Closing visual accent */}
                <div className="w-12 h-12 md:w-20 md:h-20 bg-primary flex items-end justify-start p-1.5 md:p-2 mb-4">
                   <div className="w-2 h-2 md:w-3 md:h-3 bg-background" />
                </div>
                
                <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] text-foreground uppercase group cursor-default">
                  HIMA-TI
                  <span className="block w-0 group-hover:w-full transition-all duration-1000 ease-out h-1 md:h-2 mt-6 md:mt-8 bg-primary" />
                </h2>
                
             </div>

             {/* Right Column: Inst Info & Nav */}
             <div className="col-span-4 md:col-span-12 lg:col-span-4 flex flex-col gap-12 lg:pl-12 lg:border-l lg:border-border lg:pt-0 pt-8 mt-8 lg:mt-0 border-t border-border lg:border-t-0">
                
                {/* Institutional Info */}
                <div className="flex flex-col gap-3 footer-reveal">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-foreground leading-tight">
                    Himpunan Mahasiswa Teknologi Informasi
                  </h3>
                  <p className="body-text text-foreground-muted leading-relaxed">
                    Fakultas Sains dan Teknologi<br />
                    UIN Ar-Raniry Banda Aceh
                  </p>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 footer-reveal" aria-label="Footer Navigation">
                   <div className="flex items-center gap-3">
                     <span className="w-2 h-2 bg-primary" />
                     <span className="text-xs font-bold tracking-widest uppercase text-foreground-muted">
                       INDEX
                     </span>
                   </div>
                   
                   <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
                     {FOOTER_LINKS.map((link) => (
                       <li key={link.label}>
                         <Link 
                           href={link.href}
                           className="group flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors duration-300 w-fit"
                         >
                           <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300 ease-out" />
                           <span className="font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300 ease-out">
                             {link.label}
                           </span>
                         </Link>
                       </li>
                     ))}
                   </ul>
                </nav>
             </div>

          </EditorialGrid>

          {/* Footer Meta */}
          <div className="flex flex-col gap-6 pt-8 border-t border-border overflow-hidden">
             <div className="footer-accent-line w-full h-[2px] bg-primary mb-4" />
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 footer-reveal">
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground-muted">
                  &copy; {currentYear || "2026"} HIMA-TI
                </span>
                
                <span className="text-xs font-semibold tracking-widest uppercase text-foreground-muted">
                  UIN Ar-Raniry Banda Aceh
                </span>
             </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
