import Link from "next/link";
import { site } from "@/data/site";
import { IkonPanah, IkonTelepon, IkonWhatsapp } from "./Ikon";

export function CtaBanner({
  judul = "Siap melihat langsung unitnya?",
  deskripsi = "Tim pemasaran kami siap menemani survei lokasi, menjelaskan simulasi KPR, dan membantu proses berkas hingga akad kredit.",
}: {
  judul?: string;
  deskripsi?: string;
}) {
  return (
    <div className="container-page">
      <div className="overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-12 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
              Konsultasi gratis
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {judul}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-300">{deskripsi}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-400"
            >
              Jadwalkan Survei
              <IkonPanah className="size-4" />
            </Link>
            <a
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-gold-500 hover:text-gold-400"
            >
              <IkonWhatsapp className="size-4" />
              Chat WhatsApp
            </a>
            <a
              href={`tel:${site.telepon.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-gold-500 hover:text-gold-400"
            >
              <IkonTelepon className="size-4" />
              {site.telepon}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
