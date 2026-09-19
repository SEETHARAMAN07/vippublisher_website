import React from 'react';
import {
  GraduationCap,
  Building2,
  BookOpen,
  Briefcase,
  Factory,
  Landmark,
  HeartHandshake,
  Store,
  Truck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  GraduationCap,
  Building2,
  BookOpen,
  Briefcase,
  Factory,
  Landmark,
  HeartHandshake,
  Store,
  Truck,
  Sparkles
};

export default function IndustryCard({ industry, onOpenQuoteModal }) {
  const IconComponent = iconMap[industry.icon] || Briefcase;

  return (
    <article className="card industry-card-item" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative'
    }}>
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: 'var(--radius-sm)',
        backgroundColor: 'var(--color-bg-alt)',
        border: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-accent)',
        marginBottom: '1.25rem',
        boxShadow: 'var(--shadow-subtle)'
      }}>
        <IconComponent size={26} strokeWidth={1.8} />
      </div>

      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.625rem', color: 'var(--color-heading)' }}>
        {industry.title}
      </h3>

      <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-main)', marginBottom: '1.25rem', flexGrow: 1 }}>
        {industry.shortDescription}
      </p>

      {industry.keyProducts && (
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-muted)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
            Supplied Stationery:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {industry.keyProducts.map((prod, idx) => (
              <span key={idx} style={{
                fontSize: '0.75rem',
                backgroundColor: 'var(--color-bg-alt)',
                color: 'var(--color-heading)',
                padding: '0.2rem 0.5rem',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--color-border)'
              }}>
                {prod}
              </span>
            ))}
          </div>
        </div>
      )}

      <div style={{
        paddingTop: '1rem',
        borderTop: '1px solid var(--color-border)',
        marginTop: 'auto'
      }}>
        <button
          type="button"
          onClick={() => onOpenQuoteModal(`Sector Requirement: ${industry.title}`)}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--color-accent)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: 0
          }}
        >
          <span>Discuss Requirement</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}
