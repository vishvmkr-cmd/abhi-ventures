export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  pricingFrom?: string;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Fast, responsive marketing sites that convert.",
    description:
      "Launch a polished web presence with performance-first architecture, CMS-friendly structure, and analytics-ready foundations.",
    features: [
      "Next.js or headless CMS options",
      "Core Web Vitals optimization",
      "SEO & metadata best practices",
      "Analytics & conversion tracking hooks",
    ],
    pricingFrom: "From $2,500",
  },
  {
    slug: "full-stack-applications",
    title: "Full Stack Applications",
    short: "End-to-end product engineering from idea to scale.",
    description:
      "We build secure, maintainable applications with clear domain boundaries, automated testing where it matters, and deployment pipelines you can trust.",
    features: [
      "React / Next.js frontends",
      "Node.js APIs & microservices",
      "Auth, roles, and audit-friendly patterns",
      "CI/CD and observability guidance",
    ],
    pricingFrom: "From $8,000",
  },
  {
    slug: "payment-integration",
    title: "Payment Integration",
    short: "Stripe, Razorpay, subscriptions, and invoicing.",
    description:
      "Accept payments globally with Stripe or serve India-first flows with Razorpay—including subscriptions, trials, webhooks, and reconciliation tooling.",
    features: [
      "Stripe Checkout & Billing",
      "Razorpay orders & links",
      "Webhook reliability & idempotency",
      "PCI-minded server-side patterns",
    ],
    pricingFrom: "From $1,800",
  },
  {
    slug: "api-development",
    title: "API Development & Integrations",
    short: "Connect your product to the tools your team already uses.",
    description:
      "Design versioned REST or GraphQL APIs, third-party integrations, and internal automation that stays observable and easy to extend.",
    features: [
      "OpenAPI-first design",
      "Rate limits, retries, and backoff",
      "CRM, ERP, and SaaS connectors",
      "Partner-facing sandbox environments",
    ],
    pricingFrom: "From $3,200",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Interfaces that feel as good as they look.",
    description:
      "From discovery workshops to high-fidelity UI kits in Figma, we align product flows with engineering constraints so designs ship, not stall.",
    features: [
      "UX audits & journey mapping",
      "Design systems & component libraries",
      "Accessibility-conscious patterns",
      "Handoff-ready specs for dev",
    ],
    pricingFrom: "From $2,200",
  },
];
