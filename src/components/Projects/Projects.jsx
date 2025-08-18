// src/components/Projects/Projects.jsx - Template
import './Projects.css';
import ProjectCard from './ProjectCard';

function Projects() {
  const items = [
    {id: 1, title: "first project", link: "#1"},
    {id: 2, title: "second project", link: "#2"},
    {id: 3, title: "third project", link: "#2"},
    {id: 4, title: "fourth project", link: "#2"},
    {id: 5, title: "fifth project", link: "#2"},
    {id: 6, title: "sixth project", link: "#2"},
    {id: 7, title: "seventh project", link: "#2"},
    {id: 8, title: "eighth project", link: "#2"},

  ];


  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>
        
        {/* TODO: นักศึกษาเพิ่ม project list ที่นี่ */}
        <div className="projects-grid">
          {items.map((item) => (
            <ProjectCard key={item.id} id={item.id} title={item.title} link={item.link}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;