// components2/organisms/ExperienceSection.jsx
import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: "Jul 20 - Jan 2022",
      location: "Cupertino",
      company: "Apple",
      image: "/src/photos/companies/apple.png",
      role: "Product designer",
      description: "Omnis minima inventore minus. Aut et incidunt. Aut fugiat culpa illum optio dolorum aut maxime ipsa. Laborum incidunt enim consectetur perspiciatis. Dolore ullam dolor impedit dolorum recusandae facilis quo et. Et ipsam vel sunt qui ut officia voluptatem."
    },
    {
      period: "Oct 2015 - Mar 2020",
      location: "Austin",
      company: "Tesla",
      image: "/src/photos/companies/tesla.png",
      role: "UX designer",
      description: "Commodi atque sit ut qui assumenda earum aperiam occaecati voluptates. Fuga quas aut soluta nostrum et beatae. Maiores repudiandae quibusdam autem enim ut in possimus ad."
    },
    {
      period: "Sep 2014 - Aug 2015",
      location: "Mountain View",
      company: "Google",
      image: "/src/photos/companies/google.png",
      role: "Design system architect",
      description: "Ut molestias animi. Neque voluptate velit corporis adipisci voluptate et qui sed neque. Inventore eos non. Qui eveniet quo incidunt nemo."
    },
    {
      period: "Sep 2010 - Jul 2013",
      location: "Berlin",
      company: "Vectornator",
      image: "/src/photos/companies/penchuk.png",
      role: "Design system architect",
      description: "Non in fugiat aut consequatur deleniti. Consequuntur impedit modi asperiores impedit ut ea aut eligendi doloremque. Fugit laborum ducimus hic tempore velit. Sed vitae et corrupti omnis temporibus. Unde voluptas quaerat ea rerum aspernatur autem assumenda animi fugit. Omnis laborum velit voluptatum similique accusantium eveniet voluptatem."
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
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="exp-step-icon">
                <div className="exp-step-dot">
                  <div className="exp-dot"></div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="exp-step-divider"></div>
                )}
              </div>
              
              <div className="exp-details">
                <div className="exp-date-location">
                  <span className="exp-date">{exp.period}</span>
                  <div className="location-icon">
                    {/* Location иконка */}
                    <img 
                      src="src/photos/companies/location.png" 
                      alt="Powerful Design System"
                      style={{ 
                        width: '3.5px', 
                        height: '4.5px'
                      }} 
                    />
                  </div>
                  <span className="location-text">{exp.location}</span>
                </div>
                
                <div className="exp-company">
                  <img 
                    src={exp.image}
                    alt={exp.company} 
                    className="company-logo"
                  />
                  <div className="company-info">
                    <p className="company-role">{exp.role}</p>
                    <p className="company-name">{exp.company}</p>
                  </div>
                </div>
              </div>
              
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;