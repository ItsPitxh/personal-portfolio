import './ProjectCard.css'

function ProjectCard() {
  return (
    <div class="card">
      <div class="card__hero">
        <header class="card__hero-header">
          <div class="card__icon">
            
          </div>
        </header>

        <p class="card__job-title">Senior Backend Engineer</p>
      </div>

      <footer class="card__footer">
        <div class="card__job-summary">
          <div class="card__job-icon">
            <h1>H</h1>
          </div>
          <div class="card__job">
            <p class="card__job-title">
              Senior Backend <br />
              Engineer
            </p>
          </div>
        </div>

        <button class="card__btn">view</button>
      </footer>
    </div>
  );
}

export default ProjectCard;
