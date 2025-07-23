// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './components/pages/Resume';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

function autoScale(baseWidth = 594) {
const scaleWrapper = document.getElementById('root');
  const currentWidth = window.innerWidth;
  const scale = currentWidth / baseWidth;
  scaleWrapper.style.transform = `scale(${scale})`;
}

// Вызываем при загрузке и при изменении размера окна
window.addEventListener('load', () => autoScale());
window.addEventListener('resize', () => autoScale());
