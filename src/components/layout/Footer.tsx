import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ORG_INFO } from "@/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222225] pt-20 pb-12 mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Col 1: Identity & Description (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="relative w-8 h-9">
                <Image
                  src="/logo.svg"
                  alt="Logo HIMA-TI"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-[#F5F5F2] font-mono">
                  HIMA-TI
                </span>
                <span className="text-xs text-[#71717A] uppercase font-mono">
                  FST UIN Ar-Raniry Banda Aceh
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal max-w-md">
              Himpunan Mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh. Wadah kolaborasi, kajian keilmuan, dan pengembangan kapasitas mahasiswa IT.
            </p>

            <div className="text-xs font-mono text-[#71717A] space-y-1">
              <div>SK DEKAN: NO. 03.018/HIMA-TI/FST-UINAR/VI/2026</div>
              <div>DIDIRIKAN: 13 SEPTEMBER 2018 (BANDA ACEH)</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-6">
              Menu Navigasi
            </span>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Beranda Utama", href: "/" },
                { name: "Tentang Organisasi", href: "/tentang" },
                { name: "Struktur Kepengurusan", href: "/kepengurusan" },
                { name: "Program Kerja", href: "/program-kerja" },
                { name: "Kabar & Publikasi", href: "/berita" },
                { name: "Galeri Kegiatan", href: "/galeri" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Secretariat (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-6">
              Sekretariat & Hubungan
            </span>
            <div className="space-y-4 text-sm text-[#A1A1AA]">
              <p className="leading-relaxed">
                {ORG_INFO.secretariat}
              </p>
              <div className="pt-2 text-xs font-mono space-y-1">
                <div>Email: <a href={`mailto:${ORG_INFO.email}`} className="text-[#F5F5F2] hover:text-[#F97316]">{ORG_INFO.email}</a></div>
                <div>Telepon: <a href={`tel:${ORG_INFO.phone}`} className="text-[#F5F5F2] hover:text-[#F97316]">{ORG_INFO.phone}</a></div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#222225]">
              <Link
                href="/kontak"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase font-bold text-[#F97316] hover:text-[#EA580C] transition-colors"
              >
                <span>Kirim Pesan ke Pengurus</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#222225] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <p>© {currentYear} HIMA-TI FST UIN Ar-Raniry Banda Aceh. Periode 2026/2027.</p>
          <p>EDITORIAL DESIGN & MODERN ARCHITECTURE</p>
        </div>
      </Container>
    </footer>
  );
}
