import './App.css'

function App() {
  return (
    <div className="portfolio-container">
       {/* Navigation */}
       <nav className="nav-bar">
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#experience" className="nav-link">EXPERIENCE</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
      </nav>


      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="pixel-text">
            Hello! <br /> I'm Sk Jawed Ali
          </h1>
          <p className="subtitle">I’m a frontend developer specializing in responsive, 
            production‑ready UIs with React and modern JavaScript. 
            I’ve delivered real client projects like Biome and FRIDAYi, 
            working closely with designers and backend teams to ship fast, 
            accessible, SEO‑friendly websites that align with business goals.</p>
          <div className="hero-decoration">
            <div className="pixel-tree"></div>
          </div>
        </div>
      </header>


      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">TECHNICAL SKILLS</h3>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.Js</span>
              <span className="skill-tag">Java</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">TOOLS</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">Google Analytics</span>
              <span className="skill-tag">Google Search Console</span>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="category-title">CMS</h3>
            <div className="skill-tags">
              <span className="skill-tag">Ghost</span>
              <span className="skill-tag">Contentful</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="experience-card">
          <div className="experience-header">
            <h3 className="job-title">Frontend Developer (Contract)</h3>
            <span className="company-name">NLightN</span>
            <span className="date-badge">September 2025 - Present</span>
          </div>
          <ul className="experience-list">
            <li className="experience-item">
              Developed and maintained responsive UIs for production websites (Biome, FRIDAYi, Prosol) 
              using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and mobile optimization.
            </li>
            <li className="experience-item">
              Implemented and styled reusable React.js components to support new features, 
              improving frontend scalability and code maintainability.
            </li>
            <li className="experience-item">
              Collaborated with UX/UI designers to deliver pixel-perfect layouts, enhancing user engagement 
              and achieving a 20% increase in session duration.
            </li>
            <li className="experience-item">
              Worked closely with backend engineers to integrate REST APIs and support an AI agent demo flow, 
              ensuring smooth data exchange and stable frontend behaviour.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Biome Website</h3>
            <span className="project-type">Client Project</span>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React.Js</span>
            </div>
            <ul className="project-list">
              <li className="project-item">
                Developed a responsive and user-friendly website for Biome Water Management using HTML5, 
                CSS3, JavaScript, and React.js, ensuring seamless performance across devices and screen sizes.
              </li>
              <li className="project-item">
                Implemented SEO best practices including optimized meta tags, semantic HTML, and accessible 
                content structure to improve search engine rankings and increase site visibility.
              </li>
              <li className="project-item">
                Collaborated directly with the client to prioritize features, iterate on design changes, 
                and ensure timely delivery of project milestones.
              </li>
            </ul>
          </div>

          <div className="project-card">
            <h3 className="project-title">FRIDAYI Website</h3>
            <span className="project-type">Company Project</span>
            <div className="project-tech">
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">JavaScript</span>
            </div>
            <ul className="project-list">
              <li className="project-item">
                Collaborated with stakeholders to gather requirements and implement website updates, 
                ensuring alignment with business goals and user needs.
              </li>
              <li className="project-item">
                Optimized loading speed and responsiveness by refining CSS and JavaScript, resulting in 
                improved page load times and smoother interactions.
              </li>
              <li className="project-item">
                Worked closely with the backend team to integrate APIs and implement an AI agent demo flow 
                on the website, ensuring smooth data exchange and a cohesive user experience.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">EDUCATION</h2>
        <div className="education-card">
          <h3 className="degree-title">Bachelor of Computer Application (BCA)</h3>
          <p className="institution">N.C. Autonomous College, Jajpur</p>
          <div className="education-details">
            <span className="cgpa-badge">CGPA: 9</span>
            <span className="education-date">2022 - 2025</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Built with React & Vite</p>
          <div className="footer-decoration">
            <div className="pixel-grass"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
