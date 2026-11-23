"use client";

import { motion } from "framer-motion";
import { useScrollTo } from "@/hooks/useScrollTo";
import { Stamp } from "@/components/stamp";

const fields = [
  { label: "Surname", value: "Mohamed AbdulAlim" },
  { label: "Given names", value: "AbdulAlim" },
  { label: "Role", value: "Senior Full-Stack Engineer" },
  { label: "Residence", value: "Cairo, Egypt" },
];

export function HeroSection() {
  const { scrollToSection } = useScrollTo();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col pt-24 pb-0 relative">
      <div className="max-w-6xl mx-auto px-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] gap-10 lg:gap-14 items-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-7"
        >
          <h1 className="engraved font-bold leading-[1.02] text-[clamp(2.4rem,6vw,4.6rem)] tracking-[0.04em]">
            AbdulAlim
            <br />
            Mohamed
          </h1>

          <p className="text-lg md:text-xl text-[#5c5850] max-w-xl leading-relaxed">
            Senior Full-Stack Engineer. I build multi-tenant Laravel systems
            that serve{" "}
            <strong className="text-[#6b1f2e] font-semibold">150+ businesses</strong>{" "}
            in Saudi Arabia.
          </p>

          <dl className="border-y-2 border-[#1c1c18] divide-y divide-[#1c1c18]/15 max-w-lg">
            {fields.map((field) => (
              <div key={field.label} className="flex items-baseline gap-4 py-2.5">
                <dt className="machine-line uppercase text-[0.6rem] font-bold text-[#5c5850] w-32 shrink-0">
                  {field.label}
                </dt>
                <dd className="machine-line text-[0.78rem] font-semibold uppercase tracking-wider">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href="#experience"
              onClick={(e) => handleLinkClick(e, "experience")}
              className="engraved bg-[#6b1f2e] hover:bg-[#521522] text-[#f7f2e7] px-7 py-3.5 text-sm font-bold tracking-[0.14em] transition-colors border-2 border-[#3d0f1a]"
            >
              Open the record
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="engraved border-2 border-[#1c1c18] px-7 py-3.5 text-sm font-bold tracking-[0.14em] hover:bg-[#1c1c18] hover:text-[#f4efe4] transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5 pt-1">
            <a
              href="https://www.linkedin.com/in/abdulalim-mohamed-231506140/"
              target="_blank"
              rel="noopener noreferrer"
              className="machine-line uppercase text-[0.65rem] font-bold text-[#5c5850] hover:text-[#6b1f2e] underline underline-offset-4 decoration-[#6b1f2e]/40 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/level7up"
              target="_blank"
              rel="noopener noreferrer"
              className="machine-line uppercase text-[0.65rem] font-bold text-[#5c5850] hover:text-[#6b1f2e] underline underline-offset-4 decoration-[#6b1f2e]/40 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:abdoleemos200@gmail.com"
              className="machine-line uppercase text-[0.65rem] font-bold text-[#5c5850] hover:text-[#6b1f2e] underline underline-offset-4 decoration-[#6b1f2e]/40 transition-colors"
            >
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative bg-[#fbf8f1] border-2 border-[#1c1c18] p-6 sheet-rules">
            <div className="flex items-center justify-between border-b border-[#1c1c18]/25 pb-3 mb-5">
              <span className="machine-line uppercase text-[0.58rem] font-bold text-[#5c5850]">
                Visa pages
              </span>
              <span className="machine-line uppercase text-[0.58rem] font-bold text-[#5c5850]">
                No. 041
              </span>
            </div>

            <div className="space-y-5 min-h-48">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="machine-line uppercase text-[0.58rem] text-[#5c5850] font-bold">
                    Issued to
                  </p>
                  <p className="engraved font-bold text-sm mt-1">AbdulAlim M.</p>
                </div>
                <p className="machine-line uppercase text-[0.58rem] text-[#5c5850] font-bold text-right">
                  Type
                  <br />
                  <span className="text-[#1c1c18]">ENG</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Stamp
                  lines={["Saudi Arabia", "Gdawel ERP"]}
                  caption="150+ businesses"
                  ink="purple"
                  rotate={-9}
                  variant="oval"
                />
                <Stamp
                  lines={["United Arab", "Emirates"]}
                  caption="Claimizer"
                  ink="green"
                  rotate={7}
                  variant="oval"
                  delay={0.35}
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <Stamp
                  lines={["Qatar"]}
                  caption="World Cup 22"
                  ink="red"
                  rotate={5}
                  variant="oval"
                  delay={0.6}
                />
                <Stamp
                  lines={["Germany"]}
                  caption="EasyCut"
                  ink="burgundy"
                  rotate={-6}
                  variant="oval"
                  delay={0.85}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
