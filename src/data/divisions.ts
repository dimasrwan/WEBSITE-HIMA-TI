/**
 * DEMO CONTENT
 * Replace with verified HIMA-TI data before production.
 */

import { Division } from './types';

export const divisions: Division[] = [
  {
    id: "div-001",
    name: "Riset & Teknologi",
    shortName: "RISTEK",
    description: "Divisi yang berfokus pada pengembangan kompetensi teknis mahasiswa, penelitian, dan inovasi di bidang teknologi informasi.",
    focus: ["Software Engineering", "Artificial Intelligence", "Internet of Things"],
    order: 1
  },
  {
    id: "div-002",
    name: "Hubungan Masyarakat",
    shortName: "HUMAS",
    description: "Menjaga dan memperluas relasi eksternal serta menjadi jembatan komunikasi antara himpunan dengan pihak luar.",
    focus: ["Public Relations", "Partnership", "Media Relations"],
    order: 2
  },
  {
    id: "div-003",
    name: "Media & Kreatif",
    shortName: "MEDKRAF",
    description: "Mengelola seluruh aspek visual, branding, dan publikasi digital HIMA-TI.",
    focus: ["UI/UX Design", "Content Creation", "Brand Identity"],
    order: 3
  },
  {
    id: "div-004",
    name: "Pengembangan SDM",
    shortName: "PSDM",
    description: "Bertanggung jawab atas kaderisasi dan pengembangan soft skill seluruh mahasiswa Teknologi Informasi.",
    focus: ["Leadership", "Character Building", "Organizational Skill"],
    order: 4
  }
];
