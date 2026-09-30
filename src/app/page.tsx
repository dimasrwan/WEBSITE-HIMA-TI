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
      <HeroSection />
      <AboutOverviewSection />
      <OrganizationBriefSection />
      <ProgramsOverviewSection />
      <NewsOverviewSection />
      <GalleryOverviewSection />
      <CTASection />
    </>
  );
}
