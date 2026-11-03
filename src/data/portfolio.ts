import { PortfolioData } from '../types/portfolio';

/**
 * =======================================================================
 * CENTRAL PORTFOLIO CONFIGURATION - GAGANDEEP SINGH
 * =======================================================================
 */
export const portfolioData: PortfolioData = {
  // Personal Information
  name: "Gagandeep Singh",
  firstName: "Gagandeep",
  title: "Systems Programmer & Full-Stack Web Engineer",
  roles: [
    "Systems & Web Engineer",
    "LLM & AI Practitioner",
    "C++ Concurrency Explorer",
    "CSE Undergrad // '26–'30",
  ],
  statusBadge: "GTBIT CSE // Class of 2026–2030 • Active Builder",
  
  // Contact & Social Links
  email: "gaganzzz99@gmail.com",
  github: "https://github.com/Gagannz69",
  linkedin: "https://www.linkedin.com/in/gaganzzz99/",
  instagram: "https://www.instagram.com/gagannz_?obrf=MTlobWQ3Mm1wb3lrMA==",
  
  // Academic Information
  college: "Guru Tegh Bahadur Institute Of Technology",
  degree: "B.Tech Computer Science Engineering",
  year: "1st Year (2026 - 2030)",
  location: "New Delhi, India",

  // Introductions
  shortIntro: "First-year Computer Science Engineering undergrad at GTBIT ('26–'30). I bridge core operating systems and low-level C++ with modern web architectures and local LLM pipelines.",
  
  about: `Hi, I'm Gagandeep Singh, a first-year Computer Science and Engineering student at Guru Tegh Bahadur Institute of Technology ('26–'30). As a developer and systems enthusiast, I architect robust applications and continuously push my technical boundaries.

My active focus centers on Artificial Intelligence—specifically LLM fine-tuning concepts, prompt orchestration, and local inference pipelines. I love connecting low-level systems mechanics to modern interfaces—whether that involves engineering a multi-threaded HTTP server from raw sockets in C++, crafting real-time algorithm visualizers, or embedding AI models into fluid web environments. I value clean code, memory safety, and high-performance execution.`,

  // Section-by-Section Background Looped Videos (selected from refrences/ 1.mp4 - 10.mp4)
  sectionBgs: {
    home: "/bgs/6.mp4",       // Video 6 from refrences
    about: "/bgs/2.mp4",      // Neon grid flow
    skills: "/bgs/3.mp4",     // Ambient particle energy
    projects: "/bgs/4.mp4",   // Dark flow loop
    education: "/bgs/7.mp4",  // Cosmic rays & geometry
    contact: "/bgs/9.mp4",    // Electric purple mist
  },

  // All 10 Reference Loops Available
  availableBgs: [
    { id: "1", label: "Loop 01 (Deep Cyber)", src: "/bgs/1.mp4" },
    { id: "2", label: "Loop 02 (Neon Grid)", src: "/bgs/2.mp4" },
    { id: "3", label: "Loop 03 (Particle Energy)", src: "/bgs/3.mp4" },
    { id: "4", label: "Loop 04 (Dark Flow)", src: "/bgs/4.mp4" },
    { id: "5", label: "Loop 05 (Void Horizon)", src: "/bgs/5.mp4" },
    { id: "6", label: "Loop 06 (Quantum Mesh)", src: "/bgs/6.mp4" },
    { id: "7", label: "Loop 07 (Cosmic Ray)", src: "/bgs/7.mp4" },
    { id: "8", label: "Loop 08 (Hyperdrive)", src: "/bgs/8.mp4" },
    { id: "9", label: "Loop 09 (Electric Fog)", src: "/bgs/9.mp4" },
    { id: "10", label: "Loop 10 (Abyssal Wave)", src: "/bgs/10.mp4" },
  ],

  // About Section Highlight Cards
  aboutHighlights: [
    {
      title: "Local AI & LLM Systems",
      tagline: "Inference & Prompt Architecture",
      description: "Running local LLM models, experimenting with context pipelines, and integrating real-time streaming inference into web clients.",
      iconName: "Sparkles",
      accentColor: "from-purple-500/20 to-indigo-500/20",
    },
    {
      title: "Concurrent C++ Systems",
      tagline: "Sockets & Thread Pooling",
      description: "Developing custom multithreaded HTTP servers from bare POSIX sockets to master OS concurrency, memory buffers, and protocols.",
      iconName: "Cpu",
      accentColor: "from-violet-500/20 to-purple-500/20",
    },
    {
      title: "Algorithms & Modern Web",
      tagline: "TypeScript & Systems Architecture",
      description: "Building animated algorithmic state-machine visualizers and shipping type-safe, responsive web applications.",
      iconName: "Code2",
      accentColor: "from-sky-500/20 to-blue-500/20",
    },
  ],

  // Skills (Python and React removed per user request)
  skills: [
    // Programming Languages
    { name: "C++", category: "languages", iconName: "FileCode2", badge: "Concurrency & DSA" },
    { name: "C", category: "languages", iconName: "Cpu", badge: "Low-Level Memory" },
    { name: "JavaScript (ES6+)", category: "languages", iconName: "FileCode", badge: "Web Engine" },
    { name: "TypeScript", category: "languages", iconName: "Code", badge: "Type-Safe Systems" },

    // Frontend & Web Architecture
    { name: "Tailwind CSS", category: "frontend", iconName: "Sparkles", badge: "Design Systems" },
    { name: "HTML5", category: "frontend", iconName: "Layout", badge: "Semantic Structure" },
    { name: "CSS3", category: "frontend", iconName: "Palette", badge: "GPU Animations" },
    { name: "DOM & Web APIs", category: "frontend", iconName: "Layers", badge: "Browser Mechanics" },

    // Tools & Modern Technologies
    { name: "Git", category: "tools", iconName: "GitBranch", badge: "Version Control" },
    { name: "GitHub", category: "tools", iconName: "Github", badge: "Collaboration" },
    { name: "Linux / Shell", category: "tools", iconName: "Terminal", badge: "POSIX CLI" },
    { name: "Vite", category: "tools", iconName: "Zap", badge: "Bundler & HMR" },
  ],

  // Featured Projects
  projects: [
    {
      id: "multi-threaded-server",
      title: "Multi-Threaded HTTP Web Server",
      description: "A high-concurrency HTTP/1.1 server engineered in modern C++ utilizing socket programming, worker thread pooling, and non-blocking I/O routines.",
      tags: ["C++", "POSIX Sockets", "Multithreading", "HTTP/1.1"],
      githubUrl: "https://github.com/Gagannz69",
      liveUrl: "#",
      category: "system",
      featured: true,
      highlights: [
        "Concurrent client connections handled via custom pre-allocated thread pools",
        "Raw HTTP header parsing and zero-copy static asset streaming",
        "Engineered to master OS synchronization primitives and memory safety",
      ],
    },
    {
      id: "dsa-visualizer",
      title: "Algorithmic Visualizer & Playground",
      description: "Interactive visualizer for complex sorting routines and recursive graph searches, showing real-time pointer movement, partition barriers, and swap metrics.",
      tags: ["TypeScript", "Canvas API", "Algorithms", "C++ Logic"],
      githubUrl: "https://github.com/Gagannz69",
      liveUrl: "#",
      category: "academic",
      featured: true,
      highlights: [
        "Step-by-step playback speed, randomized array generators, and swap counters",
        "Visual partitioning boundaries for QuickSort, MergeSort, and HeapSort",
        "Built to deepen intuitive algorithmic analysis for CS undergrad studies",
      ],
    },
    {
      id: "portfolio-website",
      title: "Cinematic Developer Portfolio",
      description: "An atmospheric personal portfolio with ambient looping video backdrops, custom interactive terminal, and centralized architecture.",
      tags: ["TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/Gagannz69",
      liveUrl: "#",
      category: "web",
      featured: true,
      highlights: [
        "Hardware-accelerated cinematic video backgrounds from local references",
        "Dynamic background switching tied to active navigation sections",
        "Zero boilerplate — unified data layer across all components",
      ],
    },
  ],

  // Education Timeline
  education: [
    {
      institution: "Guru Tegh Bahadur Institute Of Technology (GTBIT)",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      duration: "2026 - 2030 (Expected)",
      status: "1st Year Undergrad (2026 - 2030)",
      location: "New Delhi, India",
      description: "Four-year undergraduate engineering degree covering core computing systems, data structures, discrete mathematics, digital logic, operating systems, and software architecture.",
      coursework: [
        "Problem Solving & Programming in C",
        "Object-Oriented Programming & Systems (C++)",
        "Data Structures & Algorithmic Analysis",
        "Discrete Mathematics & Boolean Logic",
        "Computer Organization & Digital Electronics",
      ],
      achievements: [
        "Active contributor to collegiate coding circles and hackathon teams",
        "Exploring custom C++ concurrency models, socket servers, and local LLM workflows",
      ],
    },
    {
      institution: "Seth MR Jaipuria School",
      degree: "Senior Secondary Education (Class XII)",
      field: "Science Stream (Physics, Chemistry, Mathematics & CS)",
      duration: "2024 - 2026",
      status: "Completed",
      location: "Bareilly, UP",
      description: "Completed higher secondary curriculum with a strong focus on advanced analytical mathematics, calculus, mechanics, and computational fundamentals.",
      coursework: [
        "Higher Mathematics (Calculus, Linear Algebra, Probability)",
        "Physics & Theoretical Mechanics",
        "Introductory Computer Science & Programming Logic",
      ],
      achievements: [
        "Represented school in regional mathematics & science Olympiads",
      ],
    },
  ],

  // Navigation Links
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};
