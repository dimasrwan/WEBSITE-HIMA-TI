import { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ORG_INFO, LOGO_PHILOSOPHY } from "@/data";

export const metadata: Metadata = {
  title: "Tentang Organisasi & Filosofi Logo",
  description: "Profil lengkap, sejarah, visi misi, tujuan, landasan konstitusi, dan filosofi logo resmi HIMA-TI FST UIN Ar-Raniry Banda Aceh.",
};

export default function TentangPage() {
  return (
    <div className="pt-36 pb-28 bg-transparent">
      <Container size="xl">

        {/* Page Title Header */}
        <div className="pb-12 mb-16 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Tentang HIMA-TI UIN Ar-Raniry
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Himpunan Mahasiswa Teknologi Informasi (HIMA-TI) Fakultas Sains dan Teknologi Universitas Islam Negeri Ar-Raniry Banda Aceh adalah organisasi kemahasiswaan intra kampus yang berstatus otonom dan integral.
          </p>
        </div>

        {/* Section 1: Sejarah & Legalitas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 mb-20 border-b border-[#222225] items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] leading-tight mb-6">
              Didirikan pada 13 September 2018 di Banda Aceh.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              <p>
                Organisasi ini didirikan pada hari <strong className="text-[#F5F5F2] font-semibold">Kamis, 13 September 2018</strong> untuk jangka waktu yang tidak ditentukan berdasarkan Anggaran Dasar HIMA-TI Pasal 2.
              </p>
              <p>
                HIMA-TI berkedudukan di Fakultas Sains dan Teknologi UIN Ar-Raniry, Kopelma Darussalam, Banda Aceh, sebagai wadah pembinaan dan pengembangan potensi mahasiswa Teknologi Informasi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#222225] border-y border-[#222225]">
            <div className="py-6">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-1">Azas Organisasi (AD Pasal 4)</span>
              <p className="text-lg font-bold text-[#F5F5F2]">{ORG_INFO.basis}</p>
            </div>
            <div className="py-6">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-1">Landasan Hukum (AD Pasal 5)</span>
              <p className="text-lg font-bold text-[#F5F5F2]">{ORG_INFO.constitutionBasis}</p>
            </div>
            <div className="py-6">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-1">Status & Sifat (AD Pasal 8)</span>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                Organisasi kemahasiswaan intra perguruan tinggi yang berstatuskan lembaga kooperatif dalam struktural kemahasiswaan yang integral dengan Fakultas Sains dan Teknologi dan bersifat otonom.
              </p>
            </div>
            <div className="py-6">
              <span className="text-xs font-mono text-[#71717A] uppercase block mb-1">Tujuan Organisasi (AD Pasal 7)</span>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                &ldquo;{ORG_INFO.purpose}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Visi & Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 mb-20 border-b border-[#222225]">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] leading-tight mb-4">
              Visi Organisasi
            </h2>
            <blockquote className="text-xl sm:text-2xl font-bold text-[#F5F5F2] leading-snug">
              &ldquo;{ORG_INFO.vision}&rdquo;
            </blockquote>
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2] leading-tight mb-6">
              Misi Organisasi
            </h2>
            <div className="space-y-6">
              {ORG_INFO.missions.map((mission, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="text-xs font-mono text-[#F97316] font-bold mt-1 shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-base text-[#D4D4D8] leading-relaxed">
                    {mission}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Filosofi Logo & Lambang */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F5F2] tracking-tight leading-tight">
              Filosofi Lambang & Logo
            </h2>
            <span className="text-xs font-mono text-[#71717A]">
              Anggaran Rumah Tangga (ART) Pasal 18
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 p-10 bg-[#111111] border border-[#222225] flex flex-col items-center text-center">
              <div className="relative w-44 h-48 sm:w-52 sm:h-56 mb-6">
                <Image
                  src="/logo.svg"
                  alt="Logo Resmi HIMA-TI"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-mono font-bold text-[#F5F5F2] uppercase tracking-wider block">
                Lambang Resmi HIMA-TI
              </span>
              <span className="text-[11px] text-[#71717A] mt-1 block">
                Warna Dasar Oranye (#F97316) & Hitam
              </span>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#222225] border-y border-[#222225]">
              {LOGO_PHILOSOPHY.map((item, idx) => (
                <div key={idx} className="py-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-[#F97316]">0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-[#F5F5F2]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
