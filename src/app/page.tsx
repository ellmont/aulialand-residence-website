import Link from "next/link";
import { SearchHero } from "@/components/SearchHero";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyImage } from "@/components/PropertyImage";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBanner } from "@/components/CtaBanner";
import { JudulSeksi, Seksi, Label } from "@/components/Ui";
import { IkonCek, IkonPanah } from "@/components/Ikon";
import { petaIkon } from "@/components/Ikon";
import { keunggulan, statistik, site } from "@/data/site";
import { daftarProperti, propertiUnggulan } from "@/data/properties";
import { artikelUrut } from "@/data/posts";
import { daftarTestimoni } from "@/data/testimonials";
import { formatAngka } from "@/lib/format";

const LANGKAH = [
  {
    nomor: "01",
    judul: "Pilih unit & lokasi",
    isi: "Bandingkan cluster, tipe bangunan, dan skema harga langsung dari halaman properti kami.",
  },
  {
    nomor: "02",
    judul: "Simulasi KPR",
    isi: "Tim kami menghitung angsuran, uang muka, dan biaya lain agar sesuai kemampuan Anda.",
  },
  {
    nomor: "03",
    judul: "Survei lokasi",
    isi: "Kunjungi rumah contoh dan periksa langsung lingkungan, fasilitas, serta akses jalan.",
  },
  {
    nomor: "04",
    judul: "Akad & serah terima",
    isi: "Pendampingan berkas, inspeksi bersama, dan serah terima kunci dengan masa retensi.",
  },
];

export default function Beranda() {
  const unggulan = propertiUnggulan().slice(0, 3);
  const terbaru = [...daftarProperti].sort((a, b) => b.tahun - a.tahun).slice(0, 3);
  const artikel = artikelUrut().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="absolute inset-0 -z-10">
          <PropertyImage
            seed="aulia-land-hero"
            tone={0}
            label="Kawasan perumahan Aulia Land"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/70" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
        </div>

        <div className="container-page">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 backdrop-blur">
              <span className="size-1.5 rounded-full bg-gold-400" />
              Dipercaya sejak {site.tahunBerdiri}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hunian modern untuk keluarga yang tumbuh bersama
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
              {site.nama} membangun cluster hunian dengan legalitas lengkap, lokasi strategis, dan
              kualitas bangunan berstandar SNI di {formatAngka(daftarProperti.length)}              kawasan pilihan di Jabodetabek, Bandung, Surabaya, dan Majalengka.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200">
              {["SHM pecah per unit", "Garansi struktur 5 tahun", "Bantuan proses KPR"].map((x) => (
                <li key={x} className="inline-flex items-center gap-2">
                  <IkonCek className="size-4 text-gold-400" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 max-w-5xl">
            <SearchHero />
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 lg:grid-cols-4">
            {statistik.map((s) => (
              <div key={s.label}>
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {s.label}
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {s.nilai}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <Seksi>
        <JudulSeksi
          label="Mengapa Aulia Land"
          judul="Empat komitmen yang kami pegang di setiap proyek"
          deskripsi="Kami membangun dengan standar yang sama di setiap cluster, dari rumah subsidi hingga villa, karena keputusan membeli rumah adalah keputusan jangka panjang."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keunggulan.map((k) => {
            const Ikon = petaIkon[k.ikon];
            return (
              <div
                key={k.judul}
                className="rounded-2xl border border-ink-100 bg-white p-6 transition hover:border-ink-200 hover:shadow-[0_18px_40px_-28px_rgba(15,22,32,0.4)]"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink-950 text-gold-400">
                  <Ikon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-950">{k.judul}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{k.isi}</p>
              </div>
            );
          })}
        </div>
      </Seksi>

      {/* PRODUK UNGGULAN */}
      <Seksi className="bg-ink-50/70">
        <JudulSeksi
          label="Proyek unggulan"
          judul="Cluster pilihan dengan permintaan tertinggi"
          deskripsi="Unit pada cluster berikut paling cepat terserap karena lokasi dan harga yang seimbang."
          aksi={{ href: "/properti", teks: "Lihat semua properti" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {unggulan.map((p) => (
            <PropertyCard key={p.slug} properti={p} prioritas />
          ))}
        </div>
      </Seksi>

      {/* PROSES */}
      <Seksi>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <Label>Proses pembelian</Label>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
              Empat langkah, tim kami mendampingi sampai kunci diserahkan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              Kami menyediakan satu narahubung untuk setiap pembeli agar proses administrasi,
              simulasi kredit, dan jadwal survei berjalan tanpa kebingungan.
            </p>
            <Link
              href="/kontak"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Mulai konsultasi
              <IkonPanah className="size-4" />
            </Link>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {LANGKAH.map((l) => (
              <li key={l.nomor} className="rounded-2xl border border-ink-100 bg-white p-6">
                <span className="text-sm font-semibold text-gold-600">{l.nomor}</span>
                <h3 className="mt-3 text-base font-semibold text-ink-950">{l.judul}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{l.isi}</p>
              </li>
            ))}
          </ol>
        </div>
      </Seksi>

      {/* LISTING TERBARU */}
      <Seksi className="bg-ink-50/70">
        <JudulSeksi
          label="Rilis terbaru"
          judul="Sedang dipasarkan bulan ini"
          deskripsi="Stok unit dapat berubah setiap saat. Hubungi tim pemasaran untuk ketersediaan terkini."
          aksi={{ href: "/properti", teks: "Buka katalog lengkap" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {terbaru.map((p) => (
            <PropertyCard key={p.slug} properti={p} />
          ))}
        </div>
      </Seksi>

      {/* TESTIMONI */}
      <Seksi>
        <JudulSeksi
          align="center"
          label="Kata penghuni"
          judul="Dipercaya lebih dari 6.500 keluarga"
          deskripsi="Cerita dari penghuni yang telah menempati unit di cluster kami."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {daftarTestimoni.slice(0, 3).map((t) => (
            <TestimonialCard key={t.nama} testimoni={t} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/tentang"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-gold-600"
          >
            Baca kisah lengkapnya di halaman Tentang Kami
            <IkonPanah className="size-4" />
          </Link>
        </div>
      </Seksi>

      {/* ARTIKEL */}
      <Seksi className="bg-ink-50/70">
        <JudulSeksi
          label="Wawasan properti"
          judul="Artikel untuk membantu keputusan Anda"
          deskripsi="Panduan praktis seputar pembelian rumah, KPR, legalitas, hingga desain interior."
          aksi={{ href: "/blog", teks: "Semua artikel" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artikel.map((a) => (
            <ArticleCard key={a.slug} artikel={a} />
          ))}
        </div>
      </Seksi>

      <div className="pb-16 sm:pb-20">
        <CtaBanner />
      </div>
    </>
  );
}
