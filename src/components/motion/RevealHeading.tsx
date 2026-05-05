"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ElementType } from "react";
import { revealEase, revealViewport } from "./reveal-config";

type HeadingTag = "h1" | "h2" | "h3";

type Base = {
  text: string;
  className?: string;
  as?: HeadingTag;
};

function Heading({
  as,
  className,
  children,
}: {
  as: HeadingTag;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag = as as ElementType;
  return <Tag className={className}>{children}</Tag>;
}

/** Small caps label — subtle rise + opacity */
export function RevealLabel({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <p className={className}>{text}</p>;
  }
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ duration: 0.45, ease: revealEase }}
    >
      {text}
    </motion.p>
  );
}

/** Words rise from clipped baseline — premium editorial */
export function RevealWordsHeading({ text, className, as = "h2" }: Base) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <Heading as={as} className={className}>
        {text}
      </Heading>
    );
  }

  return (
    <Heading as={as} className={className}>
      <span className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1.5">
        {words.map((word, i) => (
          <span
            key={`${i}-${word}`}
            className="inline-block overflow-hidden pb-[0.06em]"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "108%" }}
              whileInView={{ y: 0 }}
              viewport={revealViewport}
              transition={{
                duration: 0.52,
                delay: i * 0.055,
                ease: revealEase,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Heading>
  );
}

/** Vertical mask — line rises into view */
export function RevealMaskHeading({ text, className, as = "h2" }: Base) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Heading as={as} className={className}>
        {text}
      </Heading>
    );
  }

  return (
    <Heading as={as} className={className}>
      <span className="relative inline-block overflow-hidden">
        <motion.span
          className="inline-block will-change-transform"
          initial={{ y: "115%" }}
          whileInView={{ y: 0 }}
          viewport={revealViewport}
          transition={{ duration: 0.65, ease: revealEase }}
        >
          {text}
        </motion.span>
      </span>
    </Heading>
  );
}

/** Focus pull — blur resolves into sharp type */
export function RevealBlurHeading({ text, className, as = "h2" }: Base) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Heading as={as} className={className}>
        {text}
      </Heading>
    );
  }

  const MotionHeading = as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2;

  return (
    <MotionHeading
      className={className}
      initial={{ opacity: 0, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={revealViewport}
      transition={{ duration: 0.75, ease: revealEase }}
      style={{ willChange: "filter, opacity" }}
    >
      {text}
    </MotionHeading>
  );
}

type SlideFrom = "left" | "right" | "up";

/** Directional slide + slight skew decay — cinematic */
export function RevealSlideHeading({
  text,
  className,
  as = "h1",
  from,
}: Base & { from: SlideFrom }) {
  const reduce = useReducedMotion();

  const initial =
    from === "left"
      ? { x: -36, opacity: 0, skewX: 4 }
      : from === "right"
        ? { x: 36, opacity: 0, skewX: -4 }
        : { y: 28, opacity: 0, skewY: 2 };

  const animate =
    from === "left" || from === "right"
      ? { x: 0, opacity: 1, skewX: 0 }
      : { y: 0, opacity: 1, skewY: 0 };

  if (reduce) {
    return (
      <Heading as={as} className={className}>
        {text}
      </Heading>
    );
  }

  const MotionHeading =
    as === "h1" ? motion.h1 : as === "h3" ? motion.h3 : motion.h2;

  return (
    <MotionHeading
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={revealViewport}
      transition={{ duration: 0.68, ease: revealEase }}
      style={{ willChange: "transform, opacity" }}
    >
      {text}
    </MotionHeading>
  );
}

/** Staggered letters (desktop); words on small viewports to limit DOM & work */
export function RevealLettersHeading({ text, className, as = "h1" }: Base) {
  const reduce = useReducedMotion();
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (reduce || coarse || text.length > 36) {
    return <RevealWordsHeading text={text} className={className} as={as} />;
  }

  const chars = text.split("");

  return (
    <Heading as={as} className={className}>
      <span className="inline-block" aria-label={text}>
        {chars.map((char, i) => (
          <span
            key={`${i}-${char}`}
            className="inline-block overflow-hidden align-baseline"
            style={{ width: char === " " ? "0.28em" : undefined }}
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "100%", rotate: char === " " ? 0 : -7 }}
              whileInView={{ y: 0, rotate: 0 }}
              viewport={revealViewport}
              transition={{
                duration: 0.42,
                delay: i * 0.028,
                ease: revealEase,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </span>
    </Heading>
  );
}

/** Subtle 3D perspective entrance — no scroll listeners */
export function RevealTiltHeading({ text, className, as = "h2" }: Base) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <Heading as={as} className={className}>
        {text}
      </Heading>
    );
  }

  return (
    <div className="[perspective:1000px]">
      <motion.div
        initial={{ opacity: 0, y: 26, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={revealViewport}
        transition={{ duration: 0.75, ease: revealEase }}
        style={{ transformStyle: "preserve-3d" }}
        className="will-change-transform"
      >
        <Heading as={as} className={className}>
          {text}
        </Heading>
      </motion.div>
    </div>
  );
}
