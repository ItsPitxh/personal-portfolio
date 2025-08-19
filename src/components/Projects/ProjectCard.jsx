import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Context } from "./Projects";

import './ProjectCard.css'
import { useContext } from "react";

  



function ProjectCard() {

  const { search } = useContext(Context);

 const items = [
    {title: "Mini-Ecommerce", link: "https://github.com/MrTanapat/Mini-Ecommerce", img: 'miniecomm'},
    {title: "Portfolio", link: "https://mrtanapat.github.io/Tanapat-portfolio-website.github.io/", img: 'portfolio'},
    {title: "Weather App", link: "https://github.com/ItsPitxh/my-weather-app.git", img: 'weather'},
    {title: "React Workshop", link: "https://github.com/ItsPitxh/personal-portfolio.git", img: 'react'},
  ];



  const filtered = items.filter((item) => 
      item.title.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    filtered.map((item, key) => (

    <div 
      className="card"
      key={key}
    >
      <div className="card__hero">
        <header className="card__hero-header">
          <img src={`src/assets/images/${item.img}.png`} draggable="false"/>
        </header>

        {/* <p class="card__job-title">Senior Backend Engineer</p> */}
      </div>

      <footer className="card__footer">
        <div className="card__job-summary">
          <div className="card__job-icon">
            <h2>
              <FontAwesomeIcon icon={faGithub} />
            </h2>
          </div>
          <div className="card__job">
            <h3 className="card__job-title">
              {item.title}
            </h3>
          </div>
        </div>

        <a href={item.link} target='_blank' className="card__btn">view</a>
      </footer>
    </div>
    ))
  );
}

export default ProjectCard;
