import { useState } from 'react';
import type { Project } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { LabSection } from './components/LabSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import './index.css';

export function App() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="portfolio-app">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Cinematic Hero with Interactive Three.js Viewport */}
        <Hero />

        {/* ArtStation Featured Projects Showcase & Filters */}
        <PortfolioSection onOpenModal={handleOpenModal} />

        {/* 3D Generalist Disciplines & Production Pipeline */}
        <DisciplinesSection />

        {/* Interactive 3D Real-time Lab */}
        <LabSection />

        {/* About Soham Shinde & Software Stack */}
        <AboutSection />

        {/* Direct Contact & ArtStation Connection */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Interactive Project Breakdown Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
