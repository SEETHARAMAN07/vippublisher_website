import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Company Info */}
          <div className="footer-col-brand">
            <Link to="/" className="brand-logo" aria-label={`${companyConfig.name} Home`}>
              <div className="brand-icon-box">
                <BookOpen size={24} strokeWidth={2.2} />
              </div>
              <div className="brand-text">
                <span className="brand-title">{companyConfig.name}</span>
                <span className="brand-subtitle">Manufacturing &amp; Supply</span>
              </div>
            </Link>

            <p className="footer-tagline">{companyConfig.tagline}</p>
            <p className="footer-desc">
              Manufacturing notebooks, registers and customized stationery for schools, institutions, organizations, offices, businesses, retailers, distributors, and bulk buyers.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links-list">
              <li><Link to="/products#school-notebooks" className="footer-link">School Notebooks</Link></li>
              <li><Link to="/products#college-notebooks" className="footer-link">College Notebooks</Link></li>
              <li><Link to="/products#office-registers" className="footer-link">Registers</Link></li>
              <li><Link to="/products#customized-notebooks" className="footer-link">Customized Notebooks</Link></li>
              <li><Link to="/products#institutional-stationery" className="footer-link">Institutional Stationery</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="footer-heading">Contact Information</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span>
                  {companyConfig.location} - {companyConfig.pinCode}<br />
                  {companyConfig.country}
                </span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="footer-contact-icon" />
                <span>
                  <strong>Phone:</strong>{' '}
                  <a href={companyConfig.phoneCallable}>{companyConfig.phone}</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <span>
                  <strong>Email:</strong>{' '}
                  <a href={companyConfig.emailCallable}>{companyConfig.email}</a>
                </span>
              </li>
              <li className="footer-contact-item">
                <Clock size={18} className="footer-contact-icon" />
                <span>
                  <strong>Hours:</strong> {companyConfig.businessHours.days}<br />
                  {companyConfig.businessHours.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {companyConfig.name}. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
