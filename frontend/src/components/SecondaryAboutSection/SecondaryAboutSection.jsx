import React from 'react';
import './SecondaryAboutSection.css';
import FadeUp from '../FadeUp/FadeUp';

const SecondaryAboutSection = () => {
  return (
    <section className="py-section-gap position-relative overflow-hidden bg-surface">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase">VISION</div>

      <div className="mx-auto px-margin-desktop max-w-7xl">
        <div className="secondary-about-layout-grid">
          {/* Left Column: Text & CTA */}
          <FadeUp delay={100}>
            <div className="d-flex flex-column justify-content-center pe-lg-5">
              <h2 className="font-headline text-headline-xl text-primary text-uppercase mb-4" style={{ fontWeight: 600, lineHeight: 1.1 }}>
                Who We Are
              </h2>
              <p className="text-body-lg text-on-surface-variant mb-3" style={{ maxWidth: '600px' }}>
                To provide reliable, seamless mobility solutions in Saudi Arabia through exceptional service, a diverse fleet, and innovative approaches.
              </p>
              <p className="text-body-lg text-on-surface-variant mb-4" style={{ maxWidth: '600px' }}>
                <em>Empowering Journeys, Enriching Lives.</em> We strive to redefine transportation by offering unparalleled reliability and setting new industry standards that contribute to the Kingdom's progress.
              </p>

              <h3 className="font-headline text-headline-lg text-primary text-uppercase mb-3 mt-4" style={{ fontWeight: 900 }}>
                OUR GOALS
              </h3>
              <p className="text-body-md text-on-surface-variant mb-5" style={{ maxWidth: '600px' }}>
                To cement our position as a premier transportation provider by prioritizing safety, comfort, and sustainability. We achieve this through advanced technology, community engagement, and a relentless focus on customer satisfaction.
              </p>
            </div>
          </FadeUp>

          {/* Right Column: Overlapping Images */}
          <FadeUp delay={200}>
            <div className="secondary-about-image-container">
              {/* Decorative Red Box */}
              <div className="secondary-about-accent-box"></div>

              {/* Main Exterior Image */}
              <img
                src="/lc.jpg"
                alt="Our Vision"
                className="secondary-about-main-img"
                style={{ width: '100%', height: '100%', top: '0', left: '0' }}
              />

              {/* Secondary Interior Image */}
              {/* <img
                src="/secondary_about_main.jpg"
                alt="Luxury Fleet"
                className="secondary-about-secondary-img"
                style={{ objectFit: 'contain', boxShadow: 'none' }}
              /> */}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default SecondaryAboutSection;
