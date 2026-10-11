import React from 'react';
import { ExternalLink, CheckCircle2, Award, Briefcase, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const softwareStack = [
    { name: 'Blender', role: 'Primary 3D Modeling & Scene Assembly', level: 'Expert' },
    { name: 'Substance Painter', role: 'PBR Texturing & Surface Weathering', level: 'Advanced' },
    { name: 'Blender Cycles', role: 'Physically Based Lighting & LookDev', level: 'Advanced' },
    { name: 'Autodesk Maya', role: 'Hard-Surface Modeling & Layout', level: 'Proficient' },
    { name: 'Adobe Photoshop', role: 'Texture Adjustments & Post-Processing', level: 'Advanced' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Bio & Core Philosophy */}
          <div className="about-bio-col">
            <div className="section-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>ABOUT THE ARTIST</span>
            </div>

            <h2 className="section-title">
              Hi, I'm <span className="gradient-text">Soham Shinde</span>.
            </h2>

            <p className="about-lead">
              A passionate <strong>3D Generalist</strong> specializing in hard-surface vehicle modeling, industrial machinery, and atmospheric environment lighting.
            </p>

            <p className="about-text">
              My portfolio showcases complex mechanical assemblies—from the historical WW2 military motorcycle with sidecar and vintage biplane aircraft to industrial machinery like the cast-iron drill press, and evocative environments like the quiet nocturnal study room. I emphasize clean geometry, authentic surface wear, and realistic materials using Blender, Substance Painter, and Cycles.
            </p>

            <div className="about-bullet-points">
              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Mechanical & Vehicle Modeling:</strong> Creating realistic engines, suspension linkages, aviation airframes, and workshop tools with real-world scale.
                </div>
              </div>

              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Substance Painter PBR Texturing:</strong> Crafting authentic aged surfaces—scratches, dust, grease, rust, and battlefield wear.
                </div>
              </div>

              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Atmospheric & Studio Lighting:</strong> Masterful illumination with volumetric dust rays, warm kerosene lantern glows, and crisp studio lighting.
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <a
                href="https://www.artstation.com/soham_shinde"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
                </svg>
                <span>Follow on ArtStation</span>
                <ExternalLink size={15} />
              </a>

              <a href="#contact" className="btn-secondary">
                <span>Contact for Projects</span>
              </a>
            </div>
          </div>

          {/* Right Column: Software Stack & Technical Card */}
          <div className="about-stack-col">
            <div className="software-stack-card">
              <div className="stack-card-header">
                <Award size={18} className="stack-icon" />
                <h4>Software & Production Stack</h4>
              </div>

              <div className="software-list">
                {softwareStack.map((tool, idx) => (
                  <div key={idx} className="software-item">
                    <div className="tool-info">
                      <span className="tool-name">{tool.name}</span>
                      <span className="tool-role">{tool.role}</span>
                    </div>
                    <span className="tool-level-badge">{tool.level}</span>
                  </div>
                ))}
              </div>

              <div className="artist-availability-notice">
                <Briefcase size={16} className="avail-icon" />
                <div className="avail-text">
                  <strong>Open for 3D Opportunities:</strong>
                  <span>Available for 3D Generalist, Hard-Surface Modeler, and Prop Artist roles.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
