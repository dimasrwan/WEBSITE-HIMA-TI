import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIMA-TI UIN Ar-Raniry",
  description: "Website Resmi Himpunan Mahasiswa Teknik Informatika (HIMA-TI) Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground flex flex-col" suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
          {/* Main wrapper for content to avoid navbar overlap initially */}
          <div className="pt-24 md:pt-32 flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
