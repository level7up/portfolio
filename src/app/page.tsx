import { AnimatedBackground } from "@/components/animated-background";
import { BackgroundToggle } from "@/components/background-toggle";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { ExperienceSection } from "@/components/sections/Experience";
import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { SkillsSection } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <AnimatedBackground />
      <CustomCursor />
      <BackgroundToggle />
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
