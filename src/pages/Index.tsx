import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import JourneySection from '@/components/JourneySection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen overflow-x-clip bg-background text-foreground">
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">
      Skip to content
    </a>
    <Navbar />
    <main id="main">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
