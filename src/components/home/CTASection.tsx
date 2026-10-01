"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import HalftoneBackground from "@/components/ui/HalftoneBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-14 sm:py-20 relative">
      <Container size="xl">
        <div
          ref={cardRef}
          className="relative overflow-hidden p-8 sm:p-12 lg:p-16 bg-[#111111]/80 backdrop-blur-sm border border-[#222225] flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-xl"
        >
          <div className="max-w-2xl relative z-10">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight mb-4">
              Mari Berkolaborasi Bersama HIMA-TI
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed font-normal">
              Kami membuka peluang kerja sama dengan lembaga kampus, komunitas teknologi, dan mitra industri untuk menciptakan dampak positif bagi mahasiswa.
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F97316] text-[#0A0A0A] font-bold text-sm tracking-wide uppercase hover:bg-[#EA580C] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#F97316]/20"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

