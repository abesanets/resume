// components2/pages/Resume.jsx
import React from 'react';
import ResumeTemplate from '../templates/ResumeTemplate';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="browser-toolbar">
        <div className="controls">
          <div className="control-btn close-btn"></div>
          <div className="control-btn maximise-btn"></div>
          <div className="control-btn minimise-btn"></div>
        </div>
      </div>
      
      <ResumeTemplate />
    </div>
  );
};

export default Resume;