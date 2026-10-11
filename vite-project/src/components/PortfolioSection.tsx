import React, { useState, useMemo } from 'react';
import type { Project } from '../data/projectsData';
import { PROJECTS } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';
import { Search, Filter, Sparkles, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenModal: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Vehicles', 'Machinery', 'Environment'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchesCategory =
        selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.software.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proj.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Sparkles size={14} className="badge-sparkle" />
            <span>ARTSTATION PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="section-title">
            Published 3D Artworks & Models
          </h2>
          <p className="section-desc">
            Directly from <strong>artstation.com/soham_shinde</strong>. Featuring hard-surface military vehicles, industrial machinery, and atmospheric nocturnal environments.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="filter-controls-bar">
          {/* Categories */}
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="tab-count">
                  {cat === 'All'
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="search-box-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search (e.g. Motorcycle, Biplane, Drill, Study, Blender...)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          <div className="no-projects-found">
            <Filter size={36} className="no-icon" />
            <h4>No projects matching "{searchQuery}"</h4>
            <p>Try resetting the search query or category filters.</p>
            <button
              type="button"
              className="btn-reset-filters"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ArtStation Direct Banner */}
        <div className="artstation-banner-card">
          <div className="banner-artstation-info">
            <div className="artstation-large-logo">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 0 0 2.164 1.332h13.684l-2.583-4.475L0 17.723zm23.639-1.285L14.73 1.04a2.43 2.43 0 0 0-2.124-1.24 2.424 2.424 0 0 0-2.125 1.24L8.718 4.148l8.91 15.426h3.987c.928 0 1.763-.53 2.152-1.353a2.427 2.427 0 0 0-.128-2.783v-.003zm-10.748.243l-3.322-5.753-4.52 7.828h6.643l1.199-2.075z"/>
              </svg>
            </div>
            <div>
              <h4 className="banner-title">View All Original Posts on ArtStation</h4>
              <p className="banner-sub">
                Check out the full resolution renders and updates directly on <strong>artstation.com/soham_shinde</strong>.
              </p>
            </div>
          </div>
          <a
            href="https://www.artstation.com/soham_shinde"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary banner-btn"
          >
            <span>Visit artstation.com/soham_shinde</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
