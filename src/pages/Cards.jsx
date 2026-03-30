import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import usePageStyle from '../components/usePageStyle';
import '../styles/cards.css';

const CARDS_BODY_CSS = `
body {
    background-color: #3b2f2f !important;
    margin: 0;
    padding: 50px;
    font-family: 'Courier New', Courier, monospace !important;
    color: #f1faee !important;
}
`;

function Cards() {
  useDocumentTitle('Super Beaver | Trading Cards');
  usePageStyle('cards', CARDS_BODY_CSS);


  return (
    <main>
      <div className="header-container">
        <h1 className="page-title">Super Beaver Trading Cards</h1>
        <p>Collect all of Super Beaver's epic powers!</p>
      </div>
      <div id="playing-cards">
        <div className="card">
          <div className="left">Tail<br />Smash</div>
          <div className="middle">
            <span>🌊</span>
          </div>
          <div className="right">Tail<br />Smash</div>
        </div>

        <div className="card red-card">
          <div className="left">Mega<br />Chomps</div>
          <div className="middle">
            <span>🦷</span>
          </div>
          <div className="right">Mega<br />Chomps</div>
        </div>

        <div className="card red-card">
          <div className="left">Dam<br />Builder</div>
          <div className="middle">
            <span>🪵</span>
            <span>🪵</span>
            <span>🪵</span>
          </div>
          <div className="right">Dam<br />Builder</div>
        </div>
      </div>
    </main>
  );
}

export default Cards;
