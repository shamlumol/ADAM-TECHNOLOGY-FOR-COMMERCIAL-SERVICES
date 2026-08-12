import React from 'react';
import './WhyChooseUs.css';
import FadeUp from '../FadeUp/FadeUp';

const reasons = [
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
    title: 'Optimize Productivity',
    desc: 'Our dedicated drivers handle parking, traffic, and navigation, ensuring absolute comfort whether you are working, reading, or sightseeing.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>,
    title: 'Local Expertise',
    desc: 'With deep knowledge of Saudi Arabia\'s streets, our local drivers navigate efficiently and offer valuable recommendations.'
  },
  {
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>,
    title: 'Safety & Peace of Mind',
    desc: 'Trust in our commitment to safety, cultural awareness, and delivering a pleasant and memorable journey tailored to your needs.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="reviews" className="py-section-gap position-relative overflow-hidden bg-surface">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase">BENEFITS</div>

      <div className="mx-auto px-margin-desktop max-w-7xl position-relative z-1">
        <div className="why-layout-grid">
          
          {/* Left Column: Text & Decorative Red Square */}
          <FadeUp delay={100}>
            <div className="d-flex flex-column">
              <div className="mb-4">
                {/* Small decorative red square */}
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)', marginBottom: '2rem' }}></div>
                
                <h2 className="font-headline text-headline-md text-primary text-uppercase mb-4 fw-bold" style={{ lineHeight: 1.1 }}>
                  OUR FLEET
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-5">
                  Discover a diverse portfolio of vehicles tailored to any requirement. From the elegance of our premium SUVs to our executive vehicles, our top-tier fleet ensures reliability and versatility for every mile.
                </p>
                <h2 className="font-headline text-headline-md text-primary text-uppercase mb-4 fw-bold" style={{ lineHeight: 1.1 }}>
                  BENEFITS OF<br/>OUR SERVICE
                </h2>
                <p className="text-body-lg text-on-surface-variant">
                  Experience true convenience and relaxation. Our skilled drivers ensure a stress-free journey, allowing you to maximize your time in absolute comfort.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right Column: Features */}
          <FadeUp delay={200}>
            <div className="d-flex flex-column gap-4 justify-content-center h-100">
              {reasons.map((reason, idx) => (
                <div key={idx} className="d-flex gap-4 align-items-start p-4 rounded-3" style={{ backgroundColor: 'var(--surface-container)' }}>
                  <div className="why-feature-icon" style={{ backgroundColor: 'var(--surface)' }}>
                    <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {reason.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-label-caps text-primary fw-bold mb-2">{reason.title}</h3>
                    <p className="text-body-md text-on-surface-variant mb-0">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
