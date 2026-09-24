export function LogoAulia({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Aulia Land">
      <defs>
        <linearGradient id="logo-aulia" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1b2432" />
          <stop offset="100%" stopColor="#33445d" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#logo-aulia)" />
      <path
        d="M10 26.5 24 15l14 11.5"
        fill="none"
        stroke="#d0901f"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24.8V36a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V24.8"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 37v-6.5h6V37" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  );
}
