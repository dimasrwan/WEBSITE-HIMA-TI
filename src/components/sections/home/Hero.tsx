"use client";

import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 overflow-hidden bg-background">
      <Container className="z-10 h-full flex flex-col justify-between">
        
        {/* Top metadata */}
        <div className="flex justify-between items-start w-full">
          <Reveal variant="fade-up" delay={0.2}>
            <div className="font-mono text-xs md:text-sm text-foreground-muted tracking-widest uppercase flex flex-col gap-1">
              <span>HIMA-TI</span>
              <span>UIN AR-RANIRY</span>
              <span>BANDA ACEH</span>
            </div>
          </Reveal>
          
          <Reveal variant="fade-up" delay={0.4}>
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-xs md:text-sm text-foreground tracking-widest uppercase border border-border px-3 py-1">
                DIGITAL ORGANIZATION
                <br className="md:hidden" />
                <span className="hidden md:inline"> &mdash; </span>
                2026
              </span>
            </div>
          </Reveal>
        </div>

        {/* Giant Typography */}
        <div className="mt-auto mb-12 md:mb-24 flex flex-col items-start w-full relative">
          <TextReveal 
            text="HIMPUNAN" 
            className="text-[12vw] leading-[0.8] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase text-foreground"
            delay={0.1}
          />
          <TextReveal 
            text="MAHASISWA" 
            className="text-[12vw] leading-[0.8] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase text-foreground"
            delay={0.3}
          />
          <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-8 w-full">
            <TextReveal 
              text="TEKNOLOGI" 
              className="text-[12vw] leading-[0.8] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase text-primary"
              delay={0.5}
            />
            <Reveal variant="fade-up" delay={1.2} className="hidden md:block pb-6 max-w-sm">
              <p className="font-serif italic text-xl lg:text-3xl text-foreground-muted leading-tight">
                Ruang kolaborasi, inovasi, dan pengembangan teknologi mahasiswa.
              </p>
            </Reveal>
          </div>
          <TextReveal 
            text="INFORMASI" 
            className="text-[12vw] leading-[0.8] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold tracking-tighter uppercase text-foreground"
            delay={0.7}
          />
        </div>

      </Container>
      
      {/* Bottom Horizontal Rule & Scroll Indicator */}
      <Container className="absolute bottom-0 left-0 w-full pb-8">
        <LineReveal direction="left" delay={1.5} className="mb-4" />
        <EditorialGrid>
          <div className="col-span-4 md:col-span-6 flex items-center">
            <Reveal variant="fade" delay={1.6}>
              <span className="font-mono text-xs text-foreground-muted uppercase tracking-widest">
                01 / INTRO
              </span>
            </Reveal>
          </div>
          <div className="col-span-4 md:col-span-6 flex justify-end items-center">
            <Reveal variant="fade" delay={1.6}>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-foreground-muted uppercase tracking-widest">
                  SCROLL
                </span>
                <div className="w-8 md:w-16 h-px bg-foreground-muted/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary animate-marquee-fast" />
                </div>
              </div>
            </Reveal>
          </div>
        </EditorialGrid>
      </Container>
    </section>
  );
}
