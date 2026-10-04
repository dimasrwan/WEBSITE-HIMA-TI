"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Tv,
  Users2,
  Briefcase,
  GraduationCap,
  Calendar,
  Target,
  X,
  Tag,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { PROGRAMS, DIVISIONS } from "@/data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Program } from "@/types";

// Program category visual configuration
const DIVISION_CONFIG: Record<
  string,
  {
    icon: React.ElementType;
    badgeLabel: string;
    gradient: string;
    pattern: string;
    glowColor: string;
  }
> = {
  psdm: {
    icon: Users2,
    badgeLabel: "PSDM",
    gradient: "from-[#F97316]/25 via-[#C2410C]/15 to-[#18181B]",
    pattern: "radial-gradient(circle at 75% 25%, rgba(249,115,22,0.22) 0%, transparent 60%)",
    glowColor: "rgba(249,115,22,0.35)",
  },
  humas: {
    icon: Layers,
    badgeLabel: "HUMAS & KERJA SAMA",
    gradient: "from-[#EA580C]/25 via-[#9A3412]/15 to-[#18181B]",
    pattern: "radial-gradient(circle at 25% 75%, rgba(234,88,12,0.22) 0%, transparent 60%)",
    glowColor: "rgba(234,88,12,0.35)",
  },
  "minat-bakat": {
    icon: Code2,
    badgeLabel: "MINAT & BAKAT",
    gradient: "from-[#F97316]/25 via-[#7C2D12]/20 to-[#18181B]",
    pattern: "radial-gradient(circle at 80% 80%, rgba(249,115,22,0.25) 0%, transparent 65%)",
    glowColor: "rgba(249,115,22,0.35)",
  },
  multimedia: {
    icon: Tv,
    badgeLabel: "MULTIMEDIA",
    gradient: "from-[#FB923C]/25 via-[#C2410C]/15 to-[#18181B]",
    pattern: "radial-gradient(circle at 30% 30%, rgba(251,146,60,0.22) 0%, transparent 60%)",
    glowColor: "rgba(251,146,60,0.35)",
  },
  akademik: {
    icon: GraduationCap,
    badgeLabel: "AKADEMIK & KEILMUAN",
    gradient: "from-[#F97316]/20 via-[#431407]/25 to-[#18181B]",
    pattern: "radial-gradient(circle at 70% 30%, rgba(249,115,22,0.2) 0%, transparent 60%)",
    glowColor: "rgba(249,115,22,0.35)",
  },
  kewirausahaan: {
    icon: Briefcase,
    badgeLabel: "KEWIRAUSAHAAN",
    gradient: "from-[#EA580C]/20 via-[#7C2D12]/20 to-[#18181B]",
    pattern: "radial-gradient(circle at 40% 60%, rgba(234,88,12,0.22) 0%, transparent 60%)",
    glowColor: "rgba(234,88,12,0.35)",
  },
};

