import React from 'react';
import { customSpecifications } from '../data/products';
import { Sliders, HelpCircle } from 'lucide-react';

export default function SpecTable({ onOpenQuoteModal }) {
  return (
    <div className="spec-table-card card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{
        padding: '1.5rem 1.75rem',
        backgroundColor: 'var(--color-bg-hero)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-heading)', marginBottom: '0.25rem' }}>
            Notebook &amp; Stationery Technical Specifications
          </h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-main)' }}>
            All parameters can be calibrated to your institutional or distributor requirements.
          </p>
        </div>
        <button 
          type="button" 
          className="btn btn-sm btn-primary"
          onClick={() => onOpenQuoteModal('Custom Technical Specification')}
        >
          Discuss Your Specs
        </button>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          fontSize: '0.9375rem'
        }}>
          <thead>
            <tr style={{
              backgroundColor: 'var(--color-bg-alt)',
              color: 'var(--color-accent)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              <th style={{ padding: '0.875rem 1.25rem', width: '22%' }}>Parameter</th>
              <th style={{ padding: '0.875rem 1.25rem', width: '53%' }}>Standard &amp; Custom Options</th>
              <th style={{ padding: '0.875rem 1.25rem', width: '25%' }}>Manufacturing Flexibility</th>
            </tr>
          </thead>
          <tbody>
            {customSpecifications.map((item, idx) => (
              <tr 
                key={idx} 
                style={{
                  borderBottom: '1px solid var(--color-border)',
                  backgroundColor: idx % 2 === 0 ? 'var(--color-surface-card)' : 'var(--color-bg-hero)',
                  transition: 'background-color 0.15s ease'
                }}
              >
                <td style={{
                  padding: '1rem 1.25rem',
                  fontWeight: 700,
                  color: 'var(--color-heading)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {item.spec}
                </td>
                <td style={{ padding: '1rem 1.25rem', color: 'var(--color-text-main)' }}>
                  {item.options}
                </td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <span className="badge badge-accent">
                    {item.editableNote}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        padding: '1rem 1.25rem',
        backgroundColor: 'rgba(18, 59, 112, 0.4)',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        fontSize: '0.8125rem',
        color: 'var(--color-text-main)'
      }}>
        <HelpCircle size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
        <span>
          <strong style={{ color: 'var(--color-heading)' }}>Manufacturer Note:</strong> Exact GSM, cover boards, and binding mechanisms are confirmed via physical sample before full-scale batch manufacturing.
        </span>
      </div>
    </div>
  );
}
