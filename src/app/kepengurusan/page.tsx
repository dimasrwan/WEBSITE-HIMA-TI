"use client";

import React, { useRef, useLayoutEffect } from "react";
import Container from "@/components/ui/Container";
import MemberCard from "@/components/organization/MemberCard";
import { ORG_INFO, DIVISIONS, MEMBERS } from "@/data";
import { Award, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function KepengurusanPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bphMembers = MEMBERS.filter((m) => m.isBPH);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal sections on scroll
      const divisionSections = containerRef.current?.querySelectorAll(".animate-division-section");
      divisionSections?.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 sm:pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-16 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Kepengurusan HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Ditetapkan berdasarkan Surat Keputusan Dekan Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh ({ORG_INFO.dekan}) Nomor: 03.018/HIMA-TI/FST-UINAR/VI/2026 yang memuat 86 mahasiswa pengurus periode 2026/2027.
          </p>
        </div>

        {/* Section BPH (Badan Pengurus Harian) */}
        <div className="pb-20 mb-20 border-b border-[#222225]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F97316] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>Pimpinan Lembaga</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
                Badan Pengurus Harian (BPH)
              </h2>
            </div>
            <span className="text-xs font-mono text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full border border-[#F97316]/30">
              4 Pimpinan Inti
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bphMembers.map((member) => (
              <div
                key={member.nim}
                className="p-6 bg-[#111111]/90 backdrop-blur-sm border border-[#F97316]/60 rounded-xl flex flex-col justify-between min-h-[190px] shadow-[0_8px_30px_rgba(249,115,22,0.12)] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(249,115,22,0.22)] transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3 pb-2 border-b border-[#222225]">
                    <span className="text-[#F97316] font-bold">BPH INTI</span>
                    <span>#{member.no.toString().padStart(2, "0")}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors mb-1 leading-snug">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#F97316]">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222225] text-xs font-mono text-[#71717A] flex items-center justify-between">
                  <span>NIM: {member.nim}</span>
                  <span className="text-[#A1A1AA]">TI FST</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 Divisi Organisasi */}
        <div className="space-y-20">
          <div className="pb-4 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#F97316]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
              Daftar Divisi & Anggota (82 Personel)
            </h2>
          </div>

          {DIVISIONS.map((div) => {
            const divMembers = MEMBERS.filter((m) => m.divisionId === div.id);

            return (
              <section key={div.id} id={div.id} className="animate-division-section scroll-mt-36">
                <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#222225] gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2]">
                      Divisi {div.name}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] mt-1 max-w-2xl">
                      {div.description}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#71717A] shrink-0 bg-[#161618] px-3 py-1 rounded-md border border-[#222225]">
                    {divMembers.length} Personel Terdaftar
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {divMembers.map((member) => (
                    <MemberCard key={`${member.nim}-${member.no}`} member={member} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
