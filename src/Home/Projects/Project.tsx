import './Project.css';

const projects = [
  { icon: "🕒", title: "Reminder-API", link: "https://github.com/divyaranidhkls/Reminder-API" },
  { icon: "🧑‍💼", title: "Nitrogen", link: "https://github.com/divyaranidhkls/Nitrogen" },
  { icon: "⌚", title: "FitnessTracker", link: "https://github.com/divyaranidhkls/FitnessTracker" },
  { icon: "😎", title: "MovieManagement", link: "https://github.com/divyaranidhkls/MovieManagement" },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects-section">
      <h4 className="projects-title">Projects</h4>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a 
            href={project.link} 
            className="project-card" 
            key={index} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <span className="project-title">{project.title}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
