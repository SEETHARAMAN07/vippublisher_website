import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';

export default function NotFound() {
  return (
    <div className="not-found-page section" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
      <div className="container-narrow text-center">
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-alt)',
          color: 'var(--color-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem',
          border: '1px solid var(--color-border)'
        }}>
          <BookOpen size={36} />
        </div>
        <div className="section-eyebrow" style={{ justifyContent: 'center' }}>404 Error</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--color-text-main)', fontSize: '1.0625rem', marginBottom: '2rem', maxWidth: '480px', marginInline: 'auto' }}>
          The page or product category you are looking for might have been moved or is currently unavailable.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={18} />
            <span>Return to Home</span>
          </Link>
          <Link to="/products" className="btn btn-secondary">
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
