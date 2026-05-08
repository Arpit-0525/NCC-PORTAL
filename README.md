# 🚀 NCC Portal — Company Management System

A modern, role-based NCC (National Cadet Corps) management platform built to streamline company-level operations including cadet management, attendance tracking, study materials, events, analytics, and internal records.

The project is designed with a scalable frontend architecture using Next.js App Router and follows a modular SaaS-style UI approach.

---

# 📌 Overview

The NCC Portal centralizes core NCC workflows into a single platform:

- 🧑‍✈️ Cadet management
- 📊 Attendance & activity tracking
- 📚 Study material organization
- 📅 Event management
- 🖼️ Gallery management
- 📈 Cadet performance analytics

The system follows a **role-based access model**:

| Role | Access |
|------|------|
| Admin | Full access |
| Cadet | Restricted / view-only access |

---

# ✨ Features

## 🏠 Public Homepage

- NCC-inspired landing page
- Full-screen hero carousel
- Animated image transitions
- Dedicated “Cadet’s Corner” sections:
  - Sports
  - National Camps
  - Achievements
  - Training
  - Social Activities
  - Adventure
- Dynamic section pages with detailed galleries

---

## 🧑‍✈️ Cadet Management

- Store detailed cadet records
- Profile-based navigation
- Sensitive data masking
- Admin-only sensitive information access
- Individual cadet profile pages

### Stored Information
- Name
- Parent details
- Contact numbers
- Blood group
- Aadhaar (masked)
- Bank details (masked)

---

## 📈 Cadet Performance Analytics

Each cadet profile includes an analytics dashboard with performance graphs for:

- Drill
- Physical training
- Theory
- Social interaction

Built using interactive charts for performance visualization and improvement tracking.

---

## 📊 Activities & Attendance

- Create activities/events
- Attendance management
- Dynamic attendance tracking
- Attendance progress visualization
- Clean activity cards UI

---

## 📚 Study Module

- Upload study materials
- Category-based organization
- Search & filtering
- File preview support
- Download support
- Role-based upload restrictions

---

## 📅 Events Module

- Upcoming events display
- Responsive card-based layout
- Event scheduling UI
- Admin-only management access

---

## 🖼️ Gallery

- Event-based image organization
- Responsive image grid
- Hover animations
- Modern gallery layout

---

# 🔐 Role-Based Access Control

| Feature | Admin | Cadet |
|---|---|---|
| View Dashboard | ✅ | ✅ |
| View Cadets | ✅ | ✅ |
| View Sensitive Data | ✅ | ❌ |
| Add/Edit Cadets | ✅ | ❌ |
| Mark Attendance | ✅ | ❌ |
| Upload Study Material | ✅ | ❌ |
| Create Events | ✅ | ❌ |
| Access Analytics | ✅ | Limited |

---

# 🎨 UI/UX Highlights

- Premium SaaS-style dashboard
- Fixed sidebar + sticky navbar
- Responsive design (mobile + desktop)
- Modular component architecture
- Interactive animations & transitions
- Modal-based workflows
- Full-width modern landing page
- Military-inspired UI styling

---

# ⚙️ Tech Stack

## Frontend
- Next.js (App Router)
- React
- TypeScript

## Styling
- Tailwind CSS

## State Management
- React Context API

## Charts & UI Libraries
- Recharts
- Swiper.js

## Data Layer
- Mock TypeScript/JSON data

---

# 📁 Project Structure

```bash
/app
  /(public)
    page.tsx
    /corner/[category]

  /(main)
    layout.tsx
    /dashboard
    /cadets
    /activities
    /study
    /events
    /gallery

/components
  /layout
  /cadets
  /study
  /gallery

/context
  AuthContext.tsx

/data
/types
/lib
/public
```

---

# 🧠 Key Concepts Implemented

- Role-based UI rendering
- Frontend route protection
- Persistent role management (localStorage)
- Dynamic routing
- Modular architecture
- Reusable components
- Interactive analytics dashboard
- Responsive layouts
- Dynamic content pages

---

# 🔐 Security Considerations

Current implementation is frontend-only and uses mocked data.

Sensitive information:
- Aadhaar numbers
- Bank details

Planned backend security measures:
- AES encryption
- Secure authentication
- JWT-based authorization
- Backend RBAC
- Secure exports

> ⚠️ Current role protection is UI-level only and not production secure.

---

# 🚧 Future Enhancements

## Backend & Security
- Node.js + Express backend
- MongoDB/PostgreSQL integration
- JWT authentication
- AES encryption
- Secure APIs

## Analytics
- Overall performance scoring
- Cadet ranking system
- Leaderboards
- Performance grading

## Features
- CSV/PDF export
- Notifications system
- Real attendance records
- Cloud deployment
- AI-assisted analytics

---

# 🖥️ Getting Started

## Clone Repository

```bash
git clone https://github.com/your-username/ncc-portal.git
```

## Navigate to Project

```bash
cd ncc-portal
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

---

# 📸 Screenshots

Add project screenshots here:

- Homepage
- Dashboard
- Cadet Analytics
- Study Module
- Gallery
- Events

---

# 👨‍💻 Author

## Arpit Sangwan
Student Developer

---

# 📄 License

This project is intended for educational, academic, and portfolio purposes.