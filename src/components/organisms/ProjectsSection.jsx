// components2/organisms/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="section">
      <div className="step-icon">
        <div className="step-dot">
          <div className="dot"></div>
        </div>
        <div className="step-divider"></div>
      </div>
      
      <div className="section-content">
        <h2 className="section-title">Latest projects</h2>
        
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <img 
                src="/photos/figma.png" 
                alt="Powerful Design System" 
                className="project-logo"
              />
              <div>
                <h3 className="project-title">Powerful Design System</h3>
                <p className="project-description">
                  Figma UI Kit and Design System targeting a wide variety of use cases.
                </p>
              </div>
            </div>
            <div className="project-link">
              <div className="link-icon">
                {/* Figma иконка */}
                <img 
                src="/photos/figma_icon.png" 
                alt="Powerful Design System"
                style={{ 
                  width: '12x', 
                  height: '15px'
                }} 
              />
              </div>
              <p className="link-text">https//figma.com</p>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-header">
              <img 
                src="/photos/ui8.png" 
                alt="Modern Website" 
                className="project-logo"
              />
              <div>
                <h3 className="project-title">Modern Website</h3>
                <p className="project-description">
                  Powerful website + dashboard template for your next Chakra UI project.
                </p>
              </div>
            </div>
            <div className="project-link">
              <div className="link-icon">
                {/* Link иконка */}
                <img 
                src="/photos/ui8_icon.png" 
                alt="Powerful Design System"
                style={{ 
                  width: '12x', 
                  height: '12px'
                }} 
              />
              </div>
              <p className="link-text">https://ui-8.net</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;