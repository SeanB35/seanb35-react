import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function ThemeLoader() {
  const location = useLocation();

  useEffect(() => {
    let stylesheet = document.getElementById('theme-stylesheet');
    const path = location.pathname;
    const isRoot = path === '/' || path === '/introduction';
    const isCrappy = path === '/itis3135/crappy-page';
    // intro-form uses the root theme (like the source site's intro_form.css base)
    const isIntroForm = path === '/itis3135/intro-form';
    
    if (isCrappy) {
      if (stylesheet) {
        stylesheet.remove();
      }
    } else {
      if (!stylesheet) {
        stylesheet = document.createElement('link');
        stylesheet.id = 'theme-stylesheet';
        stylesheet.rel = 'stylesheet';
        document.head.appendChild(stylesheet);
      }
      stylesheet.disabled = false;
      stylesheet.href = (isRoot || isIntroForm) ? '/styles/root.css' : '/styles/itis.css';
    }
  }, [location.pathname]);

  return null;
}

// Import Pages
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import CourseHome from './pages/CourseHome';
import Contract from './pages/Contract';
import IntroForm from './pages/IntroForm';
import Survey from './pages/Survey';
import Cards from './pages/Cards';
import Inventory from './pages/Inventory';
import Documentation from './pages/Documentation';
import Product from './pages/Product';
import WebsiteEvaluations from './pages/WebsiteEvaluations';
import Hobby from './pages/Hobby';
import SeanBDesigns from './pages/SeanBDesigns';
import CrappyPage from './pages/CrappyPage';

// Import Global Styles removed in favor of dynamic link in ThemeLoader
// import './styles/default.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        
        {/* ITIS3135 Sub-routes */}
        <Route path="/itis3135/" element={<CourseHome />} />
        <Route path="/itis3135/contract" element={<Contract />} />
        <Route path="/itis3135/survey" element={<Survey />} />
        <Route path="/itis3135/cards" element={<Cards />} />
        <Route path="/itis3135/inventory" element={<Inventory />} />
        <Route path="/itis3135/documentation" element={<Documentation />} />
        <Route path="/itis3135/product" element={<Product />} />
        <Route path="/itis3135/website-evaluations" element={<WebsiteEvaluations />} />
        <Route path="/itis3135/hobby" element={<Hobby />} />
        <Route path="/itis3135/intro-form" element={<IntroForm />} />
        <Route path="/itis3135/crappy-page" element={<CrappyPage />} />
        
        <Route path="/seanbdesigns" element={<SeanBDesigns />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
