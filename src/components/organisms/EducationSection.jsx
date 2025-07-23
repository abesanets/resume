// components2/organisms/EducationSection.jsx
import React from 'react';

const EducationSection = () => {
  const educations = [
    {
      institution: "Memorisely",
      course: "Build a design system",
      image: "src/photos/education/memorizely.png",
      date: "Oct 2021"
    },
    {
      institution: "UX academy",
      course: "UX Design certificate",
      image: "src/photos/education/UXacademy.png",
      date: "Feb 2020"
    },
    {
      institution: "Coursera",
      course: "User research course",
      image: "src/photos/education/couersera.png",
      date: "Dec 2019"
    }
  ];
  
  return (
    <div className="section">
      <div className="step-icon">
        <div className="step-dot">
          <div className="dot"></div>
        </div>
        <div className="step-divider"></div>
      </div>
      
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div 
              className="education-card" 
              key={index}
              style={{
                borderTopLeftRadius: index === 0 ? '4px' : '0',
                borderTopRightRadius: index === educations.length - 1 ? '4px' : '0',
                borderBottomLeftRadius: index === 0 ? '4px' : '0',
                borderBottomRightRadius: index === educations.length - 1 ? '4px' : '0'
              }}
            >
              <div className="education-header">
                <img 
                  src={edu.image} 
                  alt={edu.institution} 
                  className="education-logo"
                />
                <p className="education-institution">{edu.institution}</p>
              </div>
              
              <h3 className="education-title">{edu.course}</h3>
              <p className="education-date">{edu.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;