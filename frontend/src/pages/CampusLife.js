import React from 'react';
import PageHero from '../components/PageHero';
import './CampusLife.css';

const activities = [
  { icon: '🎤', title: 'Debates & Elocution', desc: 'Students develop public speaking confidence through school-level and inter-school debate programmes.' },
  { icon: '🎨', title: 'Arts & Crafts', desc: 'Creative expression through drawing, craft, and visual arts is encouraged at every level.' },
  { icon: '🏃', title: 'Sports & Fitness', desc: 'Physical education is an integral part of school life, promoting teamwork, fitness, and healthy competition.' },
  { icon: '🎭', title: 'Cultural Events', desc: 'Annual Day, Independence Day, Republic Day, and festival celebrations bring the school community together.' },
  { icon: '🔬', title: 'Science Activities', desc: 'Science exhibitions and experiment days make learning tangible and exciting for young minds.' },
  { icon: '📖', title: 'Library & Reading', desc: 'Our school library encourages a love for reading and independent research beyond the classroom.' },
];

const highlights = [
  { title: 'Morning Assembly', img: '/photo5.jpeg', desc: 'Every school day begins with a unified morning assembly — a tradition that builds discipline, pride, and a sense of community.' },
  { title: 'Annual Celebrations', img: '/photo4.jpeg', desc: 'Annual Day and cultural programmes showcase our students\' talents in music, dance, drama, and elocution.' },
  { title: 'Field Trips & Excursions', img: '/photo2.jpeg', desc: 'Educational excursions take students beyond the classroom walls, connecting learning to the real world.' },
  { title: 'Early Learning', img: '/photo3.jpeg', desc: 'Our pre-primary programme nurtures young learners through activity-based, play-integrated, and value-centred daily sessions.' },
];

export default function CampusLife() {
  return (
    <div>
      <PageHero
        eyebrow="Life at School"
        title="Campus Life"
        subtitle="Where learning, growth, and community come together every single day."
        bgImage="/photo2.jpeg"
      />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Beyond the Classroom</span>
            <h2 className="section-title">A Vibrant, Purposeful School Life</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              At St. Philomena's, school is more than academics. Every day is an opportunity
              to discover strengths, build friendships, and develop the character that will last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section section-cream">
        <div className="container">
          <div className="highlights-grid">
            {highlights.map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className="highlight-img">
                  <img src={h.img} alt={h.title} />
                  <div className="highlight-overlay">
                    <h3>{h.title}</h3>
                  </div>
                </div>
                <div className="highlight-content">
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Student Development</span>
            <h2 className="section-title">Co-curricular Activities</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">Activities that shape confident, well-rounded individuals.</p>
          </div>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <div className="activity-card" key={i}>
                <span className="activity-icon">{a.icon}</span>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Environment */}
      <section className="section section-cream">
        <div className="container env-grid">
          <div className="env-content">
            <span className="section-eyebrow">Our Environment</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Discipline, Safety & Belonging</h2>
            <div className="gold-divider" style={{ margin: '16px 0' }} />
            <p>St. Philomena's is a safe, structured, and welcoming campus. From the first day of school, students learn that discipline is not just about rules — it is about respect: for teachers, for peers, for the school, and for themselves.</p>
            <p style={{ marginTop: 14 }}>Our uniform tradition, daily assembly, and school culture create a consistent, predictable environment where every child feels secure and every family trusts the school with their child's daily care.</p>
            <p style={{ marginTop: 14 }}>The school is co-educational, welcoming students of all communities and backgrounds — reflecting the inclusive spirit of Bengaluru itself.</p>
            <div className="env-tags">
              <span className="env-tag">🏫 Safe Campus</span>
              <span className="env-tag">👔 Uniform Tradition</span>
              <span className="env-tag">🤝 Inclusive Community</span>
              <span className="env-tag">📋 Disciplined Structure</span>
              <span className="env-tag">🕐 Regular Timetable</span>
            </div>
          </div>
          <div className="env-images">
            <img src="/photo1.jpeg" alt="Students in uniform" className="env-img-main" />
            <img src="/photo5.jpeg" alt="Assembly" className="env-img-secondary" />
          </div>
        </div>
      </section>

      {/* Values banner */}
      <section className="values-banner">
        <div className="container values-banner-grid">
          {['Discipline', 'Respect', 'Integrity', 'Excellence', 'Service', 'Harmony'].map(v => (
            <div className="values-banner-item" key={v}>
              <div className="values-banner-dot" />
              <span>{v}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
