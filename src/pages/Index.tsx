import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background scanline">
      <MatrixRain />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
