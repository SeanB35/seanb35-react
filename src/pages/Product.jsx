import React from 'react';
import useDocumentTitle from '../components/useDocumentTitle';
import usePageStyle from '../components/usePageStyle';
import productCss from '../styles/product.css?raw';

const PRODUCT_BODY_CSS = `
body {
    font-family: 'Poppins', sans-serif !important;
    color: #2b1b17 !important;
    line-height: 1.6;
    background-color: #f0e6d2 !important;
}
`;

function Product() {
  useDocumentTitle('Super Beaver | Premium Logs');
  usePageStyle('product', PRODUCT_BODY_CSS + '\n' + productCss);


  return (
    <main>
      <header id="header">
        <div className="logo-container">
          <img id="header-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Wood_icon.svg/200px-Wood_icon.svg.png"
            alt="Super Beaver Logo" />
          <h1 className="brand-name">Super Beaver Logs</h1>
        </div>

        <nav id="nav-bar">
          <ul className="nav-links">
            <li><a className="nav-link" href="#features">Superpowers</a></li>
            <li><a className="nav-link" href="#how-it-works">See The Master</a></li>
            <li><a className="nav-link" href="#pre-order">Stockpile Now</a></li>
          </ul>
        </nav>
      </header>

      <div className="product-main">
        <section id="features" className="section">
          <h2>Premium Superhero Wood-Chewing Logs.</h2>
          <div className="features-grid">
            <div className="feature">
              <h3 className="feature-heading">Indestructible Bark</h3>
              <p>Sharpen your chompers on the strongest, most resilient oak bark specifically engineered to handle superhero bite force.</p>
            </div>
            <div className="feature">
              <h3 className="feature-heading">River Dynamics</h3>
              <p>Perfectly balanced to float down rapid currents for high-speed dam construction and villain takedowns.</p>
            </div>
            <div className="feature">
              <h3 className="feature-heading">100% Organic Fuel</h3>
              <p>Get all the vitamins and nutrients you need to slap your tail at sonic speeds while patrolling the woods.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <h2>See The Master Builder In Action</h2>
          <div className="video-container">
            <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/kyjbE6N4BfM"
              title="Beaver Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen style={{ border: 0 }}></iframe>
          </div>
        </section>

        <section id="pre-order" className="section form-section">
          <h2 className="form-heading">Reserve Your Lodge Supply Today</h2>
          <p>Join the sidekick waitlist and get a free hero cape with your first log delivery.</p>

          <form id="form" action="https://www.freecodecamp.org/email-submit">
            <input id="email" type="email" name="email" placeholder="Enter your secret woodland email" required />
            <input id="submit" type="submit" value="Join the Squad" />
          </form>
        </section>
      </div>
    </main>
  );
}

export default Product;
