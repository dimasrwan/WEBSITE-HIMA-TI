"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Organization", href: "/organization" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle mobile menu body lock and escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-border py-4"
          : "bg-background/95 py-6 border-b border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          aria-label="HIMA-TI Home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image
              src="/images/logo/hima-ti-logo.png"
              alt="HIMA-TI Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-semibold tracking-tight text-foreground hidden sm:block">
            HIMA-TI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              {item.label}
            </Link>
          ))}
          {/* Optional Action Button (Contact/Join) if needed later. Kept out for now as instructed to keep minimal. */}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="relative z-50 lg:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-3xl font-medium tracking-tight text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
