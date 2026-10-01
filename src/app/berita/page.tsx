import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { NEWS } from "@/data";

export const metadata: Metadata = {
  title: "Berita & Kegiatan Resmi",
  description: "Arsip rilis berita, publikasi agenda, dan dokumentasi perkembangan organisasi HIMA-TI FST UIN Ar-Raniry Banda Aceh.",
};

export default function BeritaPage() {
  const [featured, ...restNews] = NEWS;

  return (
    <div className="pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-16 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Kabar HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Kanal rilis resmi perkembangan organisasi, liputan musyawarah besar, pelantikan kepengurusan, dan informasi akademik Fakultas Sains dan Teknologi.
          </p>
        </div>

        {/* Lead Featured Article */}
        <article className="pb-16 mb-16 border-b border-[#222225] group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-xs font-mono text-[#71717A] mb-4">
                <span className="text-[#F97316] uppercase font-semibold">{featured.category}</span>
                <span>—</span>
                <span>{featured.date}</span>
                <span>—</span>
                <span>{featured.readTime}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F5F2] group-hover:text-[#F97316] transition-colors leading-[1.1] mb-6">
                <Link href={`/berita/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h2>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed mb-6">
                {featured.excerpt}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-[#F97316] uppercase tracking-wider font-semibold">
                <span>Baca Artikel Lengkap</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="lg:col-span-4 p-8 bg-[#111111]/80 backdrop-blur-sm border border-[#222225]">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-2">Penulis / Rilis:</span>
              <p className="text-sm font-bold text-[#F5F5F2] mb-6">{featured.author}</p>
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-2">Dokumentasi:</span>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">{featured.imagePlaceholderText}</p>
            </div>
          </div>
        </article>

        {/* Supporting News Articles (2-column stack) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {restNews.map((article) => (
            <article key={article.slug} className="p-8 bg-[#111111]/80 backdrop-blur-sm border border-[#222225] flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#71717A] pb-4 mb-4 border-b border-[#222225]">

                  <span className="text-[#F97316] uppercase">{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] group-hover:text-[#F97316] transition-colors mb-4 leading-snug">
                  <Link href={`/berita/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222225] flex items-center justify-between text-xs font-mono text-[#71717A]">
                <span>{article.author}</span>
                <Link
                  href={`/berita/${article.slug}`}
                  className="text-[#F97316] flex items-center gap-1 group-hover:underline"
                >
                  <span>Baca</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
