"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import HalftoneBackground from "@/components/ui/HalftoneBackground";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Step 1 & 2: Headline lines entrance
      tl.fromTo(
        [headlineLine1Ref.current, headlineLine2Ref.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }
      )
        // Step 3: Description entrance
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        // Step 4: CTAs entrance
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        )
        // Step 5: Emblem logo subtle fade-in & tiny vertical lift
        .fromTo(
          logoRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <Container size="xl" className="w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] mb-6">
              <span ref={headlineLine1Ref} className="block drop-shadow-sm">Building Connections,</span>
              <span ref={headlineLine2Ref} className="block text-[#F97316] drop-shadow-sm">Creating Innovations.</span>
            </h1>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-8 font-normal"
            >
              Wadah kolaborasi mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh untuk mengembangkan potensi, memperluas wawasan, dan menciptakan inovasi di bidang teknologi.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] font-bold text-sm tracking-wide uppercase hover:bg-[#EA580C] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#F97316]/20"
              >
                <span>Kenali HIMA-TI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/program-kerja"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#333338] bg-[#0A0A0A]/40 backdrop-blur-sm text-[#F5F5F2] font-semibold text-sm tracking-wide uppercase hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Lihat Kegiatan</span>
              </Link>
            </div>
          </div>

          {/* Official Emblem */}
          <div ref={logoRef} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-48 h-56 sm:w-60 sm:h-68 lg:w-72 lg:h-80 transition-transform duration-300 hover:scale-105 filter drop-shadow-2xl">
              <Image
                src="/logo.svg"
                alt="Logo Resmi HIMA-TI UIN Ar-Raniry"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


