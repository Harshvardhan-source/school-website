import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import './Gallery.css';

const categories = ['All', 'Assembly', 'Events', 'Students', 'Celebrations', 'Early Learning'];

const images = [
  { id: 1, src: '/photo5.jpeg', title: 'Morning Assembly', category: 'Assembly', caption: 'Daily assembly — unity and discipline from the first bell', span: true },
  { id: 2, src: '/photo4.jpeg', title: 'Annual Day', category: 'Celebrations', caption: 'Students shine at the annual day celebrations', tall: true },
  { id: 3, src: '/photo2.jpeg', title: 'Cultural Excursion', category: 'Events', caption: 'At Indira Kala Mandira — arts and culture beyond campus' },
  { id: 4, src: '/photo1.jpeg', title: 'Class Portrait', category: 'Students', caption: 'Class photograph with their beloved teacher' },
  { id: 5, src: '/photo3.jpeg', title: 'Early Learning Circle', category: 'Early Learning', caption: 'Morning prayer with their teacher on the school lawn' },
  { id: 6, src: '/photo5.jpeg', title: 'Assembly Ground', category: 'Assembly', caption: "Bird's-eye view of the school assembly", span: true },
  { id: 7, src: '/photo1.jpeg', title: 'Senior Batch', category: 'Students', caption: 'Senior students in the maroon blazer uniform' },
  { id: 8, src: '/photo2.jpeg', title: 'School Event', category: 'Events', caption: 'Teachers and students at an interschool programme' },
  { id: 9, src: '/photo4.jpeg', title: 'Cultural Performance', category: 'Celebrations', caption: 'Dressed for the annual cultural performance' },
  { id: 10, src: '/photo3.jpeg', title: 'Pre-Primary Class', category: 'Early Learning', caption: 'Activity-based early learning in action' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory);

  const navigate = (dir) => {
    const idx = filtered.findIndex(i => i.id === lightbox.id);
    setLightbox(filtered[(idx + dir + filtered.length) % filtered.length]);
  };

  return (
    <div>
      <PageHero eyebrow="Photo Gallery" title="Our School in Pictures" subtitle="Moments of learning, celebration, and community — captured through the lens." bgImage="/photo5.jpeg" />

      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(cat => (
              <button key={cat} className={"filter-btn" + (activeCategory === cat ? " active" : "")} onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={"gallery-item" + (img.span ? " span-2" : "") + (img.tall ? " tall" : "")}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-cat">{img.category}</span>
                  <div className="gallery-item-title">{img.title}</div>
                  <div className="gallery-item-caption">{img.caption}</div>
                </div>
                <div className="gallery-zoom">🔍</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
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
