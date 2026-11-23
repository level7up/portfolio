"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";

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

const inks: Ink[] = ["purple", "green", "red", "burgundy"];

const projects = [
  { title: "Gdawel", meta: "ERP · Saudi Arabia", link: "https://gdawel.app" },
  { title: "Claimizer", meta: "Real estate · UAE", link: "https://claimizer.com" },
  { title: "Pasma", meta: "HRM · Multi-database", link: "https://pasma.hashstudio.dev" },
  { title: "Khurdah", meta: "Scrap auctions", link: "https://khurdahapp.com" },
  { title: "EYE Tracker", meta: "Eye clinics", link: "https://eyetracker.hashstudio.dev" },
  { title: "Darabny", meta: "Fitness coaching", link: "https://darabny.com" },
  { title: "M3loma", meta: "Built with AI agents", link: "https://ma3loma-front.vercel.app" },
  { title: "Etamen", meta: "Telehealth · Psychiatry", link: null },
  { title: "Check-in", meta: "Tourism · Qatar 2022", link: null },
  { title: "Mazaji FM", meta: "Radio · Qatar", link: null },
  { title: "EasyCut", meta: "Bookings · Germany", link: null },
];

const packages = [
  { code: "PKG-01", name: "openrouter-client", desc: "Laravel client for OpenRouter AI models", link: "https://packagist.org/packages/level7up/openrouter-client" },
  { code: "PKG-02", name: "trello-mcp", desc: "Node MCP server linking Trello to AI coding tools", link: "https://github.com/level7up/trello-mcp" },
  { code: "PKG-03", name: "zatca-laravel", desc: "Saudi ZATCA e-invoicing for Laravel", link: null },
  { code: "PKG-04", name: "whatsapp-bot", desc: "WhatsApp Business API integration", link: null },
  { code: "PKG-05", name: "Dashboard Metronic", desc: "Admin dashboard with roles and permissions", link: null },
  { code: "PKG-06", name: "CMS", desc: "Reusable content management module", link: null },
  { code: "PKG-07", name: "E-commerce", desc: "Products, categories and order management", link: null },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07 },
    },
  };

  const item: Variants = {
    hidden: (c: number) => ({ opacity: 0.94, scale: 1.05, rotate: c - 3 }),
    visible: (c: number) => ({
      opacity: 0.94,
      scale: 1,
      rotate: c,
      transition: { duration: 0.45, ease: [0.2, 0.9, 0.3, 1.1] },
    }),
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <SectionHead title="Projects" page="Page 05 · Entry stamps" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
          >
            {projects.map((project, index) => {
              const ink = inks[index % inks.length];
              const rot = ((index % 5) - 2) * 1.6;
              const inner = (
                <div
                  className={`h-full border-2 ${inkBorder[ink]} ${inkText[ink]} p-4 flex flex-col items-center justify-center text-center min-h-36 mix-blend-multiply transition-transform duration-200 group-hover:-translate-y-1`}
                >
                  <div className={`w-full h-full border ${inkBorder[ink]} px-2.5 py-4 flex flex-col items-center justify-center`}>
                    <span className="engraved font-bold text-[0.78rem] md:text-sm leading-tight break-words">
                      {project.title}
                    </span>
                    <span className="machine-line uppercase text-[0.5rem] font-bold mt-2 opacity-85 leading-snug">
                      {project.meta}
                    </span>
                    {project.link && (
                      <span className="machine-line uppercase text-[0.5rem] font-bold mt-2 underline underline-offset-2">
                        Visit
                      </span>
                    )}
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={project.title}
                  variants={item}
                  custom={rot}
                  className="group"
                >
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — ${project.meta}`}
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="h-full" aria-label={`${project.title} — ${project.meta}`}>
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="space-y-5"
          >
            <div className="flex items-end gap-4">
              <h3 className="engraved font-bold text-lg md:text-xl leading-none">
                Open-source visas
              </h3>
              <div className="flex-1 border-b-2 border-[#1c1c18] mb-1.5" />
              <span className="machine-line uppercase text-[0.62rem] font-bold text-[#5c5850] mb-1">
                7 packages
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg, index) => {
                const ink = inks[(index + 1) % inks.length];
                const content = (
                  <div
                    className={`h-full border ${inkBorder[ink]} bg-[#fbf8f1] px-4 py-3.5 flex items-start gap-4 transition-colors ${
                      pkg.link ? "hover:bg-[#efe7d6]" : ""
                    }`}
                  >
                    <span className={`machine-line uppercase text-[0.55rem] font-bold ${inkText[ink]} shrink-0 pt-0.5`}>
                      {pkg.code}
                    </span>
                    <div className="min-w-0">
                      <p className="engraved font-bold text-[0.78rem] break-words">
                        {pkg.name}
                      </p>
                      <p className="text-[0.8rem] text-[#5c5850] mt-1 leading-snug">
                        {pkg.desc}
                      </p>
                    </div>
                    {pkg.link && (
                      <span className={`machine-line text-[0.6rem] font-bold ${inkText[ink]} ml-auto shrink-0`}>
                        ↗
                      </span>
                    )}
                  </div>
                );

                return pkg.link ? (
                  <a
                    key={pkg.code}
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={pkg.code} className="h-full">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
