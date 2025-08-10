import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of enterprise web applications using modern technologies.",
      achievements: [
        "Led a team of 5 developers in building a customer management system",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      companyUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple web applications for clients across various industries.",
      achievements: [
        "Built 10+ client websites with responsive design",
        "Integrated third-party APIs and payment gateways",
        "Reduced bug reports by 50% through improved testing",
        "Collaborated with design team to implement UI/UX improvements"
      ],
      technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Heroku"],
      companyUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2021",
      type: "Internship",
      description: "Gained hands-on experience in frontend development and modern web technologies.",
      achievements: [
        "Developed responsive user interfaces using React",
        "Worked on real-time data visualization features",
        "Participated in agile development processes",
        "Contributed to open-source projects"
      ],
      technologies: ["React", "CSS3", "JavaScript", "Git", "Figma"],
      companyUrl: "https://example.com"
    }
  ];

  const skillsGained = [
    "Team Leadership & Project Management",
    "Agile/Scrum Methodologies",
    "Code Review & Mentoring",
    "Performance Optimization",
    "DevOps & CI/CD",
    "Client Communication"
  ];

  return (
    <div className="experience-page">
      <div className="experience-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Work Experience</h1>
            <p className="experience-intro">
              My professional journey has been marked by continuous learning and growth, 
              working on diverse projects that have shaped my expertise in web development.
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
            <h2 className="section-title">Professional Journey</h2>
            
            <div className="experience-timeline">
              {experienceData.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="experience-item"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="experience-card">
                    <div className="experience-header">
                      <div className="experience-icon">
                        <FaBriefcase />
                      </div>
                      <div className="experience-info">
                        <h3 className="job-title">{job.title}</h3>
                        <div className="company-info">
                          <h4 className="company-name">{job.company}</h4>
                          <a 
                            href={job.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="company-link"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </div>
                        <div className="job-meta">
                          <span className="job-location">
                            <FaMapMarkerAlt /> {job.location}
                          </span>
                          <span className="job-period">
                            <FaCalendarAlt /> {job.period}
                          </span>
                          <span className="job-type">{job.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-body">
                      <p className="job-description">{job.description}</p>
                      
                      <div className="achievements-section">
                        <h5>Key Achievements:</h5>
                        <ul className="achievements-list">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="technologies-section">
                        <h5>Technologies Used:</h5>
                        <div className="tech-tags">
                          {job.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Professional Skills Gained</h2>
            <p className="section-subtitle">
              Throughout my work experience, I've developed essential professional skills 
              that go beyond technical expertise.
            </p>
            
            <div className="skills-grid">
              {skillsGained.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon">💼</div>
                  <h4>{skill}</h4>
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
            <h2 className="section-title">Career Highlights</h2>
            
            <div className="stats-grid">
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies Mastered</div>
              </motion.div>
              
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
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
            <h2>Ready to Work Together?</h2>
            <p>Let's discuss how my experience can benefit your next project.</p>
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 