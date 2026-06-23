import "./Education.css"
import { EducationCard } from "./EducationCard"

function Education(){
  return(
    <section id="education" className="education">

      <div className="education-header">
        <h2>Education</h2>
        <p>
          Education has played a key role in shaping my technical mindset and growth.
        </p>
      </div>

      <div className="education-container">
        <EducationCard/>
      </div>

    </section>
  )
}

export default Education