import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BookOpen, Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './Header.css';

export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`header-floating-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-glass-pill">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="NotebookPro Home">
            <BookOpen size={28} strokeWidth={1.8} className="brand-outline-icon" />
            <div className="brand-text">
              <span className="brand-title">VIP PUBLICATIONS</span>
              <span className="brand-subtitle">Manufacturing Excellence</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About Us
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Products
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact Us
            </NavLink>
          </nav>

          {/* Header Right CTA */}
          <div className="nav-cta-container">
            <button
              type="button"
              className="btn-quote-pill"
              onClick={() => onOpenQuoteModal()}
              id="header-quote-btn"
            >
              <span>Get a Quote</span>
              <ChevronRight size={16} />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="menu-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <aside className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div className="mobile-nav-header">
          <Link to="/" className="brand-logo" onClick={closeMobileMenu}>
            <div className="brand-icon-box">
              <BookOpen size={20} strokeWidth={2.2} />
            </div>
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1.1rem' }}>{companyConfig.name}</span>
              <span className="brand-subtitle">Manufacturing</span>
            </div>
          </Link>
          <button
            type="button"
            className="menu-toggle-btn"
            onClick={closeMobileMenu}
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
            end
          >
            <span>Home</span>
            <ChevronRight size={18} />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span>About Us</span>
            <ChevronRight size={18} />
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span>Products</span>
            <ChevronRight size={18} />
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span>Contact Us</span>
            <ChevronRight size={18} />
          </NavLink>
        </nav>

        <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              closeMobileMenu();
              onOpenQuoteModal();
            }}
          >
            Get a Quote
          </button>
        </div>

        <div className="mobile-drawer-contact">
          <p>
            <Phone size={15} color="var(--color-accent)" />
            <span>{companyConfig.phone}</span>
          </p>
          <p>
            <Mail size={15} color="var(--color-accent)" />
            <span>{companyConfig.email}</span>
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', marginTop: '0.75rem' }}>
            {companyConfig.location}
          </p>
        </div>
      </aside>
    </header>
  );
}
