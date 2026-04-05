# St. Philomena's English School Website
### Django + React Full-Stack Application

---

## 📁 Project Structure

```
stphilomenas/
├── backend/          # Django REST API
│   ├── core/         # Django project settings & URLs
│   ├── school/       # School app (models, views, serializers)
│   ├── media/        # Uploaded media files (photos, logo)
│   ├── manage.py
│   └── requirements.txt
└── frontend/         # React application
    ├── public/       # Static files (logo, photos)
    ├── src/
    │   ├── components/   # Navbar, Footer, PageHero, WhatsAppFab
    │   └── pages/        # Home, About, Academics, Admissions, CampusLife, Gallery, Events, Contact
    └── package.json
```

---

## 🚀 Setup Instructions

### 1. Backend (Django)

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate      # Mac/Linux
venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py makemigrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server (runs on port 8000)
python manage.py runserver
```

**Django Admin:** http://localhost:8000/admin/
- Manage inquiries, contact messages, events, gallery images

**API Endpoints:**
- `GET  /api/info/`       — School info
- `POST /api/inquiry/`    — Admissions enquiry form
- `POST /api/contact/`    — Contact form
- `GET  /api/events/`     — Events list (filter: ?category=)
- `GET  /api/gallery/`    — Gallery images (filter: ?category=)

---

### 2. Frontend (React)

```bash
cd frontend

# Install dependencies
npm install

# Start development server (runs on port 3000)
npm start
```

The React app proxies API calls to http://localhost:8000 automatically (configured in package.json).

**Open:** http://localhost:3000

---

### 3. Production Build

```bash
# Build React frontend
cd frontend
npm run build

# Collect static files (Django)
cd ../backend
python manage.py collectstatic

# Serve with gunicorn + nginx (recommended)
pip install gunicorn
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

---

## 🎨 Brand Colors

| Color       | Hex       | Usage                          |
|-------------|-----------|--------------------------------|
| Maroon      | `#6B1E2A` | Primary brand, buttons, accents|
| Gold        | `#C9A84C` | Highlights, borders, dividers  |
| Cream       | `#FAF6EE` | Section backgrounds            |
| Navy        | `#1C2B4A` | Footer, dark sections          |

---

## 📸 Replacing Placeholder Content

| Placeholder            | How to Update                                      |
|------------------------|----------------------------------------------------|
| `[Principal Name]`     | Find & replace in About.js, Home.js                |
| `[Vision Statement]`   | Edit in About.js → Vision & Mission section        |
| `[Year of Establishment]` | Edit in Home.js stats, About.js timeline        |
| Principal photo        | Replace the placeholder div with `<img>` in About.js|
| Gallery images         | Add via Django Admin → Gallery section             |
| Events                 | Add via Django Admin → Events section              |

---

## 📱 Pages Included

1. **Home** — Hero, quick info strip, about preview, stats, pillars, campus life mosaic, principal message, testimonials, admissions CTA
2. **About** — Introduction, vision & mission, values, principal's message, why choose us, timeline
3. **Academics** — Stage-wise curriculum (Pre-Primary → Secondary), teaching approach, State Board info
4. **Admissions** — Enquiry form, 6-step process, document checklist, FAQ accordion
5. **Campus Life** — Activity highlights, photo mosaic, co-curricular grid, values banner
6. **Gallery** — Category-filtered masonry gallery with lightbox viewer
7. **Events** — Filter-by-category event cards, notice board
8. **Contact** — Contact info cards, embedded map, contact form, quick facts

---

## 🔧 Tech Stack

- **Backend:** Django 4.2 + Django REST Framework + CORS Headers
- **Frontend:** React 18 + React Router v6
- **Database:** SQLite (development) — switch to PostgreSQL for production
- **Styling:** Custom CSS with CSS variables (no CSS framework)
- **Fonts:** Playfair Display + Cormorant Garamond + Source Sans 3 (Google Fonts)

---

## 📞 School Contact

- **Phone:** 080 2666 7999
- **Email:** office@st-philomena.org
- **Address:** 15 F, Millennium Avenue, 47/A12, Kumaraswamy Layout II Stage, Bengaluru – 560111
