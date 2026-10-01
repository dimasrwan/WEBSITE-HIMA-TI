"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import gsap from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Split Headline Line 1 & Line 2 entrance
      tl.fromTo(
        headlineLine1Ref.current,
        { opacity: 0, y: 35, skewY: 1.5 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.8 }
      )
        .fromTo(
          headlineLine2Ref.current,
          { opacity: 0, y: 35, skewY: 1.5 },
          { opacity: 1, y: 0, skewY: 0, duration: 0.8 },
          "-=0.6"
        )
        // 2. Description entrance
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4"
        )
        // 3. CTAs entrance
        .fromTo(
          ctaRef.current ? ctaRef.current.children : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        )
        // 4. Official Emblem Entrance
        .fromTo(
          logoWrapperRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.6"
        );

      // Parallax scroll effect on Hero emblem
      gsap.to(logoWrapperRef.current, {
        y: 45,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
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

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] mb-6 overflow-hidden">
              <span ref={headlineLine1Ref} className="block drop-shadow-sm will-change-transform">
                Building Connections,
              </span>
              <span ref={headlineLine2Ref} className="block text-[#F97316] drop-shadow-sm will-change-transform">
                Creating Innovations.
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-8 font-normal will-change-transform"
            >
              Wadah kolaborasi mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh untuk mengembangkan potensi, memperluas wawasan, dan menciptakan inovasi di bidang teknologi.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] font-bold text-sm tracking-wide uppercase rounded-lg hover:bg-[#EA580C] hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Kenali HIMA-TI</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/program-kerja"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#333338] bg-[#111111]/60 backdrop-blur-sm text-[#F5F5F2] font-semibold text-sm tracking-wide uppercase rounded-lg hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Lihat Kegiatan</span>
              </Link>
            </div>
          </div>

          {/* Official Emblem with subtle floating & 3D hover perspective */}
          <div
            ref={logoWrapperRef}
            className="lg:col-span-5 flex justify-center lg:justify-end will-change-transform"
          >
            <div className="relative w-52 h-60 sm:w-64 sm:h-72 lg:w-80 lg:h-92 animate-float-subtle">
              <div className="relative w-full h-full transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(249,115,22,0.18)]">
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
        </div>
      </Container>
    </section>
  );
}


