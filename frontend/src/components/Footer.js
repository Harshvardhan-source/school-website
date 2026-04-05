import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src="/logo.jpeg" alt="St. Philomena's School" className="footer-logo" />
              <div>
                <div className="footer-school-name">St. Philomena's English School</div>
                <span className="footer-school-sub">K.S. Layout · Bengaluru</span>
              </div>
            </div>
            <p className="footer-desc">A trusted English-medium co-educational day school committed to academic excellence, character building, and holistic development in the heart of Bengaluru.</p>
            <div className="footer-social">
              {[
                { label: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
                { label: 'YouTube', href: '#', icon: <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.58C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-btn" aria-label={s.label} target="_blank" rel="noreferrer">{s.icon}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-links">
              {[['/', 'Home'],['/about','About Us'],['/academics','Academics'],['/admissions','Admissions'],['/campus-life','Campus Life'],['/gallery','Gallery'],['/events','Events & News'],['/contact','Contact']].map(([to,label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-heading">Academics</h4>
            <ul className="footer-links">
              {[['Pre-Primary (LKG–UKG)'],['Primary (Grades 1–5)'],['Middle School (6–8)'],['Secondary (Grades 9–10)'],['State Board (KSEAB)'],['English Medium'],['Co-Educational']].map(([l]) => (
                <li key={l}><Link to="/academics">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-heading">Contact Us</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <div className="fc-icon">📍</div>
                <div className="fc-text">
                  <strong>Address</strong>
                  <span>15 F, Millennium Ave, 47/A12, Kumaraswamy Layout II Stage, Bengaluru 560111</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="fc-icon">📞</div>
                <div className="fc-text"><strong>Phone</strong><a href="tel:08026667999">080 2666 7999</a></div>
              </div>
              <div className="footer-contact-item">
                <div className="fc-icon">✉</div>
                <div className="fc-text"><strong>Email</strong><a href="mailto:office@st-philomena.org">office@st-philomena.org</a></div>
              </div>
              <div className="footer-contact-item">
                <div className="fc-icon">🕐</div>
                <div className="fc-text"><strong>Hours</strong><span>Mon–Sat: 8:00 AM – 4:30 PM</span></div>
              </div>
            </div>
            <div className="footer-map-embed">
              <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684!2d77.5677!3d12.9084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15dc3b12e24d%3A0x4e0f6bc4b41f3f4e!2sSt.%20Philomena%27s%20School%20K.S.%20Layout!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" width="100%" height="130" style={{border:0}} allowFullScreen="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">© {new Date().getFullYear()} St. Philomena's English School, Bengaluru. All rights reserved.</p>
          <span className="footer-board-tag">English Medium · Karnataka State Board · Co-Educational Day School</span>
        </div>
      </div>
    </footer>
  );
}
