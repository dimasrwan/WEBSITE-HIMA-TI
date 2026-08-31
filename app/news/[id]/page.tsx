import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsByIdOrSlug, news } from '@/data';
import { Container } from '@/components/layout/Container';
import { EditorialGrid } from '@/components/layout/EditorialGrid';
import { EditorialImage } from '@/components/ui/EditorialImage';
import { Reveal } from '@/components/motion/Reveal';
import { TextReveal } from '@/components/motion/TextReveal';
import { ClipReveal } from '@/components/motion/ClipReveal';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await params;
  const article = getNewsByIdOrSlug(p.id);
  if (!article) return { title: 'Not Found' };
  return { title: `${article.title} — HIMA-TI` };
}

export function generateStaticParams() {
  return news.map((article) => ({
    id: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  const p = await params;
  const article = getNewsByIdOrSlug(p.id);

  if (!article) {
    notFound();
  }

  const relatedNews = news.filter((n) => n.id !== article.id).slice(0, 3);

  return (
    <main className="flex flex-col w-full pb-32">
      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <Container>
          <div className="flex flex-col max-w-5xl mx-auto">
            <Reveal delay={0.2} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 md:mb-12 border-b border-border pb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-sm w-fit">
                {article.category}
              </span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="font-mono text-xs text-foreground-muted">{article.date}</span>
              <span className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <span className="font-mono text-xs text-foreground-muted">{article.author}</span>
            </Reveal>

            <TextReveal text={article.title} className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]" />
            
            <Reveal delay={0.6} className="mt-8 md:mt-12">
              <p className="text-xl md:text-3xl text-foreground-muted leading-relaxed font-serif italic">
                &quot;{article.excerpt}&quot;
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="w-full">
        <Container>
          <ClipReveal direction="up" delay={0.8} className="w-full max-w-5xl mx-auto">
            <EditorialImage 
              src={article.image} 
              alt={article.title} 
              width={1920} 
              height={1080} 
              className="w-full aspect-[16/9]" 
            />
          </ClipReveal>
        </Container>
      </section>

      <section className="pt-16 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <Reveal delay={0.3}>
              <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-p:leading-loose prose-headings:font-medium prose-headings:tracking-tight font-serif text-foreground/90">
                <p className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-foreground first-letter:mr-3 first-letter:float-left">
                  {article.content}
                </p>
                <p className="mt-8">
                  Redaksi mencatat bahwa transisi ini bukanlah proses instan. Kesulitan teknis di lapangan seringkali melampaui teori yang tertera di atas kertas. Kecepatan adaptasi menjadi krusial, di mana institusi yang gagal menavigasi arus digital akan tertinggal.
                </p>
                <h3 className="text-foreground mt-12 mb-6">Masa Depan Terdesentralisasi</h3>
                <p>
                  Inovasi tidak lahir dari ruang hampa. Diskursus yang produktif harus dibarengi dengan praktik eksperimen yang berani salah. Mahasiswa teknologi informasi berada di garis terdepan, tidak sekadar sebagai konsumen akhir, melainkan sebagai arsitek peradaban digital.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.4} className="mt-16 pt-8 border-t border-border flex justify-between items-center">
              <span className="font-mono text-xs text-foreground-muted uppercase tracking-widest">End of Dispatch</span>
              <span className="font-mono text-xs text-primary uppercase tracking-widest">{article.id}</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pt-32">
        <Container>
          <div className="border-t border-border pt-16 flex flex-col max-w-5xl mx-auto">
            <Reveal>
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-12">Related Dispatch</h3>
            </Reveal>
            
            <EditorialGrid>
              {relatedNews.map((rel, i) => (
                <Reveal key={rel.id} className="col-span-4 lg:col-span-4" delay={0.2 * i}>
                  <Link href={`/news/${rel.slug}`} className="group flex flex-col gap-4">
                    <EditorialImage src={rel.image} alt={rel.title} width={600} height={400} className="w-full aspect-[3/2]" />
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{rel.category}</span>
                      <h4 className="text-lg font-medium tracking-tight leading-snug group-hover:text-primary transition-colors">{rel.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </EditorialGrid>

            <Reveal className="mt-24 flex justify-center w-full border-t border-border pt-16">
              <Link href="/news" className="group flex items-center gap-4">
                <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary group-hover:-translate-x-2 transition-all duration-300" />
                <span className="font-bold tracking-widest text-xs uppercase group-hover:text-primary transition-colors duration-300">Back to Newsroom</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
