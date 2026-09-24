import Link from "next/link";
import type { ReactNode } from "react";
import { IkonPanah } from "./Ikon";
import type { StatusProperti } from "@/data/properties";

const WARNA_STATUS: Record<StatusProperti, string> = {
  "Siap Huni": "border-emerald-300/70 bg-emerald-50 text-emerald-800",
  Indent: "border-gold-300 bg-gold-50 text-gold-800",
  Nup: "border-sky-300/70 bg-sky-50 text-sky-800",
  Terbatas: "border-orange-300/70 bg-orange-50 text-orange-800",
  "Sold Out": "border-ink-200 bg-ink-100 text-ink-600",
};

export function BadgeStatus({ status, className = "" }: { status: StatusProperti; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${WARNA_STATUS[status]} ${className}`}
    >
      {status}
    </span>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.18em] text-gold-600 ${className}`}
    >
      {children}
    </span>
  );
}

export function JudulSeksi({
  label,
  judul,
  deskripsi,
  align = "left",
  aksi,
}: {
  label?: string;
  judul: string;
  deskripsi?: string;
  align?: "left" | "center";
  aksi?: { href: string; teks: string };
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center"
          ? "items-center text-center"
          : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        {label ? <Label>{label}</Label> : null}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
          {judul}
        </h2>
        {deskripsi ? <p className="mt-4 text-base leading-relaxed text-ink-600">{deskripsi}</p> : null}
      </div>
      {aksi ? (
        <Link
          href={aksi.href}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 px-5 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-ink-900 hover:bg-ink-950 hover:text-white"
        >
          {aksi.teks}
          <IkonPanah className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}

export function Seksi({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
