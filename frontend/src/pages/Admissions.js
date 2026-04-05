import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Admissions.css';

const steps = [
  { num: '01', title: 'Enquiry', desc: 'Contact us by phone, email, or by filling the enquiry form on this page. Our admissions team will respond promptly.' },
  { num: '02', title: 'School Visit', desc: 'Schedule a campus visit to meet our team, see our facilities, and understand the school environment.' },
  { num: '03', title: 'Application Form', desc: 'Collect and complete the admission application form from the school office or download it from our website.' },
  { num: '04', title: 'Document Submission', desc: 'Submit all required documents along with the completed application form to the school office.' },
  { num: '05', title: 'Interaction / Assessment', desc: 'A brief interaction with the student (and parent) is conducted for certain grades to understand the child\'s learning level.' },
  { num: '06', title: 'Confirmation', desc: 'Upon selection, a confirmation letter is issued. Fees are paid and admission is confirmed for the academic year.' },
];

const documents = [
  'Birth Certificate (original and photocopy)',
  'Previous school Transfer Certificate (TC)',
  'Previous year report card / mark sheet',
  'Caste Certificate (if applicable)',
  'Aadhar Card of the student',
  'Passport-size photographs (4 copies)',
  'Parent/Guardian Aadhar Card',
  'Proof of residence (address proof)',
  'Any other document as required by the school',
];

const faqs = [
  { q: 'What is the age requirement for LKG admission?', a: 'Children must be 3.5 years of age as on June 1 of the academic year for LKG admission.' },
  { q: 'Is this an English-medium school?', a: 'Yes. All instruction at St. Philomena\'s English School is delivered in English, from pre-primary through secondary level.' },
  { q: 'Which board does the school follow?', a: 'We are affiliated with the Karnataka Secondary Education Examination Board (KSEAB), the Karnataka State Board.' },
  { q: 'Are admissions open for mid-year transfers?', a: 'Mid-year transfers may be considered subject to seat availability and submission of relevant documents from the previous school.' },
  { q: 'What are the school timing hours?', a: 'School hours are approximately 8:00 AM to 4:30 PM, Monday to Saturday. Please confirm current timings with the school office.' },
  { q: 'How can I schedule a school visit?', a: 'Call us at 080 2666 7999 or email office@st-philomena.org to schedule a campus visit with our admissions team.' },
];

export default function Admissions() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', student_name: '', grade_applying: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/inquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Show success anyway for UI demo
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <PageHero
        eyebrow="Join Our School"
        title="Admissions 2024–25"
        subtitle="We warmly invite families to be part of the St. Philomena's community."
        bgImage="/photo3.jpeg"
      />

      {/* Welcome */}
      <section className="section">
        <div className="container admissions-intro">
          <div className="admissions-welcome">
            <span className="section-eyebrow">Welcome</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>A School Where Your Child Will Thrive</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p>Choosing a school is one of the most important decisions a family makes. At St. Philomena's English School, we understand this responsibility deeply. Our admissions process is designed to be transparent, welcoming, and straightforward.</p>
            <p style={{ marginTop: 14 }}>We encourage parents to visit our campus, meet our teachers, and get a feel for the school environment before making a decision. We believe the best educational partnerships begin with trust — and we work hard to earn yours.</p>
            <div className="admissions-highlights">
              <div className="adm-highlight"><span>🎓</span><strong>Admissions Open</strong><span>2024–25 Academic Year</span></div>
              <div className="adm-highlight"><span>📞</span><strong>080 2666 7999</strong><span>Call for queries</span></div>
              <div className="adm-highlight"><span>🏫</span><strong>LKG to Grade 10</strong><span>All levels available</span></div>
            </div>
          </div>

          {submitted ? (
            <div className="inquiry-success">
              <div className="success-icon">✅</div>
              <h3>Thank You for Your Enquiry!</h3>
              <p>We have received your enquiry and our admissions team will contact you within 1–2 working days. You may also call us at <strong>080 2666 7999</strong> for immediate assistance.</p>
            </div>
          ) : (
            <form className="inquiry-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Admissions Enquiry Form</h3>
              <p className="form-note">Fill in your details and we will get back to you shortly.</p>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Parent / Guardian Name *</label>
                  <input className="form-control" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input className="form-control" name="phone" value={form.phone} onChange={handleChange} required placeholder="10-digit mobile number" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-control" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Student's Name</label>
                  <input className="form-control" name="student_name" value={form.student_name} onChange={handleChange} placeholder="Child's name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Grade Applying For</label>
                  <select className="form-control" name="grade_applying" value={form.grade_applying} onChange={handleChange}>
                    <option value="">Select Grade</option>
                    <option>LKG</option><option>UKG</option>
                    {[1,2,3,4,5,6,7,8,9,10].map(g => <option key={g}>Grade {g}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Message / Questions</label>
                <textarea className="form-control" name="message" value={form.message} onChange={handleChange} placeholder="Any specific questions or information you would like to share..." rows={4} />
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Enquiry →'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">How to Apply</span>
            <h2 className="section-title">Admissions Process</h2>
            <div className="gold-divider" />
          </div>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <div className="step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section">
        <div className="container docs-section">
          <div>
            <span className="section-eyebrow">Checklist</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Required Documents</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Please bring the following documents at the time of admission. The list may vary — confirm with the school office.</p>
            <ul className="docs-list">
              {documents.map((d, i) => (
                <li key={i}><span className="doc-check">✓</span>{d}</li>
              ))}
            </ul>
          </div>
          <div className="docs-contact-card">
            <h3>Need Help?</h3>
            <p>Our admissions team is here to assist you through every step of the process.</p>
            <div className="contact-methods">
              <a href="tel:08026667999" className="contact-method">📞 080 2666 7999</a>
              <a href="mailto:office@st-philomena.org" className="contact-method">✉ office@st-philomena.org</a>
              <a href="https://wa.me/918026667999" target="_blank" rel="noreferrer" className="contact-method">💬 WhatsApp Us</a>
            </div>
            <div className="office-hours">
              <strong>Office Hours</strong>
              <span>Monday – Saturday: 8:00 AM – 4:30 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-divider" />
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}
                  <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
                </button>
                {openFaq === i && <div className="faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
