import React from 'react';
import { Award, PackageCheck, Users } from 'lucide-react';
import { companyConfig } from '../data/companyConfig';
import './StatsBar.css';

export default function StatsBar() {
  const statsList = companyConfig.stats?.items || [
    { value: "20+", label: "YEARS OF SERVICE", icon: "award" },
    { value: "10 Lakh+", label: "FINISHED PRODUCTS", icon: "package" },
    { value: "5,000+", label: "SATISFIED CUSTOMERS", icon: "users" }
  ];

  const getIcon = (iconKey, label) => {
    const key = (iconKey || label || '').toLowerCase();
    if (key.includes('award') || key.includes('year') || key.includes('service')) {
      return <Award size={38} strokeWidth={2.2} />;
    }
    if (key.includes('package') || key.includes('product') || key.includes('project')) {
      return <PackageCheck size={38} strokeWidth={2.2} />;
    }
    if (key.includes('user') || key.includes('customer') || key.includes('client')) {
      return <Users size={38} strokeWidth={2.2} />;
    }
    return <Award size={38} strokeWidth={2.2} />;
  };

  return (
    <section className="stats-bar-section" aria-label="Company Statistics">
      <div className="container">
        <div className="stats-bar-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stats-bar-item">
              <div className="stats-bar-number-row">
                <div className="stats-bar-icon-box">
                  {getIcon(stat.icon, stat.label)}
                </div>
                <span className="stats-bar-value">{stat.value}</span>
              </div>
              <p className="stats-bar-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
