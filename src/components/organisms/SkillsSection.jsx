// components/organisms/SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  return (
    <div className="section">
      <div className="step-icon">
        <div className="step-dot">
          <div className="dot"></div>
        </div>
        <div className="step-divider"></div>
      </div>
      
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">
                {/* Design иконка */}
                <img 
                src="/photos/skills/paint.png" 
                alt="Powerful Design System"
                style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%'
                }} 
              />
              </div>
              <p className="category-name">Design</p>
            </div>
            
            <div className="skills-list">
              {/* Первый блок с двумя колонками */}
              <div className="skill-card">
                <div className="skill-columns">
                  <p className="skill-text">Web Design</p>
                  <div className="skill-divider"></div>
                  <p className="skill-text">Mobile Design</p>
                </div>
              </div>
              
              {/* Второй блок - единый текст */}
              <div className="skill-card">
                <p className="skill-text">User Experience</p>
              </div>
              
              {/* Третий блок - три строки текста */}
              <div className="skill-card skill-multiline">
                <p className="skill-text">Wireframing</p>
                <p className="skill-text">Prototyping</p>
                <p className="skill-text">Testing</p>
              </div>
              
              {/* Четвертый блок - единый текст */}
              <div className="skill-card">
                <p className="skill-text">Design System</p>
              </div>
            </div>
          </div>
          
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon blue">
                {/* Development иконка */}                
                <img 
                src="/photos/skills/dev.png" 
                alt="Powerful Design System"
                style={{ 
                  width: '6.67px', 
                  height: '4.01px', 
                }} 
              />
              </div>
              <p className="category-name">Development</p>
            </div>
            
            <div className="skills-list">
              {/* Первый блок - единый текст */}
              <div className="skill-card blue">
                <p className="skill-text">React JS</p>
              </div>
              
              {/* Второй блок - три строки текста */}
              <div className="skill-card blue skill-multiline">
                <p className="skill-text">Chakra UI</p>
                <p className="skill-text">Emotion</p>
                <p className="skill-text">Framer</p>
              </div>
              
              {/* Третий блок с двумя колонками */}
              <div className="skill-card blue">
                <div className="skill-columns">
                  <p className="skill-text">Type script</p>
                  <div className="skill-divider"></div>
                  <p className="skill-text">Next JS</p>
                </div>
              </div>
              
              {/* Четвертый блок со сложной структурой */}
              <div className="skill-card blue">
                <div className="skill-complex">
                  <p className="skill-text">HTML</p>
                  <div className="skill-divider"></div>
                  <div className="skill-subgroup">
                    <p className="skill-text">CSS</p>
                    <div className="skill-subdivider"></div>
                    <p className="skill-text">JS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;