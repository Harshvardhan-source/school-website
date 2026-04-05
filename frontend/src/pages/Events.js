import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Events.css';

const allEvents = [
  { id: 1, category: 'Celebrations', title: 'Annual Day 2023–24', date: 'January 2024', icon: '🎭', desc: 'A grand celebration of student talent — music, dance, drama, and awards. Parents and community members joined us for an evening to remember.', badge: 'Featured' },
  { id: 2, category: 'National Days', title: 'Republic Day Celebration', date: '26 January 2024', icon: '🇮🇳', desc: 'Students participated in a patriotic assembly, flag hoisting, and cultural performances marking Republic Day with pride and unity.' },
  { id: 3, category: 'National Days', title: 'Independence Day', date: '15 August 2023', icon: '🕊', desc: 'Independence Day was observed with a solemn flag hoisting ceremony, speeches by students, and a march past by senior students.' },
  { id: 4, category: 'Academic', title: 'Science Exhibition', date: 'October 2023', icon: '🔬', desc: 'Students from Grades 6–10 presented innovative science projects, showcasing their creativity and understanding of key concepts.' },
  { id: 5, category: 'Cultural', title: 'Cultural Excursion — Indira Kala Mandira', date: 'December 2023', icon: '🎨', desc: 'Senior students attended a cultural programme at Indira Kala Mandira, Bengaluru, enriching their appreciation of the arts.' },
  { id: 6, category: 'Academic', title: 'Board Exam Preparation Camp', date: 'February 2024', icon: '📚', desc: 'Dedicated revision sessions for Grade 10 students with structured mock exams, subject-wise doubt clearing, and board guidance.' },
  { id: 7, category: 'Celebrations', title: 'Teachers\' Day Celebration', date: '5 September 2023', icon: '👩‍🏫', desc: 'Students honoured their teachers with heartfelt performances, speeches, and appreciation programmes on Teachers\' Day.' },
  { id: 8, category: 'Cultural', title: 'Diwali & Festival Celebrations', date: 'November 2023', icon: '🪔', desc: 'Festive celebrations on campus — students came together across communities to celebrate Diwali, Eid, and Christmas in the spirit of harmony.' },
  { id: 9, category: 'Notice', title: 'Admissions Open 2024–25', date: 'Ongoing', icon: '🎓', desc: 'Admissions are now open for the academic year 2024–25 for all grades from LKG to Grade 10. Contact the school office for details.', badge: 'Important' },
];

const categories = ['All', 'Celebrations', 'National Days', 'Academic', 'Cultural', 'Notice'];

export default function Events() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allEvents : allEvents.filter(e => e.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Latest Updates"
        title="Events & News"
        subtitle="Stay informed about school activities, announcements, and upcoming events."
        bgImage="/photo2.jpeg"
      />

      <section className="section">
        <div className="container">
          <div className="events-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="events-grid">
            {filtered.map(event => (
              <div className="event-card" key={event.id}>
                <div className="event-card-header">
                  <span className="event-icon">{event.icon}</span>
                  {event.badge && (
                    <span className={`event-badge ${event.badge === 'Important' ? 'badge-maroon' : 'badge-gold'}`}>
                      {event.badge}
                    </span>
                  )}
                </div>
                <div className="event-meta">
                  <span className="event-category">{event.category}</span>
                  <span className="event-date">📅 {event.date}</span>
                </div>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>No events in this category.</div>
          )}
        </div>
      </section>

      {/* Notice board */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">School Notices</span>
            <h2 className="section-title">Notice Board</h2>
            <div className="gold-divider" />
          </div>
          <div className="notice-board">
            {[
              { icon: '📌', text: 'Admissions open for 2024–25 — all grades LKG to Grade 10.', date: 'Current' },
              { icon: '📌', text: 'School fee payment for Term 2 is due. Please visit the accounts office.', date: 'March 2024' },
              { icon: '📌', text: 'Parent-Teacher Meeting scheduled — details will be communicated via circular.', date: 'Upcoming' },
              { icon: '📌', text: 'Annual Day photographs are available for collection from the school office.', date: 'February 2024' },
              { icon: '📌', text: 'Grade 10 board exam schedule — students to follow the official KSEAB timetable.', date: 'March 2024' },
            ].map((n, i) => (
              <div className="notice-item" key={i}>
                <span className="notice-pin">{n.icon}</span>
                <div className="notice-content">
                  <p>{n.text}</p>
                  <span className="notice-date">{n.date}</span>
                </div>
              </div>
            ))}
            <p className="notice-disclaimer">For official notices and circulars, please contact the school office directly at <strong>080 2666 7999</strong>.</p>
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="section" style={{ background: 'var(--navy)', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Stay Updated</span>
          <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>
            Never Miss a School Update
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
            Follow us on social media or contact the school office to stay informed about upcoming events, holidays, and school notices.
          </p>
          <a href="tel:08026667999" className="btn btn-gold">📞 Call School Office</a>
        </div>
      </section>
    </div>
  );
}
