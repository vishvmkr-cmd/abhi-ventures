import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  RevealLabel,
  RevealSlideHeading,
} from "@/components/motion/RevealHeading";
import { siteConfig } from "@/lib/site";
import { FaWhatsapp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Abhi Ventures—tell us about your goals and timeline.",
};

function whatsappHref() {
  const n = siteConfig.whatsapp;
  if (!n) return null;
  const text = encodeURIComponent(
    `Hi ${siteConfig.name}, I'd like to discuss a project.`,
  );
  return `https://wa.me/${n.replace(/\D/g, "")}?text=${text}`;
}

export default function ContactPage() {
  const wa = whatsappHref();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <RevealLabel
            text="Contact"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90"
          />
          <RevealSlideHeading
            text="Tell us what you are building"
            from="right"
            className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-5xl"
            as="h1"
          />
          <FadeIn
            delay={0.08}
            className="mt-4 text-lg text-zinc-600 dark:text-zinc-400"
          >
            Share context on users, constraints, and timeline. We typically
            respond within one business day with questions or a proposed next
            step.
          </FadeIn>
          <FadeIn
            delay={0.12}
            className="mt-8 space-y-4 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <p>
              <span className="text-zinc-500 dark:text-zinc-500">Email</span>
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="text-zinc-500 dark:text-zinc-500">
                Book a call
              </span>
              <br />
              <Link
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-400"
              >
                Open calendar →
              </Link>
            </p>
          </FadeIn>
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-500/15 dark:border-emerald-500/40 dark:text-emerald-300 dark:hover:bg-emerald-500/20"
            >
              <FaWhatsapp className="h-5 w-5" />
              Message on WhatsApp
            </a>
          )}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
