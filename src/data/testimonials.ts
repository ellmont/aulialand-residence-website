export type Testimoni = {
  nama: string;
  peran: string;
  cluster: string;
  kutipan: string;
  rating: number;
  inisial: string;
};

export const daftarTestimoni: Testimoni[] = [
  {
    nama: "Andi & Maya Prasetyo",
    peran: "Penghuni sejak 2023",
    cluster: "Aulia Garden Residence",
    kutipan:
      "Proses KPR dibantu tim sales dari pengumpulan dokumen sampai akad. Serah terima selesai dua minggu lebih cepat dari jadwal dan temuan inspeksi diperbaiki tanpa kami harus menagih.",
    rating: 5,
    inisial: "AP",
  },
  {
    nama: "Keluarga Widodo",
    peran: "Penghuni sejak 2022",
    cluster: "Harmoni Park Sawangan",
    kutipan:
      "Yang paling kami rasakan adalah lingkungannya. Anak-anak bisa main sepeda di gang karena mobil parkir di depan. Drainase juga bekerja baik saat hujan deras.",
    rating: 5,
    inisial: "KW",
  },
  {
    nama: "Rina Kusumastuti",
    peran: "Pembeli unit kedua",
    cluster: "The Marquee Townhouse",
    kutipan:
      "Saya sudah membeli dua unit untuk investasi. Keduanya tersewa dalam tiga bulan setelah serah terima. Manajemen penyewaan dari pengembang sangat membantu.",
    rating: 5,
    inisial: "RK",
  },
  {
    nama: "Bayu Nugroho",
    peran: "Penghuni sejak 2024",
    cluster: "Nusa Indah Karawang",
    kutipan:
      "Jarak ke pabrik tempat saya bekerja hanya 10 menit. Fasilitas shuttle pagi benar-benar menghemat biaya transportasi bulanan.",
    rating: 4,
    inisial: "BN",
  },
  {
    nama: "Siti Rahmawati",
    peran: "Penghuni sejak 2021",
    cluster: "Graha Asri Bogor",
    kutipan:
      "Udara sejuk dan taman di sisi rumah membuat kami jarang menyalakan AC. Komunikasi dengan pengelola juga responsif saat ada perbaikan.",
    rating: 5,
    inisial: "SR",
  },
  {
    nama: "Hendra Gunawan",
    peran: "Penghuni sejak 2025",
    cluster: "Pesona Anjasmoro",
    kutipan:
      "Legalitas jelas sejak awal. Saya memverifikasi sendiri ke kantor pertanahan dan seluruh berkas sesuai. Ini yang membuat saya tenang melakukan pelunasan.",
    rating: 5,
    inisial: "HG",
  },
];
