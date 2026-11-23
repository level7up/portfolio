"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";
import { Stamp } from "@/components/stamp";

const experiences = [
  {
    entry: "Entry 01",
    title: "Backend Developer",
    company: "HashStudio Solutions",
    period: "Sep 2021 – Present",
    place: "Cairo, Egypt",
    ink: "purple" as const,
    rotate: -5,
    stampLines: ["HashStudio", "Sep 21 – Present"],
    bullets: [
      "Build and maintain Gdawel, a multi-tenant ERP serving 150+ businesses in Saudi Arabia with tenant-isolated databases.",
      "Implemented Saudi ZATCA e-invoicing and MyFatoorah payments, plus RabbitMQ and Redis queue pipelines for reliable integrations.",
      "Published reusable Composer packages for AI, WhatsApp Business, ZATCA, CMS and e-commerce, reused across client projects.",
      "Run Docker-based environments and resolve incidents on Linux production servers.",
    ],
  },
  {
    entry: "Entry 02",
    title: "Co-founder & CEO",
    company: "Nuvexa Digital",
    period: "Present",
    place: "Cairo, Egypt",
    ink: "burgundy" as const,
    rotate: 4,
    stampLines: ["Nuvexa Digital", "Co-founder · CEO"],
    bullets: [
      "Co-founded Nuvexa Digital and lead it as CEO, delivering cloud and AI-enabled software solutions for businesses.",
    ],
  },
  {
    entry: "Entry 03",
    title: "Backend Developer",
    company: "Falcon Portal",
    period: "Oct 2022 – Present",
    place: "Remote · Part-time",
    ink: "green" as const,
    rotate: -4,
    stampLines: ["Falcon Portal", "Oct 22 – Present"],
    bullets: [
      "Design and implement the RESTful APIs behind the portal's core features and its frontend-backend integration.",
      "Tune MySQL and PostgreSQL queries on high-traffic endpoints to improve response times.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 1, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <SectionHead title="Work Experience" page="Page 03 · Entries" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((exp) => (
              <motion.article
                key={exp.entry}
                variants={item}
                className="relative bg-[#fbf8f1] border-2 border-[#1c1c18]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 bg-[#efe7d6] border-b-2 border-[#1c1c18] px-5 py-2.5">
                  <span className="machine-line uppercase text-[0.6rem] font-bold text-[#6b1f2e]">
                    {exp.entry} · {exp.place}
                  </span>
                  <span className="machine-line uppercase text-[0.6rem] font-bold text-[#5c5850]">
                    {exp.period}
                  </span>
                </div>

                <div className="p-5 md:p-7 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    <h3 className="engraved font-bold text-lg md:text-xl">
                      {exp.title}
                    </h3>
                    <p className="machine-line uppercase text-[0.7rem] font-bold text-[#6b1f2e] mt-1.5">
                      {exp.company}
                    </p>
                    <ul className="mt-4 space-y-2.5 list-disc pl-5 text-[#5c5850] leading-relaxed max-w-[65ch] marker:text-[#6b1f2e]">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden md:block pt-2">
                    <Stamp
                      lines={exp.stampLines}
                      ink={exp.ink}
                      rotate={exp.rotate}
                      variant="rect"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
