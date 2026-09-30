import HeroSection from "@/components/home/HeroSection";
import AboutOverviewSection from "@/components/home/AboutOverviewSection";
import OrganizationBriefSection from "@/components/home/OrganizationBriefSection";
import ProgramsOverviewSection from "@/components/home/ProgramsOverviewSection";
import NewsOverviewSection from "@/components/home/NewsOverviewSection";
import GalleryOverviewSection from "@/components/home/GalleryOverviewSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <div id="beranda" className="scroll-mt-28">
        <HeroSection />
      </div>
      <div id="tentang" className="scroll-mt-28">
        <AboutOverviewSection />
      </div>
      <div id="kepengurusan" className="scroll-mt-28">
        <OrganizationBriefSection />
      </div>
      <div id="program-kerja" className="scroll-mt-28">
        <ProgramsOverviewSection />
      </div>
      <div id="berita" className="scroll-mt-28">
        <NewsOverviewSection />
      </div>
      <div id="galeri" className="scroll-mt-28">
        <GalleryOverviewSection />
      </div>
      <div id="kontak-cta" className="scroll-mt-28">
        <CTASection />
      </div>
    </>
  );
}

