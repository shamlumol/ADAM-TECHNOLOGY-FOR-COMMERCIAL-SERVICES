import React, { useState, useEffect } from 'react';
import './TopNavBar.css';

const TopNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['#home', '#about', '#services', '#collection', '#contact'];
      let currentSection = activeHash; // keep current by default
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is above the middle of the viewport and its bottom is below the top of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      }
      setActiveHash(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed-top d-flex justify-content-center w-100" style={{ pointerEvents: 'none' }}>
      <header
        className={`header-glass ${scrolled ? 'header-scrolled-glass' : ''}`}
        style={{
          width: '100%',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
          pointerEvents: 'auto',
          height: '70px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="mx-auto px-margin-desktop py-2 d-flex justify-content-between align-items-center w-100">
          {/* Brand Logo */}
          <a href="#" className="d-flex align-items-center text-decoration-none" style={{ zIndex: 1050 }}>
            <img
              src="/logo.png"
              alt="Gulf Stream Logo"
              style={{
                height: '160px',
                objectFit: 'contain'
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="d-none d-md-flex gap-4" style={{ fontSize: '1.05rem' }}>
            <a href="#home" onClick={() => setActiveHash('#home')} className={`nav-link-hover ${activeHash === '#home' ? 'active' : ''} ${scrolled ? 'text-dark' : 'text-white'} font-label text-label-caps text-decoration-none fw-bold`}>Home</a>
            <a href="#about" onClick={() => setActiveHash('#about')} className={`nav-link-hover ${activeHash === '#about' ? 'active' : ''} ${scrolled ? 'text-dark' : 'text-white'} font-label text-label-caps text-decoration-none fw-bold`}>About Us</a>
            <a href="#services" onClick={() => setActiveHash('#services')} className={`nav-link-hover ${activeHash === '#services' ? 'active' : ''} ${scrolled ? 'text-dark' : 'text-white'} font-label text-label-caps text-decoration-none fw-bold`}>Services</a>
            <a href="#collection" onClick={() => setActiveHash('#collection')} className={`nav-link-hover ${activeHash === '#collection' ? 'active' : ''} ${scrolled ? 'text-dark' : 'text-white'} font-label text-label-caps text-decoration-none fw-bold`}>Fleet</a>
            <a href="#contact" onClick={() => setActiveHash('#contact')} className={`nav-link-hover ${activeHash === '#contact' ? 'active' : ''} ${scrolled ? 'text-dark' : 'text-white'} font-label text-label-caps text-decoration-none fw-bold`}>Contacts</a>
          </nav>

          {/* Desktop Trailing Action */}
          <div className="d-none d-md-block">
            <a href="#contact" className={`btn ${scrolled ? 'btn-primary-red' : 'btn-outline-light'} rounded-0 text-label-caps px-4 py-2 fw-bold`}>
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={`d-md-none btn btn-link ${scrolled ? 'text-primary' : 'text-white'} p-0 btn-hover-lift`}
            onClick={() => setIsOpen(!isOpen)}
            style={{ zIndex: 1050, position: 'relative' }}
          >
            <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-3`}></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="d-md-none position-absolute w-100 bg-surface shadow-sm border-bottom border-outline-variant" style={{ top: '100%', left: 0, zIndex: 1040 }}>
            <nav className="d-flex flex-column px-margin-desktop py-4 gap-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-primary font-label text-label-caps text-decoration-none fw-bold border-bottom border-primary pb-2 w-auto align-self-start">Home</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="text-on-surface-variant font-label text-label-caps text-decoration-none fw-bold">About Us</a>
              <a href="#services" onClick={() => setIsOpen(false)} className="text-on-surface-variant font-label text-label-caps text-decoration-none fw-bold">Services</a>
              <a href="#collection" onClick={() => setIsOpen(false)} className="text-on-surface-variant font-label text-label-caps text-decoration-none fw-bold">Fleet</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-on-surface-variant font-label text-label-caps text-decoration-none fw-bold">Contacts</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary-red rounded-0 text-label-caps py-2 mt-2 w-100 fw-bold">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default TopNavBar;
