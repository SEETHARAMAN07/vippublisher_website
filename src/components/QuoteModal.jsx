import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ArrowRight, Shield } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, initialProduct = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productRequired: initialProduct || 'School Notebooks',
    quantity: '1,000 – 5,000 Units',
    customizations: {
      customCover: false,
      customRuling: false,
      customPages: false,
      customPacking: false
    },
    location: '',
    deliveryDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, productRequired: initialProduct }));
    }
  }, [initialProduct]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.productRequired) {
      newErrors.productRequired = 'Please select a product';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      customizations: {
        ...prev.customizations,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission (ready for backend API hook)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      productRequired: 'School Notebooks',
      quantity: '1,000 – 5,000 Units',
      customizations: {
        customCover: false,
        customRuling: false,
        customPages: false,
        customPacking: false
      },
      location: '',
      deliveryDate: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-text">
            <h3 id="quote-modal-title">Request a Bulk Quote</h3>
            <p>Tell us your product and quantity requirements for direct manufacturer pricing.</p>
          </div>
          <button 
            type="button" 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close quote modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {isSubmitted ? (
            <div className="quote-success-box">
              <div className="success-icon-wrapper">
                <CheckCircle size={36} />
              </div>
              <h4>Quotation Request Received</h4>
              <p>
                Thank you, <strong>{formData.fullName}</strong>. Our institutional sales and production planning team will review your specifications and get in touch with you shortly.
              </p>
              <div style={{ backgroundColor: 'var(--color-bg-alt)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', textAlign: 'left', fontSize: '0.875rem' }}>
                <p style={{ margin: '0 0 0.25rem 0', color: 'var(--color-text-main)' }}><strong>Product:</strong> {formData.productRequired}</p>
                <p style={{ margin: '0 0 0.25rem 0', color: 'var(--color-text-main)' }}><strong>Quantity:</strong> {formData.quantity}</p>
                <p style={{ margin: 0, color: 'var(--color-text-main)' }}><strong>Contact Phone:</strong> {formData.phone}</p>
              </div>
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleReset}
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} id="quick-quote-form">
              <div className="quote-form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name <span className="form-required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                {/* Company / Institution Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="companyName">
                    Company / Institution Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-input"
                    placeholder="e.g. St. Xavier's Academy / Apex Ltd"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number <span className="form-required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="e.g. procurement@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Product Required */}
                <div className="form-group">
                  <label className="form-label" htmlFor="productRequired">
                    Product Required <span className="form-required">*</span>
                  </label>
                  <select
                    id="productRequired"
                    name="productRequired"
                    className={`form-select ${errors.productRequired ? 'input-error' : ''}`}
                    value={formData.productRequired}
                    onChange={handleChange}
                  >
                    <option value="School Notebooks">School Notebooks</option>
                    <option value="College & Academic Notebooks">College &amp; Academic Notebooks</option>
                    <option value="Office Registers">Office Registers</option>
                    <option value="Writing Pads">Writing Pads</option>
                    <option value="Customized Notebooks">Customized Notebooks (Branded)</option>
                    <option value="Institutional Stationery">Institutional Stationery</option>
                    <option value="Multiple Products / Custom Mix">Multiple Products / Custom Mix</option>
                  </select>
                  {errors.productRequired && <span className="error-text">{errors.productRequired}</span>}
                </div>

                {/* Approximate Quantity */}
                <div className="form-group">
                  <label className="form-label" htmlFor="quantity">
                    Approximate Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="form-select"
                    value={formData.quantity}
                    onChange={handleChange}
                  >
                    <option value="500 – 1,000 Units">500 – 1,000 Units</option>
                    <option value="1,000 – 5,000 Units">1,000 – 5,000 Units</option>
                    <option value="5,000 – 20,000 Units">5,000 – 20,000 Units</option>
                    <option value="20,000+ Units (Direct Container/Pallet)">20,000+ Units (Direct Pallet)</option>
                    <option value="Custom Quantity">Custom Quantity</option>
                  </select>
                </div>

                {/* Customizations Required */}
                <div className="form-group form-full-width">
                  <label className="form-label">
                    Customization Options Required
                  </label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="customCover" 
                        checked={formData.customizations.customCover} 
                        onChange={handleCheckboxChange} 
                      />
                      Custom Logo / School Crest Cover
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="customRuling" 
                        checked={formData.customizations.customRuling} 
                        onChange={handleCheckboxChange} 
                      />
                      Special Ruling Pattern
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="customPages" 
                        checked={formData.customizations.customPages} 
                        onChange={handleCheckboxChange} 
                      />
                      Custom Page Count / GSM
                    </label>
                    <label className="checkbox-label">
                      <input 
                        type="checkbox" 
                        name="customPacking" 
                        checked={formData.customizations.customPacking} 
                        onChange={handleCheckboxChange} 
                      />
                      Shrink Bundle / Export Packing
                    </label>
                  </div>
                </div>

                {/* Delivery Location */}
                <div className="form-group">
                  <label className="form-label" htmlFor="location">
                    Delivery Location (City, State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-input"
                    placeholder="e.g. Mumbai, Maharashtra"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                {/* Expected Delivery Date */}
                <div className="form-group">
                  <label className="form-label" htmlFor="deliveryDate">
                    Expected Delivery Date / Timeline
                  </label>
                  <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    className="form-input"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Message / Requirements */}
                <div className="form-group form-full-width">
                  <label className="form-label" htmlFor="message">
                    Detailed Requirements / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="form-textarea"
                    placeholder="Specify notebook dimensions, page ruling, binding preferences, or any institutional guidelines..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        {!isSubmitted && (
          <div className="modal-footer">
            <span className="modal-footer-note">
              Direct factory pricing &bull; No middleman margin
            </span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                form="quick-quote-form" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
