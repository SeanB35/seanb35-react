import React, { useEffect } from 'react';
import useDocumentTitle from '../components/useDocumentTitle';

function CrappyPage() {
  useDocumentTitle('THE WORST PAGE');

  return (
    <main style={{ 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      color: 'black', 
      paddingTop: '50px', 
      paddingLeft: '10px', 
      paddingRight: '100px',
      boxSizing: 'border-box',
      zIndex: 1000,
      margin: 0
    }}>
      <h2 style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", textTransform: 'none', border: 'none', margin: 0 }}>This is a Level 2 Header</h2>
      <h1 style={{ fontFamily: "'Papyrus', serif", textTransform: 'none', border: 'none', margin: 0 }}>Then a Level 1 Header</h1>

      <br /><br /><br />
      <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Topomapcropped.jpg"
        width="400" height="400"
        alt="This is a very long and unnecessary alt text that describes the image in far too much detail while being generally unhelpful and annoying to screen readers because it just keeps going on and on and on for no reason at all"
        style={{ filter: 'none', borderTop: '30px solid red', borderRight: '30px dotted blue', borderBottom: '30px dashed green', borderLeft: '30px double yellow' }} />

      <h3>The migratory patterns of the North American Salmon are fascinating.</h3>

      <br />

      <p style={{ textAlign: 'center', fontSize: '50px', fontFamily: "'Times New Roman', serif" }}>
        This is a <span style={{ backgroundColor: 'neon-green', color: '#ccff00' }}>very large paragraph</span> with <span style={{ textDecoration: 'underline' }}>underlined text</span> that isn't a link.
      </p>

      <div style={{ textAlign: 'center' }}>
        <ul style={{ display: 'inline-block', textAlign: 'left' }}>
          <li>Bad Choice 1</li>
          <li>Bad Choice 2</li>
          <li>Bad Choice 3</li>
        </ul>
      </div>

      <br />

      <p style={{ color: '#F0F0F0', backgroundColor: '#FFFFFF' }}>You can barely read this because the contrast is terrible.</p>

      <br />

      <a href="#">This is a default blue link</a>
    </main>
  );
}

export default CrappyPage;
