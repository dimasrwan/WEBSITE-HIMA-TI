"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { X, Calendar, Tag, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { GALLERY_ITEMS } from "@/data";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GalleryItem } from "@/types";

const CATEGORIES = ["Semua", "Organisasi", "Akademik", "Teknologi", "Sosial"];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Handle keyboard Escape and body scroll lock
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    };

    if (activeModalItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalItem]);

  const filteredItems =
    selectedCategory === "Semua"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Stagger animation when filter changes or initial load
  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 24, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <div ref={containerRef} className="pt-32 sm:pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-12 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Galeri Kegiatan HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Dokumentasi resmi perjalanan kepengurusan, sidang pleno musyawarah besar, praktikum asistensi mata kuliah kejuruan, dan kegiatan kebersamaan mahasiswa.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-12 border-b border-[#222225] no-scrollbar text-xs font-mono">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-4 py-2 uppercase tracking-wider rounded-lg transition-all duration-200 shrink-0",
                selectedCategory === cat
                  ? "bg-[#F97316] text-[#0A0A0A] font-bold shadow-md shadow-[#F97316]/20"
                  : "text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#161618]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Varied Editorial Gallery Grid with Smooth Zoom & Hover Glow */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="p-8 bg-[#111111]/80 backdrop-blur-sm border border-[#222225] rounded-xl flex flex-col justify-between group hover:-translate-y-1.5 hover:border-[#F97316]/60 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300 min-h-[310px] cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-4 mb-6 border-b border-[#222225]">
                  <span className="text-[#F97316] uppercase font-semibold">{item.category}</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#71717A]" />
                    {item.date}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] uppercase tracking-wider mb-3">
                  <Tag className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{item.tag}</span>
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-4">
                  {item.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-[#222225] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <p className="line-clamp-2 text-sm text-[#A1A1AA]">
                  {item.description}
                </p>
                <div className="shrink-0 ml-3 text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                  <span>Lihat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Popup */}
        {activeModalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setActiveModalItem(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="relative w-full max-w-2xl bg-[#141414] border border-[#2E2E32] rounded-2xl p-8 sm:p-10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-6 right-6 p-2 text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#222225] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                aria-label="Tutup dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs font-mono text-[#71717A] mb-4">
                <span className="text-[#F97316] font-semibold uppercase">{activeModalItem.category}</span>
                <span>/</span>
                <span>{activeModalItem.date}</span>
                <span>/</span>
                <span className="text-[#D4D4D8]">#{activeModalItem.tag}</span>
              </div>

              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black text-[#F5F5F2] leading-snug mb-6">
                {activeModalItem.title}
              </h2>

              <div className="p-6 bg-[#0A0A0A] border border-[#222225] rounded-xl mb-6">
                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {activeModalItem.description}
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-2.5 bg-[#F97316] text-[#0A0A0A] text-xs font-mono font-bold uppercase rounded-lg hover:bg-[#EA580C] transition-colors"
                >
                  Tutup Dokumentasi
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
