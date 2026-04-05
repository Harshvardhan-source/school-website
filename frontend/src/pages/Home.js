import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/* ── Animated Counter Hook ── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── Intersection Observer Hook ── */
function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ── Stat Counter Component ── */
function StatCounter({ value, suffix = '', label, icon, delay = 0, started }) {
  const numeric = parseInt(value.replace(/\D/g, ''));
  const count = useCounter(numeric, 2200, started);
  return (
    <div className="stat-card" style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-icon-wrap">{icon}</div>
      <div className="stat-number">
        <span className="stat-count">{started ? count.toLocaleString() : 0}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-bar" />
    </div>
  );
}

const stats = [
  { value: '1200', suffix: '+', label: 'Students Enrolled', icon: '🎓', delay: 0 },
  { value: '55', suffix: '+', label: 'Dedicated Educators', icon: '👩‍🏫', delay: 150 },
  { value: '98', suffix: '%', label: 'Board Pass Rate', icon: '📊', delay: 300 },
  { value: '15', suffix: '+', label: 'Years of Excellence', icon: '🏛', delay: 450 },
];

const pillars = [
  { icon: '📚', num: '01', title: 'Academic Excellence', desc: 'Rigorous English-medium instruction aligned with Karnataka State Board, focused on conceptual clarity and real-world application.' },
  { icon: '🎭', num: '02', title: 'Arts & Culture', desc: 'Music, drama, elocution, and visual arts — every student discovers their creative voice in a nurturing environment.' },
  { icon: '🤝', num: '03', title: 'Values & Character', desc: 'Discipline, respect, integrity and community service are woven into the fabric of daily school life.' },
  { icon: '🌱', num: '04', title: 'Holistic Growth', desc: 'Physical health, spiritual awareness, and emotional wellbeing are nurtured alongside academic achievement.' },
];

