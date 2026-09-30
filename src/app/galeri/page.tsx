"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { GALLERY_ITEMS } from "@/data";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Semua", "Organisasi", "Akademik", "Teknologi", "Sosial"];

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems =
    selectedCategory === "Semua"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-36 pb-28 bg-[#0A0A0A]">
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
                "px-4 py-2 uppercase tracking-wider transition-colors shrink-0",
                selectedCategory === cat
                  ? "bg-[#F97316] text-[#0A0A0A] font-bold"
                  : "text-[#A1A1AA] hover:text-[#F5F5F2]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Varied Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#111111] border border-[#222225] flex flex-col justify-between group hover:border-[#F97316] transition-colors min-h-[300px]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-4 mb-6 border-b border-[#222225]">
                  <span className="text-[#F97316] uppercase">{item.category}</span>
                  <span>{item.date}</span>
                </div>

                <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block mb-3">
                  {item.tag}
                </span>

                <h3 className="text-xl font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-snug mb-4">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm text-[#71717A] leading-relaxed pt-4 border-t border-[#222225]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
