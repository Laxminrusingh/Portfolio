import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Laxmi Nrusingh Rath</span>
              </h1>
              <h2 className="hero-subtitle">Full Stack Developer</h2>
              <p className="hero-description">
                Passionate about creating innovative web solutions and turning ideas into reality. 
                I specialize in modern web technologies and love building user-friendly applications.
              </p>
              
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <FaArrowRight />
                </Link>
                <a href="/my august resume.pdf" className="btn btn-secondary" download>
                  <FaDownload /> Download Resume
                </a>
              </div>
              
              <div className="hero-social">
                <a href="https://github.com/Laxminrusingh" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="http://linkedin.com/in/laxmi-nrusingh-rath/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="profile-card">
                <div className="profile-image">
                  <img 
                    src="/image me.png" 
                    alt="Laxmi Nrusingh Rath - Full Stack Developer"
                    className="profile-photo"
                  />
                </div>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">Fresher</span>
                    <span className="stat-label">Aspiring Full Stack Developer"</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <p>
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both frontend and backend development, I enjoy working 
                with technologies like React, Node.js, and various databases. I'm always eager to 
                learn new technologies and best practices.
              </p>
              <div className="about-features">
                <div className="feature">
                  <h4>🎯 Goal-Oriented</h4>
                  <p>Focused on delivering results that exceed expectations</p>
                </div>
                <div className="feature">
                  <h4>🚀 Fast Learner</h4>
                  <p>Quickly adapt to new technologies and frameworks</p>
                </div>
                <div className="feature">
                  <h4>💡 Problem Solver</h4>
                  <p>Creative solutions for complex technical challenges</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Let's work together to bring your ideas to life!</p>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 