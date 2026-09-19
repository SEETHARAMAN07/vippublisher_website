import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';
import { companyConfig } from './data/companyConfig';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState('');
  const location = useLocation();

  // Dynamic SEO Document Title updates per route
  useEffect(() => {
    const titles = {
      '/': `${companyConfig.name} | Notebook & Stationery Manufacturer`,
      '/about': `About ${companyConfig.name} | Notebook & Stationery Manufacturer`,
      '/products': `Notebooks & Stationery Products | ${companyConfig.name}`,
      '/contact': `Contact ${companyConfig.name} | Bulk Notebook & Stationery Enquiries`,
      '/privacy': `Privacy Policy | ${companyConfig.name}`,
      '/terms': `Terms & Conditions | ${companyConfig.name}`
    };

    document.title = titles[location.pathname] || `${companyConfig.name} | Notebook & Stationery Manufacturer`;
  }, [location.pathname]);

  const handleOpenQuote = (productName = '') => {
    setQuoteInitialProduct(productName || '');
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
    setQuoteInitialProduct('');
  };

  return (
    <div className="app-root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      
      {/* Sticky Header */}
      <Header onOpenQuoteModal={handleOpenQuote} />

      {/* Main Content View */}
      <main style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/about" element={<About onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/products" element={<Products onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/contact" element={<Contact onOpenQuoteModal={handleOpenQuote} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Global Quick Quote & RFP Modal */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={handleCloseQuote} 
        initialProduct={quoteInitialProduct} 
      />
    </div>
  );
}
