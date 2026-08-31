"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { Parallax } from "@/components/motion/Parallax";
import { LineReveal } from "@/components/motion/LineReveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { projects } from "@/data/projects";

export function ProjectsShowcase() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 md:py-48 bg-background border-t border-border overflow-hidden">
      <Container>
        <EditorialGrid className="mb-24">
          <div className="col-span-4 md:col-span-12 lg:col-span-6 flex flex-col gap-4">
            <Reveal variant="fade-up">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                06 / WHAT WE BUILD
              </div>
            </Reveal>
            <TextReveal 
              text="DIGITAL EXHIBITION" 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none"
            />
          </div>
          <div className="col-span-4 md:col-span-12 lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal variant="fade-up" delay={0.4}>
              <p className="text-lg text-foreground-muted pb-2">
                Inisiatif pengembangan perangkat lunak, penelitian AI, dan solusi IoT yang dibangun oleh mahasiswa Teknologi Informasi.
              </p>
            </Reveal>
          </div>
        </EditorialGrid>

        <div className="flex flex-col gap-32 md:gap-48">
          {featuredProjects.map((project, i) => {
            // Alternate layout for asymmetric feel
            const isEven = i % 2 === 0;

            return (
              <div key={project.id} className="group relative">
                <EditorialGrid className="items-center">
                  
                  {/* Image Block */}
                  <div className={`col-span-4 md:col-span-12 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-6'} relative`}>
                    <ClipReveal direction={isEven ? "right" : "left"}>
                      <Link href={`/projects/${project.slug}`} className="block overflow-hidden relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3]">
                        <Parallax speed={0.85} className="w-full h-full">
                          <div 
                            className="w-full h-full bg-cover bg-center transition-all duration-1000 grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105"
                            style={{ backgroundImage: `url(${project.image || `/images/placeholders/project-${(i % 3) + 1}.jpg`})` }}
                          />
                        </Parallax>
                        
                        {/* Overlay to ensure dark mood */}
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
                      </Link>
                    </ClipReveal>
                  </div>

                  {/* Content Block */}
                  <div className={`col-span-4 md:col-span-12 lg:col-span-4 flex flex-col justify-center mt-12 lg:mt-0 ${isEven ? 'lg:order-2 lg:col-start-9' : 'lg:order-1'}`}>
                    <Reveal variant="fade-up">
                      <div className="font-mono text-[8rem] leading-none font-bold text-foreground-muted opacity-10 -ml-2 mb-4 pointer-events-none">
                        0{i + 1}
                      </div>
                    </Reveal>

                    <LineReveal direction={isEven ? "left" : "right"} className="mb-8" />
                    
                    <Reveal variant="fade-up" delay={0.2}>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors duration-500 mb-6">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                    </Reveal>

                    <Reveal variant="fade-up" delay={0.3}>
                      <p className="text-lg text-foreground-muted mb-8">
                        {project.excerpt || project.description}
                      </p>
                    </Reveal>

                    <Reveal variant="fade-up" delay={0.4}>
                      <div className="flex flex-wrap gap-2 mb-12">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="font-mono text-xs uppercase tracking-widest text-foreground-muted border border-border px-3 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Reveal>

                    <Reveal variant="fade-up" delay={0.5}>
                      <Magnetic>
                        <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-4 text-sm font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors">
                          <span className="border-b border-current pb-1">View Case Study</span>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </Magnetic>
                    </Reveal>
                  </div>

                </EditorialGrid>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
