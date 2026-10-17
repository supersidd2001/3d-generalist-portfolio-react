import React from 'react';
import { ExternalLink, CheckCircle2, Award, Briefcase, Sparkles, GraduationCap, Trophy, Film } from 'lucide-react';
import { RESUME_DATA } from '../data/projectsData';

export const AboutSection: React.FC = () => {
  const softwareStack = [
    { name: 'Autodesk Maya', role: '3D Character/Prop Modeling, Rigging & Layout', level: 'Expert' },
    { name: 'Blender', role: 'Hard-Surface Modeling, Cycles LookDev & Lighting', level: 'Expert' },
    { name: 'ZBrush', role: 'Digital Sculpting & High-Resolution Topology', level: 'Proficient' },
    { name: 'Substance Painter', role: 'PBR Texturing, Weathering & Material Authoring', level: 'Advanced' },
    { name: 'Adobe Photoshop', role: 'Texture Adjustments & LookDev Concepts', level: 'Advanced' },
    { name: 'Adobe After Effects & Premiere Pro', role: 'Compositing, VFX & Showreel Assembly', level: 'Proficient' },
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
              <strong>3D Artist | Modelling & Rigging Specialist</strong> with hands-on production experience across the full asset pipeline.
            </p>

            <p className="about-text">
              {RESUME_DATA.summary}
            </p>

            <div className="about-bullet-points">
              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Production 3D Modelling & Topology:</strong> Modelling production-ready 3D assets in Autodesk Maya and Blender, ensuring clean topology and optimized polycounts.
                </div>
              </div>

              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Character & Prop Rigging:</strong> Building robust skeletal rigs for characters and props with intuitive animation controls and skin deformation.
                </div>
              </div>

              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Substance PBR Texturing & Environments:</strong> Designing atmospheric 3D environments and texturing assets aligned with visual style and art direction.
                </div>
              </div>

              <div className="about-bullet">
                <CheckCircle2 size={18} className="bullet-check" />
                <div>
                  <strong>Animation & 12 Principles:</strong> Producing character and scene animations, collaborating closely with leads to iterate and meet studio deadlines.
                </div>
              </div>
            </div>

            {/* Experience & Shipped Project Callout */}
            <div className="experience-card-block">
              <div className="exp-card-header">
                <Briefcase size={18} className="exp-icon" />
                <div>
                  <h4 className="exp-title">{RESUME_DATA.internship.role} — {RESUME_DATA.internship.company}</h4>
                  <span className="exp-period">{RESUME_DATA.internship.period} • {RESUME_DATA.internship.location}</span>
                </div>
              </div>
              <ul className="exp-list">
                {RESUME_DATA.internship.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="shipped-project-pill">
                <Film size={14} />
                <span>Shipped Project: <strong>{RESUME_DATA.shippedProject.title}</strong> ({RESUME_DATA.shippedProject.tools}) — Rigging & 3D Environments</span>
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
                <span>Contact for Roles</span>
              </a>
            </div>
          </div>

          {/* Right Column: Software Stack, Education & Awards */}
          <div className="about-stack-col">
            <div className="software-stack-card">
              <div className="stack-card-header">
                <Award size={18} className="stack-icon" />
                <h4>Technical Software & Core Skills</h4>
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

              {/* Education section */}
              <div className="about-education-box">
                <div className="edu-header">
                  <GraduationCap size={18} className="edu-icon" />
                  <h4>Education & Training</h4>
                </div>
                <div className="edu-item">
                  <div className="edu-title">TRON Institute of Animation, Sandip University</div>
                  <div className="edu-sub">B.Voc. in Animation & Graphic Design • Nashik, Maharashtra, India</div>
                  <p className="edu-details">
                    Comprehensive training in 3D Character Modeling, 3D FX & Dynamics, Advanced Visual Effects, Rigging & Animation, Rendering & Compositing, Lighting (V-Ray, Mental Ray), and 2D Animation Pipeline.
                  </p>
                </div>
                <div className="edu-item">
                  <div className="edu-title">National Institute of Open Schooling (NIOS)</div>
                  <div className="edu-sub">Senior Secondary (XII - Mangalore) & Secondary (X - Dubai, UAE)</div>
                </div>
              </div>

              {/* Extracurricular Award */}
              <div className="extracurricular-badge-box">
                <Trophy size={16} className="trophy-icon" />
                <div className="trophy-text">
                  <strong>{RESUME_DATA.extracurricular.achievement}</strong>
                  <span>{RESUME_DATA.extracurricular.championship} ({RESUME_DATA.extracurricular.location}, {RESUME_DATA.extracurricular.date})</span>
                </div>
              </div>

              <div className="artist-availability-notice">
                <Briefcase size={16} className="avail-icon" />
                <div className="avail-text">
                  <strong>Seeking Entry-Level Roles:</strong>
                  <span>Available for 3D Modelling, Rigging Specialist, and 3D Generalist positions.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
