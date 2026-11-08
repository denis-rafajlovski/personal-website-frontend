# Personal Website – Frontend

A modern, responsive personal portfolio website built with React and TypeScript. The website showcases my development projects, technical skills, and professional work through a dynamic interface connected to a Strapi CMS backend.

## Tech Stack

- **React 19** – UI development
- **TypeScript** – Static typing
- **React Router 8** – Routing and server-side rendering
- **Tailwind CSS 4** – Styling and responsive layouts
- **Vite 8** – Development and build tooling
- **Framer Motion** – Animations and transitions
- **React Icons** – Icon library
- **React Markdown** – Markdown content rendering

## Features

- Responsive portfolio interface
- Dynamic project management through Strapi CMS
- Featured projects section
- Project categories and filtering
- Project details and descriptions
- Dynamic images and media
- Animated UI components
- Server-side rendering with React Router

## Project Structure

```text
personal-website-frontend/
├── app/
│   ├── components/
│   ├── routes/
│   └── ...
├── public/
├── data/
├── package.json
├── package-lock.json
├── react-router.config.ts
├── vite.config.ts
├── tsconfig.json
├── Dockerfile
└── .env.example
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A running instance of the backend

### 1. Clone the repository

```bash
git clone https://github.com/denis-rafajlovski/personal-website-frontend.git
```

### 2. Navigate to the project

```bash
cd personal-website-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:1337/api
VITE_STRAPI_URL=http://localhost:1337
```

Update these values when using a deployed backend.

### 5. Run the development server

```bash
npm run dev
```

### 6. Build for production

```bash
npm run build
```

### 7. Run the production server

```bash
npm run start
```

## Available Scripts

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run dev`         | Start development server             |
| `npm run build`       | Build production application         |
| `npm run start`       | Start production server              |
| `npm run typecheck`   | Run TypeScript checks                |
| `npm run json-server` | Start local JSON Server on port 9090 |

## Backend

The application communicates with a separate Strapi CMS backend.

**Backend repository:**  
https://github.com/denis-rafajlovski/personal-website-backend

## Author

** DENIS RAFAJLOVSKI **

- GitHub: https://github.com/denis-rafajlovski
