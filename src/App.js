import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import WelcomeSection from './components/WelcomeSection';
import Services from './components/Services';
import About from './components/About';

import ATSPricing from './pricing-pages/atsprice';
import WebDevPricing from './pricing-pages/webdevprice';
import CoverLetterPricing from './pricing-pages/coverletterprice';
import GraphicDesignPricing from './pricing-pages/graphicprice';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useCustomEffects } from './useCustomEffects';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <Banner />
      <WelcomeSection />
      <Services />
      <About />
      <Contact />
    </>
  );
};

// ATS Resume Pricing Page Component
const ATSResumePricingPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <ATSPricing />
    </div>
  );
};

// Website Development Pricing Page Component
const WebDevPricingPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <WebDevPricing />
    </div>
  );
};

// Cover Letter Pricing Page Component
const CoverLetterPricingPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <CoverLetterPricing />
    </div>
  );
};

// Graphic Design Pricing Page Component
const GraphicDesignPricingPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <GraphicDesignPricing />
    </div>
  );
};

function App() {
  useCustomEffects();
  
  useEffect(() => {
    // Add the original body class
    document.body.className = 'no-trans';
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ats-resume-pricing" element={<ATSResumePricingPage />} />
          <Route path="/website-development-pricing" element={<WebDevPricingPage />} />
          <Route path="/cover-letter-pricing" element={<CoverLetterPricingPage />} />
          <Route path="/graphic-design-pricing" element={<GraphicDesignPricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
