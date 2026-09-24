import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { PropertyImage } from "@/components/PropertyImage";
import { CtaBanner } from "@/components/CtaBanner";
import { artikelUrut, daftarArtikel, kategoriArtikel } from "@/data/posts";
import { formatTanggal } from "@/lib/format";
import { IkonJam, IkonPanah } from "@/components/Ikon";

export const metadata: Metadata = {
  title: "Artikel & Panduan Properti",
  description:
    "Panduan membeli rumah, simulasi KPR, tips investasi properti, dan wawasan desain interior dari tim Aulia Land.",
};

export default async function HalamanBlog({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }>;
}) {
  const { kategori } = await searchParams;
  const semua = artikelUrut();
  const utama = semua[0];
  const aktif = kategori && kategoriArtikel.includes(kategori) ? kategori : "";

  const daftar = (aktif ? semua.filter((a) => a.kategori === aktif) : semua).filter(
    (a) => a.slug !== utama.slug || aktif
  );

  return (
    <>
      <section className="border-b border-ink-100 bg-ink-950 pb-14 pt-14 sm:pt-16">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.14em] text-ink-400">
            <Link href="/" className="transition hover:text-gold-400">
              Beranda
            </Link>
            <span className="px-2">/</span>
            <span className="text-gold-400">Artikel</span>
          </nav>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Wawasan sebelum Anda membeli rumah
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-300">
            Kami merangkum pengalaman lapangan tim pemasaran, analis, dan site manager menjadi
            panduan yang mudah dipraktikkan sebelum mengambil keputusan.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="container-page">
          {/* ARTIKEL UTAMA */}
          <Link
            href={`/blog/${utama.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-ink-100 bg-white lg:grid-cols-2"
          >
            <div className="relative min-h-64 overflow-hidden">
              <PropertyImage
                seed={utama.slug}
                tone={utama.tone}
                label={utama.kategori}
                className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-950">
                Artikel pilihan
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                {utama.kategori}
              </span>
              <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink-950 sm:text-3xl">
                {utama.judul}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">{utama.ringkasan}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-500">
                <span>
                  {utama.penulis} · {utama.jabatan}
                </span>
                <span>{formatTanggal(utama.tanggal)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <IkonJam className="size-3.5" />
                  {utama.waktuBaca} menit baca
                </span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition group-hover:text-gold-600">
                Baca selengkapnya
                <IkonPanah className="size-4" />
              </span>
            </div>
          </Link>

          {/* FILTER KATEGORI */}
          <div className="mt-12 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Kategori
            </span>
            <Link
              href="/blog"
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                aktif === ""
                  ? "border-ink-950 bg-ink-950 text-white"
                  : "border-ink-200 text-ink-600 hover:border-ink-400"
              }`}
            >
              Semua
            </Link>
            {kategoriArtikel.map((k) => (
              <Link
                key={k}
                href={`/blog?kategori=${encodeURIComponent(k)}`}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  aktif === k
                    ? "border-ink-950 bg-ink-950 text-white"
                    : "border-ink-200 text-ink-600 hover:border-ink-400"
                }`}
              >
                {k}
              </Link>
            ))}
          </div>

          {/* DAFTAR ARTIKEL */}
          {daftar.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {daftar.map((a) => (
                <ArticleCard key={a.slug} artikel={a} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-dashed border-ink-200 bg-ink-50/60 p-10 text-center text-sm text-ink-600">
              Belum ada artikel pada kategori ini. Silakan pilih kategori lain.
            </p>
          )}

          <p className="mt-10 text-sm text-ink-500">
            Total {daftarArtikel.length} artikel dalam {kategoriArtikel.length} kategori.
          </p>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CtaBanner
          judul="Punya pertanyaan yang belum terjawab di artikel?"
          deskripsi="Tim kami siap menjelaskan detail teknis, legalitas, maupun simulasi pembiayaan sesuai situasi Anda."
        />
      </div>
    </>
  );
}
