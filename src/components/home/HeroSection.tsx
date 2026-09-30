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

  // Individual refs for dispersal animation
  const wordBuildingRef = useRef<HTMLSpanElement>(null);
  const wordConnectionsRef = useRef<HTMLSpanElement>(null);
  const wordCreatingRef = useRef<HTMLSpanElement>(null);
  const wordInnovationsRef = useRef<HTMLSpanElement>(null);

  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline on page load
      const entranceTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (!prefersReducedMotion) {
        entranceTl
          .fromTo(
            [
              wordBuildingRef.current,
              wordConnectionsRef.current,
              wordCreatingRef.current,
              wordInnovationsRef.current,
            ],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }
          )
          .fromTo(
            descRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.3"
          )
          .fromTo(
            logoRef.current,
            { opacity: 0, y: 15, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7 },
            "-=0.4"
          );

        // 2. Scroll-driven Dispersal Timeline
        const dispersalTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=550",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Building: moves left and slightly up, fades out
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

        // Connections: moves further left and slightly up, fades out
        dispersalTl.to(
          wordConnectionsRef.current,
          {
            x: -120,
            y: -20,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Creating: moves right and slightly up, fades out
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
            x: 130,
            y: -15,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Description: moves slightly down with subtle fade out
        dispersalTl.to(
          descRef.current,
          {
            y: 40,
            opacity: 0,
            ease: "none",
          },
          0.05
        );

        // CTAs: move slightly down with fade out
        dispersalTl.to(
          ctaRef.current,
          {
            y: 35,
            opacity: 0,
            ease: "none",
          },
          0.05
        );

        // Logo: moves slowly right, scales slightly up, fades out
        dispersalTl.to(
          logoRef.current,
          {
            x: 70,
            y: -20,
            scale: 1.08,
            opacity: 0,
            ease: "none",
          },
          0
        );
      } else {
        // Fallback for reduced motion: instant visibility
        gsap.set(
          [
            wordBuildingRef.current,
            wordConnectionsRef.current,
            wordCreatingRef.current,
            wordInnovationsRef.current,
            descRef.current,
            ctaRef.current,
            logoRef.current,
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
      className="relative pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-44 lg:pb-24 bg-[#0A0A0A] overflow-hidden"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] mb-6">
              <span className="block overflow-visible">
                <span ref={wordBuildingRef} className="inline-block mr-3 will-change-transform">
                  Building
                </span>
                <span ref={wordConnectionsRef} className="inline-block will-change-transform">
                  Connections,
                </span>
              </span>
              <span className="block text-[#F97316] overflow-visible">
                <span ref={wordCreatingRef} className="inline-block mr-3 will-change-transform">
                  Creating
                </span>
                <span ref={wordInnovationsRef} className="inline-block will-change-transform">
                  Innovations.
                </span>
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-xl mb-8 font-normal will-change-transform"
            >
              Wadah kolaborasi mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh untuk mengembangkan potensi, memperluas wawasan, dan menciptakan inovasi di bidang teknologi.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 will-change-transform">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] font-bold text-sm tracking-wide uppercase hover:bg-[#EA580C] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Kenali HIMA-TI</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/program-kerja"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#333338] text-[#F5F5F2] font-semibold text-sm tracking-wide uppercase hover:border-[#F97316] hover:text-[#F97316] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Lihat Kegiatan</span>
              </Link>
            </div>
          </div>

          {/* Official Emblem */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              ref={logoRef}
              className="relative w-48 h-56 sm:w-60 sm:h-68 transition-transform duration-300 hover:scale-105 will-change-transform"
            >
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

