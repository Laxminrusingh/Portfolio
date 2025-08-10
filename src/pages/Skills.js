import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaFigma, FaPython, FaJava
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, level: 88, color: "#F7DF1E" },
        { name: "React", icon: FaReact, level: 85, color: "#61DAFB" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 82, color: "#339933" },
        
        { name: "Express.js", icon: SiExpress, level: 75, color: "#ED8B00" },
        { name: "Database", icon: FaDatabase, level: 85, color: "#336791" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 90, color: "#F05032" },
        { name: "Docker", icon: FaDocker, level: 70, color: "#2496ED" },
        { name: "AWS", icon: FaAws, level: 75, color: "#FF9900" },
        { name: "Figma", icon: FaFigma, level: 80, color: "#F24E1E" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Team Work", level: 88 },
    { name: "Time Management", level: 82 },
    { name: "Creativity", level: 87 },
    { name: "Leadership", level: 80 }
  ];

  return (
    <div className="skills-page">
      <div className="skills-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">My Skills</h1>
            <p className="skills-intro">
              I've developed a diverse set of skills through my experience in web development. 
              Here's an overview of my technical and soft skills.
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
            <h2 className="section-title">Technical Skills</h2>
            
            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="skill-category"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <div className="skill-icon" style={{ color: skill.color }}>
                            <skill.icon />
                          </div>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-progress">
                          <motion.div
                            className="skill-progress-bar"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section soft-skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Soft Skills</h2>
            <p className="section-subtitle">
              Beyond technical expertise, I also focus on developing essential soft skills 
              that are crucial for effective collaboration and project success.
            </p>
            
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="soft-skill-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="soft-skill-header">
                    <h4>{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="soft-skill-progress">
                    <motion.div
                      className="soft-skill-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="container">
          <motion.div
            className="learning-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Currently Learning</h2>
            <div className="learning-grid">
              <div className="learning-item">
                <h4>🚀 Next.js</h4>
                <p>Advanced React framework for production</p>
              </div>
              <div className="learning-item">
                <h4>⚡ TypeScript</h4>
                <p>Static typing for JavaScript</p>
              </div>
              <div className="learning-item">
                <h4>🎨 Tailwind CSS</h4>
                <p>Utility-first CSS framework</p>
              </div>
              <div className="learning-item">
                <h4>🔧 GraphQL</h4>
                <p>Modern API query language</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 