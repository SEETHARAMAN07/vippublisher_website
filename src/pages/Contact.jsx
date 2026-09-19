import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  HelpCircle,
  ShieldAlert,
  ClipboardCheck,
  Check
} from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function Contact({ onOpenQuoteModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    productRequired: '',
    quantity: '',
    customization: '',
    location: '',
    deliveryDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.productRequired) errs.productRequired = 'Please select a required product';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 700);
  };

  const checklistItems = [
    "Product type (Notebook, Register, Writing Pad, or Institutional set)",
    "Approximate quantity & batch requirements",
    "Required size (A4, A5, Long Book, Small Book, or Custom)",
    "Page count (64, 96, 120, 160, 240, 320, 400 pages)",
    "Paper preference (54–80 GSM Maplitho / High Bright)",
    "Ruling requirement (Single line, Four line, Square grid, etc.)",
    "Cover / branding requirement (Laminated, Hardbound, Foil stamp, Logo)",
    "Delivery location (City, State, Pincode)",
    "Expected delivery date or academic deadline"
  ];

  return (
    <div className="contact-page">

      {/* Main Content: Info & Form */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3.5rem)',
            alignItems: 'start'
          }}>
            {/* Left: Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                    Visit Our Works / Office
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--color-heading)' }}>{companyConfig.name}</strong><br />
                    {companyConfig.location} - {companyConfig.pinCode}<br />
                    {companyConfig.country}
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                    Call Us
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', margin: '0 0 0.25rem 0' }}>
                    <a href={companyConfig.phoneCallable} style={{ fontWeight: 600, color: 'var(--color-heading)' }}>
                      {companyConfig.phone}
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Direct line for institutional &amp; bulk supply inquiries
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                    Email Us
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', margin: '0 0 0.25rem 0' }}>
                    <a href={companyConfig.emailCallable} style={{ fontWeight: 600, color: 'var(--color-accent)' }}>
                      {companyConfig.email}
                    </a>
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', margin: 0 }}>
                    Send RFQs, tender documents, or custom specs
                  </p>
                </div>
              </div>

              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--color-border)',
                  flexShrink: 0
                }}>
                  <Clock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.375rem', color: 'var(--color-heading)' }}>
                    Business Hours
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.6 }}>
                    {companyConfig.businessHours.days}<br />
                    {companyConfig.businessHours.hours}<br />
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      {companyConfig.businessHours.sunday}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Enquiry Form */}
            <div className="card" style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-heading)' }}>
                  Send an Enquiry
                </h2>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)' }}>
                  Fill in your details below and our team will prepare an estimate based on your specifications.
                </p>
              </div>

              {submitSuccess ? (
                <div style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(157, 228, 0, 0.12)',
                  border: '1px solid var(--color-accent-border)',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} color="var(--color-accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 style={{ color: 'var(--color-heading)', fontSize: '1.375rem', marginBottom: '0.5rem' }}>
                    Enquiry Sent Successfully
                  </h3>
                  <p style={{ color: 'var(--color-text-main)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
                    Thank you, <strong>{formData.fullName}</strong>. We have received your stationery requirement. Our manufacturing desk will get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        productRequired: '',
                        quantity: '',
                        customization: '',
                        location: '',
                        deliveryDate: '',
                        message: ''
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                    {/* Full Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-fullName">
                        Full Name <span className="form-required">*</span>
                      </label>
                      <input
                        type="text"
                        id="c-fullName"
                        name="fullName"
                        className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                      {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                    </div>

                    {/* Company / Institution Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-companyName">
                        Company / Institution Name
                      </label>
                      <input
                        type="text"
                        id="c-companyName"
                        name="companyName"
                        className="form-input"
                        placeholder="e.g. Modern Public School / Zenith Ltd"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-phone">
                        Phone Number <span className="form-required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="c-phone"
                        name="phone"
                        className={`form-input ${errors.phone ? 'input-error' : ''}`}
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    {/* Email Address */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="e.g. purchasing@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    {/* Product Required */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-productRequired">
                        Product Required <span className="form-required">*</span>
                      </label>
                      <select
                        id="c-productRequired"
                        name="productRequired"
                        className={`form-select ${errors.productRequired ? 'input-error' : ''}`}
                        value={formData.productRequired}
                        onChange={handleChange}
                        required
                      >
                        <option value="">-- Select Product --</option>
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

                    {/* Quantity Required */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-quantity">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        id="c-quantity"
                        name="quantity"
                        className="form-input"
                        placeholder="e.g. 2,000 units or 100 cartons"
                        value={formData.quantity}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Customization Required */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-customization">
                        Customization Required
                      </label>
                      <select
                        id="c-customization"
                        name="customization"
                        className="form-select"
                        value={formData.customization}
                        onChange={handleChange}
                      >
                        <option value="Standard Specifications">Standard Specifications</option>
                        <option value="Custom Cover & Logo Only">Custom Cover &amp; Logo Only</option>
                        <option value="Custom Ruling & Pages">Custom Ruling &amp; Pages</option>
                        <option value="Full OEM Bespoke Manufacturing">Full OEM Bespoke Manufacturing</option>
                      </select>
                    </div>

                    {/* Delivery Location */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="c-location">
                        Delivery Location (City, State)
                      </label>
                      <input
                        type="text"
                        id="c-location"
                        name="location"
                        className="form-input"
                        placeholder="e.g. Bangalore, Karnataka"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Message / Requirements */}
                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label" htmlFor="c-message">
                      Message / Detailed Specifications
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Please mention preferred size, GSM, ruling type, page count, or any specific delivery deadline..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%' }}
                    disabled={isSubmitting}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Send Enquiry'}</span>
                  </button>

                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginTop: '0.875rem', textAlign: 'center' }}>
                    Your specifications will be forwarded directly to our commercial pricing department.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
