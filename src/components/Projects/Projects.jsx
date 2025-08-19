// src/components/Projects/Projects.jsx - Template
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { createContext, useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Search from "./SearchButton";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState(undefined);
  return (
    <Context.Provider value={{ search, setSearch }}>{children}</Context.Provider>
  );
};

function Projects() {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <section id="projects" className="projects section">
        <ContextProvider>
        <div className="container">
          <div className="project-header">
            <h2 className="section-title">My Projects</h2>
            <Search />
          </div>

          <p className="section-subtitle">
            Here are some of the projects I've worked on recently.
          </p>

          {/* TODO: นักศึกษาเพิ่ม project list ที่นี่ */}
          <div className="projects-grid" {...events} ref={ref}>
            <ProjectCard />
          </div>
        </div>
    </ContextProvider>
      </section>
  );
}

export default Projects;
