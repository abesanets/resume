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
      <img 
      src={name} 
      alt="Email" 
      style={{
      width: name === "/photos/contact/location.png" ? '10.5px' : '100%',
      height: name === "/photos/contact/location.png" ? '13.5px' : '100%',
      }} 
      />

    </div>
  );
};

export default Icon;