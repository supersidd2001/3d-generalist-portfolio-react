import React from 'react';
import { ArrowUp, Box, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-icon">
              <Box size={20} className="brand-box-icon" />
            </div>
            <div>
              <span className="footer-brand-title">SOHAM SHINDE</span>
              <p className="footer-brand-sub">
                3D Generalist • Vehicles, Machinery & Environments
              </p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#hero">Overview</a>
            <a href="#portfolio">Showcase</a>
            <a href="#disciplines">Disciplines</a>
            <a href="#lab">3D Viewport</a>
            <a href="#about">About</a>
            <a
              href="https://www.artstation.com/soham_shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="artstation-footer-link"
            >
              <span>ArtStation</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={scrollToTop}
            title="Scroll back to top"
          >
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {new Date().getFullYear()} Soham Shinde. All 3D models and artwork from <a href="https://www.artstation.com/soham_shinde" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)' }}>artstation.com/soham_shinde</a>.
          </p>
          <div className="footer-tags">
            <span>Blender</span>
            <span>•</span>
            <span>Substance Painter</span>
            <span>•</span>
            <span>Cycles Renderer</span>
            <span>•</span>
            <span>Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
