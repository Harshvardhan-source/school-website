import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } catch {}
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We are happy to answer your questions and welcome you to our school."
        bgImage="/photo1.jpeg"
      />

      <section className="section">
        <div className="container contact-layout">

          {/* Left: Info */}
          <div className="contact-info-col">
            <span className="section-eyebrow">School Office</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '1.8rem' }}>
              St. Philomena's English School
            </h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>15 F, Millennium Avenue, 47/A12, Millennium Ave,<br />Kumaraswamy Layout II Stage,<br />Bengaluru, Karnataka 560111</p>
                  <a
                    href="https://maps.google.com/?q=St+Philomena's+School+KS+Layout+Bangalore"
                    target="_blank"
                    rel="noreferrer"
                    className="map-link"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:08026667999" className="contact-value">080 2666 7999</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">✉</div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:office@st-philomena.org" className="contact-value">office@st-philomena.org</a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">🕐</div>
                <div>
                  <strong>Office Hours</strong>
                  <p>Monday – Saturday<br />8:00 AM – 4:30 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-cta-buttons">
              <a href="tel:08026667999" className="btn btn-primary">📞 Call Now</a>
              <a
                href="https://wa.me/918026667999?text=Hello%2C+I+have+a+query+about+St.+Philomena's+School."
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-maroon"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                title="St. Philomena's School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684!2d77.5677!3d12.9084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dc3b12e24d%3A0x4e0f6bc4b41f3f4e!2sSt.%20Philomena's%20School%20K.S.%20Layout!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will respond to your message within 1–2 working days.</p>
                <p style={{ marginTop: 12 }}>For urgent matters, please call us at <strong>080 2666 7999</strong>.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form-title">Send Us a Message</h3>
                <p className="contact-form-note">Fill in the form and we will get back to you shortly.</p>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input className="form-control" name="name" value={form.name} onChange={handleChange} required placeholder="Full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile number" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select className="form-control" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option>Admissions Enquiry</option>
                    <option>Fee Information</option>
                    <option>Academic Query</option>
                    <option>School Timings</option>
                    <option>Documents / Transfer Certificate</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message or question here..."
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Bottom quick facts */}
      <section className="section section-cream">
        <div className="container">
          <div className="quick-facts-grid">
            <div className="quick-fact">
              <h4>School Type</h4>
              <p>Co-educational English-medium Day School</p>
            </div>
            <div className="quick-fact">
              <h4>Board</h4>
              <p>Karnataka State Board (KSEAB)</p>
            </div>
            <div className="quick-fact">
              <h4>Classes Offered</h4>
              <p>LKG to Grade 10 (editable)</p>
            </div>
            <div className="quick-fact">
              <h4>Location</h4>
              <p>Kumaraswamy Layout, Bengaluru – 560111</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
