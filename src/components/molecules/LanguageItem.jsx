// components2/molecules/LanguageItem.jsx
const LanguageItem = ({ language, level, image }) => {
  return (
    <div className="language-row">
      <div className="flag">
          {/* В реальном приложении здесь будет SVG флага */}
          <img src={image} alt={language} style={{
            width: '100%', 
            height: '100%'
          }}/>
      </div>
      <div className="info-text" style={{
        marginTop: '7px'
          }}>
        <div className="info-value">{language}</div>
        <div className="info-label">{level}</div>
      </div>
    </div>
  );
};

export default LanguageItem;