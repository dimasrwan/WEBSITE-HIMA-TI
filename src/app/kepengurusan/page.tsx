"use client";

import React, { useState, useRef, useLayoutEffect, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Share2,
  Code2,
  Tv,
  UserCheck,
  TrendingUp,
  BookOpen,
  UserX,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { DIVISIONS, MEMBERS } from "@/data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Division, Member } from "@/types";
import { TransitionLink } from "@/components/layout/PageTransition";

// Division Icon mapping
const DIVISION_ICONS: Record<string, React.ElementType> = {
  humas: Share2,
  "minat-bakat": Code2,
  multimedia: Tv,
  psdm: UserCheck,
  kewirausahaan: TrendingUp,
  akademik: BookOpen,
};

export default function KepengurusanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroHeaderRef = useRef<HTMLDivElement>(null);

  // States
  const [openDivisionId, setOpenDivisionId] = useState<string | null>(null);
  const [divisionSearchQuery, setDivisionSearchQuery] = useState<string>("");

  // DPH members (4 members)
  const dphMembers = useMemo(() => MEMBERS.filter((m) => m.isBPH), []);

  const toggleDivision = (divId: string) => {
    if (openDivisionId === divId) {
      setOpenDivisionId(null);
      setDivisionSearchQuery("");
    } else {
      setOpenDivisionId(divId);
      setDivisionSearchQuery("");
    }
  };

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

      // 2. Scroll Reveal for Sections
      const sections = containerRef.current?.querySelectorAll(".editorial-reveal-section");
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
      className="relative pt-28 sm:pt-36 pb-32 bg-[#0A0A0A] text-[#F5F5F2] selection:bg-[#F97316] selection:text-[#0A0A0A]"
    >
      <Container size="xl">
        {/* ========================================================= */}
        {/* 1. HERO SECTION: MINIMALIST & BOLD TITLE                  */}
        {/* ========================================================= */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-[#222225] flex items-center justify-center text-center">
          <div ref={heroHeaderRef} className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06] text-[#F5F5F2]">
              Kepengurusan <span className="text-[#F97316]">HIMA-TI</span>
            </h1>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. DEWAN PENGURUS HARIAN (DPH) SECTION                    */}
        {/* ========================================================= */}
        <section className="editorial-reveal-section py-20 sm:py-24 border-b border-[#222225]">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
              Dewan Pengurus Harian (DPH)
            </h2>
          </div>

          {/* DPH 4-Column Equal Cards Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {dphMembers.map((member) => (
              <div
                key={member.nim}
                className="p-6 sm:p-7 rounded-2xl bg-[#111111]/90 backdrop-blur-md border border-[#222225] hover:border-[#F97316] flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 min-h-[140px]"
              >
                <div className="mb-3">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/30 uppercase tracking-wider inline-block">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. DIREKTORI DIVISI & ANGGOTA                             */}
        {/* ========================================================= */}
        <section className="editorial-reveal-section pt-20 sm:pt-28">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight">
              Direktori Divisi & Anggota
            </h2>
          </div>

          {/* Division Panels Layout */}
          <div className="space-y-6">
            {DIVISIONS.map((div: Division) => {
              const allDivMembers = MEMBERS.filter((m) => m.divisionId === div.id);
              const isOpen = openDivisionId === div.id;
              const DivIcon = DIVISION_ICONS[div.id] || Layers;

              // Filter search in open panel
              const searchFilteredMembers = divisionSearchQuery.trim()
                ? allDivMembers.filter((m) =>
                    m.name.toLowerCase().includes(divisionSearchQuery.toLowerCase()) ||
                    m.role.toLowerCase().includes(divisionSearchQuery.toLowerCase()) ||
                    m.nim.includes(divisionSearchQuery)
                  )
                : allDivMembers;

              return (
                <div
                  key={div.id}
                  id={div.id}
                  className={cn(
                    "rounded-2xl bg-[#111111]/90 backdrop-blur-md border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "border-[#F97316] shadow-xl shadow-black/80 ring-1 ring-[#F97316]/30"
                      : "border-[#222225] hover:border-[#3F3F46]"
                  )}
                >
                  {/* Division Card Header */}
                  <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#F97316] shrink-0">
                        <DivIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] tracking-tight">
                            {div.name}
                          </h3>
                          <span className="text-xs font-mono text-[#71717A] bg-[#18181B] px-2.5 py-0.5 rounded-full border border-[#27272A]">
                            {allDivMembers.length} Anggota
                          </span>
                        </div>
                        <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-2xl">
                          {div.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand Action Button */}
                    <div className="flex items-center justify-end">
                      <button
                        type="button"
                        onClick={() => toggleDivision(div.id)}
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shrink-0",
                          isOpen
                            ? "bg-[#F97316] text-[#0A0A0A] shadow-md shadow-[#F97316]/20"
                            : "bg-[#18181B] hover:bg-[#222225] text-[#F5F5F2] border border-[#27272A] hover:border-[#F97316]/50"
                        )}
                      >
                        <span>{isOpen ? "Tutup Anggota" : "Lihat Anggota"}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#F97316]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expandable Member List Panel */}
                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-[#222225] bg-[#0C0C0E]">
                      {/* Search Bar in active division */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 my-4 pb-4 border-b border-[#222225]">
                        <div className="text-xs font-mono text-[#71717A]">
                          Menampilkan{" "}
                          <span className="text-[#F97316] font-bold">
                            {searchFilteredMembers.length}
                          </span>{" "}
                          dari {allDivMembers.length} Anggota {div.name}
                        </div>

                        <div className="relative w-full sm:w-72">
                          <Search className="w-4 h-4 text-[#71717A] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            value={divisionSearchQuery}
                            onChange={(e) => setDivisionSearchQuery(e.target.value)}
                            placeholder="Cari nama anggota..."
                            className="w-full bg-[#18181B] border border-[#27272A] rounded-lg pl-9 pr-4 py-2 text-xs font-mono text-[#F5F5F2] placeholder:text-[#71717A] focus:outline-none focus:border-[#F97316] transition-colors"
                          />
                        </div>
                      </div>

                      {/* No Results Fallback */}
                      {searchFilteredMembers.length === 0 ? (
                        <div className="py-12 text-center flex flex-col items-center justify-center text-[#71717A]">
                          <UserX className="w-10 h-10 mb-3 text-[#3F3F46]" />
                          <p className="text-sm font-mono">
                            Tidak ada anggota yang cocok dengan &quot;{divisionSearchQuery}&quot; di divisi ini.
                          </p>
                        </div>
                      ) : (
                        /* Responsive Members Grid */
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {searchFilteredMembers.map((member: Member) => {
                            const isLeader =
                              member.role.toLowerCase().includes("ketua") &&
                              !member.role.toLowerCase().includes("anggota");

                            return (
                              <div
                                key={`${member.nim}-${member.no}`}
                                className={cn(
                                  "p-5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 group hover:-translate-y-1 min-h-[96px]",
                                  isLeader
                                    ? "bg-[#161618] border-[#F97316]/50 hover:border-[#F97316]"
                                    : "bg-[#111111] border-[#222225] hover:border-[#3F3F46]"
                                )}
                              >
                                <h4 className="text-sm sm:text-base font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-1">
                                  {member.name}
                                </h4>
                                <span
                                  className={cn(
                                    "text-[11px] font-mono",
                                    isLeader ? "text-[#F97316] font-semibold" : "text-[#A1A1AA]"
                                  )}
                                >
                                  {member.role}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Link to Program Kerja */}
          <div className="mt-16 pt-10 border-t border-[#222225] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#F5F5F2]">
                Ingin Mengetahui Program Kerja Tiap Divisi?
              </h3>
              <p className="text-sm text-[#71717A] mt-1">
                Jelajahi agenda kegiatan, praktikum, dan kaderisasi resmi HIMA-TI.
              </p>
            </div>
            <TransitionLink
              href="/program-kerja"
              title="Program Kerja"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] text-[#0A0A0A] text-xs font-mono uppercase tracking-wider font-bold rounded-lg hover:bg-[#EA580C] hover:shadow-lg hover:shadow-[#F97316]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shrink-0"
            >
              <span>Lihat Program Kerja</span>
              <ArrowUpRight className="w-4 h-4" />
            </TransitionLink>
          </div>
        </section>
      </Container>
    </div>
  );
}
