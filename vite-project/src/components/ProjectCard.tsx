import React from 'react';
import type { Project } from '../data/projectsData';
import { ExternalLink, Maximize2, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <article className="project-card">
      {/* Thumbnail Container */}
      <div className="card-media-wrapper" onClick={() => onOpenModal(project)}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="card-media"
          loading="lazy"
        />
        <div className="card-media-overlay">
          <div className="overlay-content">
            <span className="inspect-pill">
              <Maximize2 size={15} />
              <span>Inspect Breakdown</span>
            </span>
          </div>
        </div>

        {/* Category Pill */}
        <div className="category-tag">
          <span className="cat-dot"></span>
          <span>{project.category}</span>
        </div>
      </div>

      {/* Card Info Body */}
      <div className="card-body">
        {/* Software badges */}
        <div className="software-pills">
          {project.software.map((sw, idx) => (
            <span key={idx} className="software-pill">
              {sw}
            </span>
          ))}
        </div>

        <h3 className="card-title" onClick={() => onOpenModal(project)}>
          {project.title}
        </h3>

        <p className="card-subtitle">{project.subtitle}</p>

        <p className="card-summary">{project.summary}</p>

        {/* Card Footer with specs and links */}
        <div className="card-footer">
          <button
            type="button"
            className="btn-card-inspect"
            onClick={() => onOpenModal(project)}
          >
            <Layers size={14} />
            <span>Technical Breakdown</span>
          </button>

          <a
            href={project.artstationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-artstation"
            title="Open project on ArtStation"
            onClick={(e) => e.stopPropagation()}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
            </svg>
            <span>ArtStation</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  );
};
