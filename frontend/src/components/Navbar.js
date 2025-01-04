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

  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-hidden" : ""}`}>
      <div className="navbar-texts">
        <a href="" id="brand-logo">Astrainsight</a>
        <div className="navbar-links">
          <a href="#">Chat</a>
          <a href="#team-section">Team</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
