export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tech: string[];
  href: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Atlas CRM",
    description:
      "Multi-tenant CRM with role-based access, pipeline automation, and real-time activity feeds for a B2B sales team.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Dashboard analytics interface",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    href: "https://example.com",
  },
  {
    title: "Northwind Commerce",
    description:
      "Headless storefront with inventory sync, global tax rules, and subscription bundles for a consumer brand.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    imageAlt: "E-commerce checkout experience",
    tech: ["Next.js", "Stripe", "AWS", "Redis"],
    href: "https://example.com",
  },
  {
    title: "Pulse Health Portal",
    description:
      "Patient portal with secure messaging, appointment scheduling, and provider dashboards with HIPAA-minded architecture.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    imageAlt: "Healthcare application mockup",
    tech: ["React", "Node.js", "AWS", "Auth0"],
    href: "https://example.com",
  },
  {
    title: "LedgerFlow",
    description:
      "Finance operations hub integrating bank feeds, approval workflows, and Razorpay payouts for an Indian SMB.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Financial charts and data",
    tech: ["Next.js", "Razorpay", "PostgreSQL", "Tailwind"],
    href: "https://example.com",
  },
  {
    title: "Orbit Field Service",
    description:
      "Mobile-first dispatch, route optimization, and technician apps with offline-first sync for field teams.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    imageAlt: "Team planning on a laptop",
    tech: ["React Native", "Node.js", "MongoDB", "Maps API"],
    href: "https://example.com",
  },
  {
    title: "Signal Analytics",
    description:
      "Event ingestion pipeline, cohort analysis, and executive dashboards with exportable reports.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    imageAlt: "Analytics workspace",
    tech: ["Next.js", "TypeScript", "AWS", "ClickHouse"],
    href: "https://example.com",
  },
];
