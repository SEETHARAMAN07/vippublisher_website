import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductCard({ product, onOpenQuoteModal }) {
  return (
    <article className="card product-card-component" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: 0,
      overflow: 'hidden'
    }}>
      {/* Product Image */}
      <div style={{
        position: 'relative',
        height: '210px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-bg-alt)'
      }}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="product-card-img"
        />
        {product.badge && (
          <span
            className="badge badge-accent"
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.5)'
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.625rem', color: 'var(--color-heading)' }}>
          {product.title}
        </h3>

        <p style={{ fontSize: '0.9375rem', marginBottom: '1.25rem', color: 'var(--color-text-main)', flexGrow: 1 }}>
          {product.shortDescription}
        </p>

        {product.features && (
          <ul style={{ marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {product.features.slice(0, 2).map((feat, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-text-main)' }}>
                <Check size={15} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1rem',
          borderTop: '1px solid var(--color-border)',
          marginTop: 'auto'
        }}>
          <Link
            to={`/products#${product.id}`}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--color-heading)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem'
            }}
          >
            <span>Learn More</span>
            <ArrowRight size={14} color="var(--color-accent)" />
          </Link>

          <button
            type="button"
            className="btn btn-sm btn-primary"
            onClick={() => onOpenQuoteModal(product.title)}
          >
            Get Quote
          </button>
        </div>
      </div>
    </article>
  );
}
