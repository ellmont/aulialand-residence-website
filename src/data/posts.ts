export type Artikel = {
  slug: string;
  judul: string;
  kategori: string;
  ringkasan: string;
  tanggal: string;
  penulis: string;
  jabatan: string;
  waktuBaca: number;
  tone: number;
  unggulan?: boolean;
  isi: { tipe: "paragraf" | "subjudul" | "poin"; teks: string | string[] }[];
};

export const daftarArtikel: Artikel[] = [
  {
    slug: "panduan-lengkap-membeli-rumah-pertama",
    judul: "Panduan Lengkap Membeli Rumah Pertama untuk Keluarga Muda",
    kategori: "Panduan Pembeli",
    ringkasan:
      "Langkah demi langkah menyiapkan dana, menilai kemampuan cicilan, sampai memeriksa legalitas sebelum tanda tangan akad kredit.",
    tanggal: "2026-08-18",
    penulis: "Rahmat Hidayat",
    jabatan: "Head of Sales",
    waktuBaca: 9,
    tone: 0,
    unggulan: true,
    isi: [
      {
        tipe: "paragraf",
        teks: "Membeli rumah pertama sering terasa rumit karena melibatkan banyak pihak sekaligus: pengembang, bank, notaris, hingga kantor pertanahan. Kabar baiknya, seluruh proses itu bisa dipetakan menjadi enam tahap yang jelas.",
      },
      { tipe: "subjudul", teks: "1. Hitung kemampuan cicilan, bukan hanya harga rumah" },
      {
        tipe: "paragraf",
        teks: "Aturan umum yang dipakai bank adalah cicilan tidak melebihi 30 persen dari penghasilan bulanan bersih. Jika penghasilan gabungan pasangan Rp 20 juta per bulan, cicilan yang aman berada di kisaran Rp 6 juta. Angka ini sudah memperhitungkan biaya listrik, air, dan iuran lingkungan.",
      },
      { tipe: "subjudul", teks: "2. Siapkan dana di luar harga rumah" },
      {
        tipe: "poin",
        teks: [
          "Uang muka minimal 10–20 persen dari harga rumah.",
          "Biaya administrasi bank, provisi, dan asuransi sekitar 3–5 persen.",
          "Bea perolehan hak atas tanah (BPHTB) dan biaya notaris.",
          "Dana cadangan sebesar 3 bulan cicilan untuk keadaan darurat.",
          "Biaya renovasi ringan atau pengadaan perabot awal.",
        ],
      },
      { tipe: "subjudul", teks: "3. Periksa legalitas sebelum membayar apa pun" },
      {
        tipe: "paragraf",
        teks: "Pastikan sertifikat tanah sesuai dengan lokasi fisik, nomor induk berusaha pengembang aktif, dan izin bangunan tersedia. Untuk rumah dari pengembang, Anda berhak meminta salinan sertifikat induk sebelum melakukan pembayaran booking fee.",
      },
      { tipe: "subjudul", teks: "4. Sesuaikan unit dengan rencana keluarga lima tahun" },
      {
        tipe: "paragraf",
        teks: "Pilih jumlah kamar berdasarkan proyeksi jangka menengah, bukan hanya kebutuhan hari ini. Keluarga muda yang merencanakan dua anak umumnya lebih nyaman dengan tiga kamar tidur dan satu ruang serba guna.",
      },
      { tipe: "subjudul", teks: "5. Bandingkan skema pembayaran" },
      {
        tipe: "paragraf",
        teks: "Pembelian tunas keras biasanya memberikan diskon terbesar, disusul tunas bertahap 12–24 bulan. KPR bank memberi fleksibilitas dana, namun perhatikan biaya provisi, asuransi jiwa, dan penalti pelunasan dipercepat.",
      },
      { tipe: "subjudul", teks: "6. Lakukan inspeksi sebelum serah terima" },
      {
        tipe: "paragraf",
        teks: "Gunakan daftar periksa saat menerima kunci: uji semua keran dan saluran air, periksa kusen dan plafon terhadap rembesan, tes kelistrikan, dan pastikan elevasi lantai terhadap jalan sekitar. Laporkan temuan dalam berita acara agar masuk masa retensi.",
      },
      {
        tipe: "paragraf",
        teks: "Dengan enam tahap ini, pembelian rumah pertama menjadi keputusan yang terukur dan jauh lebih tenang.",
      },
    ],
  },
  {
    slug: "cara-menghitung-cicilan-kpr-yang-aman",
    judul: "Cara Menghitung Cicilan KPR yang Aman dan Tidak Menguras Tabungan",
    kategori: "KPR & Pembiayaan",
    ringkasan:
      "Memahami bunga fixed, floating, dan capped agar Anda tidak kaget saat cicilan naik setelah masa promo berakhir.",
    tanggal: "2026-08-04",
    penulis: "Dita Permata",
    jabatan: "Relationship Manager KPR",
    waktuBaca: 7,
    tone: 1,
    unggulan: true,
    isi: [
      {
        tipe: "paragraf",
        teks: "Banyak pembeli rumah terjebak pada angka cicilan tahun pertama yang terlihat ringan, lalu terkejut ketika suku bunga berubah di tahun ketiga. Membaca struktur suku bunga sejak awal adalah kunci.",
      },
      { tipe: "subjudul", teks: "Kenali tiga jenis suku bunga" },
      {
        tipe: "poin",
        teks: [
          "Fixed: suku bunga tetap sepanjang tenor. Cicilan paling dapat diprediksi.",
          "Floating: mengikuti suku bunga acuan pasar dan bisa naik atau turun.",
          "Capped: dibatasi pada persentase tertentu, memberi batas atas yang jelas.",
        ],
      },
      { tipe: "subjudul", teks: "Hitung skenario terburuk, bukan terbaik" },
      {
        tipe: "paragraf",
        teks: "Bila mengambil skema fixed dua tahun lalu floating, hitung ulang cicilan pada skenario bunga naik dua persen. Jika skenario tersebut masih berada di bawah 35 persen penghasilan, keputusan Anda relatif aman.",
      },
      { tipe: "subjudul", teks: "Manfaatkan perbandingan tenor" },
      {
        tipe: "paragraf",
        teks: "Memperpanjang tenor menurunkan cicilan bulanan namun menaikkan total bunga secara signifikan. Untuk tenor 20 tahun dengan bunga 8 persen, total bunga bisa mencapai 96 persen dari pokok pinjaman. Pertimbangkan pelunasan sebagian berjadwal bila kondisi keuangan membaik.",
      },
    ],
  },
  {
    slug: "memilih-lokasi-rumah-nilai-investasi",
    judul: "Memilih Lokasi Rumah yang Tumbuh dari Sisi Nilai Investasi",
    kategori: "Investasi Properti",
    ringkasan:
      "Lima indikator kawasan yang biasanya mendahului kenaikan harga: akses tol, sekolah, rumah sakit, pusat belanja, dan rencana tata ruang.",
    tanggal: "2026-07-22",
    penulis: "Bimo Saputra",
    jabatan: "Analis Properti",
    waktuBaca: 8,
    tone: 2,
    isi: [
      {
        tipe: "paragraf",
        teks: "Harga properti mengikuti infrastruktur dengan jeda sekitar dua sampai tiga tahun. Artinya, kawasan yang tahun ini sedang membangun akses baru cenderung mencatat kenaikan harga pada tahun-tahun berikutnya.",
      },
      { tipe: "subjudul", teks: "Indikator yang paling sering bekerja" },
      {
        tipe: "poin",
        teks: [
          "Rencana pembangunan jalan tol atau pembangunan akses yang sudah berjalan.",
          "Kehadiran sekolah dan kampus swasta dengan daya tampung besar.",
          "Rumah sakit kelas B atau lebih yang beroperasi di radius 5 kilometer.",
          "Pusat perbelanjaan dengan penyewa nasional yang stabil.",
          "Rencana tata ruang daerah yang mengizinkan area hunian dalam jangka panjang.",
        ],
      },
      { tipe: "subjudul", teks: "Hindari tiga tanda bahaya ini" },
      {
        tipe: "paragraf",
        teks: "Kawasan yang sepenuhnya bergantung pada satu akses tunggal, wilayah dengan riwayat banjir berulang, dan lahan bekas industri tanpa sertifikat pembersihan lingkungan sebaiknya dihindari sebagai tempat tinggal keluarga.",
      },
      {
        tipe: "paragraf",
        teks: "Program pembangunan rumah memang menyentuh semua wilayah, namun secara pengalaman, kawasan dengan infrastruktur yang sudah berjalan cenderung menghadapi risiko lebih rendah.",
      },
    ],
  },
  {
    slug: "checklist-inspeksi-rumah-sebelum-serah-terima",
    judul: "Checklist Inspeksi Rumah Sebelum Serah Terima: Jangan Lewatkan 20 Titik Ini",
    kategori: "Serah Terima",
    ringkasan:
      "Daftar periksa praktis yang bisa Anda bawa saat menerima kunci agar temuan tercatat resmi dan diperbaiki pengembang.",
    tanggal: "2026-07-09",
    penulis: "Sari Wulandari",
    jabatan: "Site Manager",
    waktuBaca: 6,
    tone: 3,
    isi: [
      {
        tipe: "paragraf",
        teks: "Serah terima adalah momen paling penting dalam pembelian rumah. Sebagian besar keluhan penghuni sebenarnya bisa diselesaikan saat proses ini bila temuan dicatat dengan baik.",
      },
      { tipe: "subjudul", teks: "Persiapan sebelum hari inspeksi" },
      {
        tipe: "poin",
        teks: [
          "Bawa meteran laser atau meteran gulung untuk memverifikasi dimensi ruang.",
          "Siapkan senter untuk memeriksa sudut langit-langit dan plafon.",
          "Bawa buku catatan dan kamera untuk dokumentasi temuan.",
          "Cetak denah unit agar dapat menandai area yang bermasalah.",
        ],
      },
      { tipe: "subjudul", teks: "Area yang paling sering bermasalah" },
      {
        tipe: "poin",
        teks: [
          "Kemiringan lantai kamar mandi dan arah aliran air menuju saluran.",
          "Rembesan pada dinding yang berbatasan langsung dengan area basah.",
          "Kualitas kusen jendela, kelancaran buka-tutup, dan kerapatan segel.",
          "Fungsi seluruh titik listrik dan kestabilan stop kontak.",
          "Pintu utama, kunci, dan engsel yang harus dapat menutup rapat.",
        ],
      },
      {
        tipe: "paragraf",
        teks: "Semua temuan sebaiknya dituangkan ke berita acara inspeksi. Pengembang biasanya memberikan masa retensi 3 sampai 12 bulan untuk perbaikan tanpa biaya.",
      },
    ],
  },
  {
    slug: "desain-interior-rumah-sempit-terasa-luas",
    judul: "Desain Interior Rumah Sempit agar Terasa Luas dan Tetap Nyaman",
    kategori: "Desain & Interior",
    ringkasan:
      "Strategi plafon tinggi, pencahayaan alami, dan pilihan warna yang dapat membuat rumah 70 m² terasa jauh lebih lapang.",
    tanggal: "2026-06-28",
    penulis: "Nadia Kusuma",
    jabatan: "Interior Designer",
    waktuBaca: 5,
    tone: 4,
    isi: [
      {
        tipe: "paragraf",
        teks: "Kesan luas lebih ditentukan oleh cara cahaya dan pandangan mata bergerak di dalam ruang, bukan semata luas lantai bangunan.",
      },
      { tipe: "subjudul", teks: "Maksimalkan tinggi ruang" },
      {
        tipe: "paragraf",
        teks: "Menghindari plafon bertingkat dan memilih warna langit-langit senada dengan dinding membuat batas atas ruang memudar sehingga ruangan terasa naik.",
      },
      { tipe: "subjudul", teks: "Perabot multifungsi dan berpola rendah" },
      {
        tipe: "poin",
        teks: [
          "Bangku makan yang bisa diselipkan ke bawah meja untuk menghemat jalur gerak.",
          "Lemari tinggi sampai plafon agar tidak ada ruang mati.",
          "Cermin besar pada dinding yang berhadapan dengan jendela.",
          "Pilihan warna dinding netral dengan satu dinding aksen.",
        ],
      },
      { tipe: "subjudul", teks: "Jaga jalur gerak minimal 80 cm" },
      {
        tipe: "paragraf",
        teks: "Area lalu lintas utama sebaiknya minimal 80 sentimeter agar dua orang dapat berpapasan dengan nyaman. Menjaga jalur gerak tetap bersih memberi efek ruang yang lebih lapang dibanding menambah perabot.",
      },
    ],
  },
  {
    slug: "tips-memilih-rumah-subsidi-untuk-keluarga-baru",
    judul: "Tips Memilih Rumah Subsidi agar Tidak Salah Pilih",
    kategori: "Rumah Subsidi",
    ringkasan:
      "Syarat penghasilan, skema FLPP, dan hal-hal yang sering diabaikan pembeli rumah bersubsidi.",
    tanggal: "2026-06-11",
    penulis: "Rahmat Hidayat",
    jabatan: "Head of Sales",
    waktuBaca: 6,
    tone: 5,
    isi: [
      {
        tipe: "paragraf",
        teks: "Rumah subsidi menjadi pintu masuk kepemilikan rumah bagi keluarga berpenghasilan menengah ke bawah. Meski harganya terkunci, kualitas kawasan tetap perlu diperiksa dengan teliti.",
      },
      { tipe: "subjudul", teks: "Pastikan Anda memenuhi syarat" },
      {
        tipe: "poin",
        teks: [
          "Penghasilan pokok dan tunjangan tidak melebihi batas yang berlaku untuk program.",
          "Belum memiliki rumah lain, dibuktikan dengan surat pernyataan dan penelusuran bank.",
          "Warga negara Indonesia dengan usia di atas 21 tahun atau sudah menikah.",
        ],
      },
      { tipe: "subjudul", teks: "Periksa infrastruktur kawasan lebih dulu" },
      {
        tipe: "paragraf",
        teks: "Kunjungi lokasi pada musim hujan bila memungkinkan, tanyakan sumber air bersih, dan pastikan akses angkutan umum tersedia. Infrastruktur yang tertunda sering menjadi keluhan utama penghuni rumah subsidi di tahun-tahun awal.",
      },
    ],
  },
];

export const kategoriArtikel = Array.from(
  new Set(daftarArtikel.map((a) => a.kategori))
).sort();

export function getArtikel(slug: string): Artikel | undefined {
  return daftarArtikel.find((a) => a.slug === slug);
}

export function artikelUnggulan(): Artikel {
  return daftarArtikel.find((a) => a.unggulan) ?? daftarArtikel[0];
}

export function artikelUrut(): Artikel[] {
  return [...daftarArtikel].sort((a, b) => (a.tanggal < b.tanggal ? 1 : -1));
}

export function artikelTerkait(slug: string, jumlah = 3): Artikel[] {
  const asal = getArtikel(slug);
  return artikelUrut()
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aSkor = a.kategori === asal?.kategori ? 0 : 1;
      const bSkor = b.kategori === asal?.kategori ? 0 : 1;
      return aSkor - bSkor;
    })
    .slice(0, jumlah);
}
