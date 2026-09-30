"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
  { name: "Kepengurusan", href: "/kepengurusan" },
  { name: "Program Kerja", href: "/program-kerja" },
  { name: "Berita", href: "/berita" },
  { name: "Galeri", href: "/galeri" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#222225] py-4"
          : "bg-transparent py-6"
      )}
    >
      <Container size="xl">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3.5 group">
            <div className="relative w-7 h-8 transition-transform group-hover:scale-105">
              <Image
                src="/logo.svg"
                alt="Logo Resmi HIMA-TI UIN Ar-Raniry"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm tracking-wider text-[#F5F5F2] font-mono group-hover:text-[#F97316] transition-colors">
                HIMA-TI
              </span>
              <span className="text-[10px] text-[#71717A] tracking-wider uppercase font-mono hidden sm:inline-block">
                FST UIN Ar-Raniry
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase font-mono tracking-wider transition-colors py-1 relative",
                    isActive
                      ? "text-[#F97316] font-bold"
                      : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F97316]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA Button (Right) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/kontak"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200",
                pathname === "/kontak"
                  ? "bg-[#F97316] text-[#0A0A0A]"
                  : "bg-transparent text-[#F5F5F2] border border-[#333338] hover:border-[#F97316] hover:text-[#F97316]"
              )}
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-[#F5F5F2] focus:outline-none"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-6 bg-[#111111] border border-[#222225] animate-in fade-in duration-200">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-sm uppercase font-mono tracking-wider py-1",
                      isActive
                        ? "text-[#F97316] font-bold"
                        : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[#222225]">
                <Link
                  href="/kontak"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-2 text-xs font-mono uppercase font-bold text-[#F97316]"
                >
                  <span>Hubungi Kami</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
