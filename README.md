# Vivek Kumar Yadav - Developer Portfolio

A modern, professional, and responsive personal portfolio website built for a Software Engineer / Full Stack Developer.

## Tech Stack
- **Framework:** React.js + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Features
- **Dark Theme** designed for developers
- **Responsive Layout** (Mobile, Tablet, Desktop)
- **Subtle Animations** with Framer Motion
- **SEO Optimized** structure
- **Component Based** architecture
- Easy to update data file (`src/data/portfolioData.js`)

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server, run:
```bash
npm run dev
```
Open the provided local URL (usually `http://localhost:5173`) in your browser to view the portfolio.

## Updating Content

All the data (text, skills, projects, links) is stored in a single file to make it easy to update without hunting through components.

1. Open `src/data/portfolioData.js`
2. Edit the content in the `portfolioData` object.
3. Replace the placeholder images in the `public/projects/` directory with your actual project screenshots.
4. Replace the placeholder resume in `public/resume/Vivek-Kumar-Yadav-Resume.pdf` with your actual resume PDF.

## Deployment

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository.
4. Leave the default build settings (Framework Preset: Vite, Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

### Deploying to GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update `vite.config.js` to include your base path: `base: '/your-repo-name/'`
3. Add deployment scripts to `package.json`.
4. Run the deploy script.

---
Designed & Built by Vivek Kumar Yadav.
