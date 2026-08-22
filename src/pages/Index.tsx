import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import JourneySection from '@/components/JourneySection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <ExperienceSection />
      <ContactSection />

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            <span className="text-primary">{'>'}</span> Built by Henry Mosiali © {new Date().getFullYear()}
          </p>
          <p className="font-mono text-xs">
            Crafted with React + TypeScript + Three.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
