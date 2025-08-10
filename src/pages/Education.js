import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy, FaBook } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      type: "degree",
      title: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2020 - 2024",
      description: "Specialized in Software Engineering with focus on web development and database management.",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 3 consecutive years",
        "Final year project: E-commerce Platform",
        "Member of Computer Science Society"
      ],
      icon: FaGraduationCap
    },
    {
      id: 2,
      type: "certification",
      title: "Full Stack Web Development",
      institution: "Coding Bootcamp",
      period: "2023",
      description: "Intensive 6-month program covering modern web technologies and best practices.",
      achievements: [
        "React.js and Node.js certification",
        "Database design and management",
        "Agile development methodologies"
      ],
      icon: FaCertificate
    },
    {
      id: 3,
      type: "certification",
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Professional certification in cloud development and deployment.",
      achievements: [
        "Cloud architecture design",
        "Serverless application development",
        "DevOps practices and CI/CD"
      ],
      icon: FaCertificate
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained high GPA throughout academic career",
      icon: FaTrophy,
      color: "#FFD700"
    },
    {
      title: "Research Projects",
      description: "Completed 5+ research projects in web technologies",
      icon: FaBook,
      color: "#4CAF50"
    },
    {
      title: "Leadership",
      description: "Led student organizations and technical teams",
      icon: FaGraduationCap,
      color: "#2196F3"
    }
  ];

  const skillsLearned = [
    "Programming Languages: JavaScript, Python, Java, C++",
    "Web Technologies: HTML5, CSS3, React, Node.js, Express",
    "Databases: MySQL, MongoDB, PostgreSQL",
    "Tools & Platforms: Git, Docker, AWS, Heroku",
    "Methodologies: Agile, Scrum, Test-Driven Development",
    "Soft Skills: Team Leadership, Problem Solving, Communication"
  ];

  return (
    <div className="education-page">
      <div className="education-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Education</h1>
            <p className="education-intro">
              My educational journey has been focused on computer science and web development, 
              providing me with a strong foundation for my career in technology.
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
            <h2 className="section-title">Academic Journey</h2>
            
            <div className="education-timeline">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <item.icon style={{ color: item.type === 'degree' ? '#667eea' : '#764ba2' }} />
                    </div>
                    <div className="timeline-body">
                      <h3 className="timeline-title">{item.title}</h3>
                      <h4 className="timeline-institution">{item.institution}</h4>
                      <span className="timeline-period">{item.period}</span>
                      {item.gpa && <span className="timeline-gpa">GPA: {item.gpa}</span>}
                      <p className="timeline-description">{item.description}</p>
                      <ul className="timeline-achievements">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
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

      <section className="section achievements-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Key Achievements</h2>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="achievement-icon" style={{ color: achievement.color }}>
                    <achievement.icon />
                  </div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
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
            <h2 className="section-title">Skills Acquired</h2>
            <p className="section-subtitle">
              Throughout my educational journey, I've developed a comprehensive skill set 
              that combines theoretical knowledge with practical application.
            </p>
            
            <div className="skills-acquired">
              {skillsLearned.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="skill-bullet">•</span>
                  <span className="skill-text">{skill}</span>
                </motion.div>
              ))}
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
            <h2>Ready to Learn More?</h2>
            <p>Check out my projects and experience to see how I've applied my education in real-world scenarios.</p>
            <div className="cta-buttons">
              <a href="/projects" className="btn btn-primary">View Projects</a>
              <a href="/experience" className="btn btn-secondary">See Experience</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education; 