"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { Magnetic } from "@/components/motion/Magnetic";

export function HomeCTA() {
  return (
    <section className="py-24 md:py-48 bg-foreground text-background overflow-hidden relative">
      <Container className="relative z-10">
        <EditorialGrid>
          <div className="col-span-4 md:col-span-12 lg:col-span-8 flex flex-col gap-8">
            <Reveal variant="fade-up">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none text-background">
                Ready to<br />
                <span className="text-primary">Collaborate?</span>
              </h2>
            </Reveal>
            <Reveal variant="fade-up" delay={0.2}>
              <p className="text-xl md:text-2xl text-background/70 max-w-xl">
                Jadilah bagian dari ekosistem digital kami. Temukan potensi Anda melalui riset, teknologi, dan kontribusi sosial.
              </p>
            </Reveal>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-4 mt-16 lg:mt-0 flex flex-col justify-end lg:items-end">
            <Reveal variant="fade-up" delay={0.4}>
              <Magnetic>
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full bg-primary text-primary-foreground font-bold tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-colors duration-500"
                >
                  Join Us
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </EditorialGrid>
        
        <LineReveal direction="center" delay={0.6} className="mt-24 md:mt-32 opacity-20 bg-background" />

      </Container>
    </section>
  );
}

