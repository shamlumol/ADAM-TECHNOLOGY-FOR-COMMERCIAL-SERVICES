import React from 'react';
import './FeatureStats.css';

const features = [
  {
    name: 'Chevrolet',
    img: 'https://logo.clearbit.com/chevrolet.com'
  },
  {
    name: 'GMC',
    img: 'https://logo.clearbit.com/gmc.com'
  },
  {
    name: 'Toyota',
    img: 'https://logo.clearbit.com/toyota.com'
  },
  {
    name: 'Fortuner',
    img: 'https://logo.clearbit.com/toyota.com'
  }
];

const FeatureStats = () => {
  return (
    <section className="py-5 border-bottom border-outline-variant bg-surface-container">
      <div className="mx-auto px-margin-desktop max-w-7xl">
        <div className="row g-4 justify-content-center align-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-6 col-lg-3 d-flex flex-column justify-content-center align-items-center p-3 feature-card">
              <img src={feature.img} alt={feature.name} style={{ width: '80px', height: '80px', objectFit: 'contain' }} className="feature-img mb-2" />
              <span className="font-label text-label-caps text-on-surface-variant fw-bold" style={{ fontSize: '0.8rem' }}>{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStats;
