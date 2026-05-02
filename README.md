# 🚀 NCC Portal — Company Management System

A modern, role-based web application designed to manage NCC (National Cadet Corps) company operations efficiently.

Built with a **production-grade frontend architecture**, this system centralizes cadet data, attendance tracking, study materials, events, and internal records into a single platform.

---

## 📌 Overview

The NCC Portal is designed for:

* 📋 Managing cadet records
* 📊 Tracking attendance and activities
* 📚 Organizing study materials
* 📅 Scheduling events
* 🖼️ Maintaining gallery records

The system follows a **role-based access model**:

* **Admin** → Full control
* **Cadet** → View-only access

---

## ✨ Features

### 🧑‍✈️ Cadet Management

* Store detailed cadet information
* Mask sensitive data (Aadhaar, bank details)
* Profile-based navigation

### 📊 Activities & Attendance

* Create and manage activities
* Mark attendance dynamically
* Visual attendance tracking with progress bars

### 📚 Study Module

* Upload and categorize materials
* Search + filter functionality
* File preview (PDF) + download support

### 📅 Events Module

* Track upcoming events
* Clean card-based UI
* Role-based creation access

### 🖼️ Gallery

* Grid-based image display
* Organized event photos
* Responsive layout

---

## 🔐 Role-Based Access Control

| Feature               | Admin | Cadet |
| --------------------- | ----- | ----- |
| View Data             | ✅     | ✅     |
| Add/Edit Cadets       | ✅     | ❌     |
| Mark Attendance       | ✅     | ❌     |
| Upload Study Material | ✅     | ❌     |
| Create Events         | ✅     | ❌     |

---

## 🎨 UI/UX Highlights

* Clean **SaaS-style dashboard design**
* Consistent **design system (colors, spacing, typography)**
* Responsive layout (mobile + desktop)
* Interactive UI (hover states, transitions)
* Modal-based workflows (upload, preview)

---

## ⚙️ Tech Stack

* **Frontend:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State Management:** React Context API
* **Routing:** Next.js Navigation
* **Data:** Mock JSON (frontend-only)

---

## 📁 Project Structure

```
/app
  /dashboard
  /cadets
  /activities
  /study
  /events
  /gallery

/components
  /layout
  /study
  /auth

/context
  AuthContext.tsx

/data
/types
/lib
```

---

## 🧠 Key Concepts Implemented

* Role-based UI rendering
* Route protection (frontend-level)
* State persistence (localStorage)
* Modular component architecture
* Reusable UI components

---

## ⚠️ Security Note

* Sensitive data is currently **mocked and masked** on frontend
* Backend encryption (AES) will be implemented in next phase
* Current role system is **UI-level only (not secure)**

---

## 🚧 Future Enhancements

* 🔐 Backend (Node.js + MongoDB)
* 🔑 Authentication (JWT)
* 🔒 Data encryption (Aadhaar & bank details)
* 📊 Analytics dashboard (charts)
* 📤 Export data (CSV/PDF)
* ☁️ Deployment (Vercel + cloud DB)

---

## 🖥️ Getting Started

```bash
git clone https://github.com/your-username/ncc-portal.git
cd ncc-portal
npm install
npm run dev
```

---

## 📸 Screenshots

*Add your UI screenshots here*

---

## 👨‍💻 Author

**Arpit**
Student Developer

---

## 📄 License

This project is for educational and demonstration purposes.
