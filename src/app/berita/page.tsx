"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { ArrowRight, Calendar, Clock, User, Newspaper, Sparkles, BookOpen } from "lucide-react";
import Container from "@/components/ui/Container";
import { NEWS } from "@/data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewsArticle } from "@/types";
import { TransitionLink } from "@/components/layout/PageTransition";

const CATEGORIES = ["Semua", "Organisasi", "Akademik", "Kegiatan"];

// Visual config for categories & articles
const CATEGORY_STYLES: Record<
  string,
  {
    icon: React.ElementType;
    gradient: string;
    badgeBg: string;
    badgeText: string;
    badgeBorder: string;
  }
> = {
  Organisasi: {
    icon: Newspaper,
    gradient: "from-[#F97316]/20 via-[#9A3412]/15 to-[#18181B]",
    badgeBg: "bg-[#F97316]/10",
    badgeText: "text-[#F97316]",
    badgeBorder: "border-[#F97316]/30",
  },
  Akademik: {
    icon: BookOpen,
    gradient: "from-[#EA580C]/20 via-[#431407]/25 to-[#18181B]",
    badgeBg: "bg-[#EA580C]/10",
    badgeText: "text-[#FB923C]",
    badgeBorder: "border-[#EA580C]/30",
  },
  Kegiatan: {
    icon: Sparkles,
    gradient: "from-[#F97316]/25 via-[#7C2D12]/20 to-[#18181B]",
    badgeBg: "bg-[#F97316]/10",
    badgeText: "text-[#F97316]",
    badgeBorder: "border-[#F97316]/30",
  },
};

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredNews =
    selectedCategory === "Semua"
      ? NEWS
      : NEWS.filter((item) => item.category === selectedCategory);

  // Pick first item as featured if viewing all or if items exist
  const featuredArticle: NewsArticle | undefined = filteredNews[0];
  const listArticles: NewsArticle[] = filteredNews.slice(1);

  // Stagger animation when switching category or initial render
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <div
      ref={containerRef}
      className="pt-32 sm:pt-36 pb-32 bg-[#09090b] text-[#f4f4f5] relative overflow-hidden min-h-screen"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#f97316]/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        {/* ========================================================= */}
        {/* 1. HEADER SECTION (Clean, Minimalist, No Excessive Dots)   */}
        {/* ========================================================= */}
        <section className="pb-10 mb-10 border-b border-white/[0.08]">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-5">
              <span className="text-[#f4f4f5]">Kabar</span>{" "}
              <span className="text-[#f97316]">HIMA-TI</span>
            </h1>

            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl font-normal">
              Kanal rilis resmi perkembangan organisasi, liputan kegiatan kaderisasi, sosialisasi konstitusi, dan dinamika akademik mahasiswa Teknologi Informasi.
            </p>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CATEGORY FILTER (Minimalist Horizontal Pill Buttons)    */}
        {/* ========================================================= */}
        <section className="mb-12">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === "Semua"
                  ? NEWS.length
                  : NEWS.filter((n) => n.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer border",
                    isSelected
                      ? "bg-[#f97316] text-[#09090b] font-bold border-[#f97316] shadow-md shadow-[#f97316]/25 scale-[1.02]"
                      : "bg-[#18181b] text-[#a1a1aa] hover:text-[#f4f4f5] hover:bg-[#222226] border-white/[0.08]"
                  )}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. BERITA UTAMA / FEATURED LEAD ARTICLE                   */}
        {/* ========================================================= */}
        {featuredArticle && (
          <section className="mb-14">
            <TransitionLink
              href={`/berita/${featuredArticle.slug}`}
              title="Warta Berita"
              className="group block rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-[#f97316]/60 transition-all duration-300 overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Visual Thumbnail Area (16:9 or full height on lg) */}
                <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] lg:min-h-full overflow-hidden bg-[#18181b] border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                  {/* Thematic Ambient Gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                      CATEGORY_STYLES[featuredArticle.category]?.gradient ||
                        "from-[#F97316]/20 via-[#18181b] to-[#111113]"
                    )}
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

                  {/* Central Visual Icon / Label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform duration-300 group-hover:scale-102">
                    <div className="w-14 h-14 rounded-2xl bg-[#09090b]/85 border border-white/[0.12] flex items-center justify-center text-[#f97316] mb-3 shadow-xl group-hover:border-[#f97316]/50 transition-colors">
                      <Newspaper className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider text-[#f4f4f5]/90 uppercase px-4 line-clamp-1">
                      Berita Utama
                    </span>
                    <span className="text-[11px] font-mono text-[#a1a1aa] mt-1">
                      HIMA-TI FST UINAR
                    </span>
                  </div>

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 z-20 pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-[#09090b]/85 backdrop-blur-md border border-[#f97316]/30 text-[11px] font-mono font-bold text-[#f97316] uppercase tracking-wider shadow-sm">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                {/* Article Content Area */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Meta info: Date & Read Time */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#a1a1aa] mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                        {featuredArticle.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#71717a]" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f4f4f5] group-hover:text-[#f97316] transition-colors leading-snug mb-4">
                      {featuredArticle.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base text-[#a1a1aa] leading-relaxed mb-6 font-normal line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  {/* Bottom Author & CTA */}
                  <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#71717a]">
                      <User className="w-3.5 h-3.5 text-[#f97316]" />
                      <span>{featuredArticle.author}</span>
                    </div>

                    <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#f97316] group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </TransitionLink>
          </section>
        )}

        {/* ========================================================= */}
        {/* 4. DAFTAR BERITA LAINNYA (Modern Responsive 2-Column Grid) */}
        {/* ========================================================= */}
        {listArticles.length > 0 && (
          <section>
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#f4f4f5]">
                Warta Terkini Lainnya
              </h2>
              <span className="text-xs font-mono text-[#71717a]">
                Menampilkan {listArticles.length} Warta
              </span>
            </div>

            <div
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7"
            >
              {listArticles.map((article) => {
                const style = CATEGORY_STYLES[article.category] || {
                  gradient: "from-[#F97316]/20 via-[#18181b] to-[#111113]",
                };

                return (
                  <article
                    key={article.slug}
                    className="group rounded-2xl bg-[#111113] border border-white/[0.08] hover:border-[#f97316]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70"
                  >
                    <TransitionLink
                      href={`/berita/${article.slug}`}
                      title="Warta Berita"
                      className="flex flex-col flex-1 justify-between h-full"
                    >
                      {/* 16:9 Aspect Video Thumbnail Header */}
                      <div className="relative aspect-video w-full overflow-hidden bg-[#18181b] border-b border-white/[0.06]">
                        {/* Background Ambient Gradient */}
                        <div
                          className={cn(
                            "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                            style.gradient
                          )}
                        />

                        {/* Tech Grid Overlay */}
                        <div
                          className="absolute inset-0 opacity-15 pointer-events-none"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                            backgroundSize: "20px 20px",
                          }}
                        />

                        {/* Central Graphic */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform duration-300 group-hover:scale-102">
                          <div className="w-12 h-12 rounded-xl bg-[#09090b]/85 border border-white/[0.12] flex items-center justify-center text-[#f97316] mb-2 shadow-lg group-hover:border-[#f97316]/50 transition-colors">
                            <Newspaper className="w-6 h-6" />
                          </div>
                          <span className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                            Dokumentasi Warta
                          </span>
                        </div>

                        {/* Top Category Badge */}
                        <div className="absolute top-3.5 left-3.5 z-20 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-md bg-[#09090b]/85 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono font-bold text-[#f97316] uppercase tracking-wider shadow-sm">
                            {article.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Body */}
                      <div className="p-6 flex flex-col flex-1 justify-between">
                        <div>
                          {/* Date & Read time */}
                          <div className="flex items-center gap-2 text-xs font-mono text-[#71717a] mb-3">
                            <Calendar className="w-3.5 h-3.5 text-[#f97316]" />
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-[#f4f4f5] group-hover:text-[#f97316] transition-colors leading-snug line-clamp-2 mb-3">
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2 mb-4 font-normal">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Card Bottom Link */}
                        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                          <span className="text-[#71717a]">{article.author}</span>
                          <span className="text-[#a1a1aa] group-hover:text-[#f97316] font-semibold flex items-center gap-1.5 transition-colors uppercase">
                            Baca Berita
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </TransitionLink>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Empty State if Filter yields zero items */}
        {filteredNews.length === 0 && (
          <div className="py-20 text-center rounded-2xl bg-[#111113] border border-white/[0.08]">
            <p className="text-sm font-mono text-[#a1a1aa]">
              Tidak ada artikel berita yang ditemukan untuk kategori ini.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
}
