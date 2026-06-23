import {FaGithub,FaLinkedin} from "react-icons/fa"
import "./Footer.css"
import { links } from "../../utils/constants"

function Footer(){

  const scrollToSection=(id:string)=>{
    const section=document.getElementById(id)

    if(section){
      section.scrollIntoView({behavior:"smooth"})
    }
  }

  return(
    <footer className="footer">
      <h2>Satyam Rajput</h2>
      <div className="footer-links">
        {links.map((link)=>(
          <button
            key={link.id}
            onClick={()=>scrollToSection(link.id)}
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="footer-social">
        <a
          href="https://github.com/Satyam8409"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={22}/>
        </a>

        <a
          href="https://www.linkedin.com/in/satyam-singh8409/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={22}/>
        </a>
      </div>

      <p>© 2026 Satyam Rajput. All rights reserved.</p>

    </footer>
  )
}

export default Footer