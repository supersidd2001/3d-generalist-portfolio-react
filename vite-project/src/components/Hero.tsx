import React from 'react';
import { ArrowDown, ExternalLink, Sparkles, Layers, Box, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background-grid" />
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />

      <div className="hero-container">
        {/* Left Column: Copy & Actions */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-chip">
              <Sparkles size={13} className="chip-icon" />
              <span>3D ARTIST • MODELLING & RIGGING SPECIALIST</span>
            </span>
            <span className="eyebrow-pipeline">MAYA • BLENDER • SUBSTANCE PAINTER</span>
          </div>

          <h1 className="hero-title">
            Crafting Production-Ready <span className="gradient-text">3D Assets</span>, Skeletal Rigs & Atmospheric Worlds.
          </h1>

          <p className="hero-subtitle">
            3D Artist with hands-on production experience across the full asset pipeline — modelling, rigging, texturing, environment design, and animation. Completed a 3-month studio internship at <strong>SUENOS Entertainment</strong> and contributed to the shipped project <strong>Code Within</strong>. Trained at <strong>TRON Institute of Animation (Sandip University)</strong> with a strong foundation in Autodesk Maya and Blender. Seeking an entry-level 3D modelling / rigging role.
          </p>

          <div className="hero-actions">
            <a href="#portfolio" className="btn-primary">
              <span>View 3D Showcase</span>
              <ArrowDown size={16} />
            </a>

            <a
              href="https://www.artstation.com/soham_shinde"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary artstation-glow"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
              </svg>
              <span>ArtStation Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Quick Pillars */}
          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Layers size={18} />
              </div>
              <div>
                <div className="stat-value">3D Modelling</div>
                <div className="stat-label">Maya, Blender & Clean Topology</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Box size={18} />
              </div>
              <div>
                <div className="stat-value">Rigging & Animation</div>
                <div className="stat-label">Skeletal Rigs & 12 Principles</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Compass size={18} />
              </div>
              <div>
                <div className="stat-value">PBR & Environments</div>
                <div className="stat-label">Substance Painter, Cycles & V-Ray</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
