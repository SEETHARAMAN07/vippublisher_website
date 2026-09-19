import React from 'react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../data/companyConfig';
import { ArrowLeft } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="legal-page">
      <section className="section section-dark" style={{
        paddingTop: 'clamp(3rem, 5vw, 4rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4rem)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container-narrow text-center">
          <div className="section-eyebrow section-eyebrow-dark" style={{ justifyContent: 'center' }}>
            Commercial Terms
          </div>
          <h1 style={{ color: 'var(--color-heading)', marginBottom: '0.75rem', fontSize: '2.5rem' }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: 'var(--color-text-main)', fontSize: '1rem' }}>
            Standard B2B Manufacturing &amp; Wholesale Supply Policy &bull; {companyConfig.name}
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
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>1. Quotations &amp; Pro-Forma Estimates</h2>
            <p>
              All price estimates provided on website enquiries or via direct email are subject to formal confirmation of final artwork, paper GSM, ruling specs, binding types, and production order volumes. Quotations remain valid for the period specified on official pro-forma documentation.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>2. Custom Proof Approval &amp; Tolerances</h2>
            <p>
              For customized school, corporate, or OEM branded notebooks, production commences following physical dummy sample or digital proof sign-off by the client. Standard industrial paper tolerances (&plusmn;3% GSM variance, standard trimming tolerance) apply as per trade norms.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>3. Bulk Orders &amp; Staggered Deliveries</h2>
            <p>
              Bulk institutional and distributor orders are scheduled according to mutual agreements. For seasonal academic requirements, advance scheduling is advised to secure required mill paper stocks and machine allocation.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>4. Freight &amp; Logistics</h2>
            <p>
              Deliveries are dispatched via reputable commercial logistics carriers or dedicated transport trucks. Master cartons and palletized shrink wrapping ensure goods remain safeguarded during transit.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-heading)' }}>5. Commercial Inquiries</h2>
            <p>
              For any clarifications regarding commercial agreements or supply tenders, contact our legal and accounts office at <strong style={{ color: 'var(--color-accent)' }}>{companyConfig.email}</strong>.
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
