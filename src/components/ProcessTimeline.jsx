import React from 'react';
import { FileText, SlidersHorizontal, Factory, CheckCircle2, Truck } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    desc: "Tell us about the product, quantity, specifications, and delivery requirements.",
    icon: FileText
  },
  {
    number: "02",
    title: "Specification Confirmation",
    desc: "Our team discusses the required size, paper, pages, ruling, cover, printing, binding, and packaging.",
    icon: SlidersHorizontal
  },
  {
    number: "03",
    title: "Production",
    desc: "Once the specifications are finalized, the order moves into scheduled factory production.",
    icon: Factory
  },
  {
    number: "04",
    title: "Quality Checking",
    desc: "Products are rigorously checked to ensure they meet the agreed specifications.",
    icon: CheckCircle2
  },
  {
    number: "05",
    title: "Packing & Delivery",
    desc: "Finished products are packed appropriately and dispatched for scheduled delivery.",
    icon: Truck
  }
];

export default function ProcessTimeline() {
  return (
    <div className="process-timeline-container">
      <style>{`
        .process-timeline-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          position: relative;
        }

        .process-timeline-grid::before {
          content: '';
          position: absolute;
          top: 38px;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(90deg, var(--color-border) 0%, var(--color-accent) 50%, var(--color-border) 100%);
          z-index: 1;
        }

        .process-step-item {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .step-icon-badge {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-full);
          background-color: var(--color-surface-card);
          border: 2px solid var(--color-border);
          box-shadow: var(--shadow-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-accent);
          margin-bottom: 1.25rem;
          transition: all var(--transition-fast);
        }

        .process-step-item:hover .step-icon-badge {
          background-color: var(--color-accent);
          color: var(--color-text-dark);
          border-color: var(--color-accent-soft);
          transform: translateY(-4px);
          box-shadow: 0 0 20px rgba(157, 228, 0, 0.5);
        }

        .step-num-pill {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.375rem;
        }

        .step-title {
          font-size: 1.0625rem;
          margin-bottom: 0.5rem;
          color: var(--color-heading);
        }

        .step-desc {
          font-size: 0.84375rem;
          color: var(--color-text-main);
          line-height: 1.55;
        }

        @media (max-width: 992px) {
          .process-timeline-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .process-timeline-grid::before {
            top: 20px;
            bottom: 20px;
            left: 31px;
            right: auto;
            width: 2px;
            height: auto;
            background: linear-gradient(180deg, var(--color-border) 0%, var(--color-accent) 50%, var(--color-border) 100%);
          }

          .process-step-item {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .step-icon-badge {
            flex-shrink: 0;
            margin-bottom: 0;
          }
        }
      `}</style>

      <div className="process-timeline-grid">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="process-step-item">
              <div className="step-icon-badge">
                <Icon size={24} strokeWidth={2} />
              </div>
              <div>
                <span className="step-num-pill">Step {step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
