import React from 'react';
import { SKILLS_MATRIX, PIPELINE_STEPS } from '../data/projectsData';
import { Layers, Building2, Palette, Sun, Cpu, Box, ArrowRight } from 'lucide-react';

export const DisciplinesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={22} className="disc-icon" />;
      case 'Building2':
        return <Building2 size={22} className="disc-icon" />;
      case 'Palette':
        return <Palette size={22} className="disc-icon" />;
      case 'Sun':
        return <Sun size={22} className="disc-icon" />;
      case 'Cpu':
        return <Cpu size={22} className="disc-icon" />;
      case 'Box':
      default:
        return <Box size={22} className="disc-icon" />;
    }
  };

  return (
    <section id="disciplines" className="disciplines-section">
      <div className="section-container">
        {/* Disciplines Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="section-title">
            3D Generalist Disciplines & Technical Stack
          </h2>
          <p className="section-desc">
            A comprehensive pipeline covering hard-surface modeling, spatial environment layouts, PBR texturing, and cinematic look development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="disciplines-grid">
          {SKILLS_MATRIX.map((skill, idx) => (
            <div key={idx} className="discipline-card">
              <div className="disc-card-top">
                <div className="disc-icon-container">
                  {getIcon(skill.icon)}
                </div>
                <div className="disc-tools-badge">{skill.tools}</div>
              </div>

              <h3 className="disc-title">{skill.category}</h3>
              <p className="disc-desc">{skill.description}</p>

              <div className="disc-progress-box">
                <div className="disc-progress-labels">
                  <span>Proficiency</span>
                  <span className="disc-percent">{skill.level}%</span>
                </div>
                <div className="disc-progress-bar-bg">
                  <div
                    className="disc-progress-bar-fill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Pipeline Timeline */}
        <div id="pipeline" className="pipeline-container-block">
          <div className="pipeline-header">
            <span className="pipeline-chip">PRODUCTION METHODOLOGY</span>
            <h3 className="pipeline-headline">From Concept Blockout to Final Beauty Render</h3>
            <p className="pipeline-lead">
              A structured 5-stage production process ensuring quad-dominant topology, zero texture stretching, and physically plausible materials.
            </p>
          </div>

          <div className="pipeline-steps-grid">
            {PIPELINE_STEPS.map((st, idx) => (
              <div key={idx} className="pipeline-step-card">
                <div className="step-number">{st.step}</div>
                <h4 className="step-title">{st.title}</h4>
                <p className="step-desc">{st.desc}</p>
                {idx < PIPELINE_STEPS.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
