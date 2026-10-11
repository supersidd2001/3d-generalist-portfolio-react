import React, { useState, useEffect } from 'react';
import type { Project } from '../data/projectsData';
import { X, ExternalLink, Box, Eye, CheckCircle2, Sliders, Image as ImageIcon } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [shaderMode, setShaderMode] = useState<'shaded' | 'clay' | 'wireframe'>('shaded');

  useEffect(() => {
    setActiveImageIndex(0);
    setShaderMode('shaded');
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || {
    url: project.thumbnail,
    label: 'Primary Render'
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-category-chip">{project.category}</span>
            <span className="modal-divider">•</span>
            <span className="modal-software-list">{project.software.join(' • ')}</span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: Split 2-Column Layout */}
        <div className="modal-body-grid">
          {/* Left Column: Viewport & Render Modes */}
          <div className="modal-viewport-col">
            <div className={`modal-render-container shader-${shaderMode}`}>
              <img
                src={currentImage.url}
                alt={currentImage.label}
                className="modal-primary-image"
              />

              {/* Wireframe Grid Overlay simulation */}
              {shaderMode === 'wireframe' && (
                <div className="wireframe-grid-overlay" />
              )}

              {/* Shader Mode HUD Switcher */}
              <div className="shader-hud">
                <span className="hud-title">SHADER MODE:</span>
                <button
                  type="button"
                  className={`shader-btn ${shaderMode === 'shaded' ? 'active' : ''}`}
                  onClick={() => setShaderMode('shaded')}
                >
                  <ImageIcon size={13} />
                  <span>Beauty Shaded</span>
                </button>
                <button
                  type="button"
                  className={`shader-btn ${shaderMode === 'clay' ? 'active' : ''}`}
                  onClick={() => setShaderMode('clay')}
                  title="Simulate untextured Clay / Ambient Occlusion render"
                >
                  <Box size={13} />
                  <span>Clay AO</span>
                </button>
                <button
                  type="button"
                  className={`shader-btn ${shaderMode === 'wireframe' ? 'active' : ''}`}
                  onClick={() => setShaderMode('wireframe')}
                  title="Simulate technical edge wireframe overlay"
                >
                  <Eye size={13} />
                  <span>Wireframe</span>
                </button>
              </div>

              {/* View label */}
              <div className="image-label-tag">
                <span>{currentImage.label}</span>
              </div>
            </div>

            {/* Gallery Angle Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="gallery-thumbs-row">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img.url} alt={img.label} className="thumb-img" />
                    <span className="thumb-label">{img.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Technical Details & ArtStation Link */}
          <div className="modal-details-col">
            <h2 className="modal-title">{project.title}</h2>
            <h4 className="modal-subtitle">{project.subtitle}</h4>

            <div className="modal-artstation-callout">
              <div className="callout-text">
                <span className="callout-lead">ArtStation Project Reference</span>
                <span className="callout-desc">Full breakdown and high-resolution renders published on ArtStation.</span>
              </div>
              <a
                href={project.artstationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-artstation-direct"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
                </svg>
                <span>View on ArtStation</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Technical Specs Matrix */}
            <div className="modal-specs-box">
              <h5 className="specs-box-title">
                <Sliders size={14} />
                <span>Technical Specifications</span>
              </h5>
              <div className="specs-grid">
                {project.specs.workflow && (
                  <div className="spec-item">
                    <span className="spec-label">Workflow:</span>
                    <span className="spec-val">{project.specs.workflow}</span>
                  </div>
                )}
                {project.specs.polyCount && (
                  <div className="spec-item">
                    <span className="spec-label">Topology / Mesh:</span>
                    <span className="spec-val">{project.specs.polyCount}</span>
                  </div>
                )}
                {project.specs.renderEngine && (
                  <div className="spec-item">
                    <span className="spec-label">Render Engine:</span>
                    <span className="spec-val">{project.specs.renderEngine}</span>
                  </div>
                )}
                {project.specs.textureRes && (
                  <div className="spec-item">
                    <span className="spec-label">Textures:</span>
                    <span className="spec-val">{project.specs.textureRes}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="modal-description-section">
              <h5>Project Overview</h5>
              <p>{project.description}</p>
            </div>

            {/* Key Features */}
            {project.keyFeatures.length > 0 && (
              <div className="modal-features-section">
                <h5>Modeling & Production Highlights</h5>
                <ul className="features-list">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={15} className="feature-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
