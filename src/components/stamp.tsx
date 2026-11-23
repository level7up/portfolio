"use client";

import { motion } from "framer-motion";

type Ink = "purple" | "green" | "red" | "burgundy";

const inkText: Record<Ink, string> = {
  purple: "stamp-ink-purple",
  green: "stamp-ink-green",
  red: "stamp-ink-red",
  burgundy: "stamp-ink-burgundy",
};

const inkBorder: Record<Ink, string> = {
  purple: "stamp-border-purple",
  green: "stamp-border-green",
  red: "stamp-border-red",
  burgundy: "stamp-border-burgundy",
};

const inkOpacity: Record<Ink, number> = {
  purple: 0.92,
  green: 0.87,
  red: 0.9,
  burgundy: 0.94,
};

export function Stamp({
  lines,
  caption,
  ink = "purple",
  rotate = -8,
  variant = "oval",
  delay = 0,
  className = "",
}: {
  lines: string[];
  caption?: string;
  ink?: Ink;
  rotate?: number;
  variant?: "oval" | "rect";
  delay?: number;
  className?: string;
}) {
  const shape = variant === "oval" ? "rounded-[50%]" : "rounded-[2px]";
  const sizing =
    variant === "oval"
      ? "w-44 h-28 md:w-52 md:h-32"
      : "w-56 min-h-24 md:w-64";
  const opacity = inkOpacity[ink];

  return (
    <motion.div
      initial={{ opacity, scale: 1.06, rotate: rotate - 6 }}
      whileInView={{ opacity, scale: 1, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.9, 0.3, 1.15] }}
      className={`relative border-2 ${shape} ${inkBorder[ink]} ${inkText[ink]} ${sizing} mix-blend-multiply ${className}`}
      aria-hidden="true"
    >
      <div
        className={`absolute inset-[4px] border ${shape} ${inkBorder[ink]} ${inkText[ink]} flex flex-col items-center justify-center text-center px-3 scale-[1.015] translate-x-[1px]`}
      >
        {lines.map((line) => (
          <span
            key={line}
            className="machine-line uppercase font-bold leading-tight"
            style={{ fontSize: line.length > 18 ? "0.55rem" : "0.68rem" }}
          >
            {line}
          </span>
        ))}
        {caption && (
          <span className="machine-line uppercase text-[0.5rem] mt-1 opacity-80">
            {caption}
          </span>
        )}
      </div>
    </motion.div>
  );
}
