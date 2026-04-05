import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const stats = [
  { value: '1000+', label: 'Students Enrolled' },
  { value: '50+', label: 'Dedicated Teachers' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '100%', label: 'Pass Rate (State Board)' },
];

const pillars = [
  { icon: '📚', title: 'Academic Excellence', desc: 'Rigorous English-medium instruction aligned with Karnataka State Board curriculum, focused on conceptual clarity and critical thinking.' },
  { icon: '🎭', title: 'Co-curricular Development', desc: 'Debates, cultural events, sports, and creative arts — ensuring every student grows beyond the classroom.' },
  { icon: '🤝', title: 'Character & Values', desc: 'Discipline, respect, and community service are woven into daily school life, shaping responsible citizens.' },
  { icon: '🌱', title: 'Holistic Growth', desc: 'Physical health, emotional wellbeing, and spiritual awareness are nurtured alongside academic progress.' },
];

const testimonials = [
  { name: 'Mrs. Supriya Rao', role: 'Parent, Grade 8', text: 'The teachers at St. Philomena\'s genuinely invest in each child. My daughter has grown so much in confidence and academics over the past two years.' },
  { name: 'Mr. Ramesh Kumar', role: 'Parent, Grade 5', text: 'The school strikes the perfect balance between discipline and warmth. The morning assembly and structured schedule instil great values in our children.' },
  { name: 'Mrs. Anitha Prasad', role: 'Parent, Grade 10', text: 'My son cleared his 10th with distinction thanks to the dedicated teaching staff and the structured revision support. We are truly grateful.' },
];

