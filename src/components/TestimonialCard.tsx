import type { Testimoni } from "@/data/testimonials";
import { IkonBintang } from "./Ikon";

export function TestimonialCard({ testimoni }: { testimoni: Testimoni }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6">
      <div className="flex gap-1" aria-label={`Rating ${testimoni.rating} dari 5`}>
        {[1, 2, 3, 4, 5].map((n) => (
          <IkonBintang
            key={n}
            className={`size-4 ${
              n <= testimoni.rating ? "fill-gold-400 text-gold-500" : "text-ink-200"
            }`}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
        &ldquo;{testimoni.kutipan}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-ink-950 text-sm font-semibold text-gold-300">
          {testimoni.inisial}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-ink-950">{testimoni.nama}</span>
          <span className="block truncate text-xs text-ink-500">
            {testimoni.peran} · {testimoni.cluster}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
