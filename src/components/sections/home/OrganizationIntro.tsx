"use client";

import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";

export function OrganizationIntro() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-surface">
      <Container>
        <EditorialGrid className="items-start">
          <div className="col-span-4 md:col-span-12 lg:col-span-4 mb-16 lg:mb-0">
            <Reveal variant="fade-up">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted mb-4">
                02 / WHO WE ARE
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                IDENTITY
              </h2>
            </Reveal>
            <LineReveal direction="left" delay={0.2} className="mt-8 mb-8" />
            <Reveal variant="fade-up" delay={0.4}>
              <div className="flex flex-col gap-2 font-mono text-sm tracking-widest uppercase text-foreground-muted">
                <span>HIMA-TI</span>
                <span>UIN AR-RANIRY</span>
                <span>INFORMATION TECHNOLOGY</span>
              </div>
            </Reveal>
          </div>

          <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:pl-16">
            <Reveal variant="fade-up" delay={0.2}>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-foreground leading-tight md:leading-snug">
                HIMA-TI merupakan ruang kolaborasi mahasiswa Teknologi Informasi untuk berkembang dalam bidang akademik, teknologi, organisasi, dan kontribusi sosial.
              </h3>
            </Reveal>
            <Reveal variant="fade-up" delay={0.4}>
              <p className="mt-12 text-lg md:text-xl text-foreground-muted max-w-2xl leading-relaxed">
                Kami membangun ekosistem digital yang adaptif, mendorong inovasi, dan mempersiapkan mahasiswa menghadapi tantangan industri teknologi modern tanpa melupakan etika dan kolaborasi kemanusiaan.
              </p>
            </Reveal>
          </div>
        </EditorialGrid>
      </Container>
    </section>
  );
}
