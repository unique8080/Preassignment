import React from "react";
import { useState } from "react";
import "./Navbar.css";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import light from '../assests/images/light.svg';
import darkWhite from '../assests/images/dark-white.svg';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => { 
    setDarkMode(!darkMode);
    // if(darkMode){
    //   document.body.style.backgroundColor = "#fff";
    // }else{
    //   document.body.style.backgroundColor}
      
  };
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
        {darkMode ? <ToggleOnIcon fontSize="large" color="primary" onclick={handleDarkMode}/> : <ToggleOffIcon fontSize="large" color="black" onclick={handleDarkMode}/>}
        <img src={light} alt="light"/>
      </div>
    </nav>
  );
};

export default Navbar;
