import React, { useState } from 'react';
import './ContactSection.css';
import FadeUp from '../FadeUp/FadeUp';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    interest: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = () => {
    const { name, interest, email, message } = formData;
    if (!name.trim() || !email.trim()) {
      alert("Please fill out your Name and Email address before sending a message.");
      return;
    }
    const text = `Hello! I'm interested in your services.\n\n*Name:* ${name}\n*Interest:* ${interest}\n*Email:* ${email}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=966500850270&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
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
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="contact-minimal-input" placeholder="Enter your name" />
                </div>
                <div className="col-12 col-md-6 d-flex flex-column gap-1">
                  <label className="contact-label">INTEREST</label>
                  <input type="text" name="interest" value={formData.interest} onChange={handleChange} className="contact-minimal-input" placeholder="Curation, Detailing, or Acquisition" />
                </div>
              </div>
              <div className="d-flex flex-column gap-1">
                <label className="contact-label">EMAIL ADDRESS</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="contact-minimal-input" placeholder="your@email.com" />
              </div>
              <div className="d-flex flex-column gap-1">
                <label className="contact-label">MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="contact-minimal-input" rows="4" placeholder="Tell us how we can help you..."></textarea>
              </div>
              <div className="mt-2">
                <button type="button" onClick={handleWhatsAppSubmit} className="btn btn-primary-red py-3 px-5 text-label-caps fw-bold d-flex align-items-center gap-2">
                  <i className="bi bi-whatsapp fs-5"></i> SEND VIA WHATSAPP
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

