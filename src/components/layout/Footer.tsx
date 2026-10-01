import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { ORG_INFO } from "@/data";

const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Organisasi", href: "/tentang" },
  { name: "Struktur Kepengurusan", href: "/kepengurusan" },
  { name: "Program Kerja", href: "/program-kerja" },
  { name: "Kabar & Publikasi", href: "/berita" },
  { name: "Galeri Kegiatan", href: "/galeri" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222225] pt-16 sm:pt-20 pb-12 mt-20 sm:mt-24">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16">
          {/* Bagian Kiri: Identitas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-9 h-10 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="Logo Resmi HIMA-TI"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-lg tracking-wider text-[#F5F5F2] font-mono group-hover:text-[#F97316] transition-colors leading-none">
                  HIMA-TI
                </span>
                <span className="text-[11px] text-[#71717A] tracking-wider uppercase font-mono mt-1 leading-none">
                  FST UIN Ar-Raniry Banda Aceh
                </span>
              </div>
            </Link>
          </div>

          {/* Bagian Tengah: Menu Navigasi (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-5 font-semibold">
              Navigasi
            </span>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#A1A1AA] hover:text-[#F97316] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bagian Kanan: Kontak HIMA-TI (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-5 font-semibold">
              Kontak
            </span>
            <div className="space-y-3.5 text-sm text-[#A1A1AA]">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0" />
                <a
                  href={`mailto:${ORG_INFO.email}`}
                  className="text-[#D4D4D8] hover:text-[#F97316] transition-colors break-all"
                >
                  {ORG_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0" />
                <a
                  href={`tel:${ORG_INFO.phone}`}
                  className="text-[#D4D4D8] hover:text-[#F97316] transition-colors"
                >
                  {ORG_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="pt-8 border-t border-[#222225]">
          <p className="text-xs font-mono text-[#71717A]">
            © 2026 HIMA-TI FST UIN Ar-Raniry Banda Aceh.
          </p>
        </div>
      </Container>
    </footer>
  );
}