export default function ProgramKerjaPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Handle keyboard Escape and modal body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProgram(null);
      }
    };

    if (activeModalProgram) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalProgram]);

  const filteredPrograms =
    selectedDivision === "all"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.divisionId === selectedDivision);

  // Stagger animation when filter changes or on initial load
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.07,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedDivision]);

  return (
    <div ref={containerRef} className="pt-32 sm:pt-36 pb-32 bg-[#09090b] text-[#f4f4f5] relative overflow-hidden min-h-screen">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#f97316]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        {/* ========================================================= */}
        {/* 1. HERO SECTION                                           */}
        {/* ========================================================= */}
        <section className="pb-12 mb-10 border-b border-white/[0.08] relative">
          {/* Subtle Decorative Dot Pattern (Top Right) */}
          <div
            className="absolute top-0 right-0 w-36 h-28 opacity-25 pointer-events-none hidden md:block"
            style={{
              backgroundImage: "radial-gradient(#f97316 1.5px, transparent 1.5px)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="max-w-4xl">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-5">
              <span className="text-[#f4f4f5]">Program Kerja</span>{" "}
              <span className="text-[#f97316]">HIMA-TI</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              Rangkaian program kerja Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry yang dirancang untuk mengembangkan potensi, kreativitas, dan kolaborasi mahasiswa.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. HORIZONTAL CATEGORY FILTER BAR                         */}
        {/* ========================================================= */}
        <section className="mb-12">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
            {/* All Programs Tab */}
            <button
              type="button"
              onClick={() => setSelectedDivision("all")}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer border",
                selectedDivision === "all"
                  ? "bg-[#f97316] text-[#09090b] font-bold border-[#f97316] shadow-lg shadow-[#f97316]/25 scale-[1.02]"
                  : "bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#222226] border-white/[0.08]"
              )}
            >
              Semua Program ({PROGRAMS.length})
            </button>

            {/* Division Tabs */}
            {DIVISIONS.map((div) => {
              const count = PROGRAMS.filter((p) => p.divisionId === div.id).length;
              const isSelected = selectedDivision === div.id;

              return (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => setSelectedDivision(div.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer border",
                    isSelected
                      ? "bg-[#f97316] text-[#09090b] font-bold border-[#f97316] shadow-lg shadow-[#f97316]/25 scale-[1.02]"
                      : "bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#222226] border-white/[0.08]"
                  )}
                >
                  {div.shortName} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. 3-COLUMN PROGRAM CARDS GRID                            */}
        {/* ========================================================= */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {filteredPrograms.map((prog) => {
            const config = DIVISION_CONFIG[prog.divisionId] || {
              icon: Sparkles,
              badgeLabel: prog.divisionName.toUpperCase(),
              gradient: "from-[#F97316]/20 via-[#18181b] to-[#111113]",
              pattern: "",
              glowColor: "rgba(249,115,22,0.3)",
            };
            const IconComponent = config.icon;

            const isCompleted = prog.status === "Selesai";
            const isOngoing = prog.status === "Sedang Berjalan";

            return (
              <article
                key={prog.id}
                className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-[#f97316]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 cursor-pointer"
                onClick={() => setActiveModalProgram(prog)}
              >
                {/* 16:9 Stylized Thumbnail with Smooth Zoom on Hover */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#18181b] border-b border-white/[0.06]">
                  {/* Background Ambient Gradient & Pattern */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                      config.gradient
                    )}
                    style={{ backgroundImage: config.pattern || undefined }}
                  />

                  {/* Tech Grid Lines Overlay */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Thumbnail Central Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform duration-300 group-hover:scale-102">
                    <div className="w-12 h-12 rounded-xl bg-[#09090b]/85 border border-white/[0.12] flex items-center justify-center text-[#f97316] mb-2.5 shadow-lg group-hover:border-[#f97316]/50 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#f4f4f5]/90 uppercase line-clamp-1 px-4">
                      {prog.title}
                    </span>
                    <span className="text-[10px] font-mono text-[#a1a1aa] mt-0.5">
                      {prog.period}
                    </span>
                  </div>

                  {/* Top Thumbnail Badges Overlay */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
                    {/* Category Label */}
                    <span className="px-2.5 py-1 rounded-md bg-[#09090b]/85 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono font-bold text-[#f97316] uppercase tracking-wider shadow-sm">
                      {config.badgeLabel}
                    </span>

                    {/* Status Badge */}
                    <span
                      className={cn(
                        "px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm flex items-center gap-1.5",
                        isCompleted
                          ? "bg-[#09090b]/85 text-[#10B981] border-[#10B981]/30"
                          : isOngoing
                          ? "bg-[#09090b]/85 text-[#f97316] border-[#f97316]/30"
                          : "bg-[#09090b]/85 text-[#60A5FA] border-[#60A5FA]/30"
                      )}
                    >
                      <span
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          isCompleted
                            ? "bg-[#10B981]"
                            : isOngoing
                            ? "bg-[#f97316] animate-pulse"
                            : "bg-[#60A5FA]"
                        )}
                      />
                      {prog.status}
                    </span>
                  </div>
                </div>

                {/* Card Content Section */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Program Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[#f4f4f5] group-hover:text-[#f97316] transition-colors leading-snug line-clamp-2 mb-2.5">
                      {prog.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2 mb-4 font-normal">
                      {prog.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#a1a1aa] group-hover:text-[#f97316] font-semibold tracking-wider uppercase flex items-center gap-1.5 transition-colors">
                      LIHAT DETAIL KEGIATAN
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#18181b] border border-white/[0.08] flex items-center justify-center text-[#a1a1aa] group-hover:text-[#f97316] group-hover:border-[#f97316]/50 group-hover:translate-x-1 transition-all">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State if Filter yields zero items */}
        {filteredPrograms.length === 0 && (
          <div className="py-20 text-center rounded-2xl bg-[#111113] border border-white/[0.08]">
            <p className="text-sm font-mono text-[#a1a1aa]">
              Tidak ada program kerja yang terdaftar pada kategori ini.
            </p>
          </div>
        )}
      </Container>

      {/* ========================================================= */}
      {/* 4. DETAIL MODAL DIALOG                                    */}
      {/* ========================================================= */}
      {activeModalProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-2xl bg-[#111113] border border-[#f97316]/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setActiveModalProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[#18181b] hover:bg-[#222226] border border-white/[0.08] text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors cursor-pointer"
              aria-label="Tutup Detail"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#f97316]/10 border border-[#f97316]/30 text-xs font-mono font-bold text-[#f97316] uppercase">
                {activeModalProgram.divisionName}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#18181b] border border-white/[0.08] text-xs font-mono text-[#a1a1aa]">
                Status: <strong className="text-[#f4f4f5]">{activeModalProgram.status}</strong>
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f4f4f5] mb-4 leading-snug">
              {activeModalProgram.title}
            </h3>

            {/* Full Description */}
            <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6">
              {activeModalProgram.description}
            </p>

            {/* Details Grid Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#18181b] border border-white/[0.06] mb-6 text-xs font-mono">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#71717a] block">Waktu Pelaksanaan</span>
                  <span className="text-[#f4f4f5] font-semibold">{activeModalProgram.period}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Target className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#71717a] block">Target Sasaran</span>
                  <span className="text-[#f4f4f5] font-semibold">{activeModalProgram.target}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <span className="text-xs font-mono text-[#71717a] block mb-2">Fokus & Tagar:</span>
              <div className="flex flex-wrap gap-2">
                {activeModalProgram.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#18181b] border border-white/[0.06] text-xs font-mono text-[#a1a1aa]"
                  >
                    <Tag className="w-3 h-3 text-[#f97316]" />
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Action Button */}
            <div className="pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalProgram(null)}
                className="px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-[#09090b] font-bold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                Tutup Detail
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
