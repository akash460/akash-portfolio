import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { WhyMeSection } from "@/components/sections/why-me-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative">
      <SmoothScroll />
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <WhyMeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

