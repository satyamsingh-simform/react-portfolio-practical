import {education} from "../../utils/constants"
import "./Education.css"

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
        
        {education.map((edu)=>(
          <div key={edu.id} className="education-card">
            <img src={edu.img} alt={edu.school}/>
            <div className="education-info">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p className="education-date">
                {edu.date}
              </p>
              <p className="education-grade">
                Grade: {edu.grade}
              </p>
              <p>
                {edu.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Education