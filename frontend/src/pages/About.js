import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './About.css';

const values = [
  { icon: '🌟', title: 'Excellence', desc: 'We hold high academic and personal standards for every student and educator.' },
  { icon: '🤝', title: 'Respect', desc: 'Every individual — student, teacher, and parent — is treated with dignity.' },
  { icon: '📖', title: 'Learning', desc: 'A love for lifelong learning is kindled from the earliest years.' },
  { icon: '🕊', title: 'Harmony', desc: 'We celebrate diversity and foster a culture of unity and peace.' },
  { icon: '💪', title: 'Discipline', desc: 'Structured habits and self-discipline form the foundation of success.' },
  { icon: '❤️', title: 'Service', desc: 'Community service and compassion are embedded in our school culture.' },
];

const whyChoose = [
  { title: 'Experienced Faculty', desc: 'Our teachers bring years of classroom expertise and genuine dedication to student growth.' },
  { title: 'English Medium Instruction', desc: 'Strong language foundation from pre-primary through secondary, building communication confidence.' },
  { title: 'Safe & Disciplined Campus', desc: 'A secure, structured school environment where every child feels safe to learn and grow.' },
  { title: 'Holistic Development', desc: 'Academics, arts, sports, and values education — developed together, not in isolation.' },
  { title: 'Parent-School Partnership', desc: 'Regular communication and open-door policy ensure parents are always part of their child\'s journey.' },
  { title: 'Community & Belonging', desc: 'A warm school culture rooted in Bengaluru\'s values, where every child belongs.' },
];

const timeline = [
  { year: '[Year]', event: 'School established in Kumaraswamy Layout' },
  { year: '[Year]', event: 'Affiliation with Karnataka State Board' },
  { year: '[Year]', event: 'Expansion of secondary section' },
  { year: '[Year]', event: 'New academic wing inaugurated' },
  { year: '[Year]', event: 'Launch of co-curricular development programmes' },
  { year: 'Today', event: 'Continuing a proud legacy of education in Bengaluru' },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="About St. Philomena's"
        subtitle="An institution rooted in values, committed to nurturing every child's potential."
        bgImage="/photo5.jpeg"
      />

      {/* Introduction */}
      <section className="section">
        <div className="container about-intro-grid">
          <div className="about-intro-text">
            <span className="section-eyebrow">Our School</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>A Trusted Name in Bengaluru Education</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p>St. Philomena's English School, situated in the heart of Kumaraswamy Layout, Bengaluru, has been a pillar of quality education for families across south Bengaluru. Our school is affiliated with the Karnataka State Board and offers English-medium instruction from pre-primary through secondary level.</p>
            <p style={{ marginTop: 16 }}>We are a co-educational day school, welcoming students from all communities and backgrounds. Our campus life reflects the diverse, vibrant spirit of Bengaluru — grounded in discipline, guided by values, and open to every child's unique potential.</p>
            <p style={{ marginTop: 16 }}>From the morning assembly to the annual day, from the first day of LKG to the final board examination — every milestone at St. Philomena's is shaped by care, rigour, and community.</p>
          </div>
          <div className="about-intro-image">
            <img src="/photo5.jpeg" alt="Morning assembly at St. Philomena's" />
            <div className="about-image-caption">Morning Assembly — A daily tradition of discipline and unity</div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Direction</span>
            <h2 className="section-title">Vision & Mission</h2>
            <div className="gold-divider" />
          </div>
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="vm-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>[Vision Statement Placeholder] — To be a centre of excellence that inspires every student to become a confident, compassionate, and responsible citizen of India and the world.</p>
            </div>
            <div className="mission-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>[Mission Statement Placeholder] — To provide a nurturing, disciplined, and inclusive learning environment where academic excellence, character development, and holistic growth are pursued together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">These values define the Philomenian spirit and guide everything we do.</p>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <span className="value-icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section section-cream">
        <div className="container principal-full-grid">
          <div className="principal-photo-col">
            <div className="principal-photo-placeholder">
              <div className="principal-initials-lg">PP</div>
              <p>Principal's Photograph</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>[Replace with actual photo]</span>
            </div>
            <div className="principal-name-card">
              <strong>[Principal Name]</strong>
              <span>Principal</span>
              <span>St. Philomena's English School</span>
            </div>
          </div>
          <div className="principal-msg-col">
            <span className="section-eyebrow">Message from the Principal</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Dear Parents & Students,</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <blockquote className="principal-block-quote">
              "Education is not the filling of a pail, but the lighting of a fire."
            </blockquote>
            <p>At St. Philomena's English School, we believe that every child who enters our gate carries within them immense potential. Our role as educators is to create the conditions in which that potential can be discovered, nurtured, and expressed with confidence.</p>
            <p style={{ marginTop: 14 }}>Our school is built on a foundation of trust — between teachers and students, between the school and families, and between learning and life. We set high academic standards while remaining deeply attentive to the emotional and social needs of every child.</p>
            <p style={{ marginTop: 14 }}>We invite you to be part of this journey — as partners in your child's education and as members of the St. Philomena's family. Together, we can make a real difference.</p>
            <p style={{ marginTop: 14, fontStyle: 'italic', color: 'var(--text-muted)' }}>With warm regards,</p>
            <p style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon-dark)', fontWeight: 700, fontSize: '1.1rem' }}>[Principal Name]</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why St. Philomena's</span>
            <h2 className="section-title">Why Families Choose Us</h2>
            <div className="gold-divider" />
          </div>
          <div className="why-grid">
            {whyChoose.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-number">{String(i + 1).padStart(2, '0')}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Journey</span>
            <h2 className="section-title">A Legacy in the Making</h2>
            <div className="gold-divider" />
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="timeline-content">
                  <div className="timeline-year">{t.year}</div>
                  <p>{t.event}</p>
                </div>
                <div className="timeline-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--maroon-dark)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', marginBottom: 12 }}>Ready to Join Our School Family?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>Admissions are open for 2024–25. We would love to meet your family.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admissions" className="btn btn-gold">Apply for Admission</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
