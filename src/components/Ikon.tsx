import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const dasar = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function IkonRumah(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.8V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.8" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function IkonKasur(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 18h18M6 9V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M4 18v2M20 18v2" />
    </svg>
  );
}

export function IkonMandi(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M7 12V6a2.5 2.5 0 0 1 5 0" />
      <path d="M7 19v2M17 19v2" />
    </svg>
  );
}

export function IkonLuas(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M3.5 9h17M3.5 15h17M9 3.5v17M15 3.5v17" />
    </svg>
  );
}

export function IkonMobil(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M5 16.5h14M6 16.5V19M18 16.5V19" />
      <path d="M4 16.5v-3.2a2 2 0 0 1 .3-1l1.6-2.9A2 2 0 0 1 7.7 8.3h8.6a2 2 0 0 1 1.8 1.1l1.6 2.9a2 2 0 0 1 .3 1v3.2" />
      <path d="M4 16.5h16" />
      <path d="M7.5 13.5h9" />
    </svg>
  );
}

export function IkonPin(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IkonShield(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M12 3l7 3v6c0 4.4-3 7.9-7 9-4-1.1-7-4.6-7-9V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function IkonPalu(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M14.5 4.5 19 9l-2 2-4.5-4.5 2-2Z" />
      <path d="M12 7 4.5 14.5a1.8 1.8 0 0 0 0 2.5l1.5 1.5a1.8 1.8 0 0 0 2.5 0L16 11" />
      <path d="M16.5 2.5 21 7" />
    </svg>
  );
}

export function IkonBintang(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8L12 3.5Z" />
    </svg>
  );
}

export function IkonTelepon(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M6.5 3.5h2.2l1.6 4-2 1.3a11 11 0 0 0 5 5l1.3-2 4 1.6v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IkonSurat(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 7.3 5.3a1.5 1.5 0 0 0 1.8 0L20.2 7" />
    </svg>
  );
}

export function IkonJam(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IkonPanah(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IkonCari(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function IkonMenu(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IkonTutup(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IkonCek(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IkonWhatsapp(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M12.04 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.3 1.28 4.73L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.64 1.2h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.42-9.51-9.42Zm5.57 13.4c-.24.66-1.4 1.28-1.93 1.33-.53.05-1.02.24-3.45-.72-2.92-1.16-4.76-4.2-4.9-4.4-.14-.2-1.16-1.55-1.16-2.96 0-1.4.73-2.1 1-2.4.26-.28.57-.35.76-.35l.55.01c.17 0 .41-.06.64.49.24.57.8 1.97.87 2.11.07.14.12.31.02.5-.1.2-.19.32-.38.55-.19.24-.37.4-.24.63.14.24.6 1.02 1.29 1.65.88.81 1.62 1.06 1.85 1.18.24.12.38.1.52-.06.14-.17.6-.72.76-.96.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.79.24.12.4.19.46.29.07.1.07.6-.17 1.26Z" />
    </svg>
  );
}

export function IkonInstagram(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.8 7.2h.01" />
    </svg>
  );
}

export function IkonFacebook(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.5-1.5H17V4.4c-.3 0-1.3-.14-2.4-.14-2.4 0-4 1.45-4 4.1v2.15H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

export function IkonYoutube(p: Props) {
  return (
    <svg {...dasar} {...p}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" />
    </svg>
  );
}

export const petaIkon = {
  pin: IkonPin,
  shield: IkonShield,
  hammer: IkonPalu,
  star: IkonBintang,
} as const;
