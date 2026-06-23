import {projects} from "../../utils/constants"
import "./Work.css"

function Work(){
  return(
    <section id="work" className="work">

      <div className="work-header">
        <h2>Projects</h2>
        <p>A showcase of projects I have worked on using the MERN stack and modern web technologies.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project)=>(
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title}/>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag)=>(
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>

              <a
                href={project.webapp}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Work