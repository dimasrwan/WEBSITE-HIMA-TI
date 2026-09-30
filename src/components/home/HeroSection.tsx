"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Element refs for centered dispersal animation
  const logoRef = useRef<HTMLDivElement>(null);
  const wordBuildingRef = useRef<HTMLSpanElement>(null);
  const wordConnectionsRef = useRef<HTMLSpanElement>(null);
  const wordCreatingRef = useRef<HTMLSpanElement>(null);
  const wordInnovationsRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline on page load
      const entranceTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (!prefersReducedMotion) {
        entranceTl
          .fromTo(
            logoRef.current,
            { opacity: 0, y: -20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7 }
          )
          .fromTo(
            [
              wordBuildingRef.current,
              wordConnectionsRef.current,
              wordCreatingRef.current,
              wordInnovationsRef.current,
            ],
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
            "-=0.3"
          )
          .fromTo(
            descRef.current,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.3"
          );

        // 2. Scroll-driven Centered Dispersal Timeline
        const dispersalTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=500",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Logo: moves upwards and scales slightly, fades out smoothly
        dispersalTl.to(
          logoRef.current,
          {
            y: -70,
            scale: 1.08,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Building: moves to upper-left, fades out
        dispersalTl.to(
          wordBuildingRef.current,
          {
            x: -80,
            y: -30,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Connections: moves further left, fades out
        dispersalTl.to(
          wordConnectionsRef.current,
          {
            x: -120,
            y: -15,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Creating: moves to upper-right, fades out
        dispersalTl.to(
          wordCreatingRef.current,
          {
            x: 80,
            y: -30,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Innovations: moves further right, fades out
        dispersalTl.to(
          wordInnovationsRef.current,
          {
            x: 120,
            y: -15,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Description: moves downwards and fades out
        dispersalTl.to(
          descRef.current,
          {
            y: 40,
            opacity: 0,
            ease: "none",
          },
          0.04
        );

        // CTAs: move downwards and fade out
        dispersalTl.to(
          ctaRef.current,
          {
            y: 45,
            opacity: 0,
            ease: "none",
          },
          0.06
        );
      } else {
        // Fallback for reduced motion: instant visibility
        gsap.set(
          [
            logoRef.current,
            wordBuildingRef.current,
            wordConnectionsRef.current,
            wordCreatingRef.current,
            wordInnovationsRef.current,
            descRef.current,
            ctaRef.current,
          ],
          { opacity: 1, y: 0, x: 0, scale: 1 }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0A0A0A] overflow-hidden"
    >
      <Container size="lg">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* 1. Large Official Logo Emblem */}
          <div
            ref={logoRef}
            className="relative w-28 h-32 sm:w-36 sm:h-40 md:w-44 md:h-48 mb-8 md:mb-10 transition-transform duration-300 hover:scale-105 will-change-transform"
          >
            <Image
              src="/logo.svg"
              alt="Logo Resmi HIMA-TI UIN Ar-Raniry"
              fill
              className="object-contain drop-shadow-[0_10px_30px_rgba(249,115,22,0.15)]"
              priority
            />
          </div>

          {/* 2. Dominant Centered Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.08] mb-6 sm:mb-8">
            <span className="block overflow-visible mb-1 sm:mb-2">
              <span ref={wordBuildingRef} className="inline-block mr-2.5 sm:mr-4 will-change-transform">
                Building
              </span>
              <span ref={wordConnectionsRef} className="inline-block will-change-transform">
                Connections,
              </span>
            </span>
            <span className="block text-[#F97316] overflow-visible">
              <span ref={wordCreatingRef} className="inline-block mr-2.5 sm:mr-4 will-change-transform">
                Creating
              </span>
              <span ref={wordInnovationsRef} className="inline-block will-change-transform">
                Innovations.
              </span>
            </span>
          </h1>

          {/* 3. Short Organization Description */}
          <p
            ref={descRef}
            className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal will-change-transform"
          >
            Wadah kolaborasi mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh untuk mengembangkan potensi, memperluas wawasan, dan menciptakan inovasi di bidang teknologi.
          </p>

          {/* 4. Action CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto will-change-transform"
          >
            <Link
              href="/tentang"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F97316] text-[#0A0A0A] font-bold text-xs sm:text-sm font-mono tracking-wider uppercase hover:bg-[#EA580C] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Kenali HIMA-TI</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/program-kerja"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#333338] text-[#F5F5F2] font-semibold text-xs sm:text-sm font-mono tracking-wider uppercase hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Lihat Kegiatan</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}


