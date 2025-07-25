// src/components/atoms/Icon.jsx

const Icon = ({ name, size = 'sm' }) => {
  const iconSize = {
    sm: { width: 20, height: 20 },
    md: { width: 22, height: 22 },
    lg: { width: 24, height: 24 }
  }[size];
  
  return (
    <div className="icon" style={iconSize}>
      {/* В реальном приложении здесь будут SVG иконки */}
      <img 
      src={name} 
      alt="Email" 
      style={{
      width:'100%',
      height:'100%',
      }} 
      />

    </div>
  );
};

export default Icon;