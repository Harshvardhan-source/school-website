import React from 'react';
import './PageHero.css';

export default function PageHero({ title, subtitle, bgImage, eyebrow }) {
  return (
    <div
      className="page-hero"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        {eyebrow && <span className="page-hero-eyebrow">{eyebrow}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        <div className="page-hero-divider" />
      </div>
    </div>
  );
}
