type Tone = {
  langit: [string, string];
  aksen: string;
  tanah: string;
  bayangan: string;
};

const TONES: Tone[] = [
  { langit: ["#0b2440", "#357fae"], aksen: "#e9c463", tanah: "#071a2e", bayangan: "#0a2138" },
  { langit: ["#123a38", "#4f9d86"], aksen: "#f2dc9c", tanah: "#0b2a28", bayangan: "#0f3230" },
  { langit: ["#3a2a1e", "#b07f47"], aksen: "#fdf9ed", tanah: "#2a1d14", bayangan: "#332317" },
  { langit: ["#1e2a4a", "#6177b3"], aksen: "#e9c463", tanah: "#141c33", bayangan: "#18203a" },
  { langit: ["#2a1f3a", "#8262a8"], aksen: "#f2dc9c", tanah: "#1c1430", bayangan: "#221939" },
  { langit: ["#0d2f2f", "#579a9a"], aksen: "#e0ad3c", tanah: "#08201f", bayangan: "#0b2928" },
];

function hashKata(teks: string): number {
  let h = 2166136261;
  for (let i = 0; i < teks.length; i += 1) {
    h ^= teks.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pembangkitAngka(seed: number) {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function PropertyImage({
  seed,
  tone = 0,
  className = "",
  label,
}: {
  seed: string;
  tone?: number;
  className?: string;
  label?: string;
}) {
  const t = TONES[Math.abs(tone) % TONES.length];
  const acak = pembangkitAngka(hashKata(seed));
  const id = `pimg-${hashKata(seed).toString(36)}-${Math.abs(tone) % TONES.length}`;

  // Deretan bangunan dengan tinggi bervariasi namun deterministik.
  const bangunan: { x: number; w: number; h: number; terang: boolean }[] = [];
  let x = -30;
  let index = 0;
  while (x < 830) {
    const w = 70 + acak() * 96;
    const tinggiDasar = 120 + acak() * 130;
    const tinggi = index % 3 === 0 ? tinggiDasar + 70 : tinggiDasar;
    bangunan.push({ x, w, h: tinggi, terang: acak() > 0.55 });
    x += w + 6;
    index += 1;
  }

  const jendela: { x: number; y: number }[] = [];
  bangunan.forEach((b) => {
    const kolom = Math.max(1, Math.floor(b.w / 26));
    const baris = Math.max(1, Math.floor(b.h / 34));
    for (let k = 0; k < kolom; k += 1) {
      for (let r = 0; r < baris; r += 1) {
        if (acak() > 0.42) {
          jendela.push({
            x: b.x + 12 + k * (b.w / kolom) + 4,
            y: 600 - 90 - b.h + 16 + r * (b.h / baris),
          });
        }
      }
    }
  });

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={label ? `Ilustrasi properti ${label}` : "Ilustrasi properti"}
    >
      <defs>
        <linearGradient id={`${id}-langit`} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor={t.langit[0]} />
          <stop offset="100%" stopColor={t.langit[1]} />
        </linearGradient>
        <linearGradient id={`${id}-gedung`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={t.bayangan} stopOpacity="0.98" />
          <stop offset="100%" stopColor={t.tanah} stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`${id}-cahaya`} cx="0.7" cy="0.2" r="0.8">
          <stop offset="0%" stopColor={t.aksen} stopOpacity="0.42" />
          <stop offset="100%" stopColor={t.aksen} stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="800" height="600" fill={`url(#${id}-langit)`} />
      <rect width="800" height="600" fill={`url(#${id}-cahaya)`} />
      <circle cx="600" cy="130" r="52" fill={t.aksen} opacity="0.5" />
      <circle cx="600" cy="130" r="84" fill={t.aksen} opacity="0.12" />

      {/* Siluet bangunan latar */}
      <g opacity="0.35">
        {bangunan.map((b, i) => (
          <rect
            key={`belakang-${i}`}
            x={b.x + 22}
            y={600 - 90 - b.h * 1.35}
            width={b.w * 0.8}
            height={b.h * 1.35}
            rx="4"
            fill={t.langit[0]}
          />
        ))}
      </g>

      {/* Bangunan utama */}
      {bangunan.map((b, i) => (
        <rect
          key={`depan-${i}`}
          x={b.x}
          y={600 - 90 - b.h}
          width={b.w}
          height={b.h}
          rx="5"
          fill={`url(#${id}-gedung)`}
        />
      ))}

      {/* Jendela menyala */}
      {jendela.slice(0, 190).map((j, i) => (
        <rect
          key={`jendela-${i}`}
          x={j.x}
          y={j.y}
          width="7"
          height="11"
          rx="1"
          fill={t.aksen}
          opacity={i % 4 === 0 ? 0.85 : 0.32}
        />
      ))}

      {/* Jalan dan garis tengah */}
      <rect y="510" width="800" height="90" fill={t.tanah} />
      <rect y="510" width="800" height="3" fill={t.aksen} opacity="0.28" />
      <g stroke={t.aksen} strokeWidth="3" opacity="0.3" strokeLinecap="round">
        <path d="M20 560h70M140 560h70M260 560h70M380 560h70M500 560h70M620 560h70M740 560h60" />
      </g>
    </svg>
  );
}
