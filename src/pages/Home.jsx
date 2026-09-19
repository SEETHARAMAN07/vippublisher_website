import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Package,
  Users,
  ShieldCheck,
  Boxes,
  Settings2,
  RefreshCw,
  Clock,
  BadgePercent,
  Sparkles,
  GraduationCap,
  Building2,
  BookOpen,
  Briefcase,
  Factory,
  Landmark,
  HeartHandshake,
  Store,
  Truck
} from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './Home.css';

export default function Home({ onOpenQuoteModal }) {
  // Statistics
  const stats = [
    { value: "20+", label: "Years of Experience", icon: Award },
    { value: "10 Lakh+", label: "Products Manufactured", icon: Package },
    { value: "5,000+", label: "Happy Customers", icon: Users },
    { value: "100%", label: "Quality Focused", icon: ShieldCheck }
  ];

  // 6 Products
  const products = [
    {
      id: "school-notebooks",
      title: "School Notebooks",
      desc: "Designed for students, schools and educational institutions.",
      image: "/images/notebook_stacks.jpg"
    },
    {
      id: "college-notebooks",
      title: "College Notebooks",
      desc: "Perfect for lectures, assignments and academic use.",
      image: "/images/hero_manufacturing.jpg"
    },
    {
      id: "office-registers",
      title: "Registers",
      desc: "For record-keeping, documentation and office use.",
      image: "/images/office_registers.jpg"
    },
    {
      id: "writing-pads",
      title: "Writing Pads",
      desc: "Ideal for meetings, drafting and professional use.",
      image: "/images/writing_pads.jpg"
    },
    {
      id: "customized-notebooks",
      title: "Customized Notebooks",
      desc: "Your brand, your design, your specifications.",
      image: "/images/custom_branding.jpg"
    },
    {
      id: "institutional-stationery",
      title: "Institutional Stationery",
      desc: "Bulk solutions for schools, companies and organizations.",
      image: "/images/factory_quality.jpg"
    }
  ];

  // Why Choose Us features
  const whyChooseUsFeatures = [
    {
      icon: ShieldCheck,
      title: "Quality Products",
      desc: "Durable & practical"
    },
    {
      icon: Boxes,
      title: "Bulk Manufacturing",
      desc: "For large, scaling branding"
    },
    {
      icon: Settings2,
      title: "Customization",
      desc: "Size, pages, ruling, branding"
    },
    {
      icon: RefreshCw,
      title: "Consistent Production",
      desc: "Across all batches"
    },
    {
      icon: Clock,
      title: "Timely Supply",
      desc: "Meeting your schedules"
    },
    {
      icon: BadgePercent,
      title: "Competitive Pricing",
      desc: "Best value for bulk orders"
    }
  ];

  // 10 Industry Sectors
  const industries = [
    { title: "Schools", sub: "Learning & academics", icon: GraduationCap },
    { title: "Colleges & Universities", sub: "Higher education", icon: Building2 },
    { title: "Coaching Centres", sub: "Training & development", icon: BookOpen },
    { title: "Corporate Offices", sub: "Meetings & documentation", icon: Briefcase },
    { title: "Industrial Organizations", sub: "Operations & records", icon: Factory },
    { title: "Government Institutions", sub: "Public services", icon: Landmark },
    { title: "NGOs & Social Orgs", sub: "Social impact", icon: HeartHandshake },
    { title: "Retailers & Shops", sub: "Retail & distribution", icon: Store },
    { title: "Distributors & Wholesalers", sub: "Large scale supply", icon: Truck },
    { title: "Custom Brands", sub: "Your brand, our support", icon: Sparkles }
  ];


  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="home-hero-section">
        <div className="container">
          <div className="home-hero-grid">
            {/* Left Column */}
            <div className="animate-fade-in">
              <div className="home-hero-eyebrow">
                <span className="home-hero-eyebrow-dot"></span>
                NOTEBOOK &amp; STATIONERY MANUFACTURING
              </div>

              <h1 className="home-hero-title">
                Quality Notebooks<br />
                Built for Every<br />
                <span className="text-lime">Requirement.</span>
              </h1>

              <p className="home-hero-subtitle">
                Premium notebook and stationery manufacturing for schools, institutions, businesses, organizations and bulk requirements.
              </p>

              <div className="home-hero-actions">
                <button
                  type="button"
                  className="btn-quote-pill btn-pill-lg"
                  onClick={() => onOpenQuoteModal()}
                  id="hero-quote-btn"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={18} />
                </button>
                <Link to="/products" className="btn-explore-pill btn-pill-lg">
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Right Column Visual with Floating Badges */}
            <div className="home-hero-visual-box">
              {/* Badge 1 Top Right */}
              <div className="hero-float-badge hero-badge-top-right">
                <div className="hero-badge-icon-box">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="hero-badge-title">Custom Branding</h4>
                  <p className="hero-badge-sub">Your logo. Our quality.</p>
                </div>
              </div>

              {/* Main Image Card */}
              <div className="home-hero-img-card">
                <img
                  src="/images/hero_notebooks_glow.jpg"
                  alt="Premium manufactured spiral and hardcover notebooks"
                  className="home-hero-img"
                />
              </div>

              {/* Badge 2 Bottom Left */}
              <div className="hero-float-badge hero-badge-bottom-left">
                <div className="hero-badge-icon-box">
                  <Boxes size={18} />
                </div>
                <div>
                  <h4 className="hero-badge-title">Bulk Orders</h4>
                  <p className="hero-badge-sub">On-time. Every time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Ticker below Hero */}
          <div className="home-hero-ticker">
            <div className="home-ticker-item">
              <GraduationCap size={16} />
              <span>Schools</span>
            </div>
            <div className="home-ticker-item">
              <Building2 size={16} />
              <span>Institutions</span>
            </div>
            <div className="home-ticker-item">
              <Briefcase size={16} />
              <span>Offices</span>
            </div>
            <div className="home-ticker-item">
              <Landmark size={16} />
              <span>Organizations</span>
            </div>
            <div className="home-ticker-item">
              <Store size={16} />
              <span>Retailers</span>
            </div>
            <div className="home-ticker-item">
              <Truck size={16} />
              <span>Distributors</span>
            </div>
          </div>

          {/* 2. FLOATING STATS ISLAND */}
          <div className="home-stats-island-wrapper" aria-label="Company Key Statistics">
            <div className="home-stats-island">
              {stats.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="home-stat-island-cell">
                    <div className="home-stat-island-top">
                      <Icon size={24} className="home-stat-island-icon" />
                      <span className="home-stat-island-number">{item.value}</span>
                    </div>
                    <p className="home-stat-island-label">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section className="home-products-section">
        <div className="container">
          <div className="home-products-header-row">
            <div>
              <div className="section-eyebrow">
                <span className="home-hero-eyebrow-line"></span>
                OUR PRODUCTS
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.75rem', color: 'var(--color-heading)' }}>
                Made for Writing.<br />
                Built for <span className="text-lime">Everyday Use.</span>
              </h2>
              <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', maxWidth: '580px', margin: 0 }}>
                A wide range of notebooks and stationery products for education, business, institutions and organizations.
              </p>
            </div>
            <div>
              <Link to="/products" className="btn btn-secondary">
                <span>View All Products</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="home-products-grid">
            {products.map((prod) => (
              <div key={prod.id} className="home-product-mini-card">
                <div className="home-product-img-wrap">
                  <img src={prod.image} alt={prod.title} loading="lazy" />
                </div>
                <h3 className="home-product-title">{prod.title}</h3>
                <p className="home-product-desc">{prod.desc}</p>
                <Link to={`/products#${prod.id}`} className="home-product-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUILT AROUND QUALITY (WHY CHOOSE US) */}
      <section className="home-quality-section">
        <div className="container">
          <div className="home-quality-grid">
            {/* Left: Modern Manufacturing Facility Card */}
            <div className="home-facility-visual-card">
              <img
                src="/images/modern_manufacturing.png"
                alt="Modern Manufacturing - Advanced production facility"
                className="home-facility-img"
                loading="lazy"
              />
            </div>

            {/* Right: Copy & 2x3 Matrix */}
            <div>
              <div className="section-eyebrow">
                <span className="home-hero-eyebrow-line"></span>
                WHY CHOOSE US
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', marginBottom: '1rem', color: 'var(--color-heading)' }}>
                Built Around Quality.<br />
                Reliability &amp; Your <span className="text-lime">Requirements.</span>
              </h2>
              <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                We focus on delivering high-quality, customized and reliable notebook and stationery solutions.
              </p>

              <div className="home-quality-features-matrix">
                {whyChooseUsFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div key={idx} className="home-matrix-item">
                      <div className="home-matrix-icon-box">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="home-matrix-title">{feat.title}</h4>
                        <p className="home-matrix-sub">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOM MANUFACTURING BANNER */}
      <section className="home-custom-banner-section">
        <div className="container">
          <div className="home-custom-card-wrapper">
            <div>
              <div className="section-eyebrow section-eyebrow-dark">
                <span className="home-hero-eyebrow-line"></span>
                CUSTOM MANUFACTURING
              </div>
              <h2 style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.125rem)', color: 'var(--color-heading)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
                Your Brand.<br />
                Your Notebook.
              </h2>
              <p style={{ color: 'var(--color-text-main)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '2.25rem' }}>
                Create notebooks around your specifications, branding, size, ruling, cover design and packaging.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => onOpenQuoteModal('Custom Branding Requirement')}
              >
                <span>Request a Custom Quote</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="home-custom-img-card">
              <img
                src="/images/your_brand_notebook.jpg"
                alt="Custom debossed branded notebook in executive setting"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="home-industries-section">
        <div className="container">
          <div style={{ marginBottom: '2.75rem' }}>
            <div className="section-eyebrow">
              <span className="home-hero-eyebrow-line"></span>
              INDUSTRIES WE SERVE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', marginBottom: '0.75rem', color: 'var(--color-heading)' }}>
              Made for Every Environment.
            </h2>
            <p style={{ color: 'var(--color-text-main)', fontSize: '1rem', margin: 0 }}>
              Our notebooks and stationery support the needs of different sectors and organizations.
            </p>
          </div>

          <div className="home-industries-grid">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="home-industry-pill-card">
                  <div className="home-ind-icon-box">
                    <Icon size={20} />
                  </div>
                  <h4 className="home-ind-title">{ind.title}</h4>
                  <p className="home-ind-sub">{ind.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
