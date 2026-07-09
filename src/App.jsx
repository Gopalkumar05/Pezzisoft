
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import useScrollToTop from './hooks/useScrollToTop';

// ScrollToTop component
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;