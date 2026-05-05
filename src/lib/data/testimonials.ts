export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Abhi Ventures shipped our MVP in weeks, not months. The codebase is clean, documented, and easy for our team to extend.",
    author: "Priya N.",
    role: "Founder",
    company: "Series A SaaS",
  },
  {
    quote:
      "Payments were the riskiest part of our launch. They handled Stripe webhooks, edge cases, and monitoring like true partners.",
    author: "Marcus T.",
    role: "CTO",
    company: "E-commerce brand",
  },
  {
    quote:
      "Reliable engineering, clear communication, and zero drama under deadline pressure. Exactly what we needed.",
    author: "Elena R.",
    role: "Product Lead",
    company: "Health tech startup",
  },
];
