import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getEventByIdOrSlug, events } from '@/data';
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
  const event = getEventByIdOrSlug(p.id);
  if (!event) return { title: 'Not Found' };
  return { title: `${event.title} — HIMA-TI` };
}

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.slug,
  }));
}

export default async function EventDetailPage({ params }: Props) {
  const p = await params;
  const event = getEventByIdOrSlug(p.id);

  if (!event) {
    notFound();
  }

  const relatedEvents = events.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <main className="flex flex-col w-full pb-32">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24">
        <Container>
          <EditorialGrid>
            {/* Left: Metadata */}
            <Reveal className="col-span-4 md:col-span-12 lg:col-span-3 flex flex-col gap-6" delay={0.2}>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Index</span>
                <span className="font-mono text-sm tracking-widest text-primary">{event.id.toUpperCase()}</span>
              </div>
              <div className="w-8 h-[1px] bg-border" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Category</span>
                <span className="font-semibold text-xs tracking-widest uppercase">{event.category}</span>
              </div>
              <div className="w-8 h-[1px] bg-border" />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Date</span>
                <span className="font-mono text-sm tracking-widest">{event.date}</span>
                <span className="font-mono text-xs text-foreground-muted mt-1">{event.time}</span>
              </div>
            </Reveal>

            {/* Right: Title & Excerpt */}
            <div className="col-span-4 md:col-span-12 lg:col-span-9 flex flex-col justify-end mt-12 lg:mt-0 lg:pl-12 lg:border-l lg:border-border">
              <TextReveal text={event.title} className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9]" />
              <Reveal delay={0.6} className="mt-8 md:mt-12">
                <p className="text-lg md:text-2xl text-foreground-muted max-w-2xl leading-relaxed">
                  {event.excerpt}
                </p>
              </Reveal>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="w-full">
        <ClipReveal direction="up" delay={0.8} className="w-full">
          <EditorialImage 
            src={event.image} 
            alt={event.title} 
            width={1920} 
            height={1080} 
            className="w-full h-[50vh] md:h-[70vh]" 
          />
        </ClipReveal>
      </section>

      {/* Content Section */}
      <section className="pt-16 md:pt-32">
        <Container>
          <EditorialGrid>
            {/* Left: Metadata Details */}
            <div className="col-span-4 md:col-span-12 lg:col-span-3 hidden lg:flex flex-col gap-8">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Location</span>
                  <span className="font-semibold text-xs tracking-widest uppercase">{event.location}</span>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Organizer</span>
                  <span className="font-semibold text-xs tracking-widest uppercase text-primary">{event.organizer}</span>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Status</span>
                  <span className="font-semibold text-xs tracking-widest uppercase">{event.status}</span>
                </div>
              </Reveal>
            </div>

            {/* Right: Body Content */}
            <div className="col-span-4 md:col-span-12 lg:col-span-7 lg:pl-12 flex flex-col gap-8">
              <Reveal delay={0.3}>
                <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-headings:font-medium prose-headings:tracking-tight">
                  <p className="body-text text-foreground leading-loose">
                    {event.description}
                  </p>
                  <p className="body-text text-foreground-muted leading-loose mt-6">
                    Misi utama dari pelaksanaan program ini adalah memfasilitasi kebutuhan literasi dan pengembangan praktis bagi setiap entitas dalam ruang lingkup Teknologi Informasi. Setiap materi telah dirancang secara khusus untuk menghadapi tantangan industri masa depan.
                  </p>
                  <p className="body-text text-foreground-muted leading-loose mt-6">
                    {/* Dummy generated text for long-form feel */}
                    Melalui kolaborasi dengan berbagai pakar dan alumni, kegiatan ini diproyeksikan memberikan dampak berkelanjutan pada penguatan portofolio mahasiswa. Himpunan berkomitmen untuk terus menghadirkan ruang diskusi yang berfokus pada solusi ketimbang sekadar teori.
                  </p>
                </div>
              </Reveal>

              {/* Mobile Only Meta */}
              <Reveal delay={0.4} className="flex lg:hidden flex-wrap gap-8 pt-8 mt-8 border-t border-border">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Location</span>
                  <span className="font-semibold text-xs tracking-widest uppercase">{event.location}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground-muted">Organizer</span>
                  <span className="font-semibold text-xs tracking-widest uppercase text-primary">{event.organizer}</span>
                </div>
              </Reveal>
            </div>
          </EditorialGrid>
        </Container>
      </section>

      {/* Related Events & Navigation */}
      <section className="pt-32">
        <Container>
          <div className="border-t border-border pt-16 flex flex-col">
            <Reveal>
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-12">Related Events</h3>
            </Reveal>
            
            <EditorialGrid>
              {relatedEvents.map((rel, i) => (
                <Reveal key={rel.id} className="col-span-4 md:col-span-6 lg:col-span-4" delay={0.2 * i}>
                  <Link href={`/events/${rel.slug}`} className="group flex flex-col gap-4">
                    <EditorialImage src={rel.image} alt={rel.title} width={600} height={400} className="w-full aspect-[4/3]" />
                    <div className="flex flex-col gap-2 mt-4">
                      <span className="font-mono text-xs text-foreground-muted">{rel.date}</span>
                      <h4 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">{rel.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </EditorialGrid>

            <Reveal className="mt-24 flex justify-center w-full border-t border-border pt-16">
              <Link href="/events" className="group flex items-center gap-4">
                <span className="w-12 h-[1px] bg-foreground group-hover:bg-primary group-hover:-translate-x-2 transition-all duration-300" />
                <span className="font-bold tracking-widest text-xs uppercase group-hover:text-primary transition-colors duration-300">Back to Events</span>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

    </main>
  );
}
