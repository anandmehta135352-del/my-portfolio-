/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION - ANAND KUMAR
 * ====================================================================
 * Stored locally in React components & data files.
 * Frontend-only portfolio project.
 */

export const portfolioData = {
  // Personal & Brand Information
  personal: {
    name: "Anand Kumar",
    shortName: "Anand",
    role: "Frontend & Full Stack Developer",
    college: "SVIET CHANDIGARH",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    graduationYear: "2026",
    location: "CHANDIGARH PUNJAB",
    email: "anandmehta135352@gmail.com",
    phone: "+91 9546543276",
    github: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    linkedin: "https://linkedin.com/in/anandkumar",
    resumeUrl: "#resume", // Replace with your resume link or PDF path e.g. "/resume.pdf"
    availableForWork: true,
    tagline: "Student Developer at SVIET Chandigarh passionate about building clean, responsive, and performant web applications with React and Tailwind CSS.",
  },

  // Hero Section Highlights
  hero: {
    badge: "🚀 Available for Internships & Full-Time Opportunities",
    titlePrefix: "Hi, I'm",
    roleHighlight: "Crafting modern, responsive web experiences",
    bio: "A dedicated Student Developer at SVIET Chandigarh focused on modern React frontend development, Tailwind CSS, clean architecture, and building user-friendly digital products.",
  },

  // About Me Section
  about: {
    heading: "About Me",
    subheading: "Passionate student developer dedicated to clean code, responsive web design, and modern frontend technologies.",
    bioParagraphs: [
      "I am a Student Developer currently studying Computer Science & Engineering at SVIET Chandigarh. My passion lies in frontend and full-stack web development, turning ideas into interactive, fast, and responsive user experiences.",
      "With a strong foundation in modern JavaScript, React, and Tailwind CSS, I focus on crafting clean UI components, modular code, and efficient workflows. I am continuously learning emerging web standards and building real-world projects to refine my engineering skills.",
    ],
    highlights: [
      {
        title: "Who I Am",
        description: "Anand Kumar, a passionate Frontend & Full Stack Student Developer from Chandigarh, Punjab.",
        icon: "User",
      },
      {
        title: "What I'm Studying",
        description: "Currently pursuing my degree at SVIET Chandigarh with emphasis on Data Structures, Algorithms, and Software Engineering.",
        icon: "GraduationCap",
      },
      {
        title: "Technical Interests",
        description: "Frontend architecture, React component design systems, responsive UI/UX, and web performance optimization.",
        icon: "Code2",
      },
      {
        title: "Currently Learning",
        description: "Deepening my expertise in advanced React patterns, state management, full-stack JavaScript development, and modern tooling.",
        icon: "BookOpen",
      },
      {
        title: "Projects I Build",
        description: "Responsive personal portfolio websites, interactive developer tools, product dashboards, and web application showcases.",
        icon: "Layers",
      },
      {
        title: "Career Goals",
        description: "Seeking exciting internship and junior developer opportunities where I can contribute to impactful software products.",
        icon: "Target",
      },
    ],
  },

  // Skills Section (Strictly matching user specified skills)
  skills: [
    {
      category: "Languages",
      description: "Core programming languages for software & web development",
      items: [
        { name: "JavaScript", level: "Advanced", icon: "FileCode" },
        { name: "Python", level: "Intermediate", icon: "FileCode" },
        { name: "Java", level: "Intermediate", icon: "FileCode" },
        { name: "C++", level: "Intermediate", icon: "FileCode" },
      ],
    },
    {
      category: "Frontend",
      description: "Modern web standards, libraries, and styling frameworks",
      items: [
        { name: "HTML", level: "Advanced", icon: "Layout" },
        { name: "CSS", level: "Advanced", icon: "Palette" },
        { name: "React", level: "Advanced", icon: "Atom" },
        { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      ],
    },
    {
      category: "Tools",
      description: "Developer tools, version control, and design software",
      items: [
        { name: "Git", level: "Proficient", icon: "GitBranch" },
        { name: "GitHub", level: "Proficient", icon: "Github" },
        { name: "VS Code", level: "Proficient", icon: "Terminal" },
        { name: "Figma", level: "Intermediate", icon: "Figma" },
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      id: "project-1",
      title: "Personal Developer Portfolio",
      description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features clean typography, subtle background gradients, responsive navigation, and modular components.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Lucide React"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
    {
      id: "project-2",
      title: "Developer Workspace Dashboard",
      description: "An interactive frontend dashboard built with React and Tailwind CSS. Highlights project task tracking, dark theme UI components, skill progress indicators, and responsive layouts.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
    {
      id: "project-3",
      title: "E-Commerce Product Showcase",
      description: "A clean, modern e-commerce product showcase interface featuring category filtering, responsive card grids, cart UI feedback, and mobile-optimized layouts.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
  ],

  // Education Section
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "SVIET CHANDIGARH",
      location: "CHANDIGARH PUNJAB",
      period: "2022 - 2026",
      grade: "Pursuing B.Tech",
      description: "Core Coursework: Computer Science Engineering, Data Structures & Algorithms, Object-Oriented Programming, Web Engineering, Database Systems, Software Engineering.",
      achievements: [
        "Student Developer focusing on React and modern frontend technology stack",
        "Active involvement in technical workshops and programming projects at SVIET Chandigarh",
      ],
    },
  ],

  // Achievements & Certifications (Empty array by default to adhere strictly to user prompt)
  achievements: [],

  // Contact Information & Direct Channels
  contact: {
    title: "Let's Connect",
    subtitle: "Have an internship opportunity, project collaboration, or question? Feel free to get in touch!",
    directChannels: [
      {
        label: "Email",
        value: "anandmehta135352@gmail.com",
        href: "mailto:anandmehta135352@gmail.com",
        icon: "Mail",
        actionText: "Send an Email",
      },
      {
        label: "Phone",
        value: "+91 9546543276",
        href: "tel:9546543276",
        icon: "Phone",
        actionText: "Call directly",
      },
      {
        label: "GitHub",
        value: "github.com/anandmehta135352-del",
        href: "https://github.com/anandmehta135352-del/my-portfolio-.git",
        icon: "Github",
        actionText: "View GitHub Repositories",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/anandkumar",
        href: "https://linkedin.com/in/anandkumar",
        icon: "Linkedin",
        actionText: "Connect on LinkedIn",
      },
      {
        label: "Location",
        value: "CHANDIGARH PUNJAB",
        href: "#",
        icon: "MapPin",
        actionText: "Location",
      },
    ],
  },
};
