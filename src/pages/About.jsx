import React from 'react';
import {
  Target,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './About.css';

export default function About({ onOpenQuoteModal }) {
  return (
    <div className="about-page">
      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-container">
            <div className="about-hero-eyebrow">
              <span className="about-hero-eyebrow-dot"></span>
              NOTEBOOK &amp; STATIONERY MANUFACTURING
            </div>

            <h1 className="about-hero-title">
              Manufacturing Quality.<br />
              <span className="text-lime">Building Trust.</span>
            </h1>

            <p className="about-hero-subtitle">
              At {companyConfig.name}, we manufacture high-grade notebooks, registers, and custom stationery
              trusted by educational institutions, businesses, organizations, and bulk retailers nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE (MANUFACTURING PROFILE) */}
      <section className="about-who-section">
        <div className="container">
          <div className="about-who-card">
            <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '0.4rem' }}>
              <span className="home-hero-eyebrow-line"></span>
              MANUFACTURING PROFILE
            </div>

            <h2 className="about-who-title">
              Who We Are
            </h2>

            <div className="about-narrative-box">
              <p className="about-narrative-lead">
                <strong style={{ color: 'var(--color-accent)' }}>{companyConfig.name}</strong> is a notebook and stationery manufacturer focused on delivering reliable, high-quality writing products for schools, businesses, institutions, and organizations.
              </p>

              <p className="about-narrative-p">
                We manufacture notebooks, registers, and customized stationery with a focus on quality, consistency, and dependable supply.
              </p>
            </div>

            <div className="about-who-badges">
              <span className="about-who-badge">
                <CheckCircle2 size={13} className="about-badge-icon" /> Direct Manufacturer
              </span>
              <span className="about-who-badge">
                <CheckCircle2 size={13} className="about-badge-icon" /> Bulk &amp; Institutional Supply
              </span>
              <span className="about-who-badge">
                <CheckCircle2 size={13} className="about-badge-icon" /> Custom Specifications
              </span>
              <span className="about-who-badge">
                <CheckCircle2 size={13} className="about-badge-icon" /> 100% Quality Inspected
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="about-mission-section">
        <div className="container">
          <div className="about-mission-header">
            <div className="section-eyebrow" style={{ justifyContent: 'center', marginBottom: '0.4rem' }}>
              <span className="home-hero-eyebrow-line"></span>
              CORE FOUNDATION
            </div>
            <h2 className="about-mission-title">
              Driven by Purpose, Built for Consistency.
            </h2>
          </div>

          <div className="about-mission-grid">
            {/* Card 1: Mission */}
            <div className="about-glass-card">
              <div className="about-glass-icon-box">
                <Target size={22} />
              </div>
              <span className="about-card-tag">Purpose &amp; Focus</span>
              <h3 className="about-card-title">Our Mission</h3>
              <p className="about-card-desc">
                To manufacture and supply high-quality notebooks and stationery that meet diverse customer requirements through consistent quality, efficient production, customization, and dependable delivery.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="about-glass-card">
              <div className="about-glass-icon-box about-glass-icon-blue">
                <Eye size={22} />
              </div>
              <span className="about-card-tag" style={{ color: '#38BDF8' }}>Aspiration &amp; Growth</span>
              <h3 className="about-card-title">Our Vision</h3>
              <p className="about-card-desc">
                To become a trusted and recognized notebook and stationery manufacturing partner, known for quality, innovation, reliability, and consistent service across educational, business, and institutional markets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
