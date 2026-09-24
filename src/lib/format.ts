export function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Ringkas untuk kartu listing: Rp 1,2 M / Rp 850 jt */
export function formatRupiahShort(value: number): string {
  if (value >= 1_000_000_000) {
    const m = value / 1_000_000_000;
    return `Rp ${m.toLocaleString("id-ID", { maximumFractionDigits: m < 10 ? 1 : 0 })} M`;
  }
  if (value >= 1_000_000) {
    const jt = value / 1_000_000;
    return `Rp ${jt.toLocaleString("id-ID", { maximumFractionDigits: 0 })} jt`;
  }
  return formatRupiah(value);
}

export function formatTanggal(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatAngka(value: number): string {
  return value.toLocaleString("id-ID");
}
