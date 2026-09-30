"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { NEWS } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewsOverviewSection() {
  const [featuredNews, ...otherNews] = NEWS;
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLElement>(null);
  const sideCardsRef = useRef<HTMLDivElement>(null);

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
      )
        .fromTo(
          mainCardRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.25"
        )
        .fromTo(
          sideCardsRef.current ? sideCardsRef.current.children : [],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.12 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-14 sm:py-16 bg-[#0A0A0A]">
      <Container size="xl">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            title="Berita Terbaru"
            description="Informasi dan pengumuman resmi seputar agenda organisasi dan kegiatan mahasiswa."
            className="mb-0"
          />
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider hover:text-[#EA580C] transition-colors shrink-0 group"
          >
            <span>Lihat Semua Berita</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial News Layout with complete content fill */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story (7 cols) */}
          <article
            ref={mainCardRef}
            className="lg:col-span-7 p-8 sm:p-10 bg-[#111111] flex flex-col justify-between group hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-4">
                <span className="text-[#F97316] uppercase font-semibold">{featuredNews.category}</span>
                <span>{featuredNews.date}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-tight mb-4">
                <Link href={`/berita/${featuredNews.slug}`}>
                  {featuredNews.title}
                </Link>
              </h3>

              <p className="text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                {featuredNews.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-[#222225] flex items-center justify-between text-xs font-mono text-[#71717A]">
              <span>{featuredNews.author}</span>
              <Link
                href={`/berita/${featuredNews.slug}`}
                className="text-[#F5F5F2] group-hover:text-[#F97316] transition-colors inline-flex items-center gap-1 font-semibold"
              >
                <span>Baca Selengkapnya</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </article>

          {/* Side Stories (5 cols) */}
          <div ref={sideCardsRef} className="lg:col-span-5 flex flex-col gap-6">
            {otherNews.slice(0, 2).map((article) => (
              <article
                key={article.slug}
                className="p-7 bg-[#111111] flex flex-col justify-between flex-1 group hover:-translate-y-0.5 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-2">
                    <span className="text-[#F97316] uppercase font-semibold">{article.category}</span>
                    <span>{article.date}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-2">
                    <Link href={`/berita/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed line-clamp-2 mb-4 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222225] flex items-center justify-between text-xs font-mono text-[#71717A]">
                  <span>{article.author}</span>
                  <Link
                    href={`/berita/${article.slug}`}
                    className="text-[#F5F5F2] group-hover:text-[#F97316] transition-colors inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Baca</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
