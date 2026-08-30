import { ProgramsIntro } from "@/components/sections/programs/ProgramsIntro";
import { ProgramsArchive } from "@/components/sections/programs/ProgramsArchive";

export const metadata = {
  title: "Programs | HIMA-TI UIN Ar-Raniry",
  description: "Arsip program kerja dan kegiatan struktural Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry.",
};

export default function ProgramsPage() {
  return (
    <main className="flex flex-col w-full">
      <ProgramsIntro />
      <ProgramsArchive />
    </main>
  );
}
