import React from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../data/companyConfig';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <section className="section section-dark" style={{
        paddingTop: 'clamp(3rem, 5vw, 4rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container-narrow text-center">
          <div className="section-eyebrow section-eyebrow-dark" style={{ justifyContent: 'center' }}>
            Legal &amp; Compliance
          </div>
          <h1 style={{ color: 'var(--color-heading)', marginBottom: '0.75rem', fontSize: '2.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-text-main)', fontSize: '1rem' }}>
            Last Updated: January 2026 &bull; {companyConfig.name}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow" style={{
          backgroundColor: 'var(--color-surface-card)',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-subtle)',
          border: '1px solid var(--color-border)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text-main)', lineHeight: 1.8 }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>1. Overview &amp; Commercial Information</h2>
            <p>
              At <strong style={{ color: 'var(--color-heading)' }}>{companyConfig.name}</strong>, we respect the privacy of our institutional clients, school administrators, corporate procurement managers, and commercial partners. This Privacy Policy outlines how commercial enquiry details submitted through this website are handled.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>2. Information Collected</h2>
            <p>
              When requesting a quotation or sending an enquiry, we collect contact information such as name, institution or business name, phone number, email address, delivery locations, and notebook technical specifications solely for commercial quotation and fulfillment purposes.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>3. Use of Information</h2>
            <p>
              The information provided is utilized strictly to evaluate manufacturing feasibility, generate pro-forma invoices or quotation estimates, coordinate logistics, and communicate regarding orders. We do not sell or rent commercial data to third-party consumer advertisers.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>4. Custom Branding &amp; Artwork Confidentiality</h2>
            <p>
              Proprietary artwork, school crests, institutional logos, and custom printing templates supplied to {companyConfig.name} for customized notebook manufacturing remain the exclusive property of the respective client and are used solely for fulfilling approved production batches.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>5. Contact for Privacy Inquiries</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your corporate data, please contact our administrative desk at <strong style={{ color: 'var(--color-accent)' }}>{companyConfig.email}</strong>.
            </p>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
              <Link to="/" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowLeft size={16} />
                <span>Return to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
