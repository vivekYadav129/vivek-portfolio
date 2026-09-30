export const portfolioData = {
  hero: {
    name: "Vivek Kumar Yadav",
    role: "Java Backend & Full Stack Developer",
    description: "I build scalable web applications, REST APIs, and practical software solutions using Java, Spring Boot, React, and modern web technologies.",
    resumePath: "/resume/Vivek-Kumar-Yadav-Resume.pdf",
    githubUrl: "https://github.com/vivekYadav129",
    linkedinUrl: "https://linkedin.com/in/", 
  },
  about: {
    title: "About Me",
    description: "I am a final-year B.Tech Information Technology student focused on becoming a professional software developer. My primary technical direction is Java backend development with Spring Boot, while I also have strong frontend development experience with React.js. \n\nI enjoy solving programming problems, learning backend architecture, and turning ideas into working products. I am passionate about building real-world applications and constantly improving my technical skills.",
  },
  skills: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite", "Tailwind CSS", "Bootstrap"],
    backend: ["Java", "Spring Boot", "REST APIs", "JWT", "Authentication & Authorization"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA", "VS Code"],
    core: ["Data Structures & Algorithms", "Object-Oriented Programming", "SQL", "API Development"]
  },
  projects: [
    {
      id: 1,
      title: "Matty – AI-Powered Study Platform",
      description: "An AI-powered study platform designed to help students manage learning resources, notes, analytics, and AI-assisted study activities.",
      techStack: ["React.js", "Spring Boot", "MongoDB", "JWT", "REST APIs", "AI API integration"],
      features: ["User authentication", "Role-based access control", "Notes management", "Analytics dashboard", "AI-powered study assistant", "REST API architecture"],
      githubUrl: "https://github.com/vivekYadav129/Matty",
      liveUrl: "https://matty-design-tau.vercel.app/",
      image: "/projects/matty.jpg"
    },
    {
      id: 2,
      title: "Tax Loss Harvesting",
      description: "A modern web application built from a Figma-based design, featuring a clean financial dashboard and interactive user interface.",
      techStack: ["React", "Vite", "JavaScript", "REST/mock APIs", "Responsive UI"],
      features: ["Financial dashboard", "Interactive UI", "Data visualization", "Responsive design"],
      githubUrl: "https://github.com/vivekYadav129/tax-loss-harvesting",
      liveUrl: "https://tax-loss-harvesting-roan.vercel.app/",
      image: "/projects/tax.jpg"
    },
    {
      id: 3,
      title: "Task Manager Application",
      description: "A full-stack task management application designed to manage tasks through a React frontend and Spring Boot backend.",
      techStack: ["React", "Spring Boot", "REST API", "Java", "Database"],
      features: ["Task creation", "Task updates", "Task deletion", "REST API integration", "Frontend/backend communication"],
      githubUrl: "https://github.com/vivekYadav129",
      liveUrl: "",
      image: "/projects/task.jpg"
    }
  ],
  experience: [
    {
      id: 1,
      role: "Full Stack Development Intern",
      company: "GNCIPL – Global Next Consulting India Private Limited",
      description: "Worked on full-stack web development using React and backend/API development. Integrated databases and contributed to building practical web applications."
    },
    {
      id: 2,
      role: "Java Developer Intern",
      company: "Sysslan IT Solutions",
      description: "Engaged in Java development focusing on backend architecture with Spring Boot. Developed and integrated REST APIs while following professional software development practices."
    },
    {
      id: 3,
      role: "Industrial Internship / Exposure",
      company: "Banaras Locomotive Works (BLW), Indian Railways",
      description: "Gained valuable industrial exposure and practical understanding of large-scale engineering operations."
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech – Information Technology",
      institution: "University Institute of Engineering and Technology",
      university: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
      duration: "2023–2027",
    }
  ],
  achievements: [
    "Full Stack Web Development Internship",
    "Java Development Internship",
    "Industrial Internship - BLW",
    "Technical certifications"
  ],
  contact: {
    email: "contact@example.com", // Placeholder
  }
};
