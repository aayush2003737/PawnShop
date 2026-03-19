import './LightDark.css';
import { useState, useEffect } from 'react';

function LightDark() {
  
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      if(darkMode){
        document.body.classList.add("dark-theme");
      } else {
        document.body.classList.remove("dark-theme");
      }
    }, [darkMode]);

  
  return (
<>    
    {/* Theme Button */}
    <button className="theme-btn" onClick={toggleTheme}>
      {darkMode ? "☀ Light" : "🌙 Dark"}
    </button>

  
</>
  );
}

export default LightDark;
