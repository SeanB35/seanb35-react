import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from '../components/useDocumentTitle';

function Home() {
  useDocumentTitle('Sean D. Briganti | Home Page');

  return (
    <main>
      <h2>Home Page</h2>
      <p>Welcome to my personal landing page for ITIS 3135. Here you can find links to my coursework and professional profiles.</p>
      <p>Learn more about me on my <Link to="/introduction">Introduction Page</Link>.</p>
      <p>Click to go to <Link to="/itis3135/">ITIS3135 Site</Link>.</p>
    </main>
  );
}

export default Home;
