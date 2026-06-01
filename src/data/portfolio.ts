export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export const aboutImages = [
  { src: "/assets/about-images/ieee-img.jpeg", alt: "IEEE UFRN community" },
  { src: "/assets/about-images/poticode-img.jpeg", alt: "PotiCode community" },
  { src: "/assets/about-images/ufrn-img.jpeg", alt: "UFRN campus" },
  { src: "/assets/about-images/skills-img.jpeg", alt: "Development workspace" },
];

export const projects = [
  {
    title: "Map Generator",
    image: "/assets/projects-images/map-generator-project.png",
    alt: "Map Generator project preview",
    tech: ["C++", "Procedural Generation", "Algorithms"],
    description:
      "A procedural terrain generator written in C++ that uses the Diamond-Square algorithm to create random heightmaps. The terrain is dynamically colored based on elevation levels, simulating water, plains, and mountains.",
    href: "https://github.com/geLimaa/Gerador-de-Mapas",
  },
  {
    title: "Snake Game",
    image: "/assets/projects-images/snake-game-project.png",
    alt: "Snake Game project preview",
    tech: ["C++", "SFML", "Game Logic"],
    description:
      "A classic Snake game developed in C++ and visually enhanced using the SFML library, with real-time input handling and graphical rendering for an interactive gameplay experience.",
    href: "https://github.com/geLimaa/Snake-Game",
  },
  {
    title: "Bar Chart Race",
    image: "/assets/projects-images/bar-chart-project.jpeg",
    alt: "Bar Chart Race project visual",
    tech: ["C++", "Data Visualization", "File Processing"],
    description:
      "A C++ data visualization project that animates ranked values over time as a bar chart race, focusing on parsing structured data, sorting frames, and rendering a clear timeline of changes.",
    href: "https://github.com/geLimaa/Bar-Chart-Race",
  },
  {
    title: "Client-Server App",
    image: "/assets/projects-images/client-server-app-project.jpeg",
    alt: "Client-server Java application visual",
    tech: ["Java", "Sockets", "Networking"],
    description:
      "A Java client-server application built around socket communication, request handling, and separation between client-side interaction and server-side processing.",
    href: "https://github.com/geLimaa/Terminal-Chat",
  },
  {
    title: "Junior Enterprise Website",
    image: "/assets/projects-images/poticode-site-project.jpeg",
    alt: "Junior enterprise website project visual",
    tech: ["Web", "Responsive UI", "Team Project"],
    description:
      "A website project for a junior enterprise, focused on presenting institutional information, services, and contact paths through a clear and responsive web experience.",
    href: "https://www.poticode.com.br/",
  },
  {
    title: "Personal Portfolio",
    image: "/assets/projects-images/portifolio-project.jpeg",
    alt: "Personal Portfolio project preview",
    tech: ["Astro", "Tailwind", "JavaScript"],
    description:
      "A responsive personal portfolio rebuilt with Astro and Tailwind to present projects, technical skills, and experience through a clean developer-focused interface.",
    href: "https://github.com/geLimaa/Personal-Portifolio",
  }
];

export const skillCategories = [
  {
    title: "Frontend",
    description: "Interfaces responsivas, componentizacao e UI moderna.",
    skills: [
      { name: "HTML", icon: "bxl-html5" },
      { name: "CSS", icon: "bxl-css3" },
      { name: "JavaScript", icon: "bxl-javascript" },
      { name: "Astro", mark: "A" },
      { name: "Tailwind", icon: "bxl-tailwind-css" },
    ],
  },
  {
    title: "Backend",
    description: "APIs, servicos e fundamentos de redes.",
    skills: [
      { name: "Node.js", icon: "bxl-nodejs" },
      { name: "Express", mark: "Ex" },
      { name: "Java", icon: "bxl-java" },
      { name: "C++", mark: "C++" },
      { name: "SQLite", icon: "bxs-data" },
      { name: "PostgreSQL", icon: "bxs-data" },
    ],
  },
  {
    title: "Computer Science",
    description: "Data structures, algorithms and low level projects.",
    skills: [
      { name: "Data Structures", icon: "bx-network-chart" },
      { name: "Algorithms", icon: "bx-code-curly" },
      { name: "SFML", mark: "SFML" },
      { name: "Git", icon: "bxl-git" },
    ],
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Limaa0907", icon: "bxl-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gean-limaa-8972aa34a/", icon: "bxl-linkedin-square" },
  { label: "Instagram", href: "https://www.instagram.com/ge._brgs/", icon: "bxl-instagram-alt" },
];
