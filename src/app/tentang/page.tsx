import type { Metadata } from "next";
import Link from "next/link";
import { PropertyImage } from "@/components/PropertyImage";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaBanner } from "@/components/CtaBanner";
import { JudulSeksi, Seksi, Label } from "@/components/Ui";
import { IkonCek, IkonPanah, petaIkon } from "@/components/Ikon";
import { keunggulan, site, statistik } from "@/data/site";
import { daftarTestimoni } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `${site.deskripsi} Kenali nilai, rekam jejak, dan tim di balik setiap cluster yang kami bangun.`,
};

const NILAI = [
  {
    judul: "Transparan sejak awal",
    isi: "Harga, spesifikasi, dan legalitas kami sampaikan tertulis sebelum pembeli membayar booking fee. Tidak ada biaya tersembunyi di kemudian hari.",
  },
  {
    judul: "Membangun untuk ditinggali",
    isi: "Kami menguji setiap tipe unit melalui rumah contoh yang benar-benar dihuni, sehingga kekurangan desain diketahui sebelum diproduksi massal.",
  },
  {
    judul: "Menjaga kawasan jangka panjang",
    isi: "Pengelolaan cluster kami tangani minimal sepuluh tahun setelah serah terima agar kualitas lingkungan tidak menurun setelah unit habis terjual.",
  },
];

const RIWAYAT = [
  { tahun: "2009", isi: `${site.nama} berdiri dengan proyek pertama 42 unit di Bekasi.` },
  { tahun: "2013", isi: "Memperluas wilayah ke Bogor dan Depok dengan konsep cluster berpagar." },
  { tahun: "2017", isi: "Menyerahkan unit ke-1.000 dan membentuk divisi pengelolaan kawasan." },
  { tahun: "2021", isi: "Mulai mengembangkan townhouse dan hunian vertikal di Serpong." },
  { tahun: "2026", isi: "Aktif di 8 kota dengan 24 cluster dan lebih dari 6.500 unit diserahkan." },
];

const TIM = [
  {
    nama: "Ir. Bambang Setiawan",
    jabatan: "Direktur Utama",
    isi: "19 tahun menangani perencanaan kawasan residensial di Jabodetabek.",
    inisial: "BS",
  },
  {
    nama: "Rahmat Hidayat",
    jabatan: "Head of Sales",
    isi: "Mendampingi lebih dari 3.000 transaksi KPR bersama sepuluh bank penyalur.",
    inisial: "RH",
  },
  {
    nama: "Sari Wulandari",
    jabatan: "Site Manager",
    isi: "Mengawasi mutu pelaksanaan dan proses serah terima unit di lapangan.",
    inisial: "SW",
  },
  {
    nama: "Bimo Saputra",
    jabatan: "Analis Properti",
    isi: "Menilai kelayakan lokasi dan proyeksi nilai kawasan untuk setiap akuisisi lahan.",
    inisial: "BP",
  },
];

