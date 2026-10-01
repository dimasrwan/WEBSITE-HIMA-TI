"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { DIVISIONS } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OrganizationBriefSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const divisionListRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      tl.fromTo(
        leftColRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      ).fromTo(
        divisionListRef.current ? divisionListRef.current.children : [],
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 },
        "-=0.3"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-14 sm:py-16 bg-transparent">
      <Container size="xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Heading, Description & Action */}
          <div ref={leftColRef} className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight mb-4">
              Kepengurusan
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed font-normal mb-6">
              Struktur organisasi HIMA-TI periode 2026/2027 terdiri dari Badan Pengurus Harian (BPH) dan 6 divisi kerja yang menghimpun 86 mahasiswa aktif Teknologi Informasi di bawah Surat Keputusan Dekan Fakultas Sains dan Teknologi UIN Ar-Raniry.
            </p>
            <Link
              href="/kepengurusan"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider hover:text-[#EA580C] transition-colors group"
            >
              <span>Lihat Kepengurusan</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Right Column: Clean Editorial List of Divisions */}
          <div
            ref={divisionListRef}
            className="lg:col-span-7 divide-y divide-[#222225] border-y border-[#222225]"
          >
            {DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="py-3.5 flex items-center justify-between group transition-colors duration-150"
              >
                <Link
                  href={`/kepengurusan#${div.id}`}
                  className="text-base sm:text-lg font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors"
                >
                  Divisi {div.name}
                </Link>
                <Link
                  href={`/kepengurusan#${div.id}`}
                  className="text-xs font-mono text-[#71717A] group-hover:text-[#F97316] transition-colors"
                >
                  Lihat
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
