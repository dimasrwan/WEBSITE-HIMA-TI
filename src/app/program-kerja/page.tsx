"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import Container from "@/components/ui/Container";
import { PROGRAMS, DIVISIONS } from "@/data";
import { cn } from "@/lib/utils";
import { Calendar, Target, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProgramKerjaPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filteredPrograms =
    selectedDivision === "all"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.divisionId === selectedDivision);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (listRef.current?.children) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedDivision]);

  return (
    <div ref={containerRef} className="pt-32 sm:pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-12 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Program Kerja HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Rangkaian inisiatif resmi yang mencakup kaderisasi terstruktur (OAT dan CopyPaste), lab praktikum kejuruan, dan riset teknologi informasi mahasiswa.
          </p>
        </div>

        {/* Division Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 border-b border-[#222225] no-scrollbar text-xs font-mono">
          <button
            onClick={() => setSelectedDivision("all")}
            className={cn(
              "px-4 py-2 uppercase tracking-wider rounded-lg transition-all duration-200 shrink-0",
              selectedDivision === "all"
                ? "bg-[#F97316] text-[#0A0A0A] font-bold shadow-md shadow-[#F97316]/20"
                : "text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#161618]"
            )}
          >
            Semua Divisi ({PROGRAMS.length})
          </button>

          {DIVISIONS.map((div) => {
            const count = PROGRAMS.filter((p) => p.divisionId === div.id).length;
            return (
              <button
                key={div.id}
                onClick={() => setSelectedDivision(div.id)}
                className={cn(
                  "px-4 py-2 uppercase tracking-wider rounded-lg transition-all duration-200 shrink-0",
                  selectedDivision === div.id
                    ? "bg-[#F97316] text-[#0A0A0A] font-bold shadow-md shadow-[#F97316]/20"
                    : "text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#161618]"
                )}
              >
                {div.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Editorial Programs Stack with Interactive Hover & Reveal */}
        <div ref={listRef} className="divide-y divide-[#222225] border-y border-[#222225]">
          {filteredPrograms.map((prog, idx) => (
            <article
              key={prog.id}
              className="py-10 px-4 sm:px-6 rounded-xl group transition-all duration-300 hover:bg-[#111111]/70 hover:border-[#F97316]/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 text-xs font-mono text-[#F97316] font-bold">
                  0{idx + 1}
                </div>

                <div className="lg:col-span-4">
                  <span className="text-xs font-mono text-[#F97316] uppercase tracking-wider block mb-2 font-semibold">
                    {prog.divisionName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-3">
                    {prog.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-[#161618] border border-[#27272A] text-[#D4D4D8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Status: <strong className="text-[#F5F5F2]">{prog.status}</strong></span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-4">
                    {prog.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#71717A]">
                    {prog.tags.map((t) => (
                      <span key={t} className="hover:text-[#F97316] transition-colors">#{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 text-xs font-mono text-[#71717A] lg:text-right space-y-2">
                  <div className="flex items-center lg:justify-end gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F97316]" />
                    <span className="text-[#F5F5F2]">{prog.period}</span>
                  </div>
                  <div className="flex items-center lg:justify-end gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#71717A]" />
                    <span className="text-[#D4D4D8]">{prog.target}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
