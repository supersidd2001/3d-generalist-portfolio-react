import { useState } from 'react';
import type { Project } from './data/projectsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { DisciplinesSection } from './components/DisciplinesSection';

import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
