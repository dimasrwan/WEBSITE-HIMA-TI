import { Hero } from "@/components/sections/home/Hero";
import { OrganizationIntro } from "@/components/sections/home/OrganizationIntro";
import { DivisionsShowcase } from "@/components/sections/home/DivisionsShowcase";
import { ProgramsShowcase } from "@/components/sections/home/ProgramsShowcase";
import { EventsShowcase } from "@/components/sections/home/EventsShowcase";
import { ProjectsShowcase } from "@/components/sections/home/ProjectsShowcase";
import { NewsShowcase } from "@/components/sections/home/NewsShowcase";
import { VisualStatement } from "@/components/sections/home/VisualStatement";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <OrganizationIntro />
      <DivisionsShowcase />
      <ProgramsShowcase />
      <EventsShowcase />
      <ProjectsShowcase />
      <NewsShowcase />
      <VisualStatement />
      <HomeCTA />
    </main>
  );
}
