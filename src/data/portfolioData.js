/* ============================================
   PORTFOLIO DATA / CONFIG
   ============================================
   Edit this file to update all personal info,
   projects, skills, and content across the site.
   ============================================ */

export const personalInfo = {
  name: "Dheerendra Singh Lodhi",
  firstName: "Dheerendra",
  role: "Computer Engineering Student | Aspiring Software Engineer | Full-Stack Developer",
  tagline: "I build software that solves real problems.",
  description:
    "Computer Engineering student passionate about software development, full-stack engineering, data structures & algorithms, and building impactful products.",
  education: {
    degree: "B.Tech in Computer Engineering",
    institute: "Institute of Engineering and Technology, DAVV, Indore",
    graduationYear: "2028",
  },

  github: "https://github.com/dheerendra1111",
  linkedin: "https://www.linkedin.com/in/dheerendra-singh-lodhi-120410354",
  email: "dheerjnv28@gmail.com",
  leetcode: "https://leetcode.com/u/dheerendra1111/",
  resumeUrl: "/resume.pdf",
};

export const stats = [
  { value: "8.68", label: "Current CGPA" },
  { value: "20+", label: "Projects Built & Solved" },
  { value: "DSA", label: "Core Focus" },
  { value: "Full Stack", label: "Development" },
];

export const aboutText = [
  "I'm a Computer Engineering student at IET DAVV, Indore, with a deep interest in software engineering, full-stack development, and building applications that make an impact.",
  "I enjoy building real-world applications, solving Data Structures & Algorithms problems, learning system design, and exploring how scalable software systems work. I'm also keen on backend development and emerging technologies like AI/ML.",
  "I believe great software starts with strong fundamentals — clean code, solid architecture, and a relentless focus on solving real problems.",
];

export const aboutCard = {
  degree: "Computer Engineering",
  institute: "DAVV, Indore",
  aspiration: "Aspiring Software Engineer",
  openTo: "Internships & Software Engineering Opportunities",
};

export const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Core CS",
    skills: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
  },
];

export const projects = [
  {
    title: "Digital Banking Management System",
    description:
      "A full-stack banking application simulating modern digital banking with user authentication, account management, transactions, money transfers, transaction history, dashboard analytics, secure APIs and a responsive UI.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    /* ── UPDATE THESE LINKS ─────────────────── */
    github: "#",      // ← Replace with project GitHub URL
    demo: "#",        // ← Replace with live demo URL
    /* ──────────────────────────────────────── */
    color: "from-blue-500/20 to-indigo-500/20",
    accentColor: "#6366f1",
  },
  {
    title: "Alumni Network System",
    description:
      "A platform connecting students and alumni with user authentication, alumni and student profiles, search functionality, networking features, event management, and communication tools.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    /* ── UPDATE THESE LINKS ─────────────────── */
    github: "#",      // ← Replace with project GitHub URL
    demo: "#",        // ← Replace with live demo URL
    /* ──────────────────────────────────────── */
    color: "from-violet-500/20 to-purple-500/20",
    accentColor: "#8b5cf6",
  },
  {
    title: "Automatic Plant Watering System",
    description:
      "An IoT-based project that automatically waters plants based on soil moisture levels, featuring soil moisture detection, automatic pump control, Arduino-based automation, and real-time monitoring.",
    tech: ["Arduino", "C/C++", "Sensors"],
    /* ── UPDATE THESE LINKS ─────────────────── */
    github: "#",      // ← Replace with project GitHub URL
    demo: "#",        // ← Replace with live demo URL (or remove if N/A)
    /* ──────────────────────────────────────── */
    color: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#10b981",
  },
];

export const dsaTopics = [
  "Arrays",
  "Strings",
  "Hashing",
  "Two Pointers",
  "Sliding Window",
  "Linked Lists",
  "Stacks & Queues",
  "Trees",
  "Graphs",
  "Dynamic Programming",
  "Backtracking",
];

export const timeline = [
  {
    year: "2028",
    title: "Expected Graduation",
    description: "B.Tech Computer Engineering — Institute of Engineering and Technology, DAVV",
  },
  {
    year: "2026 — Present",
    title: "Software Development & Full-Stack Learning",
    description:
      "Building full-stack applications, contributing to projects, and deepening expertise in React, Node.js, and modern web technologies.",
  },
  {
    year: "2025 — Present",
    title: "Data Structures & Algorithms Practice",
    description:
      "Consistently practicing DSA on competitive programming platforms and strengthening problem-solving skills for engineering interviews.",
  },
];

export const achievements = [
  {
    title: "Strong Academic Performance",
    description: "Maintaining a CGPA of 8.68 in Computer Engineering at IET DAVV.",
    icon: "academic",
  },
  {
    title: "DSA Problem Solving",
    description: "Consistently solving Data Structures & Algorithms problems across multiple platforms.",
    icon: "code",
  },
  {
    title: "Full-Stack Projects",
    description: "Built multiple end-to-end web applications using modern tech stacks.",
    icon: "project",
  },
  {
    title: "Hackathon Participation",
    description: "Participated in hackathons to build innovative solutions under time constraints.",
    icon: "trophy",
    // ← Update with specific hackathon details when available
  },
  {
    title: "Technical Project Development",
    description: "Developed IoT and software projects integrating hardware and software solutions.",
    icon: "tech",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
