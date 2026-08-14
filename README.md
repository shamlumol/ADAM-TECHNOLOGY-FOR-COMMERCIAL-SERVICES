# ADAM Technology for Commercial Services

A full-stack business website developed for **ADAM Technology for Commercial Services**, a transportation and commercial fleet services company.

**Live Website:** [adamtechcommercial.com](https://adamtechcommercial.com/)

---

## About

This project is a custom full-stack website developed for ADAM Technology for Commercial Services to showcase their transportation services and commercial vehicle fleet.

The website combines a modern responsive frontend with a Node.js/Express backend. It includes a dynamic vehicle showcase, admin dashboard, vehicle management, image uploads, contact form functionality, and email integration.

The project was developed as a **client website**, with a focus on responsive design, clean UI, maintainable code, and production deployment.

---

## Features

* Responsive design for desktop, tablet, and mobile
* Premium vehicle and fleet showcase
* Dynamic vehicle data
* Admin dashboard
* Vehicle management with CRUD operations
* Vehicle image upload and management
* RESTful API
* Contact form with email integration
* Admin authentication
* React Router navigation
* Reusable React components
* Production-ready frontend and backend
* Apache SPA routing support
* VPS deployment configuration

---

## Tech Stack

### Frontend

* **React 19**
* **Vite**
* **React Router DOM**
* **Bootstrap 5**
* **CSS**

### Backend

* **Node.js**
* **Express.js**
* **Resend**
* **Multer**
* **JSON-based data storage**

### Deployment

* **DigitalOcean / VPS**
* **PM2**
* **Apache**
* **Node.js**

---

## REST API

The frontend communicates with the Express backend through RESTful API endpoints.
The API handles vehicle management, image uploads, authentication, and contact form processing.

---

## Architecture

The application uses a full-stack architecture with a React frontend communicating with a Node.js/Express backend through RESTful APIs.

```text
                    ┌──────────────────┐
                    │       User       │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  React + Vite   │
                    │    Frontend      │
                    └────────┬─────────┘
                             │
                         REST API
                             │
                             ▼
                    ┌──────────────────┐
                    │ Node.js + Express│
                    │     Backend      │
                    └───────┬───┬──────┘
                            │   │
                 ┌──────────┘   └──────────┐
                 ▼                         ▼
          Fleet Data &                Resend API
          Image Uploads              Email Service
```

The backend can also serve the production-built React application, allowing the frontend and backend to operate together as a single deployed application.

---

## Project Structure

```text
ADAM-TECHNOLOGY/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── public/
│   │   └── uploads/
│   ├── data.json
│   └── package.json
│
└── README.md
```

---


The frontend and backend can be run simultaneously during development.

---

## Production

The application is structured for deployment on a VPS using Node.js, PM2, and Apache.


## Design & Development

The website was designed around the company's commercial transportation services and premium vehicle offering.

The UI focuses on:

* Clean and modern layouts
* Premium vehicle presentation
* Strong visual hierarchy
* Responsive design
* Simple navigation
* Clear calls-to-action
* Consistent spacing and typography
* Mobile-friendly interactions

The goal was to create a professional digital presence that represents the company's commercial services while keeping the user experience straightforward.

---

## My Role

**Full-Stack Web Developer**

I was responsible for the development and technical implementation of the project, including:

* React frontend development
* Component architecture
* Responsive UI implementation
* Backend development with Node.js and Express
* REST API development
* CRUD functionality
* Admin dashboard
* Vehicle and image management
* Contact form and email integration
* Authentication
* Production configuration
* Deployment preparation

---

## Client

**ADAM Technology for Commercial Services**

* **Industry:** Transportation & Commercial Fleet Services
* **Project Type:** Full-Stack Business Website
* **Role:** Full-Stack Web Developer

---

## Developer

**Shamlu Mol A K**
Full-Stack Web Developer

*  **Email:** [shamlumolakw@gmail.com](mailto:shamlumolakw@gmail.com)
*  **LinkedIn:** [linkedin.com/in/shamlu-mol-a-k](https://linkedin.com/in/shamlu-mol-a-k)

---

## Disclaimer

This repository contains work developed as part of a client project.

The client's branding, logos, images, content, business information, and other project-specific assets belong to **ADAM Technology for Commercial Services** and their respective owners.

This repository is shared to demonstrate the development work and technical implementation of the project.

---

## License

This is proprietary client work.

The source code, design, branding, content, and assets may not be reused, redistributed, or commercially reproduced without permission.
