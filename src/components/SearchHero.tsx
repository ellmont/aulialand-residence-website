"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { semuaKota, semuaTipe } from "@/data/properties";
import { IkonCari } from "./Ikon";

const OPSI_HARGA = [
  { label: "Semua harga", value: "" },
  { label: "Di bawah Rp 500 juta", value: "500000000" },
  { label: "Sampai Rp 1 miliar", value: "1000000000" },
  { label: "Sampai Rp 2 miliar", value: "2000000000" },
  { label: "Sampai Rp 4 miliar", value: "4000000000" },
];

const kelasKolom =
  "w-full rounded-xl border border-ink-200 bg-white px-3.5 py-3 text-sm text-ink-900 outline-none transition focus:border-ink-900";

export function SearchHero() {
  const router = useRouter();
  const [kata, setKata] = useState("");
  const [kota, setKota] = useState("");
  const [tipe, setTipe] = useState("");
  const [harga, setHarga] = useState("");

  function kirim(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (kata.trim()) params.set("q", kata.trim());
    if (kota) params.set("kota", kota);
    if (tipe) params.set("tipe", tipe);
    if (harga) params.set("max", harga);
    const kueri = params.toString();
    router.push(kueri ? `/properti?${kueri}` : "/properti");
  }

  return (
    <form
      onSubmit={kirim}
      className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4"
    >
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr_auto]">
        <label className="flex flex-col gap-1.5">
          <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            Kata kunci
          </span>
          <input
            value={kata}
            onChange={(e) => setKata(e.target.value)}
            placeholder="Nama cluster atau kawasan"
            className={kelasKolom}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            Kota
          </span>
          <select value={kota} onChange={(e) => setKota(e.target.value)} className={kelasKolom}>
            <option value="">Semua kota</option>
            {semuaKota.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            Tipe
          </span>
          <select value={tipe} onChange={(e) => setTipe(e.target.value)} className={kelasKolom}>
            <option value="">Semua tipe</option>
            {semuaTipe.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            Anggaran
          </span>
          <select value={harga} onChange={(e) => setHarga(e.target.value)} className={kelasKolom}>
            {OPSI_HARGA.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-end sm:col-span-2 lg:col-span-1">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:bg-gold-400 lg:w-auto"
          >
            <IkonCari className="size-4" />
            Cari Properti
          </button>
        </div>
      </div>
    </form>
  );
}
