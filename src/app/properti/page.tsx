import type { Metadata } from "next";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyFilters } from "@/components/PropertyFilters";
import { CtaBanner } from "@/components/CtaBanner";
import { daftarProperti, type Properti } from "@/data/properties";
import { IkonPanah } from "@/components/Ikon";

export const metadata: Metadata = {
  title: "Katalog Properti",
  description:
    "Jelajahi seluruh unit rumah, townhouse, dan villa Aulia Land. Filter berdasarkan kota, tipe bangunan, jumlah kamar, status, dan anggaran.",
};

type Query = Record<string, string | string[] | undefined>;

function ambilSatu(nilai: string | string[] | undefined): string {
  if (Array.isArray(nilai)) return nilai[0] ?? "";
  return nilai ?? "";
}

function keAngka(nilai: string): number | null {
  const n = Number(nilai.replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

export default async function HalamanProperti({
  searchParams,
}: {
  searchParams: Promise<Query>;
}) {
  const sp = await searchParams;
  const q = ambilSatu(sp.q).trim().toLowerCase();
  const kota = ambilSatu(sp.kota);
  const tipe = ambilSatu(sp.tipe);
  const status = ambilSatu(sp.status);
  const max = keAngka(ambilSatu(sp.max));
  const minKt = keAngka(ambilSatu(sp.kt));
  const urut = ambilSatu(sp.urut) || "terbaru";

  let hasil: Properti[] = daftarProperti.filter((p) => {
    if (q) {
      const teks = `${p.nama} ${p.cluster} ${p.lokasi} ${p.kota} ${p.tipe} ${p.ringkasan}`.toLowerCase();
      if (!teks.includes(q)) return false;
    }
    if (kota && p.kota !== kota) return false;
    if (tipe && p.tipe !== tipe) return false;
    if (status && p.status !== status) return false;
    if (max !== null && p.harga > max) return false;
    if (minKt !== null && p.kamarTidur < minKt) return false;
    return true;
  });

  hasil = [...hasil].sort((a, b) => {
    if (urut === "termurah") return a.harga - b.harga;
    if (urut === "termahal") return b.harga - a.harga;
    if (urut === "luas") return b.luasTanah - a.luasTanah;
    return b.tahun - a.tahun;
  });

  return (
    <>
      <section className="border-b border-ink-100 bg-ink-950 pb-14 pt-14 sm:pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
            <Link href="/" className="transition hover:text-gold-400">
              Beranda
            </Link>
            <span className="px-2">/</span>
            <span className="text-gold-400">Properti</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Katalog properti Aulia Land
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300">
            {daftarProperti.length} unit dari {new Set(daftarProperti.map((p) => p.kota)).size} kota
            dengan status pembangunan yang selalu diperbarui. Gunakan filter untuk mempersempit
            pilihan sesuai kebutuhan keluarga Anda.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="container-page">
          <PropertyFilters total={hasil.length} />

          {hasil.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hasil.map((p) => (
                <PropertyCard key={p.slug} properti={p} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-ink-200 bg-ink-50/60 p-12 text-center">
              <h2 className="text-xl font-semibold text-ink-950">
                Tidak ada unit yang cocok dengan filter tersebut
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-600">
                Coba longgarkan anggaran atau pilih kota lain. Tim pemasaran kami juga dapat
                membantu mencarikan unit yang sesuai kebutuhan Anda.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/properti"
                  className="rounded-full border border-ink-300 px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-ink-900"
                >
                  Reset filter
                </Link>
                <Link
                  href="/kontak"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
                >
                  Konsultasi kebutuhan
                  <IkonPanah className="size-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBanner
          judul="Belum menemukan unit yang tepat?"
          deskripsi="Ceritakan kebutuhan Anda — jumlah kamar, lokasi kerja, dan anggaran. Kami akan mengarahkan ke unit yang paling sesuai."
        />
      </div>
    </>
  );
}
