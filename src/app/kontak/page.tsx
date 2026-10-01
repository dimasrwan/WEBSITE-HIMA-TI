"use client";

import React, { useState } from "react";
import Container from "@/components/ui/Container";
import { ORG_INFO } from "@/data";
import { ArrowUpRight, Check } from "lucide-react";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-28 bg-transparent">
      <Container size="xl">
        {/* Page Header */}
        <div className="pb-12 mb-16 border-b border-[#222225]">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F5F2] tracking-tight leading-[1.05] max-w-4xl mb-6">
            Hubungi HIMA-TI
          </h1>
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl font-normal">
            Kanal komunikasi resmi pengurus HIMA-TI Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh untuk keperluan koordinasi kemahasiswaan, kemitraan lembaga, dan audiensi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Official Secretariat Address & Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#F5F5F2] mb-3">
                Alamat Sekretariat
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
                {ORG_INFO.secretariat}
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-[#222225]">
              <div>
                <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                  Surel Resmi (Email)
                </span>
                <a
                  href={`mailto:${ORG_INFO.email}`}
                  className="text-lg font-bold text-[#F5F5F2] hover:text-[#F97316] transition-colors"
                >
                  {ORG_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block mb-1">
                  Kontak / WhatsApp
                </span>
                <a
                  href={`tel:${ORG_INFO.phone}`}
                  className="text-lg font-bold text-[#F5F5F2] hover:text-[#F97316] transition-colors font-mono"
                >
                  {ORG_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-[#222225] text-xs font-mono text-[#71717A] leading-relaxed">
              <span className="text-[#F97316] block mb-1">PELAYANAN KEMAHASISWAAN:</span>
              Senin s.d. Jumat pukul 09.00 — 17.00 WIB di Gedung Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh.
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[#111111]/80 backdrop-blur-sm border border-[#222225]">
              <h2 className="text-2xl font-bold text-[#F5F5F2] mb-8">

                Kirimkan Surat atau Pesan Langsung
              </h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F2] mb-2">
                    Pesan Berhasil Terkirim
                  </h3>
                  <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto mb-8 leading-relaxed">
                    Divisi Hubungan Masyarakat & Kerja Sama HIMA-TI akan meninjau dan menindaklanjuti surel Anda segera.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-3 border border-[#333338] text-xs font-mono uppercase text-[#F5F5F2] hover:border-[#F97316] transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 bg-[#171717] border border-[#222225] text-sm text-[#F5F5F2] placeholder-[#52525B] focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#71717A] uppercase mb-2">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 bg-[#171717] border border-[#222225] text-sm text-[#F5F5F2] placeholder-[#52525B] focus:outline-none focus:border-[#F97316] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase mb-2">
                      Subjek Permohonan / Pesan *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Contoh: Permohonan Kerja Sama / Aspirasi"
                      className="w-full px-4 py-3 bg-[#171717] border border-[#222225] text-sm text-[#F5F5F2] placeholder-[#52525B] focus:outline-none focus:border-[#F97316] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#71717A] uppercase mb-2">
                      Isi Pesan *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Uraikan perihal pesan atau isi koordinasi Anda..."
                      className="w-full px-4 py-3 bg-[#171717] border border-[#222225] text-sm text-[#F5F5F2] placeholder-[#52525B] focus:outline-none focus:border-[#F97316] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#F97316] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider hover:bg-[#EA580C] transition-colors"
                  >
                    <span>Kirim Pesan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
