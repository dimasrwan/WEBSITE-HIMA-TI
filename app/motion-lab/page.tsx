import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Parallax } from "@/components/motion/Parallax";
import { Marquee } from "@/components/motion/Marquee";
import { HorizontalScroll } from "@/components/motion/HorizontalScroll";
import { Magnetic } from "@/components/motion/Magnetic";
import { EditorialImage } from "@/components/ui/EditorialImage";
import Link from "next/link";

export default function MotionLabPage() {
  return (
    <main className="bg-background min-h-screen">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 relative">
        <Container>
          <div className="flex flex-col items-center text-center gap-8">
            <Reveal variant="fade-up" delay={0.2}>
              <span className="text-primary font-bold tracking-widest text-xs uppercase border border-border px-3 py-1">
                Internal Development
              </span>
            </Reveal>
            <TextReveal 
              text="MOTION SYSTEM" 
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none uppercase text-foreground" 
            />
            <Reveal variant="fade" delay={0.8} className="max-w-2xl">
              <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
                A sandbox environment to test GSAP + ScrollTrigger integrations, ensuring performance and storytelling remain intact.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Marquee Demo */}
      <section className="py-12 border-y border-border overflow-hidden">
        <Marquee 
          text="HIMA-TI / TECHNOLOGY / STUDENTS / RESEARCH / CREATION / COMMUNITY / " 
          className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground-muted opacity-50 uppercase font-mono" 
          speed={1.5}
        />
      </section>

      {/* Reveal System & Magnetic Demo */}
      <section className="py-24 md:py-32">
        <Container>
          <EditorialGrid>
            <div className="col-span-4 md:col-span-12 lg:col-span-4 flex flex-col gap-6">
              <Reveal variant="fade-up">
                <h2 className="text-2xl font-bold tracking-tight">Micro Interactions</h2>
              </Reveal>
              <LineReveal direction="left" />
              <Reveal variant="fade-up" delay={0.2}>
                <p className="text-foreground-muted leading-relaxed">
                  Hover over the button below to test the quickTo magnetic effect.
                </p>
              </Reveal>
              <Reveal variant="fade-up" delay={0.4}>
                <Magnetic>
                  <Link href="/" className="inline-block mt-4 px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest text-xs uppercase hover:bg-primary/90 transition-colors">
                    Return Home
                  </Link>
                </Magnetic>
              </Reveal>
            </div>

            <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:pl-16 mt-16 lg:mt-0 flex flex-col gap-8">
              <Reveal variant="fade-up">
                <h2 className="text-2xl font-bold tracking-tight">Content Reveal variations</h2>
              </Reveal>
              <LineReveal direction="left" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Reveal variant="fade-up" className="bg-surface border border-border p-8 h-48 flex items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">Fade Up</span>
                </Reveal>
                <Reveal variant="scale-up" className="bg-surface border border-border p-8 h-48 flex items-center justify-center" delay={0.2}>
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground-muted">Scale Up</span>
                </Reveal>
              </div>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      {/* Image Parallax & Clip Reveal Demo */}
      <section className="py-24 md:py-32 bg-surface">
        <Container>
          <div className="flex flex-col items-center mb-16">
            <TextReveal text="IMAGE PARALLAX" className="text-4xl md:text-5xl font-bold tracking-tight mb-8" />
            <LineReveal direction="center" className="w-1/2 max-w-sm" />
          </div>

          <div className="w-full max-w-5xl mx-auto">
            <ClipReveal direction="up">
              <Parallax speed={0.8} className="aspect-[16/9] w-full">
                <div 
                  className="w-full h-full bg-cover bg-center grayscale contrast-125"
                  style={{ backgroundImage: "url('/images/placeholders/hero-1.jpg')" }}
                />
              </Parallax>
            </ClipReveal>
          </div>
        </Container>
      </section>

      {/* Horizontal Scroll Demo */}
      <HorizontalScroll className="bg-background py-16 md:py-0">
        <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex flex-col gap-6">
          <span className="text-[10rem] font-bold tracking-tighter leading-none text-foreground-muted opacity-20">01</span>
          <h3 className="text-4xl font-bold tracking-tight">Horizontal Pinned Section</h3>
          <p className="text-xl text-foreground-muted max-w-lg">
            This entire block is pinned on desktop while the user scrolls vertically, converting the scroll delta into horizontal movement.
          </p>
        </div>
        
        <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0">
          <EditorialImage 
            src="/images/placeholders/event-1.jpg" 
            alt="Demo 1" 
            width={800} height={600} 
            className="w-full aspect-[4/3]" 
          />
        </div>
        
        <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0">
          <EditorialImage 
            src="/images/placeholders/project-1.jpg" 
            alt="Demo 2" 
            width={800} height={600} 
            className="w-full aspect-[4/3]" 
          />
        </div>
      </HorizontalScroll>

      {/* Spacer to allow scrolling past horizontal section */}
      <section className="h-[50vh] flex items-center justify-center border-t border-border">
        <TextReveal text="END OF LAB" className="text-2xl font-mono tracking-widest text-foreground-muted" />
      </section>
    </main>
  );
}
