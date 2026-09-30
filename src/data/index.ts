import { Division, Member, Program, NewsArticle, GalleryItem } from "@/types";

export const ORG_INFO = {
  name: "Himpunan Mahasiswa Teknologi Informasi",
  shortName: "HIMA-TI FST UINAR",
  faculty: "Fakultas Sains dan Teknologi",
  university: "Universitas Islam Negeri Ar-Raniry Banda Aceh",
  period: "2026/2027",
  establishedDate: "13 September 2018",
  phone: "+62 852-7930-9890",
  email: "hima.ti@ar-raniry.ac.id",
  secretariat: "Lantai 2, Gedung Fakultas Sains dan Teknologi, UIN Ar-Raniry, Kopelma Darussalam, Kota Banda Aceh, Aceh 23111",
  dekan: "Prof. Dr. Ir. Muhammad Dirhamsyah, M.T., IPU",
  vision: "Menjadi Himpunan yang mampu berdaya saing tinggi dan unggul dalam pengembangan Softskill dan Hardskill Mahasiswa Program Studi Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh.",
  missions: [
    "Mengadakan kajian-kajian yang berbasis teknologi.",
    "Mengadakan riset yang berorientasi terhadap perkembangan teknologi informasi.",
    "Menjalin kerja sama antarorganisasi kemahasiswaan, baik di dalam maupun luar kampus.",
    "Menumbuhkan rasa kekeluargaan dan kebersamaan antar seluruh keluarga besar Prodi Teknologi Informasi Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh."
  ],
  purpose: "Sebagai perwujudan Tri Darma Perguruan Tinggi serta sadar akan hak, kewajiban, dan tanggung jawabnya sebagai mahasiswa dan masyarakat Indonesia.",
  basis: "Al-Qur'an dan Pancasila",
  constitutionBasis: "Undang-Undang Dasar 1945 dan Tri Darma Perguruan Tinggi"
};

export const LOGO_PHILOSOPHY = [
  {
    title: "Tipografi Sans-Serif",
    description: "Tagline HIMA-TI menggunakan huruf Sans-Serif yang berkarakter kokoh dan presisi, melambangkan ketelitian, profesionalisme, serta tekad menggapai cita-cita besar di dunia organisasi dan teknologi.",
    icon: "font"
  },
  {
    title: "Sudut Lipatan Terintegrasi (I & T)",
    description: "Sudut lipatan presisi yang menyatukan unsur huruf 'I' dan 'T' melambangkan sinergi, kerja sama harmonis, serta kolaborasi antar sivitas untuk mewujudkan visi Teknologi Informasi yang unggul.",
    icon: "layers"
  },
  {
    title: "Sudut Curve Terstruktur",
    description: "Lengkungan kurva yang presisi dan dinamis mencerminkan nilai kebersamaan, sumber inspirasi yang mengalir, keterbukaan pikiran, serta semangat modernitas yang adaptif terhadap perubahan zaman.",
    icon: "compass"
  },
  {
    title: "Warna Oranye Identitas (#F97316)",
    description: "Melambangkan kreativitas yang berani, daya juang kerja keras, antusiasme inovasi, dan etos kerja tinggi untuk mencapai prestasi dan kesuksesan maksimal yang bermanfaat bagi masyarakat.",
    icon: "flame"
  }
];

