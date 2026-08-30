import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutInstitutional } from "@/components/sections/about/AboutInstitutional";

export const metadata = {
  title: "About | HIMA-TI UIN Ar-Raniry",
  description: "Mengenal lebih dekat Himpunan Mahasiswa Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutIntro />
      <AboutInstitutional />
    </main>
  );
}
