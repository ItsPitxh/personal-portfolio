import './ProjectCard.css'

function ProjectCard({id, title, link}) {
  return (
    <div className="card">
      <div className="card__hero">
        <header className="card__hero-header">
          <div className="card__icon">
          </div>
        </header>

        {/* <p class="card__job-title">Senior Backend Engineer</p> */}
      </div>

      <footer className="card__footer">
        <div className="card__job-summary">
          <div className="card__job-icon">
            <h1>{id}</h1>
          </div>
          <div className="card__job">
            <p className="card__job-title">
              {title}
            </p>
          </div>
        </div>

        <a href={link} className="card__btn">view</a>
      </footer>
    </div>
  );
}

export default ProjectCard;
