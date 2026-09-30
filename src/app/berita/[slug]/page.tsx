import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { NEWS } from "@/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: `${article.title}`,
    description: article.excerpt,
  };
}

export default async function BeritaDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = NEWS.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-36 pb-28 bg-[#0A0A0A]">
      <Container size="md">
        {/* Back Link */}
        <Link
          href="/berita"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#71717A] hover:text-[#F97316] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Warta Berita</span>
        </Link>

        {/* Article Header */}
        <header className="pb-10 mb-12 border-b border-[#222225]">
          <div className="flex items-center gap-3 text-xs font-mono text-[#71717A] mb-4">
            <span className="text-[#F97316] uppercase font-semibold">{article.category}</span>
            <span>/</span>
            <span>{article.date}</span>
            <span>/</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F5F2] tracking-tight leading-[1.08] mb-8">
            {article.title}
          </h1>

          <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pt-4 border-t border-[#222225]">
            <span>Penulis: <strong className="text-[#F5F5F2] font-normal">{article.author}</strong></span>
            <span>Rilis Resmi HIMA-TI FST UINAR</span>
          </div>
        </header>

        {/* Lead Excerpt */}
        <div className="text-lg sm:text-xl font-medium text-[#F5F5F2] leading-relaxed mb-10 pl-6 border-l-2 border-[#F97316]">
          {article.excerpt}
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-base sm:text-lg text-[#D4D4D8] leading-relaxed mb-16 font-normal">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Article Meta Footer */}
        <footer className="pt-8 border-t border-[#222225] flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#71717A]">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="text-[#A1A1AA]">#{tag}</span>
            ))}
          </div>

          <Link
            href="/berita"
            className="text-[#F97316] hover:text-[#EA580C] uppercase tracking-wider font-semibold inline-flex items-center gap-1"
          >
            <span>Arsip Warta Lainnya</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </footer>
      </Container>
    </div>
  );
}
