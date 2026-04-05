import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/campus-life', label: 'Campus Life' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/events', label: 'Events' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <div className="topbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:08026667999">080 2666 7999</a>
            </div>
            <div className="topbar-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:office@st-philomena.org">office@st-philomena.org</a>
            </div>
          </div>
          <div className="admissions-pill">
            <div className="pulse-dot" />
            Admissions Open 2024-25
          </div>
        </div>
      </div>

      <nav className={"navbar" + (scrolled ? " scrolled" : "")}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-brand">
            <div className="navbar-logo-wrap">
              <img src="/logo.jpeg" alt="St. Philomena's School" className="navbar-logo" />
              <div className="navbar-logo-ring" />
            </div>
            <div className="brand-text">
              <span className="brand-name">St. Philomena's</span>
              <span className="brand-tagline">English School · K.S. Layout</span>
            </div>
          </Link>

          <ul className={"navbar-links" + (menuOpen ? " open" : "")}>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/admissions" className="btn btn-gold nav-cta">Enquire Now</Link>
            </li>
          </ul>

          <button className={"hamburger" + (menuOpen ? " open" : "")} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  );
}
