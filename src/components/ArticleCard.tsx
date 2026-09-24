import Link from "next/link";
import type { Artikel } from "@/data/posts";
import { formatTanggal } from "@/lib/format";
import { PropertyImage } from "./PropertyImage";
import { IkonJam, IkonPanah } from "./Ikon";

export function ArticleCard({
  artikel,
  tampilGambar = true,
}: {
  artikel: Artikel;
  tampilGambar?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(15,22,32,0.35)]">
      {tampilGambar ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <PropertyImage
            seed={artikel.slug}
            tone={artikel.tone}
            label={artikel.kategori}
            className="size-full transition duration-500 group-hover:scale-[1.05]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-800 backdrop-blur">
            {artikel.kategori}
          </span>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {!tampilGambar ? (
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-600">
            {artikel.kategori}
          </span>
        ) : null}
        <h3 className="mt-3 text-lg font-semibold leading-snug text-ink-950">
          <Link href={`/blog/${artikel.slug}`} className="hover:text-ink-700">
            {artikel.judul}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{artikel.ringkasan}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink-100 pt-4 text-xs text-ink-500">
          <span>{formatTanggal(artikel.tanggal)}</span>
          <span className="inline-flex items-center gap-1.5">
            <IkonJam className="size-3.5" />
            {artikel.waktuBaca} menit baca
          </span>
        </div>
        <Link
          href={`/blog/${artikel.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition group-hover:text-gold-600"
        >
          Baca artikel
          <IkonPanah className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
