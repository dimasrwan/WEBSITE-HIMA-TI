"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/layout/PageTransition";

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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-400 ease-out flex justify-center pointer-events-none",
        isScrolled
          ? "top-3 sm:top-4 px-3 sm:px-6"
          : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "w-full transition-all duration-400 ease-out pointer-events-auto",
          isScrolled
            ? "max-w-[1160px] mx-auto bg-[#111111]/92 backdrop-blur-md border border-[#27272A]/80 rounded-2xl shadow-2xl shadow-black/50 min-h-[64px] py-2 px-5 sm:px-7"
            : "max-w-7xl mx-auto bg-transparent border border-transparent min-h-[76px] sm:min-h-[80px] py-4 sm:py-5 px-5 sm:px-8 lg:px-12"
        )}
      >
        <div className="flex items-center justify-between min-h-[48px]">
          {/* Logo Brand */}
          <TransitionLink
            href="/"
            title="Beranda"
            onClick={closeMobileMenu}
            className="flex items-center gap-3.5 group shrink-0"
          >
            <div
              className={cn(
                "relative transition-all duration-400",
                isScrolled ? "w-8 h-9 sm:w-9 sm:h-10" : "w-9 h-10 sm:w-10 sm:h-11",
                "group-hover:scale-105"
              )}
            >
              <Image
                src="/logo.svg"
                alt="Logo Resmi HIMA-TI UIN Ar-Raniry"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span
                className={cn(
                  "font-extrabold tracking-wider text-[#F5F5F2] font-mono group-hover:text-[#F97316] transition-colors leading-none",
                  isScrolled ? "text-sm sm:text-base" : "text-base sm:text-lg"
                )}
              >
                HIMA-TI
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#71717A] tracking-wider uppercase font-mono hidden sm:inline-block mt-0.5 leading-none">
                FST UIN Ar-Raniry
              </span>
            </div>
          </TransitionLink>

          {/* Desktop Nav Links (Centered) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  title={link.name}
                  className={cn(
                    "text-[13px] lg:text-[14px] uppercase font-mono tracking-wider transition-all duration-300 px-3.5 py-1.5 rounded-lg relative whitespace-nowrap group",
                    isActive
                      ? "text-[#F97316] font-bold bg-[#F97316]/10"
                      : "text-[#A1A1AA] hover:text-[#F5F5F2] hover:bg-[#1C1C20]/60"
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#F97316] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
                  )}
                </TransitionLink>
              );
            })}
          </nav>

          {/* Contact CTA Button (Right) */}
          <div className="hidden md:flex items-center shrink-0">
            <TransitionLink
              href="/kontak"
              title="Hubungi Kami"
              className={cn(
                "inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg transition-all duration-300 group hover:-translate-y-0.5 active:translate-y-0",
                isScrolled
                  ? "px-4 py-2"
                  : "px-5 py-2.5",
                pathname === "/kontak"
                  ? "bg-[#F97316] text-[#0A0A0A] shadow-md shadow-[#F97316]/20"
                  : "bg-transparent text-[#F5F5F2] border border-[#333338] hover:border-[#F97316] hover:text-[#F97316] hover:bg-[#F97316]/5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]"
              )}
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </TransitionLink>
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
          <div
            className={cn(
              "md:hidden mt-3 p-5 bg-[#111111] border border-[#27272A] rounded-2xl shadow-xl animate-in fade-in duration-200"
            )}
          >
            <div className="flex flex-col gap-3.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    title={link.name}
                    onClick={closeMobileMenu}
                    className={cn(
                      "text-xs sm:text-sm uppercase font-mono tracking-wider py-1.5",
                      isActive
                        ? "text-[#F97316] font-bold"
                        : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                    )}
                  >
                    {link.name}
                  </TransitionLink>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#222225]">
                <TransitionLink
                  href="/kontak"
                  title="Hubungi Kami"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-1.5 text-xs font-mono uppercase font-bold text-[#F97316]"
                >
                  <span>Hubungi Kami</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </TransitionLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


