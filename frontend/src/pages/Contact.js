import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true);
    try { await fetch('/api/contact/', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) }); } catch {}
    setSubmitted(true); setLoading(false);
  };

  return (
    <div>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We are happy to answer your questions and welcome you to our school community." bgImage="/photo1.jpeg" />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info-section">
            <span className="eyebrow">School Office</span>
            <h2 className="section-title" style={{textAlign:'left', fontSize:'1.9rem', marginBottom:24}}>How to Reach Us</h2>
            <div className="contact-info-cards">
              {[
                { icon: '📍', label: 'Address', content: <><p>15 F, Millennium Ave, 47/A12, Kumaraswamy Layout II Stage, Bengaluru 560111</p><a href="https://maps.google.com/?q=St+Philomena+School+KS+Layout+Bangalore" target="_blank" rel="noreferrer" className="dir-link">Get Directions →</a></> },
                { icon: '📞', label: 'Phone', content: <a href="tel:08026667999">080 2666 7999</a> },
                { icon: '✉', label: 'Email', content: <a href="mailto:office@st-philomena.org">office@st-philomena.org</a> },
                { icon: '🕐', label: 'Office Hours', content: <p>Monday – Saturday<br />8:00 AM – 4:30 PM</p> },
              ].map((item, i) => (
                <div className="contact-info-card" key={i}>
                  <div className="ci-icon">{item.icon}</div>
                  <div className="ci-text"><strong>{item.label}</strong>{item.content}</div>
                </div>
              ))}
            </div>
            <div className="contact-action-btns">
              <a href="tel:08026667999" className="btn btn-primary">📞 Call Now</a>
              <a href="https://wa.me/918026667999" target="_blank" rel="noreferrer" className="btn btn-outline-maroon">💬 WhatsApp</a>
            </div>
            <div className="contact-map-wrap">
              <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684!2d77.5677!3d12.9084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dc3b12e24d%3A0x4e0f6bc4b41f3f4e!2sSt.%20Philomena%27s%20School%20K.S.%20Layout!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" width="100%" height="240" style={{border:0,display:'block'}} allowFullScreen="" loading="lazy" />
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="success-circle">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will respond within 1–2 working days.<br /><br />For urgent matters, call us at <strong>080 2666 7999</strong>.</p>
              </div>
            ) : (
              <>
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>Fill in the form below and we'll get back to you shortly.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div className="form-group"><label className="form-label">Your Name *</label><input className="form-control" name="name" value={form.name} onChange={handleChange} required placeholder="Full name" /></div>
                    <div className="form-group"><label className="form-label">Phone Number</label><input className="form-control" name="phone" value={form.phone} onChange={handleChange} placeholder="Mobile number" /></div>
                  </div>
                  <div className="form-group"><label className="form-label">Email Address *</label><input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" /></div>
                  <div className="form-group">
                    <label className="form-label">Subject *</label>
                    <select className="form-control" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a subject</option>
                      <option>Admissions Enquiry</option><option>Fee Information</option><option>Academic Query</option><option>School Timings</option><option>Documents / TC</option><option>Other</option>
                    </select>
                  </div>
                  <div className="form-group"><label className="form-label">Message *</label><textarea className="form-control" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Write your message or question here..." /></div>
                  <button type="submit" className="btn btn-primary btn-full" disabled={loading}>{loading ? 'Sending...' : 'Send Message →'}</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{background:'var(--cream)'}}>
        <div className="container">
          <div className="quick-facts-row">
            {[
              { icon: '🏫', label: 'School Type', val: 'Co-educational Day School' },
              { icon: '📋', label: 'Board', val: 'Karnataka State Board (KSEAB)' },
              { icon: '🎓', label: 'Classes', val: 'LKG to Grade 10' },
              { icon: '📍', label: 'Location', val: 'Kumaraswamy Layout – 560111' },
            ].map((f,i) => (
              <div className="qf-item" key={i}>
                <div className="qf-icon">{f.icon}</div>
                <h4>{f.label}</h4>
                <p>{f.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
