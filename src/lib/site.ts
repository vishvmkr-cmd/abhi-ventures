/** Fallback when env is missing, empty, or invalid (Railway often injects ""). */
const DEFAULT_SITE_URL = "https://abhiventures.com";

function normalizeSiteUrl(raw: string | undefined): string {
  const v = raw?.trim();
  if (!v) return DEFAULT_SITE_URL;
  try {
    const u = new URL(v);
    return `${u.origin}${u.pathname}`.replace(/\/$/, "") || DEFAULT_SITE_URL;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function normalizeOptionalUrl(
  raw: string | undefined,
  fallback: string,
): string {
  const v = raw?.trim();
  if (!v) return fallback;
  try {
    new URL(v);
    return v.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: "Abhi Ventures",
  tagline: "Full stack development for ambitious teams.",
  description:
    "Abhi Ventures designs, builds, and ships modern websites, full stack applications, and payment-ready platforms for growing businesses.",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  email: "hello@abhiventures.com",
  bookingUrl: normalizeOptionalUrl(
    process.env.NEXT_PUBLIC_BOOKING_URL,
    "https://cal.com/demo/30min",
  ),
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_E164?.trim() || undefined,
  social: {
    linkedin: "https://www.linkedin.com/company/abhi-ventures",
    twitter: "https://twitter.com/abhi_ventures",
    github: "https://github.com/abhi-ventures",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
