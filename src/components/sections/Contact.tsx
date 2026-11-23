"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";

const channels = [
  {
    label: "Email",
    value: "abdoleemos200@gmail.com",
    href: "mailto:abdoleemos200@gmail.com",
    note: "Fastest route",
  },
  {
    label: "Phone",
    value: "+20 100 287 4060",
    href: "tel:+201002874060",
    note: "Cairo time (EET)",
  },
  {
    label: "LinkedIn",
    value: "abdulalim-mohamed",
    href: "https://www.linkedin.com/in/abdulalim-mohamed-231506140/",
    note: "Professional record",
  },
  {
    label: "GitHub",
    value: "level7up",
    href: "https://github.com/level7up",
    note: "Packages & code",
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 1, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <SectionHead title="Contact" page="Page 06 · Clearance" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {channels.map((channel) => (
              <motion.a
                key={channel.label}
                variants={item}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-[#fbf8f1] border-2 border-[#1c1c18] p-5 flex items-center justify-between gap-4 hover:bg-[#6b1f2e] hover:text-[#f7f2e7] transition-colors"
              >
                <div className="min-w-0">
                  <p className="machine-line uppercase text-[0.55rem] font-bold opacity-70">
                    {channel.label} · {channel.note}
                  </p>
                  <p className="engraved font-bold text-sm md:text-base mt-1.5 break-all">
                    {channel.value}
                  </p>
                </div>
                <span className="machine-line font-bold text-lg shrink-0 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-[#5c5850] max-w-[65ch] leading-relaxed"
          >
            Available for senior backend and full-stack roles, and for contract
            work on Laravel platforms, multi-tenant systems and integrations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
