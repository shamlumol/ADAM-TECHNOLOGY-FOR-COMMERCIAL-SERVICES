import React from 'react';
import './HeroSection.css';
import FadeUp from '../FadeUp/FadeUp';
import heroVideo from '../../assets/videos/hero.mp4';

const HeroSection = () => {
  return (
    <section id="home" className="hero-container">
      {/* Background Video */}
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover' }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-video-overlay"></div>

      <div className="mx-auto px-margin-desktop max-w-7xl h-100 position-relative z-1">
        <div className="hero-layout-grid">

          {/* Left Column: Text & CTA */}
          <div className="hero-text-col" style={{ maxWidth: '650px' }}>
            <FadeUp delay={100}>
              <div className="mb-3 d-flex align-items-center gap-3">
                <span className="text-label-caps text-white tracking-widest fw-bold" style={{ letterSpacing: '3px' }}>ADAM TECHNOLOGY</span>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)' }}></div>
                <span className="text-label-caps text-white tracking-widest fw-bold" style={{ letterSpacing: '2px' }}>EST. 2022</span>
              </div>

              <h1 className="font-headline text-white text-uppercase fw-bold mb-4" style={{ fontSize: '4rem', lineHeight: 0.95, letterSpacing: '-1px' }}>
                TRANSPORTATION<br />COMPANY
              </h1>

              <p className="text-body-lg text-white mb-5" style={{ opacity: 0.9, maxWidth: '500px', fontSize: '1.1rem' }}>
                FIND YOUR BEST CAR TODAY
              </p>

              <div className="d-flex gap-4 align-items-center">
                <a href="#collection" className="btn btn-primary-red rounded-0 text-label-caps px-5 py-3 fw-bold d-flex align-items-center gap-2">
                  Explore Fleet <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