export const DIVISIONS: Division[] = [
  {
    id: "humas",
    no: 1,
    name: "Hubungan Masyarakat dan Kerja Sama",
    shortName: "Humas & Kerja Sama",
    description: "Mengembangkan relasi strategis eksternal, kemitraan antarinstitusi kampus maupun industri teknologi, serta mengelola komunikasi publik HIMA-TI.",
    duties: [
      "Membangun dan menjaga hubungan baik dengan alumni, pihak fakultas, serta organisasi mahasiswa internal dan eksternal.",
      "Menjalin kemitraan kolaboratif dengan industri, komunitas IT, dan lembaga teknologi.",
      "Menjadi representasi diplomasi resmi HIMA-TI dalam forum regional dan nasional."
    ]
  },
  {
    id: "minat-bakat",
    no: 2,
    name: "Minat dan Bakat Teknologi",
    shortName: "Minat & Bakat",
    description: "Wadah inkubasi, eksplorasi, dan pengembangan potensi teknis mahasiswa di bidang rekayasa perangkat lunak, sistem, keamanan siber, dan kompetisi IT.",
    duties: [
      "Mengorganisir study group, coding club, dan workshop teknis intensif.",
      "Mempersiapkan serta mendelegasikan mahasiswa dalam ajang kompetisi teknologi nasional dan internasional.",
      "Mendorong proyek inovasi perangkat lunak dan riset terapan mahasiswa."
    ]
  },
  {
    id: "multimedia",
    no: 3,
    name: "Multimedia",
    shortName: "Multimedia",
    description: "Pusat kreasi visual, media digital, publikasi kreatif, UI/UX design, videografi, dan dokumentasi visual identitas HIMA-TI.",
    duties: [
      "Memproduksi aset visual, branding, dan materi grafis untuk seluruh kegiatan himpunan.",
      "Mengelola dokumentasi foto dan video resmi agenda organisasi.",
      "Meningkatkan literasi visual, desain antarmuka (UI/UX), dan kreasi konten kreatif anggota."
    ]
  },
  {
    id: "psdm",
    no: 4,
    name: "Pengembangan Sumber Daya Mahasiswa",
    shortName: "PSDM",
    description: "Mengawal kaderisasi, penguatan softskill kepemimpinan, penanaman kultur organisasi, serta soliditas internal keluarga besar Teknologi Informasi.",
    duties: [
      "Menyelenggarakan kegiatan kaderisasi berkala (seperti OAT dan CopyPaste).",
      "Melaksanakan program penguatan kapasitas kepemimpinan dan manajemen organisasi.",
      "Memantau dinamika, keakraban, dan kesejahteraan mahasiswa TI di lingkungan kampus."
    ]
  },
  {
    id: "kewirausahaan",
    no: 5,
    name: "Kewirausahaan",
    shortName: "Kewirausahaan",
    description: "Mendorong kemandirian finansial organisasi melalui unit usaha kreatif, merchandise, serta penumbuhan jiwa technopreneurship mahasiswa.",
    duties: [
      "Mengembangkan lini produk dan merchandise resmi HIMA-TI secara profesional.",
      "Mengelola peluang usaha pendanaan mandiri untuk mendukung kegiatan himpunan.",
      "Menyelenggarakan lokakarya dan pembinaan literasi bisnis digital bagi mahasiswa."
    ]
  },
  {
    id: "akademik",
    no: 6,
    name: "Akademik dan Keilmuan",
    shortName: "Akademik & Keilmuan",
    description: "Mendukung akselerasi prestasi akademik, diskusi ilmiah, asistensi mata kuliah kejuruan, serta literasi riset teknologi informasi.",
    duties: [
      "Menyelenggarakan bimbingan belajar dan tutorial asistensi mata kuliah inti TI.",
      "Memfasilitasi forum diskusi ilmiah, bedah paper, dan workshop penulisan ilmiah.",
      "Menjadi jembatan advokasi akademik antara mahasiswa dan program studi."
    ]
  }
];

