// components2/molecules/ContactInfo.jsx
import React from 'react';
import Icon from '../atoms/Icon';

const ContactInfo = ({ iconName, label, value }) => {
  return (
    <div className="info-row">
      <div className="icon-wrapper">
        <Icon name={iconName} />
      </div>
      <div className="info-text">
        <div className="info-label">{label}</div>
        <div className="info-value">{value}</div>
      </div>
    </div>
  );
};

export default ContactInfo;