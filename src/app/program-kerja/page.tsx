"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { PROGRAMS, DIVISIONS } from "@/data";
import { cn } from "@/lib/utils";

export default function ProgramKerjaPage() {
  const [selectedDivision, setSelectedDivision] = useState<string>("all");

  const filteredPrograms =
    selectedDivision === "all"
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.divisionId === selectedDivision);

  return (
    <div className="pt-36 pb-28 bg-[#0A0A0A]">
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
              "px-4 py-2 uppercase tracking-wider transition-colors shrink-0",
              selectedDivision === "all"
                ? "bg-[#F97316] text-[#0A0A0A] font-bold"
                : "text-[#A1A1AA] hover:text-[#F5F5F2]"
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
                  "px-4 py-2 uppercase tracking-wider transition-colors shrink-0",
                  selectedDivision === div.id
                    ? "bg-[#F97316] text-[#0A0A0A] font-bold"
                    : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                )}
              >
                {div.shortName} ({count})
              </button>
            );
          })}
        </div>

        {/* Editorial Programs Stack */}
        <div className="divide-y divide-[#222225] border-y border-[#222225]">
          {filteredPrograms.map((prog, idx) => (
            <article
              key={prog.id}
              className="py-10 group transition-colors hover:bg-[#111111]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1 text-xs font-mono text-[#71717A]">
                  0{idx + 1}
                </div>

                <div className="lg:col-span-4">
                  <span className="text-xs font-mono text-[#F97316] uppercase tracking-wider block mb-2">
                    {prog.divisionName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] leading-snug mb-3">
                    {prog.title}
                  </h3>
                  <div className="text-xs font-mono text-[#71717A]">
                    Status: <strong className="text-[#F5F5F2] font-normal">{prog.status}</strong>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-4">
                    {prog.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#71717A]">
                    {prog.tags.map((t) => (
                      <span key={t}>#{t}</span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 text-xs font-mono text-[#71717A] lg:text-right space-y-1">
                  <div>Waktu: <span className="text-[#F5F5F2]">{prog.period}</span></div>
                  <div>Sasaran: <span className="text-[#F5F5F2]">{prog.target}</span></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
