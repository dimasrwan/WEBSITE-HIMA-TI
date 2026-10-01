"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Layers,
  Flame,
  Type,
  Compass,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { ORG_INFO } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LOGO_ELEMENTS = [
  {
    id: "sans",
    num: "01",
    title: "Tipografi Sans-Serif",
    category: "Presisi & Integritas",
    desc: "Bentuk huruf yang kokoh, tegas, dan proporsional melambangkan ketelitian ilmiah, profesionalitas kerja, serta tekad keunggulan civitas akademika.",
    icon: Type,
  },
  {
    id: "fold",
    num: "02",
    title: "Lipatan Terintegrasi (I & T)",
    category: "Sinergi Kolektif",
    desc: "Penyatuan geometris huruf 'I' dan 'T' mencerminkan sinergi erat dan kolaborasi tanpa sekat antara mahasiswa, dosen, dan alumni.",
    icon: Layers,
  },
  {
    id: "curve",
    num: "03",
    title: "Sudut Kurva Dinamis",
    category: "Adaptabilitas",
    desc: "Lengkungan kurva presisi merepresentasikan keterbukaan wawasan, nilai kekeluargaan, serta kelincahan beradaptasi dengan kemajuan teknologi modern.",
    icon: Compass,
  },
  {
    id: "color",
    num: "04",
    title: "Warna Oranye Identitas (#F97316)",
    category: "Daya Juang & Inovasi",
    desc: "Warna oranye khas HIMA-TI melambangkan keberanian bereksplorasi, energi kreativitas yang menyala, dan komitmen memberikan dampak bagi kemaslahatan.",
    icon: Flame,
  },
];

export default function TentangPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroHeaderRef = useRef<HTMLDivElement>(null);
  const [activeLogoIndex, setActiveLogoIndex] = useState(0);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Title Entrance Animation
      if (heroHeaderRef.current) {
        gsap.fromTo(
          heroHeaderRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          }
        );
      }

      // 2. Section Reveal Animations
      const sections = containerRef.current?.querySelectorAll(
        ".editorial-section-reveal"
      );
      sections?.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative pt-28 sm:pt-36 pb-32 bg-[#0a0a0a] text-[#F5F5F2] selection:bg-[#F97316] selection:text-[#0A0A0A]"
    >
      {/* Background Subtlety Mask */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60 backdrop-blur-[1px] pointer-events-none -z-10" />

      <Container size="xl">
        {/* ========================================================= */}
        {/* 1. HERO: MINIMALIST CENTERED HEADER                       */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-[#222225] flex items-center justify-center text-center">
          <div ref={heroHeaderRef} className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06] text-[#F5F5F2]">
              Mengenal <span className="text-[#F97316]">HIMA-TI</span>
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. SECTION VISI ORGANISASI (Grand Typography Hero Card)  */}
        {/* ========================================================= */}
        <section className="editorial-section-reveal py-20 sm:py-24 border-b border-[#222225]">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
              Visi
            </h2>
          </div>

          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#111111]/90 backdrop-blur-md border border-[#222225] relative overflow-hidden group hover:border-[#F97316]/50 transition-colors duration-500">
            {/* Subtle glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-mono font-bold text-[#F97316] uppercase tracking-wider block mb-4">
                Visi Organisasi
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] leading-tight tracking-tight">
                &ldquo;{ORG_INFO.vision}&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. SECTION MISI ORGANISASI (2x2 Grid of Refined Cards)   */}
        {/* ========================================================= */}
        <section className="editorial-section-reveal py-20 sm:py-24 border-b border-[#222225]">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
              Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ORG_INFO.missions.map((mission, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-[#111111]/85 backdrop-blur-sm border border-[#222225] flex flex-col justify-between group hover:border-[#F97316]/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#222225]">
                    <span className="text-xs font-mono font-bold text-[#F97316] tracking-wider">
                      MISI 0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-[#71717A] group-hover:text-[#F97316] transition-colors">
                      [0{idx + 1}/04]
                    </span>
                  </div>
                  <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed font-medium group-hover:text-[#F5F5F2] transition-colors">
                    {mission}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. FILOSOFI LOGO                                          */}
        {/* ========================================================= */}
        <section className="editorial-section-reveal pt-20 sm:pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
                Filosofi Logo
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Logo Emblem Feature */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-[#111111]/80 border border-[#222225]">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 my-4 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="Logo Lambang Resmi HIMA-TI FST UIN Ar-Raniry"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <span className="text-xs font-mono font-bold text-[#F5F5F2] uppercase tracking-wider block">
                  Lambang Resmi HIMA-TI
                </span>
                <span className="text-[11px] font-mono text-[#F97316]">
                  Aksen Oranye (#F97316) & Latar Gelap
                </span>
              </div>
            </div>

            {/* Right: Interactive Editorial Tabs / List */}
            <div className="lg:col-span-7 space-y-3">
              {LOGO_ELEMENTS.map((elem, idx) => {
                const isActive = activeLogoIndex === idx;
                const IconComp = elem.icon;

                return (
                  <div
                    key={elem.id}
                    onClick={() => setActiveLogoIndex(idx)}
                    className={`cursor-pointer p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-[#18181B] border-[#F97316] text-[#F5F5F2] shadow-lg shadow-black/40"
                        : "bg-[#111111]/50 border-[#222225] text-[#71717A] hover:border-[#3F3F46] hover:text-[#D4D4D8]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <IconComp
                          className={`w-4 h-4 ${
                            isActive ? "text-[#F97316]" : "text-[#71717A]"
                          }`}
                        />
                        <h4
                          className={`text-base font-bold ${
                            isActive ? "text-[#F5F5F2]" : "text-[#D4D4D8]"
                          }`}
                        >
                          {elem.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-[#F97316] font-semibold">
                        {elem.category}
                      </span>
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed transition-all ${
                        isActive
                          ? "text-[#D4D4D8] mt-2 block"
                          : "text-[#71717A] line-clamp-1"
                      }`}
                    >
                      {elem.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Link to Kepengurusan */}
          <div className="mt-16 pt-10 border-t border-[#222225] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F2]">
                Ingin Mengetahui Jajaran Pengurus?
              </h3>
              <p className="text-sm text-[#71717A] mt-1">
                Telusuri profil 86 fungsionaris pengurus HIMA-TI Periode 2026/2027.
              </p>
            </div>
            <Link
              href="/kepengurusan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] text-xs font-mono uppercase tracking-wider font-bold rounded-lg hover:bg-[#EA580C] hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shrink-0"
            >
              <span>Struktur Kepengurusan</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
