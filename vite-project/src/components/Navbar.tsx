import React, { useState, useEffect } from 'react';
import { ExternalLink, Menu, X, Box } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`portfolio-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Brand / Monogram */}
        <a href="#hero" className="nav-brand">
          <div className="brand-icon">
            <Box size={20} className="brand-box-icon" />
          </div>
          <div className="brand-text">
            <span className="brand-name">SOHAM SHINDE</span>
            <span className="brand-role">3D ARTIST • MODELLING & RIGGING</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-desktop-links">
          <a href="#portfolio" className="nav-link">Showcase</a>
          <a href="#disciplines" className="nav-link">Disciplines</a>
          <a href="#about" className="nav-link">About & Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* Right CTA / ArtStation link & Theme Toggle */}
        <div className="nav-actions">
          <div className="status-badge" title="Seeking entry-level 3D modelling / rigging role">
            <span className="status-dot"></span>
            <span className="status-text">Seeking 3D Modelling / Rigging Role</span>
          </div>

          <ThemeToggle />

          <a
            href="https://www.artstation.com/soham_shinde"
            target="_blank"
            rel="noopener noreferrer"
            className="artstation-nav-btn"
            title="Visit Soham's ArtStation Profile"
          >
            <svg className="artstation-svg-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
            </svg>
            <span>ArtStation</span>
            <ExternalLink size={13} className="ext-icon" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Showcase</a>
          <a href="#disciplines" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Disciplines</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile-link">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Contact</a>
          
          <div className="mobile-theme-wrapper">
            <span className="mobile-theme-heading">Appearance</span>
            <ThemeToggle variant="segmented" />
          </div>

          <a
            href="https://www.artstation.com/soham_shinde"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-artstation-btn"
          >
            <span>Visit ArtStation Profile</span>
            <ExternalLink size={15} />
          </a>
        </div>
      )}
    </nav>
  );
};
