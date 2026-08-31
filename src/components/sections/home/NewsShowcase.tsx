"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { EditorialGrid } from "@/components/layout/EditorialGrid";
import { Reveal } from "@/components/motion/Reveal";
import { LineReveal } from "@/components/motion/LineReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { EditorialImage } from "@/components/ui/EditorialImage";
import { news } from "@/data/news";

export function NewsShowcase() {
  const featuredArticle = news.find(n => n.featured) || news[0];
  const recentArticles = news.filter(n => n.id !== featuredArticle.id).slice(0, 3);

  return (
    <section className="py-24 md:py-48 bg-surface">
      <Container>
        <EditorialGrid className="mb-16">
          <div className="col-span-4 md:col-span-12 lg:col-span-6 flex flex-col gap-4">
            <Reveal variant="fade-up">
              <div className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                07 / WHAT WE SAY
              </div>
            </Reveal>
            <TextReveal 
              text="NEWSROOM" 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-none"
            />
          </div>
        </EditorialGrid>

        <EditorialGrid className="border-t border-border pt-12 gap-y-16">
          {/* Featured Article */}
          <div className="col-span-4 md:col-span-12 lg:col-span-7 flex flex-col group relative">
            <Reveal variant="fade-up">
              <span className="font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 self-start mb-6">
                Featured
              </span>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2} className="w-full">
              <Link href={`/news/${featuredArticle.slug}`} className="block overflow-hidden relative aspect-[16/9] mb-8">
                <EditorialImage 
                  src={featuredArticle.image || "/images/placeholders/news-1.jpg"} 
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </Link>
            </Reveal>

            <div className="flex flex-col gap-4">
              <Reveal variant="fade-up" delay={0.3}>
                <div className="flex items-center gap-4 font-mono text-xs text-foreground-muted uppercase tracking-widest">
                  <span>{featuredArticle.date}</span>
                  <span className="w-4 h-px bg-border" />
                  <span>{featuredArticle.category}</span>
                </div>
              </Reveal>

              <Reveal variant="fade-up" delay={0.4}>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
                  <Link href={`/news/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h3>
              </Reveal>

              <Reveal variant="fade-up" delay={0.5}>
                <p className="text-lg text-foreground-muted mt-2">
                  {featuredArticle.excerpt}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="col-span-4 md:col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col">
            <Reveal variant="fade-up">
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground-muted mb-8">
                Recent Updates
              </h4>
            </Reveal>
            <LineReveal direction="left" className="mb-8" />

            <div className="flex flex-col divide-y divide-border border-b border-border">
              {recentArticles.map((article, i) => (
                <div key={article.id} className="group py-6 md:py-8 flex flex-col gap-3">
                  <Reveal variant="fade-up" delay={0.2 + (i * 0.1)}>
                    <div className="flex justify-between items-center font-mono text-xs text-foreground-muted uppercase tracking-widest">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                  </Reveal>
                  <Reveal variant="fade-up" delay={0.3 + (i * 0.1)}>
                    <h5 className="text-xl md:text-2xl font-bold tracking-tight uppercase group-hover:text-primary transition-transform duration-300 transform group-hover:translate-x-2">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h5>
                  </Reveal>
                </div>
              ))}
            </div>

            <Reveal variant="fade-up" delay={0.6} className="mt-8">
              <Link href="/news" className="font-mono text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1 self-start inline-block">
                View All Archives
              </Link>
            </Reveal>
          </div>
        </EditorialGrid>
      </Container>
    </section>
  );
}
