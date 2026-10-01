import { Metadata } from "next";
import Container from "@/components/ui/Container";
import MemberCard from "@/components/organization/MemberCard";
import { ORG_INFO, DIVISIONS, MEMBERS } from "@/data";

export const metadata: Metadata = {
  title: "Struktur Kepengurusan 2026/2027",
  description: "Daftar resmi 86 pengurus HIMA-TI FST UIN Ar-Raniry Banda Aceh periode 2026/2027 berdasarkan SK Dekan Fakultas Sains dan Teknologi.",
};

export default function KepengurusanPage() {
  const bphMembers = MEMBERS.filter((m) => m.isBPH);

  return (
    <div className="pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-16 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Kepengurusan HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Ditetapkan berdasarkan Surat Keputusan Dekan Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh ({ORG_INFO.dekan}) Nomor: 03.018/HIMA-TI/FST-UINAR/VI/2026 yang memuat 86 mahasiswa pengurus periode 2026/2027.
          </p>
        </div>

        {/* Section BPH (Badan Pengurus Harian) */}
        <div className="pb-20 mb-20 border-b border-[#222225]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
              Badan Pengurus Harian (BPH)
            </h2>
            <span className="text-xs font-mono text-[#F97316]">
              4 Pimpinan Inti
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bphMembers.map((member) => (
              <div
                key={member.nim}
                className="p-6 bg-[#111111]/80 backdrop-blur-sm border border-[#F97316]/50 flex flex-col justify-between min-h-[180px]"
              >

                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#71717A] mb-3">
                    <span className="text-[#F97316] font-bold">BPH INTI</span>
                    <span>#{member.no.toString().padStart(2, "0")}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F5F5F2] mb-1 leading-snug">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-[#F97316]">
                    {member.role}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222225] text-xs font-mono text-[#71717A] flex items-center justify-between">
                  <span>NIM: {member.nim}</span>
                  <span>TI FST</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6 Divisi Organisasi */}
        <div className="space-y-20">
          <div className="pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F2]">
              Daftar Divisi & Anggota (82 Personel)
            </h2>
          </div>

          {DIVISIONS.map((div) => {
            const divMembers = MEMBERS.filter((m) => m.divisionId === div.id);

            return (
              <section key={div.id} id={div.id} className="scroll-mt-36">
                <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-8 border-b border-[#222225] gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2]">
                      Divisi {div.name}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] mt-1 max-w-2xl">
                      {div.description}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-[#71717A] shrink-0">
                    {divMembers.length} Personel Terdaftar
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {divMembers.map((member) => (
                    <MemberCard key={`${member.nim}-${member.no}`} member={member} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
