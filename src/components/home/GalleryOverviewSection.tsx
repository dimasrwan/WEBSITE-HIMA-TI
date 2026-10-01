"use client";

import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_ITEMS } from "@/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryOverviewSection() {
  const [featuredGallery, ...otherGallery] = GALLERY_ITEMS;
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
        gridRef.current ? gridRef.current.children : [],
        { opacity: 0, y: 20 },
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
            title="Galeri Kegiatan"
            description="Dokumentasi rekam jejak aktivitas, musyawarah, dan agenda kemahasiswaan."
            className="mb-0"
          />
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#F97316] uppercase tracking-wider hover:text-[#EA580C] transition-colors shrink-0 group"
          >
            <span>Lihat Semua Galeri</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Varied Gallery Grid: 1 Featured item (wide) + 2 standard items */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Featured Wide Item */}
          <div className="md:col-span-6 lg:col-span-6 p-8 sm:p-10 bg-[#111111]/80 backdrop-blur-sm border border-[#222225] rounded-xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#F97316]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-4">
                <span className="text-[#F97316] uppercase font-semibold">{featuredGallery.category}</span>
                <span>{featuredGallery.date}</span>
              </div>

              <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block mb-2 font-semibold">
                #{featuredGallery.tag}
              </span>

              <h3 className="text-2xl font-bold text-[#F5F5F2] leading-snug mb-4 group-hover:text-[#F97316] transition-colors">
                {featuredGallery.title}
              </h3>
            </div>

            <p className="text-base text-[#71717A] leading-relaxed pt-4 border-t border-[#222225]">
              {featuredGallery.description}
            </p>
          </div>

          {/* 2 Other Items */}
          {otherGallery.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="md:col-span-6 lg:col-span-3 p-7 bg-[#111111]/80 backdrop-blur-sm border border-[#222225] rounded-xl flex flex-col justify-between group hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                  <span className="text-[#F97316] uppercase font-semibold">{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block mb-2 font-semibold">
                  #{item.tag}
                </span>

                <h4 className="text-base font-bold text-[#F5F5F2] leading-snug mb-3 group-hover:text-[#F97316] transition-colors">
                  {item.title}
                </h4>
              </div>

              <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed pt-4 border-t border-[#222225]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
