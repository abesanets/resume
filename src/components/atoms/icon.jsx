// src/components/atoms/Icon.jsx

const Icon = ({ name, size = 'sm' }) => {
  const iconSize = {
    sm: { width: 10, height: 10 },
    md: { width: 12, height: 12 },
    lg: { width: 16, height: 16 }
  }[size];
  
  return (
    <div className="icon" style={iconSize}>
      {/* В реальном приложении здесь будут SVG иконки */}
      <img src={name} alt="Email" style={{ 
        width: '100%', 
        height: '100%', 
      }}/>
    </div>
  );
};

export default Icon;