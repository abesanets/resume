// components2/atoms/Text.jsx
import React from 'react';
import './Text.css';

const Text = ({ type = 'body', children, color }) => {
  const classMap = {
    title: 'title-text',
    subtitle: 'subtitle-text',
    body: 'body-text',
    caption: 'caption-text'
  };
  
  return (
    <div className={`text ${classMap[type]}`} style={{ color }}>
      {children}
    </div>
  );
};

export default Text;