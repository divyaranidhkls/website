import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from 'react';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });




  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2024 Divya Rani. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <a href="#">Attributions</a>
        <a href="#">Shout Outs</a>
        <a href="#">Affiliates</a>
      </div>

      <div className="footer-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
    </footer>
  );
};

export default Footer;
