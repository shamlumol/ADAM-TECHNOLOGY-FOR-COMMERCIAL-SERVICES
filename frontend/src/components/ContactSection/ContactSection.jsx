import React, { useState } from 'react';
import './ContactSection.css';
import FadeUp from '../FadeUp/FadeUp';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError('');
    if (submitSuccess) setSubmitSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // In case it gets triggered as a form submit
    const { name, email, phone, message } = formData;
    if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setSubmitError("Please fill out your Name, Email, Phone Number, and Message before sending.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', interest: '', email: '', phone: '', message: '' });
      } else {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-section-gap position-relative overflow-hidden bg-surface border-bottom border-outline-variant">
      {/* Giant Watermark Text */}
      <div className="bg-text-watermark text-uppercase">CONTACT</div>

      <div className="mx-auto px-margin-desktop position-relative z-1 max-w-7xl">

        {/* Centered Content Wrapper */}
        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          {/* Section Header */}
          <FadeUp delay={0}>
            <div className="mb-5">
              <span className="text-label-caps text-accent mb-2 d-block tracking-widest fw-bold">GET IN TOUCH</span>
            </div>
          </FadeUp>

          {/* Full Width Contact Form */}
          <FadeUp delay={100}>
            <div className="d-flex flex-column gap-4">
              <div className="row g-3">
                <div className="col-12 col-md-6 d-flex flex-column gap-1">
                  <label className="contact-label">FULL NAME</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="contact-minimal-input" placeholder="Enter your name" disabled={isSubmitting} />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column gap-1">
                  <label className="contact-label">INTEREST</label>
                  <input type="text" name="interest" value={formData.interest} onChange={handleChange} className="contact-minimal-input" placeholder="Curation, Detailing, or Acquisition" disabled={isSubmitting} />
                </div>
              </div>
              <div className="row g-3">
                <div className="col-12 col-md-6 d-flex flex-column gap-1">
                  <label className="contact-label">EMAIL ADDRESS</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="contact-minimal-input" placeholder="your@email.com" disabled={isSubmitting} />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column gap-1">
                  <label className="contact-label">PHONE NUMBER</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="contact-minimal-input" placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <label className="contact-label">MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="contact-minimal-input" rows="4" placeholder="Tell us how we can help you..." disabled={isSubmitting}></textarea>
              </div>
              
              {submitError && (
                <div className="text-danger fw-bold" style={{ fontSize: '0.85rem' }}>
                  {submitError}
                </div>
              )}
              {submitSuccess && (
                <div className="text-success fw-bold" style={{ fontSize: '0.85rem' }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="mt-2">
                <button 
                  type="button" 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="btn btn-primary-red py-3 px-5 text-label-caps fw-bold d-flex align-items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      SENDING...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-envelope fs-5"></i> SEND MESSAGE
                    </>
                  )}
                </button>
              </div>
            </div>
          </FadeUp>
        </div> {/* Close the 700px form wrapper */}

        {/* Embedded Google Map - Wider Container */}
        <div className="mx-auto" style={{ maxWidth: '1000px' }}>
          <FadeUp delay={200}>
            <div className="mt-5 pt-5">
              <a href="https://maps.app.goo.gl/Sb5uqymmxTPVhBio7" target="_blank" rel="noreferrer" className="text-decoration-none">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-4">
                  <i className="bi bi-geo-alt-fill text-accent fs-4"></i>
                  <h3 className="font-headline text-primary mb-0" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Al Hamrah, Dammam, Saudi Arabia</h3>
                </div>
              </a>
              <div className="w-100 custom-map-container p-2">
                <iframe 
                  src="https://maps.google.com/maps?q=Al+Hamrah,+Dammam,+Saudi+Arabia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="260" 
                  className="custom-map-iframe"
                  style={{ border: 0, borderRadius: '4px' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

