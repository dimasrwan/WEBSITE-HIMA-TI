import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import HalftoneBackground from "@/components/ui/HalftoneBackground";
import { PageTransitionProvider } from "@/components/layout/PageTransition";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | HIMA-TI UIN Ar-Raniry",
    default: "HIMA-TI UIN Ar-Raniry | Himpunan Mahasiswa Teknologi Informasi",
  },
  description: "Website Resmi Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh Periode 2026/2027.",
  keywords: ["HIMA-TI", "UIN Ar-Raniry", "Teknologi Informasi", "Banda Aceh", "Organisasi Mahasiswa", "Fakultas Sains dan Teknologi"],
  authors: [{ name: "HIMA-TI FST UIN Ar-Raniry" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-[#0A0A0A] text-[#F5F5F2] antialiased selection:bg-[#F97316] selection:text-black tracking-[-0.01em] relative">
        {/* Global Ambient Halftone Dot Wave (Fixed viewport for all pages) */}
        <HalftoneBackground intensity="global" />

        <SmoothScroll>
          <PageTransitionProvider>
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </PageTransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

