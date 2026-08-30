import { NewsIntro } from "@/components/sections/news/NewsIntro";
import { NewsEditorial } from "@/components/sections/news/NewsEditorial";

export const metadata = {
  title: "News | HIMA-TI UIN Ar-Raniry",
  description: "Ruang redaksi, berita, dan publikasi Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry.",
};

export default function NewsPage() {
  return (
    <main className="flex flex-col w-full">
      <NewsIntro />
      <NewsEditorial />
    </main>
  );
}
