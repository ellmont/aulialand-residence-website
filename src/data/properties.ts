export type StatusProperti =
  | "Siap Huni"
  | "Indent"
  | "Nup"
  | "Terbatas"
  | "Sold Out";

export type TipeProperti =
  | "Rumah Tapak"
  | "Rumah 2 Lantai"
  | "Townhouse"
  | "Rumah Subsidi"
  | "Villa";

export type Properti = {
  slug: string;
  nama: string;
  cluster: string;
  kota: string;
  provinsi: string;
  lokasi: string;
  tipe: TipeProperti;
  status: StatusProperti;
  harga: number;
  hargaCoret?: number;
  cicilan: number;
  kamarTidur: number;
  kamarMandi: number;
  luasTanah: number;
  luasBangunan: number;
  carport: number;
  lantai: number;
  listrik: string;
  sertifikat: string;
  unitTersisa: number;
  totalUnit: number;
  tahun: number;
  unggulan: boolean;
  ringkasan: string;
  deskripsi: string[];
  fasilitas: string[];
  sekitar: { nama: string; jarak: string; kategori: string }[];
  tone: number;
};

export const daftarProperti: Properti[] = [
  {
    slug: "aulia-garden-residence-cibubur",
    nama: "Aulia Garden Residence",
    cluster: "Cluster Bougenville",
    kota: "Bekasi",
    provinsi: "Jawa Barat",
    lokasi: "Cibubur, Bekasi",
    tipe: "Rumah 2 Lantai",
    status: "Siap Huni",
    harga: 1_285_000_000,
    hargaCoret: 1_420_000_000,
    cicilan: 9_400_000,
    kamarTidur: 4,
    kamarMandi: 3,
    luasTanah: 120,
    luasBangunan: 155,
    carport: 2,
    lantai: 2,
    listrik: "2.200 VA",
    sertifikat: "SHM",
    unitTersisa: 6,
    totalUnit: 148,
    tahun: 2024,
    unggulan: true,
    ringkasan:
      "Rumah dua lantai dalam cluster berpagar dengan taman tematik dan club house seluas 1.800 m².",
    deskripsi: [
      "Aulia Garden Residence menghadirkan hunian dua lantai dengan pencahayaan alami maksimal melalui plafon tinggi 3,2 meter dan bukaan kaca lebar di sisi timur. Setiap unit mendapatkan taman pribadi di halaman belakang yang cukup untuk taman keluarga kecil.",
      "Cluster ini dirancang dengan konsep pedestrian — kendaraan diparkir di area depan sehingga gang antar rumah aman untuk anak-anak bermain. Sistem drainase menggunakan bio-pore dan sumur resapan untuk mengurangi genangan saat musim hujan.",
      "Serah terima unit dilengkapi dengan kitchen set, plafon gypsum, dan lantai granit 60x60 di ruang utama. Pembeli bisa memilih tiga skema interior tanpa biaya tambahan hingga 90 hari setelah akad.",
    ],
    fasilitas: [
      "Club house & kolam renang",
      "Jogging track 800 m",
      "Keamanan 24 jam & CCTV",
      "Gerbang akses card",
      "Playground anak",
      "Masjid dalam cluster",
      "Sumur resapan bio-pore",
      "One gate system",
    ],
    sekitar: [
      { nama: "Gerbang Tol Cibubur", jarak: "4,2 km", kategori: "Transportasi" },
      { nama: "Kota Wisata Cibubur", jarak: "3,5 km", kategori: "Rekreasi" },
      { nama: "RS Mitra Keluarga Cibubur", jarak: "4,8 km", kategori: "Kesehatan" },
      { nama: "SMA Negeri 1 Cibubur", jarak: "2,1 km", kategori: "Pendidikan" },
      { nama: "Summarecon Mall Bekasi", jarak: "12 km", kategori: "Perbelanjaan" },
    ],
    tone: 0,
  },
  {
    slug: "harmoni-park-sawangan",
    nama: "Harmoni Park Sawangan",
    cluster: "Cluster Camelia",
    kota: "Depok",
    provinsi: "Jawa Barat",
    lokasi: "Sawangan, Depok",
    tipe: "Rumah Tapak",
    status: "Siap Huni",
    harga: 895_000_000,
    cicilan: 6_500_000,
    kamarTidur: 3,
    kamarMandi: 2,
    luasTanah: 90,
    luasBangunan: 78,
    carport: 1,
    lantai: 1,
    listrik: "1.300 VA",
    sertifikat: "SHM",
    unitTersisa: 11,
    totalUnit: 96,
    tahun: 2023,
    unggulan: true,
    ringkasan:
      "Hunian satu lantai siap huni dengan konsep taman hijau dan bebas banjir di Sawangan.",
    deskripsi: [
      "Harmoni Park menawarkan rumah satu lantai dengan layout efisien tanpa ruang terbuang. Ruang keluarga, dapur, dan kamar utama berorientasi ke taman belakang sehingga sirkulasi udara berjalan baik sepanjang hari.",
      "Seluruh kawasan dibangun dengan elevasi 1,8 meter di atas jalan lingkungan dan dilengkapi pompa dorong serta tangki air 1.000 liter per rumah untuk menjaga pasokan saat pemadaman listrik.",
    ],
    fasilitas: [
      "Taman komunal 3.000 m²",
      "Gerbang otomatis per cluster",
      "Pos satpam & CCTV",
      "Tempat sampah terorganisir",
      "Wi-Fi area publik",
      "Lapangan basket",
    ],
    sekitar: [
      { nama: "Tol Sawangan 2", jarak: "3,8 km", kategori: "Transportasi" },
      { nama: "Margonda Depok", jarak: "9 km", kategori: "Perbelanjaan" },
      { nama: "RS Sentra Medika", jarak: "5,2 km", kategori: "Kesehatan" },
      { nama: "UI Depok", jarak: "11 km", kategori: "Pendidikan" },
    ],
    tone: 1,
  },
  {
    slug: "the-marquee-townhouse-serpong",
    nama: "The Marquee Townhouse",
    cluster: "The Marquee",
    kota: "Tangerang Selatan",
    provinsi: "Banten",
    lokasi: "Serpong, Tangerang Selatan",
    tipe: "Townhouse",
    status: "Terbatas",
    harga: 2_450_000_000,
    cicilan: 17_800_000,
    kamarTidur: 4,
    kamarMandi: 4,
    luasTanah: 105,
    luasBangunan: 180,
    carport: 2,
    lantai: 3,
    listrik: "3.300 VA",
    sertifikat: "SHM",
    unitTersisa: 3,
    totalUnit: 62,
    tahun: 2025,
    unggulan: true,
    ringkasan:
      "Townhouse tiga lantai premium dengan rooftop dan smart home system, hanya 3 unit tersisa.",
    deskripsi: [
      "The Marquee dirancang untuk keluarga urban yang membutuhkan ruang kerja dan ruang keluarga dalam satu bangunan. Lantai tiga difungsikan sebagai ruang serba guna sekaligus akses rooftop dengan dek kayu.",
      "Setiap unit dilengkapi smart home system yang mengatur lampu, kunci pintu, dan kamera keamanan melalui aplikasi. Struktur menggunakan rangka baja ringan dan beton pracetak sehingga bobot bangunan lebih ringan dan stabil terhadap getaran.",
    ],
    fasilitas: [
      "Rooftop deck pribadi",
      "Smart home & digital lock",
      "Kolam renang infinity",
      "Sky lounge",
      "Gym & function room",
      "Lift kendaraan tamu",
      "Pengelolaan sampah terpusat",
    ],
    sekitar: [
      { nama: "Tol Serpong – BSD", jarak: "2,4 km", kategori: "Transportasi" },
      { nama: "AEON Mall BSD", jarak: "6 km", kategori: "Perbelanjaan" },
      { nama: "RS Bethsaida", jarak: "3,1 km", kategori: "Kesehatan" },
      { nama: "Stasiun Rawa Buntu", jarak: "4,6 km", kategori: "Transportasi" },
      { nama: "Universitas Prasetiya Mulya", jarak: "5,5 km", kategori: "Pendidikan" },
    ],
    tone: 2,
  },
  {
    slug: "graha-asri-bogor",
    nama: "Graha Asri Bogor",
    cluster: "Cluster Angsana",
    kota: "Bogor",
    provinsi: "Jawa Barat",
    lokasi: "Cibinong, Bogor",
    tipe: "Rumah Tapak",
    status: "Indent",
    harga: 720_000_000,
    hargaCoret: 785_000_000,
    cicilan: 5_200_000,
    kamarTidur: 3,
    kamarMandi: 2,
    luasTanah: 84,
    luasBangunan: 70,
    carport: 1,
    lantai: 1,
    listrik: "1.300 VA",
    sertifikat: "SHM",
    unitTersisa: 18,
    totalUnit: 210,
    tahun: 2026,
    unggulan: true,
    ringkasan:
      "Rumah udara sejuk Bogor dengan harga di bawah Rp 750 juta dan skema KPR berbantuan.",
    deskripsi: [
      "Graha Asri memanfaatkan kontur lahan Bogor untuk menempatkan taman di sisi barat setiap unit, sehingga ruang keluarga tetap sejuk tanpa perlu pendingin tambahan pada siang hari.",
      "Bekerja sama dengan tiga bank penyalur KPR, pembeli mendapatkan bantuan proses pengajuan tanpa biaya provisi dan booking fee yang dikembalikan penuh bila pengajuan tidak disetujui.",
    ],
    fasilitas: [
      "Taman tematik 5 zona",
      "Kolam ikan bersama",
      "Keamanan 24 jam",
      "Jogging track",
      "Pedestrian bebas kendaraan",
      "Pos kesehatan warga",
    ],
    sekitar: [
      { nama: "Tol Cibinong", jarak: "5,4 km", kategori: "Transportasi" },
      { nama: "Stasiun Cibinong", jarak: "4,1 km", kategori: "Transportasi" },
      { nama: "RS Anna Medika", jarak: "3,6 km", kategori: "Kesehatan" },
      { nama: "Bogor Square", jarak: "7,8 km", kategori: "Perbelanjaan" },
    ],
    tone: 3,
  },
  {
    slug: "pesona-anjasmoro-surabaya",
    nama: "Pesona Anjasmoro",
    cluster: "Cluster Wijaya Kusuma",
    kota: "Surabaya",
    provinsi: "Jawa Timur",
    lokasi: "Menganti, Surabaya",
    tipe: "Rumah 2 Lantai",
    status: "Nup",
    harga: 1_650_000_000,
    cicilan: 12_100_000,
    kamarTidur: 4,
    kamarMandi: 3,
    luasTanah: 130,
    luasBangunan: 160,
    carport: 2,
    lantai: 2,
    listrik: "2.200 VA",
    sertifikat: "SHM",
    unitTersisa: 9,
    totalUnit: 88,
    tahun: 2026,
    unggulan: false,
    ringkasan:
      "Hunian dua lantai di koridor timur Surabaya dengan akses langsung ke ring road.",
    deskripsi: [
      "Pesona Anjasmoro berada di jalur pengembangan timur Surabaya, dekat kawasan industri dan pergudangan sehingga cocok bagi keluarga dengan aktivitas kerja di sisi timur kota.",
      "Denah standar menyediakan kamar pembantu dan dapur kering terpisah, sementara kamar utama di lantai dua memiliki walk-in closet dan balkon menghadap taman cluster.",
    ],
    fasilitas: [
      "Kolam renang dewasa & anak",
      "Club house serbaguna",
      "Keamanan 24 jam & CCTV",
      "Pedestrian dan gazebo",
      "Taman bermain",
      "Bank sampah warga",
    ],
    sekitar: [
      { nama: "Ring Road Timur", jarak: "3,2 km", kategori: "Transportasi" },
      { nama: "RS Premier Surabaya", jarak: "9 km", kategori: "Kesehatan" },
      { nama: "Galaxy Mall", jarak: "11 km", kategori: "Perbelanjaan" },
      { nama: "Universitas Airlangga Kampus C", jarak: "8,4 km", kategori: "Pendidikan" },
    ],
    tone: 4,
  },
  {
    slug: "bhumi-asri-subsidi-majalengka",
    nama: "Bhumi Asri Subsidi",
    cluster: "Cluster Melati",
    kota: "Majalengka",
    provinsi: "Jawa Barat",
    lokasi: "Majalengka, Jawa Barat",
    tipe: "Rumah Subsidi",
    status: "Siap Huni",
    harga: 185_000_000,
    cicilan: 1_050_000,
    kamarTidur: 2,
    kamarMandi: 1,
    luasTanah: 72,
    luasBangunan: 36,
    carport: 1,
    lantai: 1,
    listrik: "900 VA",
    sertifikat: "SHM",
    unitTersisa: 24,
    totalUnit: 400,
    tahun: 2024,
    unggulan: false,
    ringkasan:
      "Rumah subsidi FLPP dengan cicilan mulai Rp 1 juta, cocok untuk pembeli rumah pertama.",
    deskripsi: [
      "Bhumi Asri disediakan melalui skema Fasilitas Likuiditas Pembiayaan Perumahan (FLPP) sehingga harga jual terkunci dan cicilan tetap sepanjang tenor untuk pembeli yang memenuhi syarat penghasilan.",
      "Kawasan dilengkapi drainase tertutup, jalan beton 6 meter, dan jaringan air bersih dari PDAM sehingga penghuni tidak perlu membuat sumur bor sendiri.",
    ],
    fasilitas: [
      "Jalan beton 6 m",
      "Drainase tertutup",
      "Penerangan jalan umum",
      "Taman lingkungan",
      "Akses PDAM",
      "Pos ronda bersama",
    ],
    sekitar: [
      { nama: "Bandara Kertajati", jarak: "18 km", kategori: "Transportasi" },
      { nama: "Tol Cikampek – Palimanan", jarak: "6,5 km", kategori: "Transportasi" },
      { nama: "RSUD Majalengka", jarak: "4,3 km", kategori: "Kesehatan" },
      { nama: "Alun-alun Majalengka", jarak: "5 km", kategori: "Rekreasi" },
    ],
    tone: 5,
  },
  {
    slug: "villa-bukit-dago-bandung",
    nama: "Villa Bukit Dago",
    cluster: "Bukit Dago Estate",
    kota: "Bandung",
    provinsi: "Jawa Barat",
    lokasi: "Dago, Bandung",
    tipe: "Villa",
    status: "Indent",
    harga: 3_850_000_000,
    cicilan: 28_500_000,
    kamarTidur: 5,
    kamarMandi: 5,
    luasTanah: 300,
    luasBangunan: 290,
    carport: 3,
    lantai: 2,
    listrik: "4.400 VA",
    sertifikat: "SHM",
    unitTersisa: 2,
    totalUnit: 24,
    tahun: 2026,
    unggulan: true,
    ringkasan:
      "Villa view kota Bandung dengan lahan luas, kolam renang pribadi, dan desain tropis modern.",
    deskripsi: [
      "Villa Bukit Dago menyediakan 24 unit dengan orientasi menghadap lembah sehingga penghuni dapat menikmati panorama kota Bandung dari teras dan balkon utama setiap sore.",
      "Setiap villa memiliki kolam renang pribadi, taman tropis, dan area carport tiga kendaraan. Pembangunan dikerjakan dengan finishing batu alam lokal serta kusen kayu jati solid pada area utama.",
    ],
    fasilitas: [
      "Kolam renang pribadi",
      "Taman tropis 120 m²",
      "Smart lighting",
      "Area BBQ",
      "Gudang & ruang pembantu",
      "Keamanan per villa",
    ],
    sekitar: [
      { nama: "Dago Pakar", jarak: "1,8 km", kategori: "Rekreasi" },
      { nama: "ITB Ganesha", jarak: "5,5 km", kategori: "Pendidikan" },
      { nama: "RS Hasan Sadikin", jarak: "6,8 km", kategori: "Kesehatan" },
      { nama: "Paris Van Java", jarak: "4,9 km", kategori: "Perbelanjaan" },
    ],
    tone: 0,
  },
  {
    slug: "nusa-indah-karawang",
    nama: "Nusa Indah Karawang",
    cluster: "Cluster Kenanga",
    kota: "Karawang",
    provinsi: "Jawa Barat",
    lokasi: "Klari, Karawang",
    tipe: "Rumah Tapak",
    status: "Siap Huni",
    harga: 560_000_000,
    cicilan: 4_050_000,
    kamarTidur: 3,
    kamarMandi: 2,
    luasTanah: 80,
    luasBangunan: 60,
    carport: 1,
    lantai: 1,
    listrik: "1.300 VA",
    sertifikat: "SHM",
    unitTersisa: 14,
    totalUnit: 320,
    tahun: 2023,
    unggulan: false,
    ringkasan:
      "Hunian pekerja kawasan industri Karawang dengan akses tol Klari 5 menit.",
    deskripsi: [
      "Nusa Indah Karawang dibangun untuk memenuhi kebutuhan hunian pekerja di koridor industri Karawang. Jarak ke sejumlah kawasan industri utama berada dalam rentang 5 hingga 12 kilometer.",
      "Kawasan memiliki fasilitas antar-jemput pagi menuju titik penjemputan karyawan serta minimarket dan layanan laundry di area komersial depan.",
    ],
    fasilitas: [
      "Area komersial depan",
      "Shuttle pagi karyawan",
      "Keamanan 24 jam",
      "Lapangan futsal",
      "Masjid lingkungan",
      "Taman bermain",
    ],
    sekitar: [
      { nama: "Tol Klari", jarak: "2,1 km", kategori: "Transportasi" },
      { nama: "Kawasan Industri KIIC", jarak: "7,4 km", kategori: "Industri" },
      { nama: "RS Rosela", jarak: "3,9 km", kategori: "Kesehatan" },
      { nama: "Stasiun Karawang", jarak: "8,2 km", kategori: "Transportasi" },
    ],
    tone: 2,
  },
];

