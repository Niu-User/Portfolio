import { useState, useEffect, useRef } from 'react';
import {
  Code2, Zap, Rocket, ArrowRight, ExternalLink,
  Mail, Phone, MapPin, GraduationCap, Award,
  Users, Sparkles, ChevronDown, Menu, X,
  Terminal, Globe, Wrench, BookOpen, Folder
} from 'lucide-react';
import './index.css';

/* ===== Fade-in on scroll hook ===== */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = '' }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-in-section ${className}`}>{children}</div>;
}

/* ===== Main App ===== */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">JK</a>
          <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">
                <span className="status-dot" /> Available for Internship
              </p>
              <h1 className="hero-name">
                Hi, I'm <span className="gradient-text">Jitesh Kumar</span>
              </h1>
              <p className="hero-title">Full-Stack Developer & CS Student</p>
              <p className="hero-desc">
                2nd-year Computer Science Engineering student passionate about 
                full-stack development and problem-solving. Building efficient 
                solutions with Java, JavaScript, and modern web technologies.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Get in Touch <ArrowRight size={18} />
                </a>
                <a href="#projects" className="btn btn-outline">
                  <Folder size={18} /> View Projects
                </a>
              </div>
              <div className="hero-socials">
                <a href="mailto:mail.jiteshkr@gmail.com" className="social-link" aria-label="Email" title="Email">
                  <Mail size={20} />
                </a>
                <a href="tel:+919504189842" className="social-link" aria-label="Phone" title="Phone">
                  <Phone size={20} />
                </a>
                <a href="https://github.com/" className="social-link" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <Code2 size={20} />
                </a>
                <a href="https://linkedin.com/" className="social-link" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="avatar-container">
                <div className="avatar-ring-2" />
                <div className="avatar-ring" />
                <img src="/avatar.png" alt="Jitesh Kumar" className="avatar-img" />
                <div className="hero-float-badge badge-1">
                  <Zap size={14} /> React
                </div>
                <div className="hero-float-badge badge-2">
                  <Terminal size={14} /> Java
                </div>
                <div className="hero-float-badge badge-3">
                  <Rocket size={14} /> Node.js
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            SCROLL <ChevronDown size={16} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <FadeSection>
            <span className="section-label"><Sparkles size={14} /> About Me</span>
            <h2 className="section-title">Passionate about building <span className="gradient-text">impactful software</span></h2>
          </FadeSection>
          <FadeSection>
            <div className="about-grid">
              <div className="about-text">
                <p>
                  I'm a 2nd-year Computer Science Engineering student at{' '}
                  <strong>Parul University</strong> with a deep interest in full-stack 
                  development and problem-solving. Currently leveraging personal projects 
                  in Java and Web Technologies to sharpen my skills.
                </p>
                <br />
                <p>
                  My goal is to apply foundational knowledge in DSA and OOP to deliver 
                  efficient, scalable code solutions. I thrive in collaborative 
                  environments and am constantly exploring emerging technologies to stay 
                  at the cutting edge.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">2+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Languages</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">2028</div>
                  <div className="stat-label">Expected Grad</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Curiosity</div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <FadeSection>
            <span className="section-label"><Zap size={14} /> Technical Skills</span>
            <h2 className="section-title">My <span className="gradient-text">tech stack</span></h2>
            <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
          </FadeSection>
          <FadeSection>
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-category-icon icon-languages">
                  <Terminal size={24} />
                </div>
                <h3 className="skill-category-title">Languages</h3>
                <div className="skill-tags">
                  {['C', 'Python', 'Java', 'JavaScript'].map(s => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-icon icon-web">
                  <Globe size={24} />
                </div>
                <h3 className="skill-category-title">Web Technologies</h3>
                <div className="skill-tags">
                  {['HTML', 'CSS', 'React', 'Node.js'].map(s => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <div className="skill-category-icon icon-tools">
                  <Wrench size={24} />
                </div>
                <h3 className="skill-category-title">Tools & Platforms</h3>
                <div className="skill-tags">
                  {['Git', 'Azure (Fundamentals)', 'VS Code'].map(s => (
                    <span className="skill-tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <FadeSection>
            <span className="section-label"><Rocket size={14} /> Projects</span>
            <h2 className="section-title">Things I've <span className="gradient-text">built</span></h2>
            <p className="section-subtitle">Personal projects that showcase my skills and passion for development.</p>
          </FadeSection>
          <FadeSection>
            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon icon-task">
                    <Folder size={26} />
                  </div>
                  <div className="project-links">
                    <a className="project-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="View project" title="Live Demo">
                      <ExternalLink size={16} />
                    </a>
                    <a className="project-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="View code" title="Source Code">
                      <Code2 size={16} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">Task Management Web App</h3>
                <p className="project-desc">
                  A fully functional task manager built from scratch with pure JavaScript (DOM), 
                  implementing complete CRUD functionality for efficient task management.
                </p>
                <ul className="project-highlights">
                  <li>Full CRUD operations using vanilla JavaScript</li>
                  <li>Responsive UI built with CSS Flexbox</li>
                  <li>Cross-browser compatible interface</li>
                </ul>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card">
                <div className="project-header">
                  <div className="project-icon icon-student">
                    <BookOpen size={26} />
                  </div>
                  <div className="project-links">
                    <a className="project-link" href="#" target="_blank" rel="noopener noreferrer" aria-label="View code" title="Source Code">
                      <Code2 size={16} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">Student Record Management System</h3>
                <p className="project-desc">
                  A console-based system developed in Java, focusing on fast and reliable 
                  data retrieval using efficient algorithms and OOP principles.
                </p>
                <ul className="project-highlights">
                  <li>Encapsulation and abstraction for modular design</li>
                  <li>Efficient data retrieval algorithms</li>
                  <li>Scalable, maintainable codebase</li>
                </ul>
                <div className="project-tech">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">OOP</span>
                  <span className="tech-tag">Data Structures</span>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Education */}
      <section className="section" id="education">
        <div className="container">
          <FadeSection>
            <span className="section-label"><GraduationCap size={14} /> Education</span>
            <h2 className="section-title">Academic <span className="gradient-text">background</span></h2>
          </FadeSection>
          <FadeSection>
            <div className="education-card">
              <div className="education-header">
                <div>
                  <div className="education-degree">B.Tech in Computer Science & Engineering</div>
                  <div className="education-school">Parul University</div>
                </div>
                <span className="education-date">Expected June 2028</span>
              </div>
              <div className="education-coursework">
                <div className="education-coursework-label">Relevant Coursework</div>
                <div className="coursework-tags">
                  {['Data Structures & Algorithms', 'Object-Oriented Programming', 'MySQL', 'Web Development'].map(c => (
                    <span className="skill-tag" key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" id="leadership">
        <div className="container">
          <FadeSection>
            <span className="section-label"><Award size={14} /> Leadership & Activities</span>
            <h2 className="section-title">Beyond <span className="gradient-text">the code</span></h2>
          </FadeSection>
          <FadeSection>
            <div className="leadership-grid">
              <div className="leadership-card">
                <div className="leadership-icon icon-rep">
                  <Users size={24} />
                </div>
                <h3 className="leadership-title">Class Representative</h3>
                <p className="leadership-desc">
                  Elected to represent a division of students, demonstrating strong 
                  leadership and communication skills as the primary liaison between 
                  faculty and peers to resolve academic issues.
                </p>
              </div>
              <div className="leadership-card">
                <div className="leadership-icon icon-tech">
                  <Sparkles size={24} />
                </div>
                <h3 className="leadership-title">Technical Engagement</h3>
                <p className="leadership-desc">
                  Active participant in coding workshops and tech seminars. Enthusiast 
                  for exploring emerging technologies and collaborative problem solving.
                </p>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <FadeSection>
            <span className="section-label"><Mail size={14} /> Get in Touch</span>
            <h2 className="section-title">Let's <span className="gradient-text">connect</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              I'm always open to discussing new projects, internship opportunities, or just chatting about tech.
            </p>
          </FadeSection>
          <FadeSection>
            <div className="contact-card">
              <div className="contact-info">
                <a href="mailto:mail.jiteshkr@gmail.com" className="contact-item">
                  <Mail size={20} /> mail.jiteshkr@gmail.com
                </a>
                <a href="tel:+919504189842" className="contact-item">
                  <Phone size={20} /> +91 95041 89842
                </a>
                <span className="contact-item">
                  <MapPin size={20} /> Vadodara, Gujarat, India 391760
                </span>
              </div>
              <a href="mailto:mail.jiteshkr@gmail.com" className="btn btn-primary" style={{ margin: '0 auto' }}>
                Say Hello <ArrowRight size={18} />
              </a>
              <div className="contact-socials">
                <a href="https://github.com/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Code2 size={20} />
                </a>
                <a href="https://linkedin.com/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 Jitesh Kumar. Built with React + Vite ⚡</p>
        </div>
      </footer>
    </>
  );
}

export default App;
