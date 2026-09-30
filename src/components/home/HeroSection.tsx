"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const heroWrapperRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline on page load
      const entranceTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      entranceTl
        .fromTo(
          badgeRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        .fromTo(
          logoWrapperRef.current,
          { opacity: 0, scale: 0.92, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );

      // 2. Scroll-driven dispersion & fade out timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroWrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      // Elements disperse in distinct subtle directions while fading out
      scrollTl
        .to(
          badgeRef.current,
          { y: -50, opacity: 0, ease: "power1.in" },
          0
        )
        .to(
          titleRef.current,
          { y: -70, opacity: 0, ease: "power1.in" },
          0
        )
        .to(
          logoWrapperRef.current,
          { scale: 1.15, y: -30, opacity: 0, ease: "power1.in" },
          0
        )
        .to(
          descRef.current,
          { y: 50, opacity: 0, ease: "power1.in" },
          0
        )
        .to(
          ctaRef.current,
          { y: 70, opacity: 0, ease: "power1.in" },
          0
        );
    }, heroWrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroWrapperRef} className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden">
      <section className="w-full h-full flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16 px-4 sm:px-6">
        <Container size="xl" className="h-full flex items-center justify-center">
          <div
            ref={heroContentRef}
            className="flex flex-col items-center text-center max-w-4xl mx-auto my-auto"
          >
            {/* Identity Badge */}
            <div ref={badgeRef} className="mb-3">
              <span className="inline-block text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#F97316] font-semibold bg-[#F97316]/10 px-3 py-1 border border-[#F97316]/20">
                Fakultas Sains dan Teknologi • Periode 2026/2027
              </span>
            </div>

            {/* Organization Main Title */}
            <h1
              ref={titleRef}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] mb-2 sm:mb-3"
            >
              HIMA-TI <span className="text-[#F97316]">UIN AR-RANIRY</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-mono font-medium text-[#A1A1AA] uppercase tracking-wider mb-5 sm:mb-6">
              Himpunan Mahasiswa Teknologi Informasi
            </p>

            {/* 3D / Focal Point Logo Emblem */}
            <div
              ref={logoWrapperRef}
              className="relative w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 my-1 sm:my-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.svg"
                alt="Logo Resmi HIMA-TI UIN Ar-Raniry"
                fill
                className="object-contain drop-shadow-[0_10px_25px_rgba(249,115,22,0.15)]"
                priority
              />
            </div>

            {/* Combined About Description */}
            <p
              ref={descRef}
              className="text-sm sm:text-base md:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mt-4 sm:mt-5 mb-6 sm:mb-8 font-normal"
            >
              Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh didirikan pada 13 September 2018 sebagai wadah pengembangan potensi softskill dan hardskill mahasiswa. Organisasi ini berstatus lembaga otonom yang aktif menggerakkan kajian ilmiah, inovasi, dan kebersamaan sivitas akademika.
            </p>

            {/* Action Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
            >
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#EA580C] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Kenali HIMA-TI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/program-kerja"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#333338] text-[#F5F5F2] font-semibold text-xs sm:text-sm tracking-wide uppercase hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Lihat Kegiatan</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

