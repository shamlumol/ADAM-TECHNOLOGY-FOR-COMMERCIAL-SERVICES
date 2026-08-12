import React from 'react';
import './ServicesSection.css';
import FadeUp from '../FadeUp/FadeUp';

const services = [
  {
    id: 1,
    title: 'Vehicle With Driver',
    description: 'Hire a premium vehicle with a professional driver for executive travel, group outings, or logistics — comfortable and stress-free.',
    icon: 'bi-person-badge'
  },
  {
    id: 2,
    title: 'On-Call Premium SUV',
    description: 'Book a luxury SUV on demand for airport transfers, events, or any occasion. Our chauffeurs ensure a safe, punctual ride every time.',
    icon: 'bi-star-fill'
  },

  {
    id: 3,
    title: 'Corporate Lease',
    description: 'Lease a premium SUV with a dedicated driver for 1 to 5 years. Ideal for businesses seeking reliable, long-term mobility.',
    icon: 'bi-building'
  },

];


const ServicesSection = () => {
  return (
    <section id="services" className="py-section-gap position-relative overflow-hidden bg-surface-container-lowest">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase" style={{ color: 'rgba(0,0,0,0.02)' }}>SERVICES</div>

      <div className="mx-auto px-margin-desktop max-w-7xl position-relative z-1">
        <FadeUp delay={100}>
          <div className="text-center mb-5 pb-4">
            <h2 className="font-headline text-headline-xl text-primary text-uppercase mb-3" style={{ fontWeight: 900 }}>
              SERVICES OFFERED
            </h2>
            <p className="text-body-lg text-on-surface-variant mx-auto" style={{ maxWidth: '600px' }}>
              Beyond our exceptional fleet, we offer specialized services tailored to meet your most demanding requirements.
            </p>
          </div>
        </FadeUp>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={service.id}>
              <FadeUp delay={100 * (index + 1)}>
                <div className="service-card p-4 bg-surface border border-outline-variant h-100">
                  <div style={{ width: '32px', height: '3px', backgroundColor: 'var(--accent)', marginBottom: '1.25rem' }}></div>
                  <h3 className="font-headline text-primary mb-3 text-uppercase" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                    {service.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-0">
                    {service.description}
                  </p>
                </div>
              </FadeUp>
            </div>
          ))}

          {/* Sleek Driver Qualifications Ribbon */}
          <div className="col-12 mt-5 pt-3">
            <FadeUp delay={400}>
              <div className="d-flex flex-column align-items-center">
                <span className="text-label-caps text-primary mb-4 tracking-widest fw-bold">OUR CHAUFFEUR STANDARDS</span>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {[
                    'Different Nationalities', 
                    'H2S Card Holders', 
                    'Defensive Driving Certified', 
                    'Punctual & Reliable', 
                    'Off-Road Skilled'
                  ].map((skill, i) => (
                    <div key={i} className="d-flex align-items-center gap-2 bg-surface px-4 py-2 shadow-sm border border-outline-variant" style={{ borderRadius: '50px' }}>
                      <svg width="16" height="16" fill="var(--accent)" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      <span className="text-body-sm text-on-surface-variant fw-bold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.75rem' }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
