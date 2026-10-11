import React from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { Terminal, Sliders, Box, Cpu } from 'lucide-react';

export const LabSection: React.FC = () => {
  return (
    <section id="lab" className="lab-section">
      <div className="section-container">
        <div className="section-header-block">
          <div className="section-badge">
            <Terminal size={14} className="badge-sparkle" />
            <span>INTERACTIVE REAL-TIME LAB</span>
          </div>
          <h2 className="section-title">
            Real-Time 3D Geometry & Shading Viewport
          </h2>
          <p className="section-desc">
            Interact with real-time 3D hard-surface geometry directly in your browser. Rotate with your mouse or finger, switch between Shaded, Wireframe, and Point Cloud shaders, and inspect lighting response.
          </p>
        </div>

        <div className="lab-viewport-card">
          <div className="lab-controls-sidebar">
            <div className="sidebar-group">
              <h5 className="sidebar-title">
                <Sliders size={14} />
                <span>Engine Capabilities</span>
              </h5>
              <ul className="sidebar-specs">
                <li>
                  <span className="spec-bullet">•</span>
                  <span>WebGL 2.0 Hardware Accelerated</span>
                </li>
                <li>
                  <span className="spec-bullet">•</span>
                  <span>Real-time Phong & Standard PBR</span>
                </li>
                <li>
                  <span className="spec-bullet">•</span>
                  <span>Dynamic Turntable Inertia & Damping</span>
                </li>
                <li>
                  <span className="spec-bullet">•</span>
                  <span>Multi-Source Point & Rim Lighting</span>
                </li>
              </ul>
            </div>

            <div className="sidebar-group">
              <h5 className="sidebar-title">
                <Box size={14} />
                <span>Topology Guide</span>
              </h5>
              <p className="sidebar-note">
                In production pipelines, maintaining clean edge loops and planar surfaces ensures smooth subdivision smoothing without pinching or artifacting around cylinder joints.
              </p>
            </div>

            <div className="sidebar-group">
              <h5 className="sidebar-title">
                <Cpu size={14} />
                <span>Viewport Modes</span>
              </h5>
              <div className="viewport-legend">
                <div className="legend-item">
                  <span className="legend-box shaded"></span>
                  <span><strong>Shaded:</strong> Matte Metallic studio look</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box wire"></span>
                  <span><strong>Wireframe:</strong> Mathematical edge flow</span>
                </div>
                <div className="legend-item">
                  <span className="legend-box cloud"></span>
                  <span><strong>Point Cloud:</strong> Vertex coordinate matrix</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lab-canvas-area">
            <ThreeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};
