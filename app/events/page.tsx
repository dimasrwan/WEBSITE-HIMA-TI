import { EventsIntro } from "@/components/sections/events/EventsIntro";
import { EventsArchive } from "@/components/sections/events/EventsArchive";

export const metadata = {
  title: "Events | HIMA-TI UIN Ar-Raniry",
  description: "Arsip kegiatan dan momentum Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry.",
};

export default function EventsPage() {
  return (
    <main className="flex flex-col w-full">
      <EventsIntro />
      <EventsArchive />
    </main>
  );
}
