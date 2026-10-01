"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROGRAMS } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProgramsOverviewSection() {
  const selectedPrograms = PROGRAMS.slice(0, 3);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

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
        headerRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55 }
      ).fromTo(
        cardsGridRef.current ? cardsGridRef.current.children : [],
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
        "-=0.25"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-14 sm:py-16 bg-transparent">
      <Container size="xl">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            title="Program Kerja"
            description="Program kerja pilihan yang dirancang untuk mendukung akselerasi potensi mahasiswa TI."
            className="mb-0"
          />
          <Link
            href="/program-kerja"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider hover:text-[#EA580C] transition-colors shrink-0 group"
          >
            <span>Lihat Semua Program</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Programs Grid with clean hover transitions */}
        <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {selectedPrograms.map((prog) => (
            <div
              key={prog.id}
              className="p-8 bg-[#111111]/85 backdrop-blur-sm border border-[#222225] rounded-xl flex flex-col justify-between group hover:-translate-y-1.5 hover:border-[#F97316]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div>
                <span className="text-xs font-mono text-[#F97316] uppercase tracking-wider block mb-3 font-semibold">
                  {prog.divisionName}
                </span>

                <h3 className="text-xl font-bold text-[#F5F5F2] leading-snug mb-3 group-hover:text-[#F97316] transition-colors">
                  {prog.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {prog.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222225] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>{prog.period}</span>
                <Link
                  href="/program-kerja"
                  className="text-[#F5F5F2] group-hover:text-[#F97316] transition-colors inline-flex items-center gap-1 font-semibold group/btn"
                >
                  <span>Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
