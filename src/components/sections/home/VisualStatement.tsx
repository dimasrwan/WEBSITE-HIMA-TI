"use client";

import { TextReveal } from "@/components/motion/TextReveal";
import { Marquee } from "@/components/motion/Marquee";
import { Parallax } from "@/components/motion/Parallax";

export function VisualStatement() {
  return (
    <section className="relative h-screen bg-background flex flex-col justify-center items-center overflow-hidden border-t border-border">
      {/* Background Graphic/Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Parallax speed={0.5} className="w-full h-full">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-foreground to-transparent" />
        </Parallax>
      </div>

      {/* Main Statement */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        <TextReveal 
          text="BUILD." 
          className="text-[15vw] leading-[0.8] md:text-[10rem] lg:text-[14rem] font-bold tracking-tighter uppercase text-foreground"
          delay={0.1}
        />
        <TextReveal 
          text="LEARN." 
          className="text-[15vw] leading-[0.8] md:text-[10rem] lg:text-[14rem] font-bold tracking-tighter uppercase text-primary"
          delay={0.3}
        />
        <TextReveal 
          text="CONNECT." 
          className="text-[15vw] leading-[0.8] md:text-[10rem] lg:text-[14rem] font-bold tracking-tighter uppercase text-foreground"
          delay={0.5}
        />
      </div>

      {/* Foreground Marquee overlaying the bottom slightly */}
      <div className="absolute bottom-12 md:bottom-24 w-full rotate-[-2deg] bg-primary text-primary-foreground py-4 z-20">
        <Marquee 
          text="HIMA-TI / DIGITAL ORGANIZATION / RESEARCH / COMMUNITY / TECHNOLOGY / " 
          speed={2} 
          className="text-2xl md:text-4xl font-bold tracking-widest uppercase font-mono"
        />
      </div>
    </section>
  );
}
