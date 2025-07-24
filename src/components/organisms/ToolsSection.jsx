// components2/organisms/ToolsSection.jsx
import React from 'react';

const ToolsSection = () => {
  const tools = [
    [
      { name: "Figma", description: "UI Design, prototyping", image: "/photos/tools/figma.png" },
      { name: "Maze", description: "Product research", image: "/photos/tools/maze.png" },
      { name: "Spline", description: "3D design", image: "/photos/tools/spline.png" },
      { name: "Zeplin", description: "Design workspace", image: "/photos/tools/zeplin.png" }
    ],
    [
      { name: "Vectornator", description: "Graphic Design", image: "/photos/tools/vectonator.png" },
      { name: "Rotato", description: "Mockups", image: "/photos/tools/rotato.png" },
      { name: "VS Code", description: "Code editor", image: "/photos/tools/vscode.png" },
      { name: "Xcode", description: "iOS development", image: "/photos/tools/xcode.png" },
      { name: "Notion", description: "Project managment", image: "/photos/tools/notion.png" }
    ]
  ];
  
  return (
    <div className="section">
      <div className="step-icon">
        <div className="step-dot">
          <div className="dot"></div>
        </div>
      </div>
      
      <div className="section-content">
        <h2 className="section-title">Tools</h2>
        
        <div className="tools-grid">
          {tools.map((row, rowIndex) => (
            <div className="tools-row" key={rowIndex}>
              {row.map((tool, index) => (
                <div 
                  className="tool-card" 
                  key={index}
                  style={{
                    borderTopLeftRadius: rowIndex === 0 && index === 0 ? '4px' : '0',
                    borderTopRightRadius: rowIndex === 0 && index === row.length - 1 ? '4px' : '0',
                    borderBottomLeftRadius: rowIndex === tools.length - 1 && index === 0 ? '4px' : '0',
                    borderBottomRightRadius: rowIndex === tools.length - 1 && index === row.length - 1 ? '4px' : '0'
                  }}
                >
                  <img 
                    src={tool.image} 
                    alt={tool.name} 
                    className="tool-logo"
                  />
                  <p className="tool-name">{tool.name}</p>
                  <p className="tool-description">{tool.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;