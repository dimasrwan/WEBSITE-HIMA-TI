import { ProjectsIntro } from "@/components/sections/projects/ProjectsIntro";
import { ProjectsShowcase } from "@/components/sections/projects/ProjectsShowcase";

export const metadata = {
  title: "Projects | HIMA-TI UIN Ar-Raniry",
  description: "Showcase karya dan proyek teknologi Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry.",
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col w-full">
      <ProjectsIntro />
      <ProjectsShowcase />
    </main>
  );
}
