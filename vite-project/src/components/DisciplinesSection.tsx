import React from 'react';
import { SKILLS_MATRIX } from '../data/projectsData';
import { Layers, Building2, Palette, Sun, Cpu, Box } from 'lucide-react';

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

      </div>
    </section>
  );
};
