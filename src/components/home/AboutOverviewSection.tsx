"use client";

import React, { useRef, useLayoutEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionLink } from "@/components/layout/PageTransition";

export default function AboutOverviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 bg-transparent">
      <Container size="xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-baseline">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
              Tentang HIMA-TI
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col items-start">
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal mb-6">
              Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada 13 September 2018 sebagai wadah pengembangan potensi softskill dan hardskill mahasiswa. Organisasi ini berstatus lembaga otonom yang aktif menggerakkan kajian ilmiah, inovasi, dan kebersamaan sivitas akademika.
            </p>

            <TransitionLink
              href="/tentang"
              title="Tentang HIMA-TI"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider hover:text-[#EA580C] transition-colors group"
            >
              <span>Selengkapnya</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </TransitionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
