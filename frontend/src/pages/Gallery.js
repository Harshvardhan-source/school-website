import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Gallery.css';

const categories = ['All', 'Assembly', 'Events', 'Students', 'Celebrations', 'Early Learning'];

const images = [
  { id: 1, src: '/photo5.jpeg', title: 'Morning Assembly', category: 'Assembly', caption: 'Daily morning assembly — a tradition of unity and discipline' },
  { id: 2, src: '/photo4.jpeg', title: 'Annual Day', category: 'Celebrations', caption: 'Annual Day — students shine in their finest attire' },
  { id: 3, src: '/photo2.jpeg', title: 'Cultural Excursion', category: 'Events', caption: 'Students at Indira Kala Mandira for a cultural excursion' },
  { id: 4, src: '/photo1.jpeg', title: 'Class Portrait', category: 'Students', caption: 'Class photograph with their class teacher' },
  { id: 5, src: '/photo3.jpeg', title: 'Early Learning Circle', category: 'Early Learning', caption: 'Pre-primary students in a morning prayer circle with their teacher' },
  { id: 6, src: '/photo5.jpeg', title: 'Assembly Ground', category: 'Assembly', caption: 'A bird\'s-eye view of the school assembly — discipline in rows' },
  { id: 7, src: '/photo4.jpeg', title: 'Cultural Performance', category: 'Celebrations', caption: 'Students dressed for the annual cultural performance' },
  { id: 8, src: '/photo1.jpeg', title: 'Senior Students', category: 'Students', caption: 'Senior students in the school\'s signature maroon blazer uniform' },
  { id: 9, src: '/photo2.jpeg', title: 'School Event', category: 'Events', caption: 'Teachers and students at an interschool cultural programme' },
  { id: 10, src: '/photo3.jpeg', title: 'Pre-Primary Class', category: 'Early Learning', caption: 'Young learners engaged in guided prayer activity on the school lawn' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (img) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir) => {
    const idx = filtered.findIndex(i => i.id === lightbox.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setLightbox(filtered[next]);
  };

  return (
    <div>
      <PageHero
        eyebrow="Photo Gallery"
        title="Our School in Pictures"
        subtitle="Moments of learning, celebration, and community — captured through the lens."
        bgImage="/photo5.jpeg"
      />

      <section className="section">
        <div className="container">
          {/* Filter Bar */}
          <div className="gallery-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`gallery-item ${i === 0 ? 'wide' : ''}`}
                onClick={() => openLightbox(img)}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-info">
                    <span className="gallery-item-cat">{img.category}</span>
                    <h4>{img.title}</h4>
                    <p>{img.caption}</p>
                  </div>
                  <div className="gallery-zoom-icon">🔍</div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-nav prev" onClick={e => { e.stopPropagation(); navigate(-1); }}>‹</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <div className="lightbox-caption">
              <span className="lightbox-cat">{lightbox.category}</span>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.caption}</p>
            </div>
          </div>
          <button className="lightbox-nav next" onClick={e => { e.stopPropagation(); navigate(1); }}>›</button>
        </div>
      )}
    </div>
  );
}
