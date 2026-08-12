import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-top border-outline-variant w-100 px-margin-desktop py-section-gap">
      <div className="mx-auto w-100 max-w-7xl">

        {/* Top Row: Brand + Nav */}
        <div className="row g-5 mb-5 pb-5 border-bottom border-outline-variant">

          {/* Brand */}
          <div className="col-12 col-md-5 d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div style={{ width: '28px', height: '3px', backgroundColor: 'var(--accent)' }}></div>
              <span className="text-label-caps text-accent fw-bold" style={{ letterSpacing: '0.15em' }}>EST. 2022</span>
            </div>
            <h4 className="font-headline text-headline-md text-primary fw-bold text-uppercase mb-0" style={{ lineHeight: 1.1 }}>
              ADAM TECHNOLOGY<br />
              <span style={{ fontSize: '0.6em', fontWeight: 400, opacity: 0.6, letterSpacing: '0.1em' }}>FOR COMMERCIAL SERVICES</span>
            </h4>
            <p className="text-body-md text-on-surface-variant mb-0" style={{ maxWidth: '22rem' }}>
              Delivering innovative commercial solutions and exceptional services through excellence, dedication, and a commitment to our clients' success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-2 d-flex flex-column gap-3">
            <h5 className="text-label-caps text-primary fw-bold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>COMPANY</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">About Us</a></li>
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Services</a></li>
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Fleet</a></li>
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-md-2 d-flex flex-column gap-3">
            <h5 className="text-label-caps text-primary fw-bold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>SERVICES</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">On-Call Premium SUV</a></li>
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Vehicle With Driver</a></li>
              <li><a href="#" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Corporate Lease</a></li>

            </ul>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-3 d-flex flex-column gap-3">
            <h5 className="text-label-caps text-primary fw-bold mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>CONTACT</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex gap-2 align-items-start">
                <span className="text-accent mt-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <a href="https://maps.app.goo.gl/Sb5uqymmxTPVhBio7" target="_blank" rel="noreferrer" className="text-body-md text-on-surface-variant text-decoration-none footer-link">Al Hamrah, Dammam, Saudi Arabia</a>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <span className="text-accent mt-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:operations@adamtechcommercial.com" className="text-body-md text-on-surface-variant text-decoration-none footer-link">operations@adamtechcommercial.com</a>
              </li>
              <li className="d-flex gap-2 align-items-start">
                <span className="text-accent mt-1">
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+966544720156" className="text-body-md text-on-surface-variant text-decoration-none footer-link">+966 54 472 0156</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row: Copyright + Social */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-label-caps text-on-surface-variant opacity-75 mb-0 footer-copy" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>
            © 2026 ADAM TECHNOLOGY FOR COMMERCIAL SERVICES. ALL RIGHTS RESERVED.
          </p>
          {/* <div className="d-flex gap-3 align-items-center">
            <a href="#" className="text-on-surface-variant footer-social" aria-label="Instagram">
              <svg style={{ width: '1.1rem', height: '1.1rem' }} fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
