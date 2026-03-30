import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isCrappy = location.pathname === '/itis3135/crappy-page';
  const isHobby = location.pathname === '/itis3135/hobby';
  const isRoot = location.pathname === '/' || location.pathname === '/introduction';

  if (isCrappy || isHobby) return null;

  return (
    <header className={isRoot ? '' : 'site-header'}>
      <h1 className={isRoot ? '' : 'site-title'}>Sean Briganti's Super Beaver</h1>
      <nav className={isRoot ? 'nav-main' : 'nav-secondary'}>
        <Link to="/">Home</Link>{" "}
        <Link to="/introduction">Introduction</Link>{" "}
        {!isRoot && <Link to="/itis3135/crappy-page" className="crappy-link">Crappy Page</Link>}
      </nav>
      <hr className="divider" />
      <nav className={isRoot ? 'nav-course' : 'nav-main'}>
        <Link to="/itis3135/">Course Home</Link>{" "}
        {!isRoot && <><Link to="/itis3135/contract">Contract</Link>{" "}</>}
        <Link to="/itis3135/survey">Survey</Link>{" "}
        <Link to="/itis3135/cards">Cards</Link>{" "}
        <Link to="/itis3135/inventory">Inventory</Link>{" "}
        <Link to="/itis3135/documentation">Documentation</Link>{" "}
        <Link to="/itis3135/product">Product</Link>{" "}
        <Link to="/itis3135/website-evaluations">Website Evaluations</Link>{" "}
        <Link to="/itis3135/hobby">Hobby</Link>{" "}
        <Link to="/itis3135/intro-form">Intro Form</Link>
      </nav>
      <hr className="divider" />
      {isRoot && (
        <nav className="nav-extra">
          <Link to="/itis3135/crappy-page" className="crappy-link">Crappy Page</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
