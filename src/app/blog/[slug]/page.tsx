import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyImage } from "@/components/PropertyImage";
import { ArticleCard } from "@/components/ArticleCard";
import { CtaBanner } from "@/components/CtaBanner";
import { artikelTerkait, daftarArtikel, getArtikel } from "@/data/posts";
import { site } from "@/data/site";
import { formatTanggal } from "@/lib/format";
import { IkonCek, IkonJam } from "@/components/Ikon";

export function generateStaticParams() {
  return daftarArtikel.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) return { title: "Artikel tidak ditemukan" };
  return {
    title: a.judul,
    description: a.ringkasan,
  };
}

export default async function DetailArtikel({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArtikel(slug);
  if (!a) notFound();

  const terkait = artikelTerkait(slug, 3);

  return (
    <>
      <section className="pt-10">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-500">
            <Link href="/" className="hover:text-ink-900">
              Beranda
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <Link href="/blog" className="hover:text-ink-900">
              Artikel
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <span className="font-semibold text-ink-900">{a.kategori}</span>
          </nav>

          <div className="mx-auto mt-8 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
              {a.kategori}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink-950 sm:text-4xl">
              {a.judul}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">{a.ringkasan}</p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-ink-100 py-5 text-sm text-ink-500">
              <span className="inline-flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-ink-950 text-xs font-semibold text-gold-300">
                  {a.penulis
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span>
                  <span className="block font-semibold text-ink-900">{a.penulis}</span>
                  <span className="block text-xs">{a.jabatan}</span>
                </span>
              </span>
              <span>{formatTanggal(a.tanggal)}</span>
              <span className="inline-flex items-center gap-1.5">
                <IkonJam className="size-3.5" />
                {a.waktuBaca} menit baca
              </span>
            </div>
          </div>

          <div className="mx-auto mt-9 max-w-4xl overflow-hidden rounded-3xl">
            <PropertyImage
              seed={a.slug}
              tone={a.tone}
              label={a.judul}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <article className="mx-auto max-w-3xl">
            {a.isi.map((blok, i) => {
              if (blok.tipe === "subjudul") {
                return (
                  <h2
                    key={i}
                    className="mt-10 text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl"
                  >
                    {blok.teks as string}
                  </h2>
                );
              }
              if (blok.tipe === "poin") {
                return (
                  <ul key={i} className="mt-5 space-y-3">
                    {(blok.teks as string[]).map((t) => (
                      <li key={t} className="flex gap-3 text-base leading-relaxed text-ink-700">
                        <IkonCek className="mt-1 size-4 shrink-0 text-gold-600" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="mt-5 text-base leading-relaxed text-ink-700">
                  {blok.teks as string}
                </p>
              );
            })}

            <div className="mt-12 rounded-2xl border border-gold-200 bg-gold-50 p-6">
              <p className="text-sm font-semibold text-gold-900">
                Butuh pendampingan sesuai situasi Anda?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gold-800">
                Tim pemasaran {site.nama} dapat membantu menghitung simulasi KPR dan memeriksa
                kelengkapan berkas sebelum Anda mengajukan kredit.
              </p>
              <Link
                href="/kontak"
                className="mt-5 inline-flex rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
              >
                Hubungi tim kami
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-ink-50/70 py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            Artikel terkait
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {terkait.map((t) => (
              <ArticleCard key={t.slug} artikel={t} />
            ))}
          </div>
        </div>
      </section>

      <div className="pb-16 pt-16 sm:pb-20">
        <CtaBanner />
      </div>
    </>
  );
}
