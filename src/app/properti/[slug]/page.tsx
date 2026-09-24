import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyImage } from "@/components/PropertyImage";
import { PropertyCard } from "@/components/PropertyCard";
import { CtaBanner } from "@/components/CtaBanner";
import { BadgeStatus } from "@/components/Ui";
import {
  IkonCek,
  IkonKasur,
  IkonLuas,
  IkonMandi,
  IkonMobil,
  IkonPanah,
  IkonPin,
  IkonRumah,
  IkonTelepon,
  IkonWhatsapp,
  IkonJam,
} from "@/components/Ikon";
import { daftarProperti, getProperti, propertiTerkait } from "@/data/properties";
import { site } from "@/data/site";
import { formatRupiah } from "@/lib/format";

export function generateStaticParams() {
  return daftarProperti.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperti(slug);
  if (!p) return { title: "Properti tidak ditemukan" };
  return {
    title: `${p.nama} — ${p.cluster}, ${p.lokasi}`,
    description: `${p.tipe} ${p.kamarTidur} kamar tidur di ${p.lokasi}. Harga mulai ${formatRupiah(p.harga)}. ${p.ringkasan}`,
  };
}

export default async function DetailProperti({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProperti(slug);
  if (!p) notFound();

  const terkait = propertiTerkait(slug, 3);
  const sisaPersen = Math.round((p.unitTersisa / p.totalUnit) * 100);
  const waNumber = site.whatsapp.replace(/[^0-9]/g, "");
  const pesanWa = encodeURIComponent(
    `Halo ${site.nama}, saya ingin informasi unit ${p.nama} (${p.cluster}, ${p.lokasi}).`
  );

  const spesifikasi = [
    { Ikon: IkonKasur, label: "Kamar tidur", nilai: `${p.kamarTidur} kamar` },
    { Ikon: IkonMandi, label: "Kamar mandi", nilai: `${p.kamarMandi} kamar` },
    { Ikon: IkonLuas, label: "Luas tanah", nilai: `${p.luasTanah} m²` },
    { Ikon: IkonRumah, label: "Luas bangunan", nilai: `${p.luasBangunan} m²` },
    { Ikon: IkonMobil, label: "Carport", nilai: `${p.carport} mobil` },
    { Ikon: IkonRumah, label: "Jumlah lantai", nilai: `${p.lantai} lantai` },
  ];

  const teknis = [
    { label: "Tipe bangunan", nilai: p.tipe },
    { label: "Sertifikat", nilai: p.sertifikat },
    { label: "Daya listrik", nilai: p.listrik },
    { label: "Total unit cluster", nilai: `${p.totalUnit} unit` },
    { label: "Tahun pembangunan", nilai: String(p.tahun) },
    { label: "Status", nilai: p.status },
  ];

  return (
    <>
      <div className="border-b border-ink-100 bg-ink-50/70 py-4">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-ink-500">
            <Link href="/" className="hover:text-ink-900">
              Beranda
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <Link href="/properti" className="hover:text-ink-900">
              Properti
            </Link>
            <span className="px-2 text-ink-300">/</span>
            <span className="font-semibold text-ink-900">{p.nama}</span>
          </nav>
        </div>
      </div>

      <section className="pt-10">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <BadgeStatus status={p.status} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
                  {p.tipe}
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                {p.nama}
              </h1>
              <p className="mt-3 flex items-center gap-2 text-sm text-ink-600">
                <IkonPin className="size-4 text-ink-400" />
                {p.cluster} · {p.lokasi} · {p.provinsi}
              </p>
            </div>
            <div className="lg:text-right">
              {p.hargaCoret ? (
                <p className="text-sm text-ink-400 line-through">{formatRupiah(p.hargaCoret)}</p>
              ) : null}
              <p className="text-3xl font-semibold tracking-tight text-ink-950">
                {formatRupiah(p.harga)}
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Cicilan mulai {formatRupiah(p.cicilan)}/bulan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container-page">
          <div className="grid gap-3 sm:grid-cols-4 sm:grid-rows-2">
            <div className="overflow-hidden rounded-2xl sm:col-span-3 sm:row-span-2">
              <PropertyImage
                seed={p.slug}
                tone={p.tone}
                label={`${p.nama} tampak depan`}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <PropertyImage
                seed={`${p.slug}-ruang-keluarga`}
                tone={(p.tone + 2) % 6}
                label={`${p.nama} ruang keluarga`}
                className="aspect-[4/3] size-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <PropertyImage
                seed={`${p.slug}-taman`}
                tone={(p.tone + 4) % 6}
                label={`${p.nama} taman cluster`}
                className="aspect-[4/3] size-full object-cover"
              />
            </div>
          </div>
          <p className="mt-3 text-xs text-ink-400">
            Ilustrasi tampilan kawasan. Kondisi aktual dapat berbeda dan tersedia dokumentasi resmi
            pada saat survei lokasi.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1.65fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
                Spesifikasi unit
              </h2>
              <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {spesifikasi.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-ink-100 bg-white p-4">
                    <s.Ikon className="size-5 text-gold-600" />
                    <dt className="mt-3 text-xs uppercase tracking-[0.12em] text-ink-500">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-ink-950">{s.nilai}</dd>
                  </div>
                ))}
              </dl>

              <dl className="mt-6 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100">
                {teknis.map((t) => (
                  <div key={t.label} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="text-sm text-ink-600">{t.label}</dt>
                    <dd className="text-sm font-semibold text-ink-950">{t.nilai}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
                Tentang unit ini
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-700">
                {p.deskripsi.map((paragraf, i) => (
                  <p key={i}>{paragraf}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
                Fasilitas cluster
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.fasilitas.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-white px-4 py-3 text-sm text-ink-800"
                  >
                    <IkonCek className="size-4 shrink-0 text-gold-600" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-950">
                Lokasi & akses sekitar
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Jarak diukur dari gerbang utama {p.cluster} melalui rute kendaraan terdekat.
              </p>
              <ul className="mt-6 divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white">
                {p.sekitar.map((s) => (
                  <li key={s.nama} className="flex items-center justify-between gap-4 px-5 py-4">
                    <span>
                      <span className="block text-sm font-semibold text-ink-950">{s.nama}</span>
                      <span className="block text-xs uppercase tracking-[0.12em] text-ink-400">
                        {s.kategori}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full bg-ink-50 px-3 py-1 text-sm font-semibold text-ink-800">
                      {s.jarak}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,22,32,0.5)]">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                Harga mulai
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">
                {formatRupiah(p.harga)}
              </p>
              <p className="mt-1 text-sm text-ink-500">
                Simulasi cicilan ± {formatRupiah(p.cicilan)}/bulan, tenor 20 tahun.
              </p>

              <div className="mt-5 rounded-xl bg-ink-50 px-4 py-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink-600">Sisa unit</span>
                  <span className="font-semibold text-ink-950">
                    {p.unitTersisa} dari {p.totalUnit}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-200">
                  <div
                    className="h-full rounded-full bg-gold-500"
                    style={{ width: `${Math.max(6, sisaPersen)}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${waNumber}?text=${pesanWa}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
                >
                  <IkonWhatsapp className="size-4" />
                  Tanya ketersediaan unit
                </a>
                <Link
                  href="/kontak"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-800"
                >
                  Ajukan survei lokasi
                  <IkonPanah className="size-4" />
                </Link>
                <a
                  href={`tel:${site.telepon.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 px-5 py-3.5 text-sm font-semibold text-ink-800 transition hover:border-ink-900"
                >
                  <IkonTelepon className="size-4" />
                  {site.telepon}
                </a>
              </div>

              <div className="mt-6 border-t border-ink-100 pt-5 text-sm text-ink-600">
                <p className="flex items-start gap-2.5">
                  <IkonJam className="mt-0.5 size-4 shrink-0 text-ink-400" />
                  <span>
                    Tim pemasaran tersedia {site.jamOperasional}. Balasan WhatsApp rata-rata di
                    bawah 15 menit pada jam kerja.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-gold-200 bg-gold-50 p-5">
              <p className="text-sm font-semibold text-gold-900">Dokumen yang kami sediakan</p>
              <ul className="mt-3 space-y-2 text-sm text-gold-800">
                {[p.sertifikat + " induk & pecah unit", "Izin bangunan (PBG/IMB)", "Site plan resmi", "Simulasi KPR tertulis"].map(
                  (d) => (
                    <li key={d} className="flex items-center gap-2">
                      <IkonCek className="size-4 shrink-0" />
                      {d}
                    </li>
                  )
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ink-50/70 py-16">
        <div className="container-page">
          <h2 className="text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl">
            Properti lain yang mungkin Anda suka
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {terkait.map((t) => (
              <PropertyCard key={t.slug} properti={t} />
            ))}
          </div>
        </div>
      </section>

      <div className="pb-16 pt-16 sm:pb-20">
        <CtaBanner
          judul={`Ada pertanyaan tentang ${p.nama}?`}
          deskripsi="Kirimkan pertanyaan Anda dan tim kami akan menyiapkan detail unit, simulasi pembayaran, serta jadwal kunjungan yang paling sesuai."
        />
      </div>
    </>
  );
}
