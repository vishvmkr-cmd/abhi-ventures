export const siteConfig = {
  name: "Abhi Ventures",
  tagline: "Full stack development for ambitious teams.",
  description:
    "Abhi Ventures designs, builds, and ships modern websites, full stack applications, and payment-ready platforms for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhiventures.com",
  email: "hello@abhiventures.com",
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://cal.com/demo/30min",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_E164,
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
