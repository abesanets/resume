// components2/templates/ResumeTemplate.jsx
import React from 'react';
import Sidebar from '../organisms/Sidebar';
import ProjectsSection from '../organisms/ProjectsSection';
import ExperienceSection from '../organisms/ExperienceSection';
import EducationSection from '../organisms/EducationSection';
import SkillsSection from '../organisms/SkillsSection';
import ToolsSection from '../organisms/ToolsSection';

const ResumeTemplate = () => {
  return (
    <div className="resume-content">
      <Sidebar />
      
      <div className="main-content">
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ToolsSection />
      </div>
    </div>
  );
};

export default ResumeTemplate;