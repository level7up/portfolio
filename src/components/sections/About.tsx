"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reveal: Variants = {
    hidden: { opacity: 1, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const profile = [
    { label: "Full name", value: "AbdulAlim Mohamed AbdulAlim" },
    { label: "Email", value: "abdoleemos200@gmail.com" },
    { label: "Phone", value: "+20 100 287 4060" },
    { label: "Location", value: "Cairo, Egypt" },
    { label: "Languages", value: "Arabic (native) · English (advanced) · German (beginner)" },
    { label: "Education", value: "B.Sc. Computer Science — High Institute of CS & Information Systems, 2015–2019" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <SectionHead title="About" page="Page 02 · Data" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">
            <motion.div
              variants={reveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="engraved font-bold text-lg md:text-xl leading-snug">
                Senior Full-Stack Engineer with{" "}
                <span className="text-[#6b1f2e]">5+ years</span> shipping
                production software
              </h3>

              <div className="space-y-4 text-[#5c5850] leading-relaxed max-w-[65ch]">
                <p>
                  I ship and run production software for clients in Egypt, the
                  UAE, Saudi Arabia, Qatar and Germany. Specialist in
                  PHP/Laravel backends: multi-tenant architecture, REST APIs,
                  payment and e-invoicing integrations, and message-driven
                  processing.
                </p>
                <p>
                  Core engineer on Gdawel, a multi-tenant ERP serving 150+
                  businesses in Saudi Arabia, working across the full lifecycle
                  from technical design to deployment and production support.
                  Author of seven open-source Laravel and Node.js packages.
                </p>
              </div>

              <a
                href="#experience"
                className="inline-block machine-line uppercase text-[0.65rem] font-bold text-[#6b1f2e] underline underline-offset-4 hover:text-[#521522] transition-colors"
              >
                → Read the entries
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.15 }}
              className="bg-[#fbf8f1] border-2 border-[#1c1c18]"
            >
              <div className="bg-[#6b1f2e] text-[#f7f2e7] px-5 py-2.5 flex items-center justify-between">
                <span className="engraved text-[0.68rem] font-bold tracking-[0.16em]">
                  Particulars
                </span>
                <span className="machine-line text-[0.58rem] font-bold">
                  FORM P-11
                </span>
              </div>
              <dl className="divide-y divide-[#1c1c18]/12">
                {profile.map((row) => (
                  <div key={row.label} className="px-5 py-3">
                    <dt className="machine-line uppercase text-[0.55rem] font-bold text-[#5c5850]">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-semibold mt-1 leading-snug">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
