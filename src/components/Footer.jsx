import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  if (location.pathname === '/itis3135/crappy-page' || location.pathname === '/itis3135/hobby') return null;

  return (
    <footer>
      <nav>
        <Link to="/seanbdesigns"><strong>Sean Briganti Designs</strong></Link>{" "}
        <a href="https://github.com/SeanB35" target="_blank" rel="noopener noreferrer">GitHub</a>{" "}
        <a href="https://webpages.charlotte.edu/sbrigant" target="_blank" rel="noopener noreferrer">CLT Web</a>{" "}
        <a href="https://seanb35.github.io/" target="_blank" rel="noopener noreferrer">GitHub.io</a>{" "}
        <a href="https://www.freecodecamp.org/sbrigant" target="_blank" rel="noopener noreferrer">freeCodeCamp</a>{" "}
        <a href="https://www.linkedin.com/in/sean-briganti/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
      <p>Page designed by <Link to="/seanbdesigns">Sean B Designs</Link> | Certified Super Beaver Architect &copy; 2026</p>
      <p>Certified in <a href="https://www.freecodecamp.org/certification/sbrigant/responsive-web-design-v9" target="_blank" rel="noopener noreferrer">Responsive Web Design</a></p>
      <p>Running on: <a href="https://seanb35-react.vercel.app/" target="_blank" rel="noopener noreferrer">ITIS3135@Vercel</a></p>
    </footer>
  );
}

export default Footer;