const quickInfo = [
  { icon: '📍', label: 'Location', value: 'Kumaraswamy Layout, Bengaluru' },
  { icon: '📞', label: 'Phone', value: '080 2666 7999' },
  { icon: '🎓', label: 'Board', value: 'Karnataka State Board' },
  { icon: '🗣', label: 'Medium', value: 'English Medium' },
  { icon: '👥', label: 'Type', value: 'Co-educational Day School' },
  { icon: '✅', label: 'Admissions', value: 'Open for 2024–25' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero" style={{ backgroundImage: 'url(/photo4.jpeg)' }}>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-badge">
            <img src="/logo.jpeg" alt="School logo" className="hero-logo" />
          </div>
          <span className="hero-eyebrow">Welcome to</span>
          <h1 className="hero-title">St. Philomena's<br /><em>English School</em></h1>
          <p className="hero-tagline">Nurturing Minds. Shaping Futures. Building Character.</p>
          <p className="hero-desc">
            A respected English-medium co-educational day school in Kumaraswamy Layout, Bengaluru —
            where academic rigour meets compassionate mentoring.
          </p>
          <div className="hero-ctas">
            <Link to="/admissions" className="btn btn-gold">Enquire Now</Link>
            <Link to="/contact" className="btn btn-outline">Contact School</Link>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ── QUICK INFO STRIP ── */}
      <section className="quick-strip">
        <div className="container quick-strip-grid">
          {quickInfo.map((item, i) => (
            <div className="quick-item" key={i}>
              <span className="quick-icon">{item.icon}</span>
              <div>
                <span className="quick-label">{item.label}</span>
                <span className="quick-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-images">
            <div className="about-img-main">
              <img src="/photo4.jpeg" alt="Students at annual function" />
            </div>
            <div className="about-img-secondary">
              <img src="/photo5.jpeg" alt="School morning assembly" />
            </div>
            <div className="about-badge-float">
              <span className="about-badge-year">[Est.]</span>
              <span className="about-badge-label">Years of<br />Excellence</span>
            </div>
          </div>
          <div className="about-preview-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>A School Rooted in Values, Built for Excellence</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p>
              St. Philomena's English School stands as a pillar of quality education in Kumaraswamy Layout.
              With a tradition of nurturing students across diverse backgrounds, our school is known for its
              disciplined environment, dedicated faculty, and strong academic outcomes.
            </p>
            <p style={{ marginTop: 16 }}>
              We believe that education extends beyond textbooks. Every assembly, every cultural event,
              every act of service shapes our students into confident, compassionate individuals ready
              for tomorrow's world.
            </p>
            <div className="about-values">
              {['Discipline', 'Integrity', 'Excellence', 'Service'].map(v => (
                <span key={v} className="value-chip">{v}</span>
              ))}
            </div>
            <Link to="/about" className="btn btn-outline-maroon" style={{ marginTop: 28 }}>Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title">Four Pillars of a Philomenian Education</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">Everything we do is guided by these enduring principles that shape every student's journey.</p>
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div className="pillar-card" key={i}>
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUS LIFE PREVIEW ── */}
      <section className="section campus-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Life at Our School</span>
            <h2 className="section-title">Where Every Day is an Opportunity</h2>
            <div className="gold-divider" />
          </div>
          <div className="campus-mosaic">
            <div className="mosaic-main">
              <img src="/photo4.jpeg" alt="Annual day celebration" />
              <div className="mosaic-caption">Annual Day Celebrations</div>
            </div>
            <div className="mosaic-side">
              <div className="mosaic-item">
                <img src="/photo2.jpeg" alt="Students at cultural event" />
                <div className="mosaic-caption">Cultural Excursions</div>
              </div>
              <div className="mosaic-item">
                <img src="/photo5.jpeg" alt="Morning assembly" />
                <div className="mosaic-caption">Morning Assembly</div>
              </div>
            </div>
            <div className="mosaic-bottom">
              <div className="mosaic-item">
                <img src="/photo1.jpeg" alt="Class portrait" />
                <div className="mosaic-caption">Class of 2023</div>
              </div>
              <div className="mosaic-item">
                <img src="/photo3.jpeg" alt="Early learning" />
                <div className="mosaic-caption">Early Learning</div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/campus-life" className="btn btn-primary">Explore Campus Life</Link>
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="section section-cream principal-section">
        <div className="container principal-grid">
          <div className="principal-img-wrap">
            <div className="principal-img-placeholder">
              <div className="principal-initials">PP</div>
              <p>Principal's Photo</p>
            </div>
          </div>
          <div className="principal-text">
            <span className="section-eyebrow">A Message from the Principal</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>"Education is the Foundation of Every Great Life"</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <blockquote className="principal-quote">
              "At St. Philomena's, we are dedicated to creating an environment where every child is seen,
              heard, and given the tools to thrive. Academic success is important — but so is becoming a
              person of character, compassion, and curiosity."
            </blockquote>
            <p style={{ marginTop: 16, color: 'var(--text-muted)' }}>
              Our faculty brings dedication, experience, and genuine care to each classroom. Together with
              parents and the wider community, we are committed to making St. Philomena's a place where
              children grow and flourish.
            </p>
            <div className="principal-sig">
              <strong>[Principal Name]</strong>
              <span>Principal, St. Philomena's English School</span>
            </div>
            <Link to="/about" className="btn btn-outline-maroon" style={{ marginTop: 20 }}>Read Full Message</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Parent Voices</span>
            <h2 className="section-title">What Our School Community Says</h2>
            <div className="gold-divider" />
          </div>
          <div className="testimonials-carousel">
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">"</div>
              <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonials[activeTestimonial].name[0]}</div>
                <div>
                  <strong>{testimonials[activeTestimonial].name}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i+1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS CTA ── */}
      <section className="admissions-cta-section">
        <div className="admissions-cta-bg" style={{ backgroundImage: 'url(/photo5.jpeg)' }} />
        <div className="admissions-cta-overlay" />
        <div className="container admissions-cta-content">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>2024–25 Admissions</span>
          <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', marginBottom: 12 }}>
            Give Your Child the Best Start
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 560, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Admissions are currently open for the academic year 2024–25. Secure your child's place in
            one of Kumaraswamy Layout's most trusted schools.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold">Apply Now</Link>
            <a href="tel:08026667999" className="btn btn-outline">📞 Call Us</a>
          </div>
        </div>
      </section>

    </div>
  );
}
