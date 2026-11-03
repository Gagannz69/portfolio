# 🚀 Modern CSE Student Portfolio

A high-performance personal developer portfolio built for first-year Computer Science Engineering students using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Featuring a dark aesthetic (`#09090B`), electric purple/violet gradients, subtle blue accents, smooth micro-interactions, responsive navigation, and a single centralized configuration file for instant personalization.

---

## ⚡ Tech Stack

- **React 18** – Modern functional components and hooks
- **TypeScript** – Strict type-safety and autocompletion
- **Vite 5** – Lightning-fast build tool and HMR
- **Tailwind CSS 3** – Custom dark design system
- **Framer Motion 11** – Smooth section reveal animations & role cycler
- **Lucide React** – Clean developer and UI icons

---

## 📂 Project Architecture

```
my info/
├── index.html                   # HTML entry point with Inter & JetBrains Mono fonts
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite configuration
├── tailwind.config.js           # Custom dark theme & palette extensions
├── src/
│   ├── main.tsx                 # React DOM mount point
│   ├── App.tsx                  # Root layout composing sections
│   ├── index.css                # Tailwind directives, animations & custom scrollbar
│   ├── types/
│   │   └── portfolio.ts         # TypeScript interfaces for portfolio data
│   ├── data/
│   │   └── portfolio.ts         # ⭐️ CENTRAL CONFIG FILE: Edit all your details here!
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky blurred navbar with active link indicator & mobile menu
│   │   ├── SectionHeading.tsx   # Reusable animated section headings with badges
│   │   ├── ProjectCard.tsx      # Interactive project cards with code/visual previews
│   │   ├── SkillBadge.tsx       # Categorized skill badges with icons
│   │   └── Footer.tsx           # Social links, copyright, and smooth back-to-top button
│   └── sections/
│       ├── Hero.tsx             # Animated role text cycling, status badge, CTA buttons & terminal
│       ├── About.tsx            # First-year CSE narrative & highlight cards
│       ├── Skills.tsx           # Categorized skills (Languages, Frontend, Tools)
│       ├── Projects.tsx         # Featured project showcases with GitHub/demo links
│       ├── Education.tsx        # Vertical academic timeline with coursework tags
│       └── Contact.tsx          # Copyable email, direct mailto, and social links
```

---

## 🛠️ Getting Started Locally

### 1. Prerequisites
Ensure Node.js (v18+) is installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open **[http://localhost:5173/](http://localhost:5173/)** in your browser to view your live portfolio with Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This generates an optimized static build in the `dist/` directory ready for deployment.

---

## ✏️ How to Personalize Your Information

You **do not** need to hunt through components to update your information. Everything is managed from a single central file:

👉 **[portfolio.ts](file:///c:/Users/gs416/Downloads/my%20info/src/data/portfolio.ts)**

### 1. Personal Details & Social Links
Open `src/data/portfolio.ts` and modify the fields directly:
```ts
export const portfolioData = {
  name: "Gagandeep Singh",
  title: "Frontend Developer | CSE Student",
  email: "gaganzzz99@gmail.com",
  github: "https://github.com/Gagannz69",
  linkedin: "https://www.linkedin.com/in/gaganzzz99/",
  instagram: "",
  college: "Guru Tegh Bahadur Institute Of Technology",
  degree: "B.Tech Computer Science Engineering",
  year: "1st Year",
  about: "...",
  ...
};
```

### 2. Adding a New Project
Simply add a new object to the `projects` array in `src/data/portfolio.ts`:
```ts
{
  id: 'my-new-project',
  title: 'My Project Name',
  description: 'A brief description of what you built and the problem it solved.',
  tags: ['React', 'TypeScript', 'Tailwind CSS'],
  githubUrl: 'https://github.com/your-username/my-new-project',
  liveUrl: 'https://my-demo-link.com',
  category: 'web', // 'web' | 'tool' | 'academic'
  featured: true,
  highlights: [
    'Feature 1 description',
    'Feature 2 description'
  ]
}
```

### 3. Updating Education & Skills
Modify the `education` array to match your university, high school, and coursework. Update the `skills` array to add any new libraries, languages, or tools you learn.

---

## 🌐 How to Upload to GitHub and Deploy

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "feat: initial commit of personal portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-portfolio-repo.git
git push -u origin main
```

### 2. Free Deployment Options
- **Vercel** (Recommended):
  1. Go to [vercel.com](https://vercel.com) and connect your GitHub account.
  2. Click **Add New Project** and select your repository.
  3. Framework preset will automatically detect **Vite**.
  4. Click **Deploy** — your portfolio is live with a free SSL domain!
- **Netlify**:
  1. Drag and drop the `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop) or connect to your GitHub repository.

