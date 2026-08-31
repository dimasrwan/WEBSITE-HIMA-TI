import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectByIdOrSlug, projects } from '@/data';
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
  const project = getProjectByIdOrSlug(p.id);
  if (!project) return { title: 'Not Found' };
  return { title: `${project.title} — HIMA-TI` };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const p = await params;
  const project = getProjectByIdOrSlug(p.id);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((proj) => proj.id !== project.id).slice(0, 3);

  return (
    <main className="flex flex-col w-full pb-32">
      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <Container>
          <EditorialGrid>
            <Reveal className="col-span-4 md:col-span-12 lg:col-span-3 flex flex-col gap-6" delay={0.2}>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Project ID</span>
                <span className="font-mono text-sm tracking-widest text-primary">{project.id.toUpperCase()}</span>
              </div>
              <div className="w-8 h-[1px] bg-border" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Category</span>
                <span className="font-semibold text-xs tracking-widest uppercase">{project.category}</span>
              </div>
              <div className="w-8 h-[1px] bg-border" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Year</span>
                <span className="font-mono text-sm tracking-widest">{project.year}</span>
              </div>
            </Reveal>

            <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col justify-end mt-12 lg:mt-0 lg:pl-12 lg:border-l lg:border-border">
              <TextReveal text={project.title} className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight" />
              <Reveal delay={0.6} className="mt-8 md:mt-12">
                <p className="text-lg md:text-2xl text-foreground-muted max-w-3xl leading-relaxed">
                  {project.excerpt}
                </p>
              </Reveal>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      <section className="w-full px-4 md:px-8">
        <ClipReveal direction="up" delay={0.8} className="w-full mx-auto max-w-7xl">
          <EditorialImage 
            src={project.image} 
            alt={project.title} 
            width={1920} 
            height={1080} 
            className="w-full aspect-[16/9] md:aspect-[21/9]" 
          />
        </ClipReveal>
      </section>

      <section className="pt-16 md:pt-32">
        <Container>
          <EditorialGrid>
            <div className="col-span-4 md:col-span-12 lg:col-span-3 flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Tech Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="border border-border px-3 py-1 text-xs font-mono text-foreground-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Status</span>
                  <span className="font-semibold text-xs tracking-widest uppercase text-primary">{project.status}</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.4} className="flex flex-col gap-4 mt-4">
                {project.repository && (
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase">
                    <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors" />
                    <span className="group-hover:text-primary transition-colors">View Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold tracking-widest uppercase">
                    <span className="w-6 h-[1px] bg-foreground group-hover:bg-primary transition-colors" />
                    <span className="group-hover:text-primary transition-colors">Live Demo</span>
                  </a>
                )}
              </Reveal>
            </div>

            <div className="col-span-4 md:col-span-12 lg:col-span-8 lg:col-start-5 lg:pl-12 flex flex-col gap-8 mt-12 lg:mt-0">
              <Reveal delay={0.3}>
                <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed">
                  <p className="body-text text-foreground leading-loose">
                    {project.description}
                  </p>
                  <p className="body-text text-foreground-muted leading-loose mt-6">
                    Sistem ini direkayasa dari nol dengan mengutamakan skalabilitas dan efisiensi operasi. Arsitekturnya dirancang untuk menangani beban data yang dinamis secara real-time. Lapisan frontend disusun sedemikian rupa agar interaksi manusia-komputer menjadi seintuitif mungkin tanpa mengorbankan kepadatan informasi.
                  </p>
                  <p className="body-text text-foreground-muted leading-loose mt-6">
                    Keseluruhan modul pengujian telah melewati tahap stress-test internal. Repositori proyek dipelihara dengan standar konvensi komit terbuka, memungkinkan perbaikan iteratif oleh generasi pengembang berikutnya di HIMA-TI.
                  </p>
                </div>
              </Reveal>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      <section className="pt-32">
        <Container>
          <div className="border-t border-border pt-16 flex flex-col">
            <Reveal>
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-12">Related Projects</h3>
            </Reveal>
            
            <EditorialGrid>
              {relatedProjects.map((rel, i) => (
                <Reveal key={rel.id} className="col-span-4 md:col-span-6 lg:col-span-4" delay={0.2 * i}>
                  <Link href={`/projects/${rel.slug}`} className="group flex flex-col gap-4">
                    <EditorialImage src={rel.image} alt={rel.title} width={600} height={400} className="w-full aspect-[16/9]" />
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="font-mono text-xs text-foreground-muted">{rel.category}</span>
                      <h4 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">{rel.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </EditorialGrid>

            <Reveal className="mt-24 flex justify-center w-full border-t border-border pt-16">
              <Link href="/projects" className="group flex items-center gap-4">
                <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary group-hover:-translate-x-2 transition-all duration-300" />
                <span className="font-bold tracking-widest text-xs uppercase group-hover:text-primary transition-colors duration-300">Back to Projects</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
