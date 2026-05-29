import {SkillInfo} from "../../utils/constants"
import "./Skill.css"

function Skill(){
  return(
    <section id="skills" className="skill">

      <div className="skill-header">
        <h2>Skills</h2>
        <p>A showcase of my technical skills and expertise developed through hands-on experience and real-world projects.</p>
      </div>

      <div className="skill-container">
        {SkillInfo.map((category)=>(
          <div key={category.title} className="skill-card">
            <h3>{category.title}</h3>
            <div className="skill-grid">
              {category.skills.map((skill)=>(
                <div key={skill.name} className="skill-item">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skill