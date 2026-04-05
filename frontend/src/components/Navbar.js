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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      {/* Top info bar */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span>📞 080 2666 7999</span>
            <span>✉ office@st-philomena.org</span>
          </div>
          <div className="topbar-right">
            <span className="admissions-badge">🎓 Admissions Open 2024–25</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-brand">
            <img src="/logo.jpeg" alt="St. Philomena's School Logo" className="navbar-logo" />
            <div className="navbar-brand-text">
              <span className="brand-name">St. Philomena's</span>
              <span className="brand-sub">English School</span>
            </div>
          </Link>

          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
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

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </>
  );
}
