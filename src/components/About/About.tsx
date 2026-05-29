import profileImage from "../../assets/profile2.png"
import { personalData } from "../../utils/constants"
import "./About.css"

function About(){
  return(
    <section id="about" className="about">
      <div className="about-content">

        <div className="about-text">
          <h3>Hi, I'm</h3>
          <h1>{personalData.name}</h1>
          <h2>{personalData.role}</h2>
          <p>{personalData.about}</p>

          <a className="resume-btn"
            href="#"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <div className="about-image">
          <img src={profileImage} alt="profile-image"/>
        </div>

      </div>
    </section>
  )
}

export default About