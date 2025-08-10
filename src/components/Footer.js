import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Laxminrusingh', label: 'GitHub' },
    { icon: FaLinkedin, url: 'http://linkedin.com/in/laxmi-nrusingh-rath/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://x.com/l_nrusingh', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: FaEnvelope, text: 'laxminrusingh8@gmail.com', url: 'mailto:laxminrusingh8@gmail.com' },
    { icon: FaPhone, text: '+91 8260571737', url: 'tel:+918260571737' },
    { icon: FaMapMarkerAlt, text: 'Puri, Odisha, India', url: 'https://maps.google.com/?q=Puri,Odisha,India' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="gradient-text">Laxmi's Portfolio</h3>
          <p>Passionate developer creating amazing digital experiences with modern technologies.</p>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                className="contact-item"
                target={contact.url.startsWith('http') ? '_blank' : '_self'}
                rel={contact.url.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <contact.icon />
                <span>{contact.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 