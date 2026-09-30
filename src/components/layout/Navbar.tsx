"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Beranda", href: "/", sectionId: "beranda" },
  { name: "Tentang", href: "/tentang", sectionId: "tentang" },
  { name: "Kepengurusan", href: "/kepengurusan", sectionId: "kepengurusan" },
  { name: "Program Kerja", href: "/program-kerja", sectionId: "program-kerja" },
  { name: "Berita", href: "/berita", sectionId: "berita" },
  { name: "Galeri", href: "/galeri", sectionId: "galeri" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // 1. Detect scroll state for floating appearance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Active section tracking via IntersectionObserver on HomePage
  useEffect(() => {
    if (!isHomePage) return;

    const sectionIds = ["beranda", "tentang", "kepengurusan", "program-kerja", "berita", "galeri"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section closest to top
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by top position
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visibleEntries[0].target.id);
        } else if (window.scrollY < 100) {
          setActiveSection("beranda");
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isHomePage]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // 3. Smooth scroll handler with offset consideration
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof NAV_ITEMS)[0]) => {
      closeMobileMenu();

      if (isHomePage) {
        e.preventDefault();
        const targetElement = document.getElementById(item.sectionId);
        if (targetElement) {
          const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        }
      }
    },
    [isHomePage]
  );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center pointer-events-none",
        isScrolled ? "top-3 sm:top-4 px-3 sm:px-6" : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "w-full transition-all duration-300 ease-out pointer-events-auto",
          isScrolled
            ? "max-w-6xl mx-auto bg-[#111111]/90 backdrop-blur-md border border-[#27272A] rounded-xl shadow-2xl shadow-black/40 py-2.5 px-4 sm:px-6"
            : "max-w-7xl mx-auto bg-transparent border-transparent py-5 sm:py-6 px-4 sm:px-6 lg:px-8"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
              }
              closeMobileMenu();
            }}
            className="flex items-center gap-3 group"
          >
            <div
              className={cn(
                "relative transition-all duration-300",
                isScrolled ? "w-6 h-7" : "w-7 h-8",
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
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-extrabold tracking-wider text-[#F5F5F2] font-mono group-hover:text-[#F97316] transition-colors",
                  isScrolled ? "text-xs sm:text-sm" : "text-sm"
                )}
              >
                HIMA-TI
              </span>
              <span className="text-[10px] text-[#71717A] tracking-wider uppercase font-mono hidden sm:inline-block">
                FST UIN Ar-Raniry
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((link) => {
              const isActive = isHomePage
                ? activeSection === link.sectionId
                : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cn(
                    "text-xs uppercase font-mono tracking-wider transition-colors py-1 relative",
                    isActive
                      ? "text-[#F97316] font-bold"
                      : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F97316] transition-all duration-300" />
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
                "inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200",
                isScrolled ? "px-4 py-2" : "px-5 py-2.5",
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
            className="md:hidden p-1.5 text-[#A1A1AA] hover:text-[#F5F5F2] focus:outline-none"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={cn(
              "md:hidden mt-3 p-5 bg-[#111111] border border-[#27272A] rounded-xl shadow-xl animate-in fade-in duration-200"
            )}
          >
            <div className="flex flex-col gap-3.5">
              {NAV_ITEMS.map((link) => {
                const isActive = isHomePage
                  ? activeSection === link.sectionId
                  : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={cn(
                      "text-xs uppercase font-mono tracking-wider py-1.5",
                      isActive
                        ? "text-[#F97316] font-bold"
                        : "text-[#A1A1AA] hover:text-[#F5F5F2]"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 mt-1 border-t border-[#222225]">
                <Link
                  href="/kontak"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between py-1.5 text-xs font-mono uppercase font-bold text-[#F97316]"
                >
                  <span>Hubungi Kami</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


