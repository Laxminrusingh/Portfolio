import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "ID Card Generation System for Railway Department",
      description: "A full-stack application designed for the Railway Department to generate, manage, and verify employee ID cards with secure authentication and role-based access.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/Laxminrusingh/ID-Card-Generation-System-for-Railway-Department",
      liveUrl: "https://example.com",
      features: [
        "Secure user authentication & role-based access control",
    "Form-based employee data entry and management",
    "Automated ID card generation with QR code",
    "Search and filter employee records",
    "Admin panel for approvals and updates"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Airbnb Clone",
      description: "A full-featured web application replicating core Airbnb functionalities with secure authentication, MVC architecture, and file upload capabilities.",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App",
      category: "fullstack",
      technologies: ["Node.js", "Express", "MongoDB Atlas", "MVC Architecture", "JWT", "Multer"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "JWT-based authentication and role-based authorization",
        "MVC architecture for organized code structure",
        "Property listing creation, editing, and deletion",
        "File upload and image storage using Multer",
        "Search and filter functionalities for listings"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts using external APIs.",
      image: "https://via.placeholder.com/400x250/4CAF50/ffffff?text=Weather+App",
      category: "frontend",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Current weather display",
       
        "Location-based weather",
        "Weather alerts",
        "Responsive design"
      ]
    },
    {
      id: 4,
      title: "Meet Tour Management System in Railways",
      description: "A full-stack web application designed for the Railway Department to manage and book employee and passenger tours with secure authentication, booking management, and itinerary generation.",
      image: "https://via.placeholder.com/400x250/FF9800/ffffff?text=Blog+Platform",
      category: "fullstack",
      technologies: ["React", "Express", "PostgreSQL", "AWS S3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
      "JWT-based authentication with role-based access (Officer/Admin)",
    "Meeting scheduling and notification system",
    "Tour itinerary creation, approval, and tracking",
    "Leave application submission and approval workflow",
    "Admin dashboard for managing officers, tours, and leave data"
      ]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing skills, projects, and contact information.",
      image: "https://via.placeholder.com/400x250/2196F3/ffffff?text=Portfolio",
      category: "frontend",
      technologies: ["React", "CSS3", "Framer Motion", "React Router"],
      githubUrl: "https://github.com/Laxminrusingh/Portfolio",
      liveUrl: "https://example.com",
      features: [
        "Responsive design",
        "Smooth animations",
        "Project showcase",
        "Contact form",
        "Modern UI/UX"
      ]
    },
    {
      id: 6,
      title: "Zoom Clone - Video Conferencing App",
      description: "A real-time video conferencing application replicating core Zoom features such as video calls, screen sharing, and chat, built using WebRTC and Socket.io.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "Socket.io", "WebRTC", "MongoDB"],
      githubUrl: "https://github.com/Laxminrusingh/Laxmi-Nrusingh-Video-Calw",
      liveUrl: "https://laxmi-nrusingh-video-call-6np2.onrender.com/",
      features: [
       "Real-time video and audio communication using WebRTC",
    "Secure meeting creation with unique room IDs",
    "Text chat during meetings",
    "Screen sharing and presentation mode",
    "Participant management (mute/unmute, remove)",
      ]
    },
    {
      id: 7,
      title: "API Backend Service",
      description: "A RESTful API service for managing user data with authentication and authorization.",
      image: "https://via.placeholder.com/400x250/9C27B0/ffffff?text=API+Service",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "RESTful API endpoints",
        "JWT authentication",
        "Data validation",
        "Error handling",
        "API documentation"
      ]
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">My Projects</h1>
            <p className="projects-intro">
              Here's a collection of projects I've worked on, showcasing my skills 
              in web development and problem-solving abilities.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="filter-section">
              <h2 className="section-title">Project Categories</h2>
              <div className="filter-buttons">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-features">
                      <h5>Key Features:</h5>
                      <ul>
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Project Statistics</h2>
            
            <div className="stats-grid">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <FaCode />
                </div>
                <div className="stat-number">{projectsData.length}</div>
                <div className="stat-label">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <FaEye />
                </div>
                <div className="stat-number">1000+</div>
                <div className="stat-label">Lines of Code</div>
              </motion.div>
              
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <FaGithub />
                </div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Technologies Used</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Interested in My Work?</h2>
            <p>Let's discuss how I can help bring your ideas to life with a custom project.</p>
            <a href="/contact" className="btn btn-primary">Start a Project</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 