"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHead } from "@/components/section-head";

const groups = [
  {
    title: "Backend & APIs",
    ink: "purple",
    skills: ["PHP", "Laravel", "Node.js", "RESTful APIs", "OAuth / Passport", "Composer packages"],
  },
  {
    title: "Frontend",
    ink: "green",
    skills: ["Vue.js", "Inertia", "Livewire", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Architecture & Data",
    ink: "burgundy",
    skills: ["Multi-tenancy", "Multi-database", "MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "OOP / SOLID"],
  },
  {
    title: "Tools & AI",
    ink: "red",
    skills: ["Git", "Linux", "Bash", "Docker", "OpenRouter", "MCP servers", "Ollama", "AI agents"],
  },
];

const inkText: Record<string, string> = {
  purple: "stamp-ink-purple",
  green: "stamp-ink-green",
  burgundy: "stamp-ink-burgundy",
  red: "stamp-ink-red",
};

const inkBorder: Record<string, string> = {
  purple: "stamp-border-purple",
  green: "stamp-border-green",
  burgundy: "stamp-border-burgundy",
  red: "stamp-border-red",
};

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <SectionHead title="Skills" page="Page 04 · Skills" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {groups.map((group) => (
              <motion.div
                key={group.title}
                variants={item}
                className="bg-[#fbf8f1] border-2 border-[#1c1c18] p-5"
              >
                <div className="flex items-center justify-between border-b border-[#1c1c18]/25 pb-3 mb-4">
                  <h3 className="engraved font-bold text-sm md:text-base">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 1, scale: 0.94, rotate: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1, rotate: (i % 3) - 1 }
                          : { opacity: 1, scale: 0.94, rotate: 0 }
                      }
                      transition={{ delay: 0.3 + i * 0.04, duration: 0.35 }}
                      className={`border ${inkBorder[group.ink]} ${inkText[group.ink]} px-3 py-1.5 machine-line uppercase text-[0.6rem] font-bold mix-blend-multiply`}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