export default function HalamanTentang() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10">
          <PropertyImage
            seed="aulia-tentang-kami"
            tone={2}
            label="Kantor pemasaran Aulia Land"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/94 to-ink-950/75" />
        </div>
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
            <Link href="/" className="transition hover:text-gold-400">
              Beranda
            </Link>
            <span className="px-2">/</span>
            <span className="text-gold-400">Tentang Kami</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Membangun rumah, membangun kepercayaan
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
            Sejak {site.tahunBerdiri}, kami fokus pada satu hal: menyerahkan hunian yang layak dan
            aman bagi keluarga Indonesia dengan proses yang jujur dan terukur.
          </p>
        </div>
      </section>

      {/* PROFIL */}
      <Seksi>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Label>Profil perusahaan</Label>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              Pengembang yang mengutamakan mutu serah terima
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              <p>{site.deskripsi}</p>
              <p>
                Kami menyadari bahwa pembelian rumah adalah keputusan finansial terbesar bagi
                sebagian besar keluarga. Karena itu kami menempatkan kepastian di depan: harga
                terkunci sejak akad, jadwal serah terima tertulis, dan masa retensi perbaikan yang
                jelas setelah kunci diserahkan.
              </p>
              <p>
                Saat ini kami mengelola {statistik[1].nilai} cluster aktif di delapan kota, dengan
                tim lapangan tetap yang menangani pemeliharaan kawasan dan membantu perhimpunan
                penghuni mengelola lingkungan.
              </p>
            </div>
            <Link
              href="/properti"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Lihat proyek kami
              <IkonPanah className="size-4" />
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {statistik.map((s) => (
              <div key={s.label} className="rounded-2xl bg-ink-50 p-6">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                  {s.label}
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-ink-950">{s.nilai}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Seksi>

      {/* NILAI */}
      <Seksi className="bg-ink-50/70">
        <JudulSeksi
          label="Nilai yang kami pegang"
          judul="Tiga prinsip yang menentukan cara kami bekerja"
          deskripsi="Prinsip ini menjadi dasar pengambilan keputusan, dari pemilihan lahan sampai pelayanan purna jual."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {NILAI.map((n, i) => (
            <div key={n.judul} className="rounded-2xl border border-ink-100 bg-white p-7">
              <span className="text-sm font-semibold text-gold-600">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink-950">{n.judul}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{n.isi}</p>
            </div>
          ))}
        </div>
      </Seksi>

      {/* KEUNGGULAN */}
      <Seksi>
        <JudulSeksi
          label="Standar kami"
          judul="Yang selalu ada di setiap proyek"
          deskripsi="Tanpa memandang harga jual unit, standar berikut berlaku sama di seluruh cluster."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keunggulan.map((k) => {
            const Ikon = petaIkon[k.ikon];
            return (
              <div key={k.judul} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                  <Ikon className="size-6" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-ink-950">{k.judul}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{k.isi}</p>
              </div>
            );
          })}
        </div>
      </Seksi>

      {/* RIWAYAT */}
      <Seksi className="bg-ink-50/70">
        <JudulSeksi label="Rekam jejak" judul="Perjalanan kami dari 2009 hingga kini" />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {RIWAYAT.map((r) => (
            <li key={r.tahun} className="relative rounded-2xl border border-ink-100 bg-white p-6">
              <span className="text-lg font-semibold text-gold-600">{r.tahun}</span>
              <p className="mt-3 text-sm leading-relaxed text-ink-700">{r.isi}</p>
            </li>
          ))}
        </ol>
      </Seksi>

      {/* TIM */}
      <Seksi>
        <JudulSeksi
          label="Tim kami"
          judul="Orang-orang yang mendampingi Anda"
          deskripsi="Tim yang sama menangani konsultasi awal hingga serah terima kunci."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIM.map((t) => (
            <div key={t.nama} className="rounded-2xl border border-ink-100 bg-white p-6">
              <span className="inline-flex size-14 items-center justify-center rounded-full bg-ink-950 text-base font-semibold text-gold-300">
                {t.inisial}
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-950">{t.nama}</h3>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
                {t.jabatan}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{t.isi}</p>
            </div>
          ))}
        </div>
      </Seksi>

      {/* TESTIMONI */}
      <Seksi className="bg-ink-50/70" id="testimoni">
        <JudulSeksi
          align="center"
          label="Testimoni penghuni"
          judul="Cerita mereka yang sudah tinggal di cluster kami"
          deskripsi="Setiap testimoni berasal dari penghuni yang telah menempati unit lebih dari enam bulan."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarTestimoni.map((t) => (
            <TestimonialCard key={t.nama} testimoni={t} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-2xl border border-ink-100 bg-white p-7 sm:grid-cols-3">
          {[
            { nilai: "4,8/5", label: "Penilaian penghuni" },
            { nilai: "1.240", label: "Ulasan terverifikasi" },
            { nilai: "92%", label: "Merekomendasikan kami" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-ink-950">{s.nilai}</p>
              <p className="mt-1 text-sm text-ink-500">{s.label}</p>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-600">
          {["Laporan keuangan proyek diaudit tahunan", "Anggota REI", "Sertifikat SHM per unit", "Garansi struktur 5 tahun"].map(
            (x) => (
              <li key={x} className="inline-flex items-center gap-2">
                <IkonCek className="size-4 text-gold-600" />
                {x}
              </li>
            )
          )}
        </ul>
      </Seksi>

      <div className="pb-16 sm:pb-20">
        <CtaBanner
          judul="Ingin mengenal kami lebih dekat?"
          deskripsi="Kunjungi kantor pemasaran kami atau jadwalkan pertemuan dengan tim untuk membahas kebutuhan hunian Anda."
        />
      </div>
    </>
  );
}
