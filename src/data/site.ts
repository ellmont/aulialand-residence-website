export const site = {
  nama: "Aulia Land",
  tagline: "Hunian berkualitas untuk keluarga Indonesia",
  deskripsi:
    "Aulia Land adalah pengembang perumahan yang membangun cluster hunian modern, aman, dan terjangkau di Jabodetabek dan sekitarnya sejak 2009.",
  telepon: "+62 811 2200 991",
  whatsapp: "+62 811 2200 991",
  email: "sales@aulialand.co.id",
  alamat: "Aulia Land Tower, Jl. Alternatif Cibubur No. 88, Bekasi, Jawa Barat 17435",
  jamOperasional: "Senin – Sabtu, 09.00 – 17.00 WIB",
  tahunBerdiri: 2009,
} as const;

export const navigasi = [
  { label: "Beranda", href: "/" },
  { label: "Properti", href: "/properti" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Artikel", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
] as const;

export const statistik = [
  { nilai: "17+", label: "Tahun berpengalaman" },
  { nilai: "24", label: "Cluster terbangun" },
  { nilai: "6.500+", label: "Unit diserahkan" },
  { nilai: "98%", label: "Tingkat hunian" },
] as const;

export const keunggulan = [
  {
    judul: "Lokasi strategis",
    isi: "Setiap cluster dipilih dengan akses tol, sekolah, rumah sakit, dan pusat perbelanjaan dalam radius 10 menit.",
    ikon: "pin" as const,
  },
  {
    judul: "Legalitas terjamin",
    isi: "SHM pecah per unit, IMB/PBG lengkap, dan izin lingkungan yang siap diverifikasi langsung di lokasi.",
    ikon: "shield" as const,
  },
  {
    judul: "Kualitas bangunan",
    isi: "Standar struktur SNI, material bermerek, dan garansi struktur hingga 5 tahun setelah serah terima.",
    ikon: "hammer" as const,
  },
  {
    judul: "Fasilitas lengkap",
    isi: "Club house, kolam renang, jogging track, dan sistem keamanan 24 jam dengan akses card di setiap cluster.",
    ikon: "star" as const,
  },
];
