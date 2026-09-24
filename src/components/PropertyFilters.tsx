"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { daftarStatus, semuaKota, semuaTipe } from "@/data/properties";
import { IkonCari, IkonTutup } from "./Ikon";

const OPSI_URUT = [
  { value: "terbaru", label: "Terbaru" },
  { value: "termurah", label: "Harga terendah" },
  { value: "termahal", label: "Harga tertinggi" },
  { value: "luas", label: "Luas tanah terbesar" },
];

const kelasKolom =
  "w-full rounded-xl border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 outline-none transition focus:border-ink-900";

export function PropertyFilters({ total }: { total: number }) {
  const router = useRouter();
  const params = useSearchParams();

  const [kata, setKata] = useState(params.get("q") ?? "");
  const [kota, setKota] = useState(params.get("kota") ?? "");
  const [tipe, setTipe] = useState(params.get("tipe") ?? "");
  const [status, setStatus] = useState(params.get("status") ?? "");
  const [urut, setUrut] = useState(params.get("urut") ?? "terbaru");
  const [max, setMax] = useState(params.get("max") ?? "");
  const [minKt, setMinKt] = useState(params.get("kt") ?? "");
  const pertama = useRef(true);

  useEffect(() => {
    if (pertama.current) {
      pertama.current = false;
      return;
    }
    const timer = setTimeout(() => {
      const next = new URLSearchParams();
      if (kata.trim()) next.set("q", kata.trim());
      if (kota) next.set("kota", kota);
      if (tipe) next.set("tipe", tipe);
      if (status) next.set("status", status);
      if (max) next.set("max", max);
      if (minKt) next.set("kt", minKt);
      if (urut && urut !== "terbaru") next.set("urut", urut);
      const kueri = next.toString();
      router.replace(kueri ? `/properti?${kueri}` : "/properti", { scroll: false });
    }, 280);
    return () => clearTimeout(timer);
  }, [kata, kota, tipe, status, max, minKt, urut, router]);

  const adaFilter = Boolean(kata || kota || tipe || status || max || minKt || (urut && urut !== "terbaru"));

  function reset() {
    setKata("");
    setKota("");
    setTipe("");
    setStatus("");
    setMax("");
    setMinKt("");
    setUrut("terbaru");
  }

  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-4 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        <label className="flex flex-[1.6] flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Cari
          </span>
          <span className="relative">
            <IkonCari className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
            <input
              value={kata}
              onChange={(e) => setKata(e.target.value)}
              placeholder="Nama cluster, kawasan, atau kota"
              className={`${kelasKolom} pl-10`}
            />
          </span>
        </label>

        <label className="flex flex-col gap-1.5 lg:w-40">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Kota</span>
          <select value={kota} onChange={(e) => setKota(e.target.value)} className={kelasKolom}>
            <option value="">Semua kota</option>
            {semuaKota.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 lg:w-40">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Tipe</span>
          <select value={tipe} onChange={(e) => setTipe(e.target.value)} className={kelasKolom}>
            <option value="">Semua tipe</option>
            {semuaTipe.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 lg:w-36">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Kamar tidur
          </span>
          <select value={minKt} onChange={(e) => setMinKt(e.target.value)} className={kelasKolom}>
            <option value="">Semua</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5 lg:w-40">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Harga maks
          </span>
          <input
            type="number"
            inputMode="numeric"
            step={50_000_000}
            value={max}
            onChange={(e) => setMax(e.target.value)}
            placeholder="cth. 1000000000"
            className={kelasKolom}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink-100 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Status
          </span>
          <button
            type="button"
            onClick={() => setStatus("")}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              status === ""
                ? "border-ink-950 bg-ink-950 text-white"
                : "border-ink-200 text-ink-600 hover:border-ink-400"
            }`}
          >
            Semua
          </button>
          {daftarStatus.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStatus(status === s ? "" : s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                status === s
                  ? "border-ink-950 bg-ink-950 text-white"
                  : "border-ink-200 text-ink-600 hover:border-ink-400"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Urutkan
            <select
              value={urut}
              onChange={(e) => setUrut(e.target.value)}
              className="rounded-xl border border-ink-200 bg-white px-3 py-2 text-sm font-normal normal-case tracking-normal text-ink-900 outline-none focus:border-ink-900"
            >
              {OPSI_URUT.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
          {adaFilter ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3.5 py-2 text-xs font-semibold text-ink-600 transition hover:border-ink-900 hover:text-ink-950"
            >
              <IkonTutup className="size-3.5" />
              Reset
            </button>
          ) : null}
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-500">
        Menampilkan <span className="font-semibold text-ink-900">{total}</span> properti
      </p>
    </div>
  );
}
