import { OrganizationIntro } from "@/components/sections/organization/OrganizationIntro";
import { OrganizationStructure } from "@/components/sections/organization/OrganizationStructure";

export const metadata = {
  title: "Organization | HIMA-TI UIN Ar-Raniry",
  description: "Struktur dan informasi kepengurusan Himpunan Mahasiswa Teknologi Informasi UIN Ar-Raniry.",
};

export default function OrganizationPage() {
  return (
    <main className="flex flex-col w-full">
      <OrganizationIntro />
      <OrganizationStructure />
    </main>
  );
}