const testimonials = [
  { name: 'Mrs. Supriya Rao', role: 'Parent · Grade 8', initials: 'SR', text: 'The teachers at St. Philomena\'s genuinely invest in each child. My daughter has grown enormously in confidence and academic ability. The morning assembly culture instils discipline that stays with them for life.' },
  { name: 'Mr. Ramesh Kumar', role: 'Parent · Grade 5', initials: 'RK', text: 'The school strikes the perfect balance between discipline and warmth. The structured environment, dedicated staff, and strong values make this the best choice we made for our son.' },
  { name: 'Mrs. Anitha Prasad', role: 'Parent · Grade 10', initials: 'AP', text: 'My son cleared his SSLC with distinction, thanks to the dedicated teaching staff and the focused revision support. The board exam preparation was excellent. We are truly grateful.' },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [statsRef, statsInView] = useInView(0.3);
  const [pillarsRef, pillarsInView] = useInView(0.15);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 100);
    const interval = setInterval(() => setActiveTestimonial(a => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="home">

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/photo5.jpeg" alt="School assembly" className={"hero-bg-img" + (heroLoaded ? " loaded" : "")} />
          <div className="hero-overlay-gradient" />
          <div className="hero-pattern" />
        </div>

        <div className="hero-content-wrap container">
          <div className={"hero-content" + (heroLoaded ? " visible" : "")}>
            <div className="hero-logo-badge">
              <img src="/logo.jpeg" alt="School crest" />
              <div className="hero-logo-glow" />
            </div>

            <div className="hero-eyebrow-wrap">
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow">Est. in Kumaraswamy Layout, Bengaluru</span>
              <div className="hero-eyebrow-line" />
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line1">St. Philomena's</span>
              <em className="hero-title-em">English School</em>
            </h1>

            <p className="hero-tagline">Nurturing Minds. Shaping Futures. Building Character.</p>

            <p className="hero-desc">
              A trusted English-medium co-educational day school in Kumaraswamy Layout —
              where academic rigour meets compassionate mentoring, every single day.
            </p>

            <div className="hero-ctas">
              <Link to="/admissions" className="btn btn-gold hero-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
                Enquire for Admission
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Contact the School
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-dot" />
                <span>Karnataka State Board</span>
              </div>
              <div className="trust-sep">·</div>
              <div className="trust-item">
                <span className="trust-dot" />
                <span>English Medium</span>
              </div>
              <div className="trust-sep">·</div>
              <div className="trust-item">
                <span className="trust-dot" />
                <span>Co-Educational Day School</span>
              </div>
            </div>
          </div>

          <div className={"hero-image-panel" + (heroLoaded ? " visible" : "")}>
            <div className="hero-img-stack">
              <div className="hero-img-main">
                <img src="/photo4.jpeg" alt="Annual day" />
                <div className="hero-img-badge">
                  <span>🎓</span>
                  <div>
                    <strong>Admissions Open</strong>
                    <small>2024–25 Academic Year</small>
                  </div>
                </div>
              </div>
              <div className="hero-img-secondary">
                <img src="/photo3.jpeg" alt="Early learning" />
              </div>
              <div className="hero-float-card">
                <div className="float-card-icon">⭐</div>
                <div>
                  <strong>98%</strong>
                  <small>Board Pass Rate</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      {/* ══════════ QUICK INFO STRIP ══════════ */}
      <section className="info-strip">
        <div className="container info-strip-inner">
          {[
            { icon: '📍', label: 'Location', val: 'Kumaraswamy Layout, Bengaluru' },
            { icon: '📞', label: 'Phone', val: '080 2666 7999', href: 'tel:08026667999' },
            { icon: '🎓', label: 'Board', val: 'Karnataka State Board' },
            { icon: '🗣', label: 'Medium', val: 'English Medium' },
            { icon: '✅', label: 'Admissions', val: 'Open — 2024–25' },
          ].map((item, i) => (
            <div className="info-item" key={i}>
              <span className="info-icon">{item.icon}</span>
              <div className="info-text">
                <span className="info-label">{item.label}</span>
                {item.href
                  ? <a href={item.href} className="info-val">{item.val}</a>
                  : <span className="info-val">{item.val}</span>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ ABOUT PREVIEW ══════════ */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-img-frame">
                <img src="/photo4.jpeg" alt="Annual day celebration" className="about-img-main" />
                <div className="about-img-accent" />
              </div>
              <div className="about-img-float">
                <img src="/photo5.jpeg" alt="Morning assembly" />
                <div className="about-float-label">Morning Assembly</div>
              </div>
              <div className="about-crest-badge">
                <img src="/logo.jpeg" alt="Crest" />
              </div>
            </div>

            <div className="about-content reveal reveal-delay-2">
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title" style={{textAlign:'left'}}>
                A School Rooted in Values,<br />Built for Excellence
              </h2>
              <div className="gold-rule" style={{margin:'18px 0'}} />
              <p className="about-lead">
                St. Philomena's English School has been a cornerstone of quality education in Kumaraswamy Layout for years,
                shaping generations of confident, values-driven young people.
              </p>
              <p className="about-body">
                From the morning assembly that starts every day with discipline and purpose, to the annual celebrations
                that showcase every child's talent — life at St. Philomena's is rich, purposeful, and deeply community-rooted.
              </p>
              <div className="about-values-grid">
                {['Discipline', 'Integrity', 'Excellence', 'Service', 'Harmony', 'Respect'].map(v => (
                  <div className="about-value-chip" key={v}>
                    <span className="chip-dot" />
                    {v}
                  </div>
                ))}
              </div>
              <div className="about-ctas">
                <Link to="/about" className="btn btn-primary">Discover Our Story</Link>
                <Link to="/admissions" className="btn btn-outline-maroon">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ANIMATED STATS ══════════ */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-bg" />
        <div className="container">
          <div className="section-header" style={{marginBottom: 48}}>
            <span className="eyebrow" style={{color:'var(--gold-light)'}}>By the Numbers</span>
            <h2 className="section-title" style={{color:'white'}}>Our School in Figures</h2>
          </div>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <StatCounter key={i} {...s} started={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PILLARS ══════════ */}
      <section className="section pillars-section" ref={pillarsRef}>
        <div className="pillars-bg-shape" />
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Our Commitment</span>
            <h2 className="section-title">Four Pillars of a Philomenian Education</h2>
            <div className="gold-rule" />
            <p className="section-subtitle">Everything we do flows from these core commitments to every student who walks through our gates.</p>
          </div>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div className={"pillar-card reveal" + (pillarsInView ? " visible" : "")} key={i} style={{transitionDelay: `${i*120}ms`}}>
                <div className="pillar-num">{p.num}</div>
                <div className="pillar-icon-wrap">
                  <span className="pillar-icon">{p.icon}</span>
                </div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
                <div className="pillar-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CAMPUS LIFE MOSAIC ══════════ */}
      <section className="section campus-section">
        <div className="container">
          <div className="campus-layout">
            <div className="campus-content reveal">
              <span className="eyebrow">Campus Life</span>
              <h2 className="section-title" style={{textAlign:'left'}}>
                Where Every Day is<br />a New Adventure
              </h2>
              <div className="gold-rule" style={{margin:'18px 0'}} />
              <p>From the discipline of morning assembly to the joy of annual celebrations — our school life is vibrant, purposeful, and filled with opportunities for every child to shine.</p>
              <div className="campus-features">
                {['Daily Morning Assembly','Annual Cultural Day','Inter-school Competitions','Educational Excursions','Sports & Fitness','Early Learning Garden'].map((f,i) => (
                  <div className="campus-feature" key={i}>
                    <div className="feature-check">✓</div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/campus-life" className="btn btn-primary" style={{marginTop:28}}>
                Explore Campus Life →
              </Link>
            </div>

            <div className="campus-mosaic reveal reveal-delay-2">
              <div className="mosaic-grid">
                <div className="mosaic-large">
                  <img src="/photo5.jpeg" alt="Assembly" />
                  <div className="mosaic-overlay">Assembly</div>
                </div>
                <div className="mosaic-small-stack">
                  <div className="mosaic-small">
                    <img src="/photo2.jpeg" alt="Events" />
                    <div className="mosaic-overlay">Cultural Events</div>
                  </div>
                  <div className="mosaic-small">
                    <img src="/photo3.jpeg" alt="Early learning" />
                    <div className="mosaic-overlay">Early Learning</div>
                  </div>
                </div>
                <div className="mosaic-wide">
                  <img src="/photo1.jpeg" alt="Students" />
                  <div className="mosaic-overlay">Class of 2024</div>
                </div>
                <div className="mosaic-medium">
                  <img src="/photo4.jpeg" alt="Annual day" />
                  <div className="mosaic-overlay">Annual Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PRINCIPAL MESSAGE ══════════ */}
      <section className="section principal-section">
        <div className="principal-bg" style={{backgroundImage:'url(/photo1.jpeg)'}} />
        <div className="principal-bg-overlay" />
        <div className="container">
          <div className="principal-card reveal">
            <div className="principal-card-accent" />
            <div className="principal-inner">
              <div className="principal-photo-col">
                <div className="principal-photo-frame">
                  <div className="principal-avatar">
                    <span>PP</span>
                  </div>
                </div>
                <div className="principal-badge">
                  <img src="/logo.jpeg" alt="School crest" />
                  <div>
                    <strong>[Principal Name]</strong>
                    <small>Principal</small>
                  </div>
                </div>
              </div>
              <div className="principal-message">
                <span className="eyebrow">Message from the Principal</span>
                <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.4rem,2.5vw,2rem)', color:'var(--maroon-dark)', margin:'12px 0'}}>
                  "Education is the Lighting of a Fire, Not the Filling of a Pail"
                </h2>
                <div className="gold-rule" style={{margin:'16px 0'}} />
                <p className="principal-text">
                  At St. Philomena's, we believe every child carries within them immense, unrealised potential. Our
                  role as educators is to create the conditions — the discipline, the warmth, the structure, and the
                  freedom — in which that potential can flourish.
                </p>
                <p className="principal-text">
                  We invite you to be partners in your child's education and members of our school family.
                  Together, we can make a difference that lasts a lifetime.
                </p>
                <Link to="/about" className="btn btn-outline-maroon" style={{marginTop:20}}>
                  Read Full Message →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Parent Voices</span>
            <h2 className="section-title">What Our School Community Says</h2>
            <div className="gold-rule" />
          </div>

          <div className="testimonials-layout reveal">
            <div className="testimonials-main">
              <div className="testimonial-active">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonials[activeTestimonial].text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonials[activeTestimonial].initials}</div>
                  <div>
                    <strong>{testimonials[activeTestimonial].name}</strong>
                    <span>{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-nav">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={"t-dot" + (i === activeTestimonial ? " active" : "")}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i+1}`}
                  />
                ))}
              </div>
            </div>

            <div className="testimonials-sidebar">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={"t-preview" + (i === activeTestimonial ? " active" : "")}
                  onClick={() => setActiveTestimonial(i)}
                >
                  <div className="t-preview-avatar">{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ADMISSIONS CTA ══════════ */}
      <section className="admissions-cta">
        <div className="admissions-cta-bg" style={{backgroundImage:'url(/photo2.jpeg)'}} />
        <div className="admissions-cta-overlay" />
        <div className="container admissions-cta-inner">
          <div className="admissions-cta-content reveal">
            <span className="eyebrow" style={{color:'var(--gold-light)'}}>Join Our School Family</span>
            <h2 className="cta-title">Give Your Child the Best<br />Start in Life</h2>
            <p className="cta-subtitle">Admissions are open for 2024–25. Secure your child's place in one of Kumaraswamy Layout's most trusted schools today.</p>
            <div className="cta-actions">
              <Link to="/admissions" className="btn btn-gold cta-btn-main">Apply for Admission</Link>
              <a href="tel:08026667999" className="btn btn-outline-white">📞 Call: 080 2666 7999</a>
            </div>
          </div>
          <div className="admissions-cta-visual reveal reveal-delay-2">
            <div className="cta-info-card">
              <div className="cta-info-item">
                <span className="cta-info-icon">📅</span>
                <div>
                  <strong>Academic Year</strong>
                  <span>2024 – 2025</span>
                </div>
              </div>
              <div className="cta-info-item">
                <span className="cta-info-icon">🏫</span>
                <div>
                  <strong>Grades Available</strong>
                  <span>LKG to Grade 10</span>
                </div>
              </div>
              <div className="cta-info-item">
                <span className="cta-info-icon">🗣</span>
                <div>
                  <strong>Medium</strong>
                  <span>English Medium</span>
                </div>
              </div>
              <div className="cta-info-item">
                <span className="cta-info-icon">📋</span>
                <div>
                  <strong>Board</strong>
                  <span>Karnataka State (KSEAB)</span>
                </div>
              </div>
              <a href="tel:08026667999" className="btn btn-gold" style={{width:'100%',justifyContent:'center',marginTop:8}}>
                Call to Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
