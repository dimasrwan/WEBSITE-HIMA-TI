/**
 * DEMO CONTENT
 * Replace with verified HIMA-TI data before production.
 */

import { Project } from './types';

export const projects: Project[] = [
  {
    id: "proj-001",
    title: "Sistem Manajemen Inventaris Kampus",
    slug: "sistem-manajemen-inventaris",
    description: "Aplikasi berbasis web untuk melacak, mengelola, dan melaporkan status barang inventaris di lingkungan Fakultas Sains dan Teknologi.",
    excerpt: "Aplikasi berbasis web untuk melacak inventaris FST.",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    year: 2026,
    status: "Ongoing",
    image: "/images/placeholders/project-1.jpg",
    repository: "https://github.com/himati-uin/inventaris",
    featured: true
  },
  {
    id: "proj-002",
    title: "Smart Farming IoT Prototype",
    slug: "smart-farming-iot",
    description: "Prototipe sistem pemantauan kelembaban tanah dan penyiraman otomatis menggunakan mikrokontroler berbasis ESP32 terintegrasi dengan dashboard real-time.",
    excerpt: "Prototipe pemantauan kelembaban tanah berbasis ESP32.",
    category: "Internet of Things",
    technologies: ["C++", "ESP32", "React", "Firebase"],
    year: 2025,
    status: "Completed",
    image: "/images/placeholders/project-2.jpg",
    featured: true
  },
  {
    id: "proj-003",
    title: "Arsip Digital Himpunan",
    slug: "arsip-digital-himpunan",
    description: "Sistem pengarsipan dokumen surat menyurat, sertifikat, dan proposal HIMA-TI dengan fitur pencarian dan indeks terenkripsi.",
    excerpt: "Sistem pengarsipan dokumen terenkripsi untuk himpunan.",
    category: "Information System",
    technologies: ["Laravel", "Vue.js", "MySQL"],
    year: 2025,
    status: "Completed",
    image: "/images/placeholders/project-3.jpg",
    repository: "https://github.com/himati-uin/arsip",
    featured: false
  },
  {
    id: "proj-004",
    title: "Sentimen Analisis Publikasi BEM",
    slug: "sentimen-analisis-publikasi",
    description: "Riset analisis sentimen dari komentar media sosial BEM UIN Ar-Raniry menggunakan algoritma Natural Language Processing.",
    excerpt: "Riset analisis sentimen media sosial menggunakan NLP.",
    category: "Artificial Intelligence",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    year: 2026,
    status: "Planned",
    image: "/images/placeholders/project-4.jpg",
    featured: true
  },
  {
    id: "proj-005",
    title: "Redesign Aplikasi KTM Mobile",
    slug: "redesign-ktm-mobile",
    description: "Eksplorasi ulang antarmuka dan pengalaman pengguna untuk aplikasi Kartu Tanda Mahasiswa Digital agar lebih modern dan intuitif.",
    excerpt: "Eksplorasi ulang antarmuka aplikasi KTM Digital.",
    category: "UI/UX Design",
    technologies: ["Figma", "Protopie"],
    year: 2026,
    status: "Completed",
    image: "/images/placeholders/project-5.jpg",
    demo: "https://figma.com/proto/...",
    featured: false
  }
];
