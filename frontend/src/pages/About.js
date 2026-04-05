import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './About.css';

const values = [
  { icon: '🌟', title: 'Excellence', desc: 'We hold high academic and personal standards for every student and educator in our community.' },
  { icon: '🤝', title: 'Respect', desc: 'Every individual — student, teacher, and parent — is treated with dignity and care.' },
  { icon: '📖', title: 'Learning', desc: 'A love for lifelong learning is kindled from the earliest years of a child\'s journey with us.' },
  { icon: '🕊', title: 'Harmony', desc: 'We celebrate diversity and foster a culture of unity, peace, and inclusion.' },
  { icon: '💪', title: 'Discipline', desc: 'Structured habits and self-discipline form the unshakeable foundation of success in life.' },
  { icon: '❤️', title: 'Service', desc: 'Community service and compassion are embedded in the culture and daily life of our school.' },
];

const whyChoose = [
  { title: 'Experienced Faculty', desc: 'Our teachers bring years of classroom expertise and genuine dedication to student growth.' },
  { title: 'English Medium', desc: 'Strong language foundation from pre-primary through secondary, building real communication confidence.' },
  { title: 'Safe Campus', desc: 'A secure, structured environment where every child feels safe, seen, and supported.' },
  { title: 'Holistic Education', desc: 'Academics, arts, sports, and values — developed together, never in isolation from each other.' },
  { title: 'Parent Partnership', desc: 'Open communication ensures parents are always genuine partners in their child\'s journey.' },
  { title: 'Community Roots', desc: 'A warm school culture rooted in Bengaluru\'s values, where every child truly belongs.' },
];

const timeline = [
  { year: '[Year]', event: 'School established in Kumaraswamy Layout, Bengaluru' },
  { year: '[Year]', event: 'Affiliation with Karnataka State Board (KSEAB)' },
  { year: '[Year]', event: 'Expansion of the secondary school section' },
  { year: '[Year]', event: 'New academic wing inaugurated' },
  { year: '[Year]', event: 'Launch of enhanced co-curricular programmes' },
  { year: 'Today', event: 'Continuing a proud legacy of education in Bengaluru' },
];

export default function About() {
  return (
    <div>
      <PageHero eyebrow="Our Story" title="About St. Philomena's" subtitle="An institution rooted in values, committed to nurturing every child's full potential." bgImage="/photo5.jpeg" />

      <section className="section">
        <div className="container about-intro-grid">
          <div className="about-intro-img reveal">
            <img src="/photo5.jpeg" alt="Morning assembly" />
            <div className="about-img-border" />
            <div className="about-img-caption">Morning Assembly — daily discipline that builds character</div>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="eyebrow">Our School</span>
            <h2 className="section-title" style={{textAlign:'left'}}>A Trusted Name in Bengaluru Education</h2>
            <div className="gold-rule" style={{margin:'16px 0'}} />
            <p>St. Philomena's English School, situated in Kumaraswamy Layout, Bengaluru, has been a pillar of quality education for families across south Bengaluru. Our school is affiliated with the Karnataka State Board and offers English-medium instruction from pre-primary through secondary.</p>
            <p>We are a co-educational day school, welcoming students from all communities and backgrounds. Our campus reflects the diverse, vibrant spirit of Bengaluru — grounded in discipline, guided by values, and open to every child's unique potential.</p>
            <p>From the morning assembly to the annual day, from the first day of LKG to the final board examination — every milestone at St. Philomena's is shaped by care, rigour, and community.</p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">Our Direction</span><h2 className="section-title">Vision & Mission</h2><div className="gold-rule" /></div>
          <div className="vm-grid">
            <div className="vm-card vision reveal"><div className="vm-icon-big">🔭</div><h3>Our Vision</h3><p>[Vision Statement] — To be a centre of excellence that inspires every student to become a confident, compassionate, and responsible citizen of India and the world.</p></div>
            <div className="vm-card mission reveal reveal-delay-2"><div className="vm-icon-big">🎯</div><h3>Our Mission</h3><p>[Mission Statement] — To provide a nurturing, disciplined, and inclusive learning environment where academic excellence, character development, and holistic growth are pursued together.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">What We Stand For</span><h2 className="section-title">Our Core Values</h2><div className="gold-rule" /><p className="section-subtitle">These values define the Philomenian spirit and guide everything we do every day.</p></div>
          <div className="values-grid">
            {values.map((v,i) => <div className="value-card reveal" key={i} style={{transitionDelay:`${i*80}ms`}}><div className="value-icon-wrap">{v.icon}</div><h4>{v.title}</h4><p>{v.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">From the Principal</span><h2 className="section-title">Principal's Message</h2><div className="gold-rule" /></div>
          <div className="principal-layout">
            <div className="principal-col reveal">
              <div className="principal-photo-box"><div className="p-avatar">PP</div><p>Principal's Photo</p><small style={{color:'var(--text-muted)',fontSize:'0.72rem'}}>[Replace with actual photo]</small></div>
              <div className="principal-name-plate"><strong>[Principal Name]</strong><span>Principal, St. Philomena's English School</span></div>
            </div>
            <div className="principal-text-col reveal reveal-delay-2">
              <span className="eyebrow">Dear Parents & Students,</span>
              <h2 className="section-title" style={{textAlign:'left',fontSize:'1.8rem',marginBottom:16}}>A Message of Welcome</h2>
              <div className="p-quote">"Education is not the filling of a pail, but the lighting of a fire."</div>
              <p>At St. Philomena's, we believe every child who enters our gate carries within them immense potential. Our role as educators is to create the conditions in which that potential can be discovered, nurtured, and expressed with confidence.</p>
              <p>Our school is built on a foundation of trust — between teachers and students, between the school and families, and between learning and life. We set high academic standards while remaining deeply attentive to every child's emotional and social growth.</p>
              <p>We invite you to be part of this journey — as partners in your child's education and as members of the St. Philomena's family. Together, we can make a real difference.</p>
              <div className="p-sig" style={{marginTop:20}}><strong>[Principal Name]</strong><span>Principal, St. Philomena's English School</span></div>
              <Link to="/admissions" className="btn btn-primary" style={{marginTop:24}}>Apply for Admission</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">Why St. Philomena's</span><h2 className="section-title">Why Families Choose Us</h2><div className="gold-rule" /></div>
          <div className="why-grid">
            {whyChoose.map((w,i) => <div className="why-card reveal" key={i} style={{transitionDelay:`${i*80}ms`}}><div className="why-num">{String(i+1).padStart(2,'0')}</div><h4>{w.title}</h4><p>{w.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <div className="section-header reveal"><span className="eyebrow">Our Journey</span><h2 className="section-title">A Legacy in the Making</h2><div className="gold-rule" /></div>
          <div className="timeline">
            {timeline.map((t,i) => (
              <div className={"timeline-item" + (i%2===1?" right":"")} key={i}>
                <div className="tl-content"><div className="tl-year">{t.year}</div><p>{t.event}</p></div>
                <div className="tl-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--maroon-dark)',textAlign:'center'}}>
        <div className="container">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Join Our School</span>
          <h2 style={{color:'white',fontFamily:'var(--font-display)',fontSize:'clamp(1.8rem,3vw,2.6rem)',margin:'12px 0 12px'}}>Ready to Join Our School Family?</h2>
          <p style={{color:'rgba(255,255,255,0.7)',marginBottom:28}}>Admissions are open for 2024–25. We would love to meet your family.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center',flexWrap:'wrap'}}>
            <Link to="/admissions" className="btn btn-gold">Apply for Admission</Link>
            <Link to="/contact" className="btn btn-outline-white">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
