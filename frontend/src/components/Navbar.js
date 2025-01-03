import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import light from '../assests/images/light.svg';
import darkWhite from '../assests/images/dark-white.svg';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Function to handle dark mode toggle
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Effect to apply dark mode based on the state
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#1E1E1E"; // Dark background
      localStorage.setItem('theme', 'dark'); // Store preference
    } else {
      document.body.style.backgroundColor = "#ffffff"; // Light background
      localStorage.setItem('theme', 'light'); // Store preference
    }
  }, [darkMode]);

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-texts">
        <a id="brand-logo">Astrainsight</a>
        <div className="navbar-links">
          <a href="#">Chat</a>
          <a href="#">Team</a>
        </div>
      </div>
      <div className="navbar-mode">
        <img src={darkWhite} alt="dark" />
        {darkMode ? (
          <ToggleOnIcon fontSize="large" color="primary" onClick={handleDarkMode} />
        ) : (
          <ToggleOffIcon fontSize="large" color="black" onClick={handleDarkMode} />
        )}
        <img src={light} alt="light" />
      </div>
    </nav>
  );
};

export default Navbar;
