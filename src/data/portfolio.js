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
    role: "Frontend Developer / Full Stack Developer",
    college: "SVIET Chandigarh, Punjab",
    degree: "BTech CSE (Computer Science & Engineering)",
    graduationYear: "2026",
    location: "Patiala, Punjab",
    email: "anandmehta135352@gmail.com",
    phone: "+91 9546543276",
    github: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    linkedin: "http://www.linkdin.com/in/anand-kumar-a909873ba",
    resumeUrl: "http://resume.com",
    availableForWork: true,
    tagline: "Student Developer studying BTech CSE at SVIET Chandigarh, Punjab. Passionate about building modern, responsive, and performant web applications with React and Tailwind CSS.",
  },

  // Hero Section Highlights
  hero: {
    badge: "🚀 Available for Internships & Junior Developer Roles",
    titlePrefix: "Hi, I'm",
    roleHighlight: "Frontend & Full Stack Developer | BTech CSE Student",
    bio: "I am a dedicated Student Developer at SVIET Chandigarh, Punjab, living in Patiala, Punjab. I specialize in building modern, responsive web applications using React.js, Tailwind CSS, and JavaScript.",
  },

  // About Me Section
  about: {
    heading: "About Me",
    subheading: "A focused student developer passionate about modern frontend technology, clean UI design, and responsive web development.",
    bioParagraphs: [
      "I am Anand Kumar, a Student Developer currently pursuing my BTech in Computer Science & Engineering (CSE) at SVIET Chandigarh, Punjab, and based in Patiala, Punjab.",
      "My core technical interest revolves around Frontend and Full Stack Web Development. I enjoy crafting clean, intuitive, and highly responsive user interfaces using React.js, Tailwind CSS, and modern JavaScript.",
      "I am currently deepening my knowledge in advanced React patterns, component-driven design systems, and modern web performance optimization. My career goal is to secure an internship or junior developer role where I can contribute to real-world software products and continue growing as an engineer.",
    ],
    highlights: [
      {
        title: "Who I Am",
        description: "Anand Kumar, a motivated Frontend & Full Stack Student Developer from Patiala, Punjab.",
        icon: "User",
      },
      {
        title: "What I'm Studying",
        description: "Pursuing BTech CSE at SVIET Chandigarh, Punjab with focus on Computer Science principles and web engineering.",
        icon: "GraduationCap",
      },
      {
        title: "Technical Interests",
        description: "Frontend architecture, React component design, Tailwind CSS styling, responsive UI/UX, and web standards.",
        icon: "Code2",
      },
      {
        title: "Currently Learning",
        description: "Expanding expertise in advanced React hooks, state management, performance tuning, and modern developer tooling.",
        icon: "BookOpen",
      },
      {
        title: "What I Build",
        description: "Responsive personal portfolios, developer tools, dynamic web application dashboards, and web frontends.",
        icon: "Layers",
      },
      {
        title: "Career Goals",
        description: "Seeking internship, junior developer, and hackathon collaboration opportunities to build impactful applications.",
        icon: "Target",
      },
    ],
  },

  // Skills Section (Strictly matching user specified skills)
  skills: [
    {
      category: "Languages",
      description: "Programming languages for web software development",
      items: [
        { name: "JavaScript", level: "Advanced", icon: "FileCode" },
        { name: "Python", level: "Intermediate", icon: "FileCode" },
        { name: "Java", level: "Intermediate", icon: "FileCode" },
        { name: "C++", level: "Intermediate", icon: "FileCode" },
      ],
    },
    {
      category: "Frontend",
      description: "Modern web standards, frameworks, and styling",
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
      title: "Personal Portfolio Website",
      description: "A modern, professional, and responsive personal portfolio website built with React.js and Tailwind CSS. Features dark-themed glassmorphism UI cards, mobile drawer navigation, smooth section scrolling, and accessible interactive elements.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "Lucide React"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
      category: "Frontend",
      featured: true,
      githubUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
      liveUrl: "https://github.com/anandmehta135352-del/my-portfolio-.git",
    },
  ],

  // Education Section
  education: [
    {
      degree: "BTech in Computer Science & Engineering (BTech CSE)",
      institution: "SVIET Chandigarh, Punjab",
      location: "Patiala / Chandigarh, Punjab",
      period: "2022 - 2026",
      grade: "Pursuing BTech",
      description: "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Engineering, Database Management Systems, Operating Systems, Software Engineering.",
      achievements: [
        "Student Developer specializing in React.js and modern frontend development",
        "Participating in coding projects and technical activities at SVIET Chandigarh, Punjab",
      ],
    },
  ],

  // Achievements & Certifications (Only rendered if items are present)
  achievements: [],

  // Contact Information & Direct Channels
  contact: {
    title: "Let's Connect",
    subtitle: "Have an internship opportunity, project collaboration, or question? Feel free to reach out directly!",
    directChannels: [
      {
        label: "Email",
        value: "anandmehta135352@gmail.com",
        href: "mailto:anandmehta135352@gmail.com",
        icon: "Mail",
        actionText: "Send Email",
      },
      {
        label: "Phone",
        value: "+91 9546543276",
        href: "tel:9546543276",
        icon: "Phone",
        actionText: "Call",
      },
      {
        label: "GitHub",
        value: "github.com/anandmehta135352-del",
        href: "https://github.com/anandmehta135352-del/my-portfolio-.git",
        icon: "Github",
        actionText: "View Repositories",
      },
      {
        label: "LinkedIn",
        value: "linkdin.com/in/anand-kumar-a909873ba",
        href: "http://www.linkdin.com/in/anand-kumar-a909873ba",
        icon: "Linkedin",
        actionText: "Connect on LinkedIn",
      },
      {
        label: "Location",
        value: "Patiala, Punjab",
        href: "#",
        icon: "MapPin",
        actionText: "Location",
      },
    ],
  },
};
