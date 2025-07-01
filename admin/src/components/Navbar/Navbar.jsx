import React, { useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className="navbar-right">
        <button
          className="theme-toggle-btn"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar;
