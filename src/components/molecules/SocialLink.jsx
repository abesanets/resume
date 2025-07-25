// components2/molecules/SocialLink.jsx
import React from 'react';
// import './SocialLink.css';

const SocialLink = ({ platform, username, image }) => {
  const platformData = {
    instagram: { 
      bg: 'instagram-bg', 
      label: 'Instagram' 
    },
    dribbble: { 
      bg: 'dribbble-bg', 
      label: 'Dribbble' 
    },
    twitter: { 
      bg: 'twitter-bg', 
      label: 'Twitter' 
    },
    linkedin: { 
      bg: 'linkedin-bg', 
      label: 'Linkedin' 
    }
  };
  
  const { bg, label } = platformData[platform];
  
  return (
    <div className="social-row">
      <div className={`social-icon ${bg}`}>
          <img src={image} alt={username} style={{
          width: 20, 
          height: 20
          }}/>
      </div>
      <div className="info-text">
        <div className="info-label">{label}</div>
        <div className="info-value">@{username}</div>
      </div>
    </div>
  );
};

export default SocialLink;