export const MEMBERS: Member[] = [
  // BPH (Badan Pengurus Harian)
  { no: 1, name: "Muhammad Asyraf", nim: "230705128", prodi: "Teknologi Informasi", role: "Ketua Umum", isBPH: true },
  { no: 2, name: "Rijalul Fahmi", nim: "230705153", prodi: "Teknologi Informasi", role: "Wakil Ketua Umum", isBPH: true },
  { no: 3, name: "Muhammadon", nim: "230705077", prodi: "Teknologi Informasi", role: "Sekretaris Umum", isBPH: true },
  { no: 4, name: "Dimas Irawan", nim: "230705149", prodi: "Teknologi Informasi", role: "Bendahara Umum", isBPH: true },

  // Divisi 1: Hubungan Masyarakat dan Kerjasama
  { no: 5, name: "Muhammad Abrar", nim: "240705063", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "humas" },
  { no: 6, name: "Maulana Akbar", nim: "240705105", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "humas" },
  { no: 7, name: "Fitriya Ramadhani", nim: "230705137", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 8, name: "Cut Nurul Musliah", nim: "240705015", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 9, name: "Cut Siti Mayasha", nim: "240705047", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 10, name: "Restu Anju Hidayat", nim: "240705051", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 11, name: "Nazmi Al Husaini", nim: "240705108", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 12, name: "Maulana Raju", nim: "240705166", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 13, name: "T. Sultansyah Rumi", nim: "240705168", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 14, name: "M. Fatih Al Afkar", nim: "240705156", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 15, name: "Alsya Arisca Putri", nim: "240705067", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 16, name: "Nazwa Salsa Billa", nim: "240705139", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },
  { no: 17, name: "Muzammil", nim: "230705185", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "humas" },

  // Divisi 2: Minat dan Bakat Teknologi
  { no: 18, name: "Dandi Sultana Putra Ali", nim: "230705199", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "minat-bakat" },
  { no: 19, name: "Ferta Junindi", nim: "240705054", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "minat-bakat" },
  { no: 20, name: "Achmad Faris Faqih", nim: "230705001", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 21, name: "Ikhlassul Amal", nim: "230705105", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 22, name: "M.Hafizh Rizki", nim: "230705212", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 23, name: "Muhammad Razi", nim: "240705119", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 24, name: "Reval Maulidan", nim: "240705131", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 25, name: "M. Nafis Sauqy", nim: "230705187", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 26, name: "Ahmad Farhan", nim: "230705193", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 27, name: "Muhammad Fauzi", nim: "230705181", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 28, name: "Azhabul Firdaus", nim: "230705161", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 29, name: "Masrul Hadi", nim: "240705068", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 30, name: "Muhammad Rizqi Ziaulia", nim: "240705020", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },
  { no: 31, name: "Muhammad Faris Fatahillah", nim: "230705042", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "minat-bakat" },

  // Divisi 3: Multimedia
  { no: 32, name: "Muhammad Naufal Tiftazani", nim: "230705117", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "multimedia" },
  { no: 33, name: "Muhammad Alif Al Furkani", nim: "240705027", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "multimedia" },
  { no: 34, name: "Muhammad Kafka Alfayed", nim: "240705029", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 35, name: "Usman Shiddiq", nim: "240705031", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 36, name: "Muhammad Ulwais Al Karni", nim: "240705058", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 37, name: "Radiansyah Putra", nim: "240705061", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 38, name: "Muhammad Abdan Fatih Saika", nim: "240705097", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 39, name: "Annur Mahardhika Putra", nim: "240705120", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 40, name: "M.Pasha", nim: "240705076", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },
  { no: 41, name: "Muharriel", nim: "240705069", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "multimedia" },

  // Divisi 4: Pengembangan Sumber Daya Mahasiswa
  { no: 42, name: "Aldori Mifta", nim: "230705020", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "psdm" },
  { no: 43, name: "Syahri Ramadhan", nim: "240705090", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "psdm" },
  { no: 44, name: "Raihan Firnanda", nim: "240705073", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 45, name: "Isra Akmal Saputra", nim: "230705058", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 46, name: "Ahmad Azhar", nim: "230705135", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 47, name: "Arifa Nabila", nim: "230705129", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 48, name: "Nazil Ramadhan", nim: "240705169", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 49, name: "Syarifah Nazira Balqis Alhabsyi", nim: "240705014", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 50, name: "Salsabila", nim: "240705037", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 51, name: "Muhammmad Naufal Alifaturrafif", nim: "240705136", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 52, name: "Imam Al-Khalis", nim: "240705118", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 53, name: "M. Ihsan", nim: "240705137", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 54, name: "Syakila Delina Hadisty", nim: "240705127", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 55, name: "Al Muttaqin", nim: "240705130", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 56, name: "Riyan Arya Syahputra", nim: "240705142", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 57, name: "M. Zaki Asyafiq", nim: "240705161", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 58, name: "Nurul Annisa", nim: "230705176", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },
  { no: 59, name: "Zahara", nim: "230705168", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "psdm" },

  // Divisi 5: Kewirausahaan
  { no: 60, name: "Syadid Multazam", nim: "240705133", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "kewirausahaan" },
  { no: 61, name: "M. Dhiyaulhaq Al Faiz", nim: "240705085", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "kewirausahaan" },
  { no: 62, name: "Fadya Zahira", nim: "240705002", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 63, name: "Maqfirah Mz", nim: "240705165", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 64, name: "Annisa Sri Mentari", nim: "240705049", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 65, name: "Muhammad Lazuardi Rafi", nim: "240705145", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 66, name: "M.Aljir Riski", nim: "240705164", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 67, name: "Amira Fatini Br Pasaribu", nim: "240705013", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 68, name: "Dayan Fhuri", nim: "240705121", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 69, name: "Salsabila Asy Syifa", nim: "240705035", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 70, name: "Rajul Akhyar", nim: "240705064", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 71, name: "Cut Ismaton Nufus", nim: "240705025", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 72, name: "M. Iqmal Maulana Saragih", nim: "240705053", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 73, name: "Rizky Fadhlu Ramadhanu", nim: "240705045", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },
  { no: 74, name: "Safar", nim: "240705026", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "kewirausahaan" },

  // Divisi 6: Akademik dan Keilmuan
  { no: 75, name: "Fadzlun Ulfa Hafifah", nim: "230705006", prodi: "Teknologi Informasi", role: "Ketua Divisi", divisionId: "akademik" },
  { no: 76, name: "Firly Lizarny", nim: "230705152", prodi: "Teknologi Informasi", role: "Wakil Ketua Divisi", divisionId: "akademik" },
  { no: 77, name: "Ismi Chairunnisa", nim: "230705218", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 78, name: "Mutiah Nisa Putri", nim: "230705216", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 79, name: "Nabila Syarifa Sunardi", nim: "240705019", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 80, name: "Qomariyatun Nisa Khoiriyah", nim: "240705016", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 81, name: "Moza Warah", nim: "240705038", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 82, name: "Muhammad Fatih", nim: "240705059", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 83, name: "Maisarah", nim: "240705098", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 84, name: "Nurul Maqfirah", nim: "240705134", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 85, name: "Muhammad Rizqa Aulia", nim: "240705017", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" },
  { no: 86, name: "M. Naufal", nim: "240705075", prodi: "Teknologi Informasi", role: "Anggota Divisi", divisionId: "akademik" }
];

export const PROGRAMS: Program[] = [
  {
    id: "prog-oat",
    title: "Organization and Academic Training (OAT)",
    divisionId: "psdm",
    divisionName: "Pengembangan Sumber Daya Mahasiswa",
    description: "Pelatihan kepemimpinan dasar, etika organisasi, dan pengenalan iklim akademik kampus untuk membentuk kader mahasiswa yang tangguh, berintegritas, dan solutif.",
    target: "Mahasiswa Baru Prodi Teknologi Informasi",
    status: "Terjadwal",
    period: "Semester Ganjil 2026",
    tags: ["Kaderisasi", "Leadership", "Akademik"]
  },
  {
    id: "prog-copypaste",
    title: "Communication Happily Pejuang Sarjana Teknologi Informasi (CopyPaste)",
    divisionId: "psdm",
    divisionName: "Pengembangan Sumber Daya Mahasiswa",
    description: "Program keakraban, konsolidasi keluarga besar mahasiswa, dan sharing session lintas angkatan guna mempererat persaudaraan serta solidaritas seluruh sivitas TI.",
    target: "Keluarga Besar Mahasiswa TI UIN Ar-Raniry",
    status: "Akan Datang",
    period: "Tahunan 2026/2027",
    tags: ["Solidaritas", "Networking", "Sharing Session"]
  },
  {
    id: "prog-raker",
    title: "Rapat Kerja (RAKER) HIMA-TI 2026/2027",
    divisionId: "humas",
    divisionName: "Hubungan Masyarakat & Kerja Sama",
    description: "Forum musyawarah penyusunan, sinkronisasi, dan penetapan matrik program kerja seluruh divisi HIMA-TI selama satu periode kepengurusan.",
    target: "Seluruh Pengurus HIMA-TI 2026/2027",
    status: "Selesai",
    period: "Juni 2026",
    tags: ["Organisasi", "Pleno", "Manajemen"]
  },
  {
    id: "prog-tech-bootcamp",
    title: "TI Code & Skill Lab Series",
    divisionId: "minat-bakat",
    divisionName: "Minat dan Bakat Teknologi",
    description: "Serangkaian kelas praktikum dan coding lab tematik yang berfokus pada Fullstack Web Development, Data Science, serta Cybersecurity untuk mahasiswa TI.",
    target: "Mahasiswa Prodi Teknologi Informasi",
    status: "Sedang Berjalan",
    period: "Berkala (Mingguan)",
    tags: ["Coding", "Workshop", "Hands-on"]
  },
  {
    id: "prog-uiux-mastery",
    title: "Creative Visual & UI/UX Workshop",
    divisionId: "multimedia",
    divisionName: "Multimedia",
    description: "Pelatihan desain antarmuka, pembuatan portofolio digital, dan penguasaan teknik videografi kreatif untuk menunjang branding mahasiswa di era modern.",
    target: "Mahasiswa Umum & Anggota HIMA-TI",
    status: "Akan Datang",
    period: "November 2026",
    tags: ["UI/UX", "Multimedia", "Creative Design"]
  },
  {
    id: "prog-academic-clinic",
    title: "Klinik Akademik & Asistensi Kuliah",
    divisionId: "akademik",
    divisionName: "Akademik dan Keilmuan",
    description: "Sesi asistensi rutin dan bedah soal responsi mata kuliah kejuruan pemrograman, struktur data, dan kalkulus menjelang ujian tengah dan akhir semester.",
    target: "Mahasiswa Aktif Semester 1 - 4",
    status: "Sedang Berjalan",
    period: "Setiap Menjelang UTS & UAS",
    tags: ["Asistensi", "Tutoring", "Prestasi"]
  },
  {
    id: "prog-it-merch",
    title: "Official HIMA-TI Tech Merch & Creative Corner",
    divisionId: "kewirausahaan",
    divisionName: "Kewirausahaan",
    description: "Pengembangan dan distribusi atribut resmi, polo shirt, stiker teknologi, dan pernak-pernik IT sebagai sarana penguatan identitas dan kemandirian himpunan.",
    target: "Mahasiswa, Dosen, dan Alumni TI",
    status: "Sedang Berjalan",
    period: "Sepanjang Periode 2026/2027",
    tags: ["Merchandise", "Technopreneur", "Branding"]
  }
];

export const NEWS: NewsArticle[] = [
  {
    slug: "pelantikan-pengurus-hima-ti-periode-2026-2027",
    title: "Pelantikan Resmi Pengurus HIMA-TI Periode 2026/2027 Fakultas Sains dan Teknologi",
    category: "Organisasi",
    date: "14 Juni 2026",
    author: "Divisi Humas & Kerja Sama",
    readTime: "3 menit baca",
    excerpt: "Dekan Fakultas Sains dan Teknologi UIN Ar-Raniry resmi melantik 86 pengurus Himpunan Mahasiswa Teknologi Informasi periode 2026/2027 di bawah kepemimpinan Muhammad Asyraf.",
    content: [
      "Banda Aceh — Fakultas Sains dan Teknologi UIN Ar-Raniry Banda Aceh menyelenggarakan prosesi pelantikan bersama organisasi mahasiswa (ORMAWA) sekaligus penetapan pengurus HIMA-TI periode kepengurusan 2026/2027 berdasarkan Surat Keputusan Dekan yang ditandatangani oleh Prof. Dr. Ir. Muhammad Dirhamsyah, M.T., IPU.",
      "Struktur kepengurusan periode ini dinakhodai oleh Muhammad Asyraf (NIM 230705128) selaku Ketua Umum bersama Rijalul Fahmi sebagai Wakil Ketua Umum, didampingi Muhammadon (Sekretaris Umum) dan Dimas Irawan (Bendahara Umum).",
      "Dalam arahannya, pimpinan fakultas berpesan agar HIMA-TI senantiasa menjadi motor penggerak inovasi teknologi, peningkatan kompetensi mahasiswa, serta menjunjung tinggi nilai-nilai keislaman dan Tri Darma Perguruan Tinggi."
    ],
    tags: ["Pelantikan", "HIMA-TI 2026/2027", "FST UIN Ar-Raniry"],
    imagePlaceholderText: "Dokumentasi Pelantikan Resmi Pengurus HIMA-TI 2026/2027"
  },
  {
    slug: "sosialisasi-ad-art-dan-arah-gerak-organisasi-2026",
    title: "Sosialisasi Anggaran Dasar & Anggaran Rumah Tangga HIMA-TI 2026",
    category: "Akademik",
    date: "20 Juni 2026",
    author: "Dewan Pengurus Harian",
    readTime: "4 menit baca",
    excerpt: "Penyampaian substansi revisi AD/ART hasil Musyawarah Besar kepada seluruh anggota demi terciptanya tata kelola organisasi yang transparan, profesional, dan akuntabel.",
    content: [
      "Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) 2026 memuat landasan fundamental bagi tata kelola HIMA-TI. Beberapa poin esensial mencakup penegasan status organisasi yang otonom dan integral dalam kemahasiswaan Fakultas Sains dan Teknologi.",
      "Dokumen ini juga merinci filosofi identitas visual logo HIMA-TI, hak dan kewajiban anggota biasa, mekanisme kepengurusan, serta fungsi pengawasan Dewan Pengawas Organisasi (DPO).",
      "Ketua Umum HIMA-TI menegaskan bahwa AD/ART adalah pedoman utama agar setiap langkah program kerja terarah dan dapat dipertanggungjawabkan kepada seluruh sivitas akademika."
    ],
    tags: ["AD/ART", "MUBES", "Tata Kelola"],
    imagePlaceholderText: "Forum Sosialisasi Konstitusi & Tata Kelola Organisasi"
  },
  {
    slug: "persiapan-kaderisasi-oat-dan-copypaste-2026",
    title: "Divisi PSDM Siapkan Agenda Kaderisasi OAT & CopyPaste untuk Mahasiswa Baru",
    category: "Kegiatan",
    date: "05 Juli 2026",
    author: "Divisi PSDM",
    readTime: "3 menit baca",
    excerpt: "Divisi PSDM HIMA-TI mulai merancang konsep kegiatan Organization and Academic Training (OAT) serta program keakraban CopyPaste untuk menyambut mahasiswa baru.",
    content: [
      "Kegiatan OAT dan CopyPaste merupakan dua agenda kaderisasi wajib sebagaimana diamanatkan dalam ketentuan Anggaran Rumah Tangga Pasal 14 ayat (1) huruf b.",
      "Tahun ini, PSDM mengusung pendekatan hybrid yang menggabungkan pengenalan kurikulum prodi, workshop tools produktivitas tech-stack modern, serta mentoring sebaya oleh kakak tingkat berprestasi.",
      "Diharapkan program ini dapat memupuk kecintaan terhadap dunia teknologi informasi sekaligus membangun kekeluargaan yang erat sejak hari pertama perkuliahan."
    ],
    tags: ["PSDM", "Kaderisasi", "OAT", "CopyPaste"],
    imagePlaceholderText: "Persiapan Matrik Program Kaderisasi Mahasiswa TI"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Pelantikan Pengurus ORMAWA FST 2026/2027",
    category: "Organisasi",
    date: "Juni 2026",
    description: "Pengambilan sumpah jabatan pengurus HIMA-TI di hadapan Dekan Fakultas Sains dan Teknologi UIN Ar-Raniry.",
    tag: "Pelantikan Resmi"
  },
  {
    id: "gal-2",
    title: "Musyawarah Besar (MUBES) KBM TI",
    category: "Organisasi",
    date: "Mei 2026",
    description: "Sidang pleno pembahasan AD/ART dan pemilihan pimpinan umum HIMA-TI periode kepengurusan 2026/2027.",
    tag: "Mubes HIMA-TI"
  },
  {
    id: "gal-3",
    title: "Tech Sharing & Coding Asistensi Lab",
    category: "Akademik",
    date: "2026",
    description: "Sesi bimbingan belajar praktikum algoritma dan pemrograman di laboratorium komputer FST.",
    tag: "Klinik Akademik"
  },
  {
    id: "gal-4",
    title: "Eksplorasi UI/UX & Digital Branding",
    category: "Teknologi",
    date: "2026",
    description: "Sesi kreasi desain antarmuka dan pengembangan aset multimedia oleh divisi multimedia HIMA-TI.",
    tag: "Creative Lab"
  },
  {
    id: "gal-5",
    title: "Bakti Sosial & Silaturahmi Mahasiswa",
    category: "Sosial",
    date: "2026",
    description: "Aksi pengabdian sosial dan penanaman kepedulian masyarakat oleh keluarga besar mahasiswa Teknologi Informasi.",
    tag: "Pengabdian Masyarakat"
  },
  {
    id: "gal-6",
    title: "Rapat Koordinasi Pengurus HIMA-TI",
    category: "Organisasi",
    date: "2026",
    description: "Pertemuan berkala DPH dan ketua-ketua divisi dalam memantau realisasi program kerja semester.",
    tag: "Rapat Presidium"
  }
];
