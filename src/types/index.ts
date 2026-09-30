export interface Member {
  no: number;
  name: string;
  nim: string;
  prodi: string;
  role: string;
  divisionId?: string;
  isBPH?: boolean;
}

export interface Division {
  id: string;
  no: number;
  name: string;
  shortName: string;
  description: string;
  duties: string[];
}

export interface Program {
  id: string;
  title: string;
  divisionId: string;
  divisionName: string;
  description: string;
  target: string;
  status: "Selesai" | "Sedang Berjalan" | "Akan Datang" | "Terjadwal";
  period: string;
  tags: string[];
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  tags: string[];
  imagePlaceholderText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Akademik" | "Teknologi" | "Sosial" | "Organisasi";
  date: string;
  description: string;
  tag: string;
}
