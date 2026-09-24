import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { IkonWhatsapp } from "@/components/Ikon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aulialand.co.id"),
  title: {
    default: `${site.nama} — Pengembang Perumahan Modern di Jabodetabek`,
    template: `%s | ${site.nama}`,
  },
  description: site.deskripsi,
  keywords: [
    "perumahan",
    "rumah dijual",
    "cluster modern",
    "rumah subsidi",
    "KPR rumah",
    "pengembang properti",
  ],
  openGraph: {
    title: `${site.nama} — ${site.tagline}`,
    description: site.deskripsi,
    type: "website",
    locale: "id_ID",
    siteName: site.nama,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <Navbar />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <Footer />
        <a
          href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
          aria-label="Hubungi kami via WhatsApp"
          className="fixed bottom-5 right-5 z-40 inline-flex size-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-600"
        >
          <IkonWhatsapp className="size-6" />
        </a>
      </body>
    </html>
  );
}
