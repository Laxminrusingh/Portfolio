import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for product management"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App",
      category: "frontend",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Real-time task updates",
        "Team collaboration",
        "Task categorization & priorities",
        "Progress tracking & analytics",
        "Mobile responsive design"
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
        "5-day forecast",
        "Location-based weather",
        "Weather alerts",
        "Responsive design"
      ]
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A content management system for creating and managing blog posts with rich text editing.",
      image: "https://via.placeholder.com/400x250/FF9800/ffffff?text=Blog+Platform",
      category: "fullstack",
      technologies: ["React", "Express", "PostgreSQL", "AWS S3"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      features: [
        "Rich text editor",
        "Image upload & management",
        "SEO optimization",
        "Comment system",
        "Admin panel"
      ]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing skills, projects, and contact information.",
      image: "https://via.placeholder.com/400x250/2196F3/ffffff?text=Portfolio",
      category: "frontend",
      technologies: ["React", "CSS3", "Framer Motion", "React Router"],
      githubUrl: "https://github.com",
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