import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import PracticalExperience from "@/components/PracticalExperience";
import PortSwiggerProgress from "@/components/PortSwiggerProgress";
import CyLabProgress from "@/components/CyLabProgress";
import CurrentLearning from "@/components/CurrentLearning";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationsSection from "@/components/PublicationsSection";
import SecurityResearchSection from "@/components/SecurityResearchSection";
import GithubStats from "@/components/GithubStats";
import BlogsSection from "@/components/BlogsSection";
import WhyHireMe from "@/components/WhyHireMe";
import ExperienceSection from "@/components/ExperienceSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import RecruiterSection from "@/components/RecruiterSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background scanline">
      <MatrixRain />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <PracticalExperience />
        
        {/* Progress & Learning Dashboard Section */}
        <section id="progress-dashboard" className="py-16 px-4 relative bg-background/30">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PortSwiggerProgress />
              <CyLabProgress />
              <CurrentLearning />
            </div>
          </div>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <PublicationsSection />
        <SecurityResearchSection />
        <GithubStats />
        <BlogsSection />
        <WhyHireMe />
        <ExperienceSection />
        <ActivitiesSection />
        <RecruiterSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
