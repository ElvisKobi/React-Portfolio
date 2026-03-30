# React Portfolio

Personal portfolio website built with React, Vite, and custom CSS.

The site showcases:

- Home intro and professional summary
- Featured projects and technical case studies
- Experience, skills, and education timeline
- Contact and social links

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Custom CSS
- React Icons
- ESLint

## Routes

- `/` -> Home
- `/projects` -> Projects
- `/experience` -> Experience
- `/contact` -> Contact

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-react-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build in `dist`
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
my-react-app/
|- public/
|- src/
|  |- assets/
|  |- constants/
|  |  |- contact.js
|  |- css/
|  |  |- App.css
|  |  |- Contact.css
|  |  |- Experience.css
|  |  |- index.css
|  |  |- Project.css
|  |- pages/
|  |  |- CommonNavLinks.jsx
|  |  |- Contact.jsx
|  |  |- Experience.jsx
|  |  |- Home.jsx
|  |  |- Project.jsx
|  |- ui/
|  |- App.jsx
|  |- main.jsx
|- index.html
|- package.json
```

## Deployment

### Build for production

```bash
npm run build
```

Deploy the generated `dist` folder to your preferred host:

- GitHub Pages
- Vercel
- Netlify
- Render

## Author

Elvis Kobi Acheampong