export const semuaKota = Array.from(new Set(daftarProperti.map((p) => p.kota))).sort();

export const semuaTipe = Array.from(new Set(daftarProperti.map((p) => p.tipe)));

export const daftarStatus = ["Siap Huni", "Indent", "Nup", "Terbatas", "Sold Out"];

export function getProperti(slug: string): Properti | undefined {
  return daftarProperti.find((p) => p.slug === slug);
}

export function propertiUnggulan(): Properti[] {
  return daftarProperti.filter((p) => p.unggulan);
}

export function propertiTerkait(slug: string, jumlah = 3): Properti[] {
  const asal = getProperti(slug);
  if (!asal) return daftarProperti.slice(0, jumlah);

  return daftarProperti
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const skorKota = p.kota === asal.kota ? -1000 : 0;
      const skorHarga = Math.abs(p.harga - asal.harga) / 1_000_000;
      const skorTipe = p.tipe === asal.tipe ? -100 : 0;
      return { p, skor: skorKota + skorTipe + skorHarga };
    })
    .sort((a, b) => a.skor - b.skor)
    .slice(0, jumlah)
    .map((x) => x.p);
}

export function rentangHarga(): { min: number; max: number } {
  const harga = daftarProperti.map((p) => p.harga);
  return { min: Math.min(...harga), max: Math.max(...harga) };
}
