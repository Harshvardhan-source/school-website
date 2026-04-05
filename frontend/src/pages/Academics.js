import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Academics.css';

const stages = [
  {
    level: 'Pre-Primary',
    grades: 'LKG & UKG',
    icon: '🌸',
    color: '#E8C5D0',
    desc: 'A play-based, nurturing environment that introduces young learners to language, numbers, and creative expression. Our early childhood programme builds curiosity, social skills, and a love for school.',
    subjects: ['Language & Literacy', 'Number Sense', 'Environmental Awareness', 'Creative Arts', 'Physical Activities'],
  },
  {
    level: 'Primary School',
    grades: 'Grades 1 – 5',
    icon: '📚',
    color: '#C5D8E8',
    desc: 'A structured academic programme in English medium, building strong foundations in core subjects. Students develop reading fluency, mathematical reasoning, and an inquisitive mindset through engaging classroom experiences.',
    subjects: ['English Language', 'Mathematics', 'Environmental Science', 'Kannada', 'Hindi', 'Value Education', 'Computer Basics'],
  },
  {
    level: 'Middle School',
    grades: 'Grades 6 – 8',
    icon: '🔬',
    color: '#D4C5E8',
    desc: 'Students begin specialised subject learning with dedicated teachers for Science, Mathematics, Social Studies, and Languages. This stage emphasises analytical thinking, project work, and individual responsibility.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Kannada', 'Hindi/Sanskrit', 'Computer Science'],
  },
  {
    level: 'Secondary School',
    grades: 'Grades 9 & 10',
    icon: '🎓',
    color: '#C5E8D8',
    desc: 'Focused preparation for the Karnataka State Board (SSLC) examination. Students receive structured revision support, regular assessments, and dedicated mentoring to achieve strong board results.',
    subjects: ['English', 'Second Language', 'Mathematics', 'Science', 'Social Science', 'Optional Subjects'],
  },
];

const callouts = [
  { icon: '🏛', title: 'Karnataka State Board', desc: 'Affiliated with KSEAB (Karnataka Secondary Education Examination Board), ensuring curriculum relevance and board exam preparation.' },
  { icon: '🗣', title: 'English Medium', desc: 'All instruction is delivered in English, building strong communication skills from the earliest years of schooling.' },
  { icon: '📊', title: 'Regular Assessment', desc: 'Periodic tests, unit tests, and term examinations prepare students for board exams while tracking individual progress.' },
  { icon: '🎭', title: 'Co-curricular Activities', desc: 'Debates, cultural events, science fairs, and sports complement classroom learning for holistic development.' },
];

export default function Academics() {
  return (
    <div>
      <PageHero
        eyebrow="Our Curriculum"
        title="Academic Programmes"
        subtitle="English-medium, Karnataka State Board education designed for strong outcomes and lifelong learning."
        bgImage="/photo1.jpeg"
      />

      {/* Intro */}
      <section className="section">
        <div className="container academic-intro">
          <div className="section-header">
            <span className="section-eyebrow">Academic Philosophy</span>
            <h2 className="section-title">Learning That Goes Beyond the Textbook</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              At St. Philomena's, academics are delivered through a disciplined, structured approach
              that combines strong Karnataka State Board foundations with attention to each child's individual pace and potential.
            </p>
          </div>
          <div className="academic-callouts">
            {callouts.map((c, i) => (
              <div className="academic-callout" key={i}>
                <span className="callout-icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section section-cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">School Programmes</span>
            <h2 className="section-title">From Early Learning to Board Examinations</h2>
            <div className="gold-divider" />
          </div>
          <div className="stages-list">
            {stages.map((stage, i) => (
              <div className={`stage-card ${i % 2 === 1 ? 'reverse' : ''}`} key={i}>
                <div className="stage-visual" style={{ background: stage.color }}>
                  <span className="stage-icon">{stage.icon}</span>
                  <div className="stage-tag">{stage.grades}</div>
                </div>
                <div className="stage-content">
                  <h3 className="stage-title">{stage.level}</h3>
                  <div className="gold-divider" style={{ margin: '12px 0' }} />
                  <p className="stage-desc">{stage.desc}</p>
                  <div className="stage-subjects">
                    <p className="subjects-label">Key Subjects:</p>
                    <div className="subjects-chips">
                      {stage.subjects.map(s => (
                        <span className="subject-chip" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section">
        <div className="container">
          <div className="teaching-approach-grid">
            <div className="teaching-text">
              <span className="section-eyebrow">Our Approach</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>How We Teach</h2>
              <div className="gold-divider" style={{ margin: '16px 0' }} />
              <p>Our teachers combine structured lesson plans with an attentive understanding of each student's learning pace. We encourage curiosity, questions, and discussion in the classroom — not just rote memorisation.</p>
              <p style={{ marginTop: 14 }}>Regular formative assessments allow teachers to identify areas where additional support is needed. Students who need reinforcement receive targeted attention, while advanced learners are encouraged to explore beyond the syllabus.</p>
              <ul className="teaching-list">
                <li>Experienced subject teachers at every level</li>
                <li>Regular parent-teacher interactions and progress reports</li>
                <li>Unit tests, mid-term, and annual examinations</li>
                <li>Board exam preparation with structured revision</li>
                <li>Science, Math, and Language enrichment activities</li>
              </ul>
            </div>
            <div className="teaching-image">
              <img src="/photo3.jpeg" alt="Early learning classroom" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--maroon-dark)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontFamily: 'var(--font-display)', marginBottom: 12 }}>Interested in Admissions?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 28 }}>Find out how to enrol your child at St. Philomena's English School.</p>
          <Link to="/admissions" className="btn btn-gold">View Admissions Process</Link>
        </div>
      </section>
    </div>
  );
}
