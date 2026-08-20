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
    resumeUrl: "#resume",
    availableForWork: true,
    tagline: "Student Developer at SVIET Chandigarh passionate about building clean, responsive, and performant web applications with HTML, CSS, and modern software tools.",
  },

  // Hero Section Highlights
  hero: {
    badge: "🚀 Available for Internships & Full-Time Opportunities",
    titlePrefix: "Hi, I'm",
    roleHighlight: "Crafting modern, responsive web experiences",
    bio: "A dedicated Student Developer at SVIET Chandigarh focused on C, C++, Python fundamentals, HTML, CSS web design, and Git/GitHub developer workflows.",
  },

  // About Me Section
  about: {
    heading: "About Me",
    subheading: "Passionate student developer dedicated to clean code, responsive web design, and programming fundamentals.",
    bioParagraphs: [
      "I am a Student Developer currently studying Computer Science & Engineering at SVIET Chandigarh. My passion lies in software development fundamentals, web engineering with HTML and CSS, and programming in C, C++, and Python.",
      "With a strong foundation in core computer science, version control with Git & GitHub, and modern editor tools like VS Code, I focus on crafting clean, responsive, and maintainable projects.",
    ],
    highlights: [
      {
        title: "Who I Am",
        description: "Anand Kumar, a passionate Student Developer from Chandigarh, Punjab.",
        icon: "User",
      },
      {
        title: "What I'm Studying",
        description: "Currently pursuing my degree at SVIET Chandigarh with emphasis on Programming in C/C++, Data Structures, and Web Basics.",
        icon: "GraduationCap",
      },
      {
        title: "Technical Interests",
        description: "Core C/C++ programming, Python basics, semantic HTML5, CSS responsive layout design, and Git version control.",
        icon: "Code2",
      },
      {
        title: "Currently Learning",
        description: "Deepening my problem-solving skills in C++, exploring Python applications, and refining responsive web design techniques.",
        icon: "BookOpen",
      },
      {
        title: "Projects I Build",
        description: "Responsive web pages, portfolio showcases, utility scripts, and programming projects.",
        icon: "Layers",
      },
      {
        title: "Career Goals",
        description: "Seeking exciting internship and junior developer opportunities where I can apply my programming skills and build real-world software.",
        icon: "Target",
      },
    ],
  },

  // Skills Section (Updated strictly to user's specified list)
  skills: [
    {
      category: "Languages",
      description: "Core programming languages for software development",
      items: [
        { name: "C", level: "Proficient", icon: "FileCode" },
        { name: "C++", level: "Proficient", icon: "FileCode" },
        { name: "Python", level: "Basics", icon: "FileCode" },
      ],
    },
    {
      category: "Frontend",
      description: "Web markup and styling fundamentals",
      items: [
        { name: "HTML", level: "Advanced", icon: "Layout" },
        { name: "CSS", level: "Advanced", icon: "Palette" },
      ],
    },
    {
      category: "Tools",
      description: "Developer tools and version control",
      items: [
        { name: "Git", level: "Proficient", icon: "GitBranch" },
        { name: "GitHub", level: "Proficient", icon: "Github" },
        { name: "VS Code", level: "Proficient", icon: "Terminal" },
      ],
    },
  ],

  // Projects Section
  projects: [
    {
      id: "project-1",
      title: "Personal Developer Portfolio",
      description: "A modern, responsive personal portfolio website built with HTML, CSS, React components, and responsive design. Features clean typography, subtle background gradients, responsive navigation, and modular components.",
      techStack: ["HTML", "CSS", "JavaScript", "Git"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
    {
      id: "project-2",
      title: "C & C++ Programming Projects",
      description: "A collection of algorithmic problem solutions and console applications developed in C and C++, focusing on data structures, pointers, and memory management.",
      techStack: ["C++", "C", "VS Code"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      category: "Programming",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
    {
      id: "project-3",
      title: "Responsive Web Showcase",
      description: "A clean, modern web showcase built with semantic HTML and CSS grid/flexbox, featuring responsive card layouts, dark theme styling, and mobile optimization.",
      techStack: ["HTML", "CSS", "Git"],
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
      description: "Core Coursework: Computer Science Engineering, C/C++ Programming, Data Structures, Object-Oriented Programming, Web Basics, Software Engineering.",
      achievements: [
        "Student Developer focusing on C, C++, Python basics, HTML & CSS web engineering",
        "Active involvement in technical workshops and programming projects at SVIET Chandigarh",
      ],
    },
  ],

  // Achievements (Empty by default)
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
