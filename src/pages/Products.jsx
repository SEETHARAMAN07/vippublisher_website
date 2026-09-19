import React from 'react';
import {
  ArrowRight,
  FileText,
  Book,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import { products } from '../data/products';
import './Products.css';

export default function Products({ onOpenQuoteModal }) {
  return (
    <div className="products-page">
      {/* 1. HERO SECTION */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-container">
            <div className="products-hero-eyebrow">
              <span className="products-hero-eyebrow-dot"></span>
              CATALOG
            </div>

            <h1 className="products-hero-title">
              Our <span className="text-lime">Products</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. 4-COLUMN PRODUCT GRID */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-card-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-ui-card">
                {/* Image Box with Optional Badge or Placeholder */}
                <div className="product-ui-image-box">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.title}
                      loading="lazy"
                      className="product-ui-img"
                    />
                  ) : (
                    <div className="product-ui-img-placeholder">
                      <ImageIcon size={30} className="placeholder-icon" />
                      <span className="placeholder-text">Photo Pending</span>
                    </div>
                  )}

                  {prod.badge && (
                    <span className="product-ui-badge">
                      {prod.badge}
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="product-ui-content">
                  <h3 className="product-ui-title">{prod.title}</h3>
                  <p className="product-ui-desc">{prod.shortDescription}</p>

                  {/* 3-Column Specifications Row */}
                  <div className="product-ui-specs-row">
                    <div className="product-spec-col">
                      <FileText size={15} className="product-spec-icon" />
                      <div className="product-spec-text">
                        <span className="product-spec-label">GSM</span>
                        <span className="product-spec-val">
                          {prod.specs?.gsm || '56 – 70'}
                        </span>
                      </div>
                    </div>

                    <div className="product-spec-col">
                      <Book size={15} className="product-spec-icon" />
                      <div className="product-spec-text">
                        <span className="product-spec-label">Cover</span>
                        <span className="product-spec-val">
                          {prod.specs?.cover || 'Soft / Hard'}
                        </span>
                      </div>
                    </div>

                    <div className="product-spec-col">
                      <Layers size={15} className="product-spec-icon" />
                      <div className="product-spec-text">
                        <span className="product-spec-label">Pages</span>
                        <span className="product-spec-val">
                          {prod.specs?.pages || '72 – 200'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    type="button"
                    className="product-ui-view-btn"
                    onClick={() => onOpenQuoteModal(prod.title)}
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
