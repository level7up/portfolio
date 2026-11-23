export function Footer() {
  return (
    <footer className="bg-[#6b1f2e] border-t-2 border-[#3d0f1a] text-[#f7f2e7]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <p className="engraved font-bold text-sm tracking-[0.16em]">
              AbdulAlim Mohamed
            </p>
            <p className="machine-line uppercase text-[0.58rem] font-bold text-[#f7f2e7]/65 mt-2">
              Senior Full-Stack Engineer · Cairo, Egypt
            </p>
          </div>

          <nav className="flex flex-wrap gap-5">
            {[
              { name: "About", href: "#about" },
              { name: "Experience", href: "#experience" },
              { name: "Projects", href: "#projects" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/abdulalim-mohamed-231506140/" },
              { name: "GitHub", href: "https://github.com/level7up" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="machine-line uppercase text-[0.6rem] font-bold text-[#f7f2e7]/70 hover:text-[#f7f2e7] underline underline-offset-4 decoration-[#f7f2e7]/30 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-7 pt-5 border-t border-[#f7f2e7]/20 machine-line uppercase text-[0.58rem] font-bold text-[#f7f2e7]/55">
          © {new Date().getFullYear()} AbdulAlim Mohamed
        </p>
      </div>
    </footer>
  );
}
