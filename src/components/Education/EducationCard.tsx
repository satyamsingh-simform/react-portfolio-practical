import {education} from "../../utils/constants"
export const EducationCard = () => {
  return (
    <>
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
    </>
  )
}
