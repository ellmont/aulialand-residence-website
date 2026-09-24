import Link from "next/link";
import type { Properti } from "@/data/properties";
import { formatRupiah, formatRupiahShort } from "@/lib/format";
import { PropertyImage } from "./PropertyImage";
import { BadgeStatus } from "./Ui";
import { IkonKasur, IkonLuas, IkonMandi, IkonMobil, IkonPanah, IkonPin } from "./Ikon";

export function PropertyCard({
  properti,
  prioritas = false,
}: {
  properti: Properti;
  prioritas?: boolean;
}) {
  const diskon = properti.hargaCoret
    ? Math.round(((properti.hargaCoret - properti.harga) / properti.hargaCoret) * 100)
    : 0;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:border-ink-200 hover:shadow-[0_18px_40px_-24px_rgba(15,22,32,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <PropertyImage
          seed={properti.slug}
          tone={properti.tone}
          label={properti.nama}
          className="size-full transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-4">
          <BadgeStatus status={properti.status} className="bg-white/95 backdrop-blur" />
          {diskon > 0 ? (
            <span className="rounded-full bg-ink-950/90 px-2.5 py-1 text-[11px] font-semibold text-gold-300 backdrop-blur">
              Hemat {diskon}%
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-gold-600">
          <IkonPin className="size-3.5" />
          {properti.lokasi}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-950">
          <Link href={`/properti/${properti.slug}`} className="hover:text-ink-700">
            {properti.nama}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-ink-500">
          {properti.cluster} · {properti.tipe}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-ink-100 py-4 text-sm text-ink-700">
          <div className="flex items-center gap-2">
            <IkonKasur className="size-4 text-ink-400" />
            <dt className="sr-only">Kamar tidur</dt>
            <dd>{properti.kamarTidur} KT</dd>
          </div>
          <div className="flex items-center gap-2">
            <IkonMandi className="size-4 text-ink-400" />
            <dt className="sr-only">Kamar mandi</dt>
            <dd>{properti.kamarMandi} KM</dd>
          </div>
          <div className="flex items-center gap-2">
            <IkonLuas className="size-4 text-ink-400" />
            <dt className="sr-only">Luas bangunan</dt>
            <dd>{properti.luasBangunan} m²</dd>
          </div>
          <div className="flex items-center gap-2">
            <IkonMobil className="size-4 text-ink-400" />
            <dt className="sr-only">Carport</dt>
            <dd>{properti.carport} mobil</dd>
          </div>
        </dl>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            {properti.hargaCoret ? (
              <p className="text-xs text-ink-400 line-through">
                {formatRupiah(properti.hargaCoret)}
              </p>
            ) : null}
            <p className="text-xl font-semibold tracking-tight text-ink-950">
              {formatRupiahShort(properti.harga)}
            </p>
            <p className="text-xs text-ink-500">
              Cicilan ± {formatRupiahShort(properti.cicilan)}/bulan
            </p>
          </div>
          <Link
            href={`/properti/${properti.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-gold-500 group-hover:text-ink-950"
          >
            {prioritas ? "Lihat detail" : "Detail"}
            <IkonPanah className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
