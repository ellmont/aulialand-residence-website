import Link from "next/link";
import { navigasi, site } from "@/data/site";
import { daftarProperti } from "@/data/properties";
import { IkonFacebook, IkonInstagram, IkonJam, IkonPin, IkonSurat, IkonTelepon, IkonWhatsapp, IkonYoutube } from "./Ikon";
import { LogoAulia } from "./Logo";

export function Footer() {
  const tahun = new Date().getFullYear();
  const kluster = Array.from(new Set(daftarProperti.map((p) => p.cluster))).slice(0, 5);

  return (
    <footer className="mt-auto bg-ink-950 text-ink-200">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoAulia className="size-11" />
              <div>
                <p className="text-lg font-semibold text-white">{site.nama}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Property Developer
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-300">{site.deskripsi}</p>
            <div className="mt-6 flex gap-3">
              {[
                { Ikon: IkonWhatsapp, label: "WhatsApp" },
                { Ikon: IkonInstagram, label: "Instagram" },
                { Ikon: IkonFacebook, label: "Facebook" },
                { Ikon: IkonYoutube, label: "YouTube" },
              ].map(({ Ikon, label }) => (
                <Link
                  key={label}
                  href="/kontak"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-ink-800 text-ink-300 transition hover:border-gold-500 hover:text-gold-400"
                >
                  <Ikon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Navigasi</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navigasi.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-300 transition hover:text-gold-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Cluster</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {kluster.map((nama) => {
                const p = daftarProperti.find((x) => x.cluster === nama);
                return (
                  <li key={nama}>
                    <Link
                      href={p ? `/properti/${p.slug}` : "/properti"}
                      className="text-ink-300 transition hover:text-gold-400"
                    >
                      {nama}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Kantor Pemasaran</h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-300">
              <li className="flex gap-3">
                <IkonPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span>{site.alamat}</span>
              </li>
              <li className="flex gap-3">
                <IkonTelepon className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={`tel:${site.telepon.replace(/\s/g, "")}`} className="hover:text-gold-400">
                  {site.telepon}
                </a>
              </li>
              <li className="flex gap-3">
                <IkonSurat className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-400">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <IkonJam className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span>{site.jamOperasional}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink-900 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {tahun} {site.nama}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-ink-500">
            Izin Usaha Perumahan No. 503/PR/2009 · Anggota REI &middot; Situs ini bersifat
            contoh dan seluruh data merupakan ilustrasi.
          </p>
        </div>
      </div>
    </footer>
  );
}
