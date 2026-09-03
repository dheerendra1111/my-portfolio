<div align="center">

# ✦ Dheerendra Singh Lodhi — Portfolio

### *Computer Engineering Student · Full-Stack Developer · DSA Enthusiast*

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![GitHub](https://img.shields.io/badge/GitHub-dheerendra1111-181717?style=flat-square&logo=github)](https://github.com/dheerendra1111)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/dheerendra-singh-lodhi-120410354)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/dheerendra1111/)
[![Email](https://img.shields.io/badge/Email-dheerjnv28@gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:dheerjnv28@gmail.com)

</div>

---

## 🌐 Live Preview

> **Run locally:** [`http://localhost:5173`](http://localhost:5173) *(see setup below)*

---

## 📸 Overview

A modern, high-performance **personal developer portfolio** built with **React 19 + Vite 8 + Tailwind CSS 4**. Designed to make a strong first impression with:

- ✨ **Animated particle/star canvas** in the hero section
- 🌙 **Deep dark theme** with glassmorphism cards
- 🎞️ **Scroll-reveal animations** powered by IntersectionObserver
- 📱 **Fully responsive** — mobile-first design
- ⚡ **Zero runtime CSS-in-JS** — pure Tailwind utility classes
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigation

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | CSS keyframes + Canvas API |
| **Icons** | Custom inline SVGs |
| **Form** | Formspree (serverless email) |
| **Fonts** | Inter — Google Fonts |
| **Deployment** | GitHub Pages / Vercel / Netlify |

---

## ✨ Features

### 🏠 Hero
- Animated **particle constellation** background (Canvas API)
- Circular profile photo with **spinning gradient ring**
- Floating tech skill badges with float animations
- **"Open to Work"** live indicator badge
- Staggered entrance animations for all text elements

### 📊 Stats Bar
- At-a-glance highlights: CGPA, projects built, core focus areas

### 👤 About
- Personal introduction paragraphs
- Interest chips (Full-Stack, DSA, AI/ML, System Design…)
- Profile card with avatar, education, location, and availability

### 🔧 Skills
- Categorised grid: Languages, Frontend, Backend, Database, Core CS, Tools
- Emoji icons + hover lift effect on each badge

### 🚀 Projects
- Card grid with **colour-coded gradient headers**
- Tech stack tags, GitHub & live demo links
- Hover elevation animation

### 🧠 Problem Solving
- DSA topics grid (Arrays → DP → Backtracking)
- Direct links to **GitHub** and **LeetCode** profile
- Decorative contribution activity grid

### 🗓️ Journey
- Vertical **timeline** of key milestones
- Scroll-animated entry for each event

### 🏆 Achievements
- Achievement cards with contextual icons
- Hover micro-animation

### 📄 Resume
- Full-bleed CTA section
- **Direct PDF download** (no in-browser viewer issues)

### 📬 Contact
- Validated contact form wired to **Formspree**
- Loading spinner, error feedback, and success state
- Direct email / LinkedIn / GitHub links

### 🔗 Navbar & Footer
- Sticky navbar with **active section highlight**
- Glass blur effect on scroll
- Mobile hamburger menu with slide-in animation

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── profile.jpg           # Profile photo
│   ├── resume.pdf            # Downloadable resume
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Particle canvas + profile photo visual
│   │   ├── Navbar.jsx        # Sticky nav with active section tracking
│   │   ├── Stats.jsx         # Quick stats bar
│   │   ├── About.jsx         # About me + profile card
│   │   ├── Skills.jsx        # Categorised skill badges
│   │   ├── Projects.jsx      # Project cards grid
│   │   ├── ProblemSolving.jsx # DSA topics + platform links
│   │   ├── Journey.jsx       # Animated timeline
│   │   ├── Achievements.jsx  # Achievement cards
│   │   ├── Resume.jsx        # Resume download CTA
│   │   ├── Contact.jsx       # Formspree contact form
│   │   ├── Footer.jsx        # Footer with nav & socials
│   │   └── Icons.jsx         # All SVG icon components
│   ├── data/
│   │   └── portfolioData.js  # ← All personal info & content lives here
│   ├── hooks/
│   │   └── useReveal.js      # IntersectionObserver scroll-reveal hooks
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Design tokens + custom CSS utilities
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/dheerendra1111/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build      # Output goes to /dist
npm run preview    # Preview the production build locally
```

---

## ⚙️ Customisation

All personal content is centralised in **one file** — easy to edit, zero hunt-and-replace:

📄 `src/data/portfolioData.js`

```js
export const personalInfo = {
  name:      "Your Name",
  github:    "https://github.com/yourusername",
  linkedin:  "https://linkedin.com/in/yourusername",
  email:     "you@example.com",
  leetcode:  "https://leetcode.com/u/yourusername/",
  resumeUrl: "/resume.pdf",
};

// Add/edit your projects, skills, timeline, achievements...
```

### Wiring the Contact Form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io)
2. Create a new form → copy your **Form ID** (e.g. `xpzgkdob`)
3. Open `src/components/Contact.jsx` and update:
   ```js
   const FORMSPREE_ID = "xpzgkdob"; // ← your real Form ID
   ```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.0 | UI framework |
| `react-dom` | ^19.1.0 | DOM rendering |
| `tailwindcss` | ^4.1.8 | Utility-first styling |
| `@vitejs/plugin-react` | ^4.5.2 | React fast-refresh |
| `vite` | ^8.2.2 | Build tool & dev server |

---

## 🤝 Fork & Use

Feel free to **fork this repo** and make it your own!

1. Fork the project
2. Update `src/data/portfolioData.js` with your info
3. Replace `public/profile.jpg` with your photo
4. Replace `public/resume.pdf` with your resume
5. Deploy to [Vercel](https://vercel.com) / [Netlify](https://netlify.com) / [GitHub Pages](https://pages.github.com)

A ⭐ on the repo is appreciated if you find it useful!

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**Built with 💜 by [Dheerendra Singh Lodhi](https://github.com/dheerendra1111)**

*B.Tech Computer Engineering · IET DAVV, Indore · Class of 2028*

</div>
