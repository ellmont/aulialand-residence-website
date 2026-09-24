"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigasi, site } from "@/data/site";
import { IkonMenu, IkonTelepon, IkonTutup } from "./Ikon";
import { LogoAulia } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [terbuka, setTerbuka] = useState(false);
  const [tergulir, setTergulir] = useState(false);

  useEffect(() => {
    const onScroll = () => setTergulir(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setTerbuka(false);
  }, [pathname]);

  const aktif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        tergulir ? "border-ink-100 shadow-[0_1px_20px_rgba(15,22,32,0.06)]" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.nama} beranda`}>
          <LogoAulia className="size-10 shrink-0" />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-ink-950">{site.nama}</span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gold-600">
              Property Developer
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigasi.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                aktif(item.href)
                  ? "bg-ink-950 text-white"
                  : "text-ink-700 hover:bg-ink-50 hover:text-ink-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.telepon.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm font-semibold text-ink-800 transition hover:border-ink-900 sm:inline-flex"
          >
            <IkonTelepon className="size-4" />
            {site.telepon}
          </a>
          <Link
            href="/kontak"
            className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-gold-400 sm:inline-flex"
          >
            Jadwalkan Survei
          </Link>
          <button
            type="button"
            onClick={() => setTerbuka((v) => !v)}
            aria-label={terbuka ? "Tutup menu" : "Buka menu"}
            aria-expanded={terbuka}
            className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 text-ink-800 lg:hidden"
          >
            {terbuka ? <IkonTutup className="size-5" /> : <IkonMenu className="size-5" />}
          </button>
        </div>
      </div>

      {terbuka ? (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {navigasi.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  aktif(item.href) ? "bg-ink-50 text-ink-950" : "text-ink-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="mt-2 rounded-xl bg-gold-500 px-4 py-3 text-center text-base font-semibold text-ink-950"
            >
              Jadwalkan Survei
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
