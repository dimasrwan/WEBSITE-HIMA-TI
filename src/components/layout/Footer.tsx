import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.83 4.47 6.27 6.27 0 0 0 1.91-4.47V8.85a8.28 8.28 0 0 0 4.85 1.57v-3.73Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIAL_ITEMS = [
  {
    name: "Instagram",
    username: "@it_uinarraniry",
    href: "https://www.instagram.com/it_uinarraniry",
    icon: InstagramIcon,
  },
  {
    name: "TikTok",
    username: "@hima_ti_fst_uinarraniry",
    href: "https://www.tiktok.com/@hima_ti_fst_uinarraniry",
    icon: TikTokIcon,
  },
  {
    name: "YouTube",
    username: "@hima-tiuinar9981",
    href: "https://youtube.com/@hima-tiuinar9981",
    icon: YoutubeIcon,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222225] pt-16 sm:pt-20 pb-12 mt-20 sm:mt-24 relative z-10">
      <Container size="xl">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 pb-14 sm:pb-16 items-start">
          {/* Kolom 1: Identitas HIMA-TI (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Link href="/" className="flex items-center gap-3.5 group mb-5">
              <div className="relative w-9 h-10 transition-transform duration-200 group-hover:scale-105 shrink-0">
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

            <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-sm font-normal">
              Himpunan Mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh.
            </p>
          </div>

          {/* Kolom 2: NAVIGASI (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-5 font-semibold">
              NAVIGASI
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

          {/* Kolom 3: MEDIA SOSIAL (3 cols) */}
          <div className="lg:col-span-3 flex flex-col pl-0 lg:pl-2">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-5 font-semibold">
              MEDIA SOSIAL
            </span>
            <ul className="space-y-4 text-sm">
              {SOCIAL_ITEMS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-[#A1A1AA] hover:text-[#F97316] transition-colors"
                    >
                      <IconComponent className="w-4 h-4 text-[#F97316] shrink-0 transition-transform group-hover:scale-110" />
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-[#D4D4D8] group-hover:text-[#F97316] transition-colors leading-snug">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#71717A] group-hover:text-[#F97316]/80 transition-colors leading-snug">
                          {item.username}
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 4: HUBUNGI (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-5 font-semibold">
              HUBUNGI
            </span>
            <div className="space-y-3.5 text-sm text-[#A1A1AA]">
              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${ORG_INFO.email}`}
                  className="text-[#D4D4D8] hover:text-[#F97316] transition-colors break-all leading-snug"
                >
                  {ORG_INFO.email}
                </a>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <a
                  href={`tel:${ORG_INFO.phone}`}
                  className="text-[#D4D4D8] hover:text-[#F97316] transition-colors leading-snug"
                >
                  {ORG_INFO.phone}
                </a>
              </div>

              {/* Lokasi */}
              <div className="flex items-start gap-3 pt-0.5">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-1" />
                <a
                  href="https://maps.google.com/?q=Fakultas+Sains+dan+Teknologi+UIN+Ar-Raniry+Banda+Aceh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4D4D8] hover:text-[#F97316] transition-colors leading-relaxed text-xs sm:text-sm"
                >
                  Lantai 2, Gedung Fakultas Sains dan Teknologi, UIN Ar-Raniry, Kopelma Darussalam, Kota Banda Aceh, Aceh 23111.
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Copyright (Centered) */}
        <div className="pt-8 border-t border-[#222225] flex items-center justify-center text-center">
          <p className="text-xs font-mono text-[#71717A]">
            © 2026 HIMA-TI FST UIN Ar-Raniry Banda Aceh.
          </p>
        </div>
      </Container>
    </footer>
  );
}




