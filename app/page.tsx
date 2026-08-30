import { Hero } from "@/components/sections/Hero";
import { AboutSnapshot } from "@/components/sections/home/AboutSnapshot";
import { ProgramsSnapshot } from "@/components/sections/home/ProgramsSnapshot";
import { EventsSnapshot } from "@/components/sections/home/EventsSnapshot";
import { ProjectsSnapshot } from "@/components/sections/home/ProjectsSnapshot";
import { NewsSnapshot } from "@/components/sections/home/NewsSnapshot";
import { HomeCTA } from "@/components/sections/home/HomeCTA";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <AboutSnapshot />
      <ProgramsSnapshot />
      <EventsSnapshot />
      <ProjectsSnapshot />
      <NewsSnapshot />
      <HomeCTA />
    </main>
  );
}
