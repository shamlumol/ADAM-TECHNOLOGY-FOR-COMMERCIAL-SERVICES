import React from 'react';
import './AboutSection.css';
import '../SecondaryAboutSection/SecondaryAboutSection.css'; // Borrowing the overlapping image styles
import FadeUp from '../FadeUp/FadeUp';

const AboutSection = () => {
  return (
    <section id="about" className="py-section-gap position-relative overflow-hidden bg-surface border-bottom border-outline-variant">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase">ABOUT</div>

      <div className="mx-auto px-margin-desktop position-relative z-1 max-w-7xl">
        <div className="row g-5 align-items-center">

          {/* Left Column: Overlapping Images (Matching SecondaryAboutSection style) */}
          <div className="col-12 col-lg-6">
            <FadeUp delay={100}>
              <div className="secondary-about-image-container" style={{ margin: '0 2rem' }}>
                <div className="secondary-about-accent-box" style={{ left: '-2rem', right: 'auto' }}></div>

                <img
                  src="/about_fortuner_cutout.png"
                  alt="Company Overview"
                  className="secondary-about-main-img"
                  style={{ left: '-20%', top: '-20%', right: 'auto', width: '140%', height: '140%', objectFit: 'contain', boxShadow: 'none' }}
                />
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Text */}
          <div className="col-12 col-lg-6">
            <FadeUp delay={200}>
              <div className="d-flex flex-column ps-lg-5">
                <span className="text-label-caps text-accent mb-2 d-block tracking-widest fw-bold">EST. 2022</span>
                <h2 className="font-headline text-headline-xl text-primary text-uppercase mb-4 fw-bold" style={{ lineHeight: 1.1 }}>
                  COMPANY OVERVIEW
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-5">
                  Adam Technology for Commercial Services is a dynamic and innovative leader in Saudi Arabia's mobility sector. Driven by a passion for excellence, we redefine the transportation experience by aligning our diverse fleet with your specific needs.
                </p>

                <h3 className="font-headline text-accent mb-3 fw-bolder" style={{ fontSize: '1.5rem' }}>
                  ABOUT US
                </h3>
                <p className="text-body-lg text-on-surface-variant mb-0">
                  Led by visionary management and a team of meticulously trained professional drivers, teamwork is at the core of everything we do. We are your reliable transportation partner, ensuring every journey is seamless, stress-free, and reflects our unwavering commitment to excellence.
                </p>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
