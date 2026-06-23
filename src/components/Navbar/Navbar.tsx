import {useState} from "react"
import {FiMenu,FiX} from "react-icons/fi"
import {FaGithub,FaLinkedin} from "react-icons/fa"
import "./Navbar.css"
import { navItems } from "../../utils/constants" 

function Navbar(){
  const [isOpen,setIsOpen]=useState<boolean>(false)

  const scrollToSection=(id:string)=>{
    setIsOpen(false)

    const section=document.getElementById(id)

    if(section){
      section.scrollIntoView()
    }
  }

  return(
    <nav className='navbar'>
      <div className="navbar-container">

        <div className="logo">
          {"<"}Satyam{"/"}Singh{">"}
        </div>

        <ul className="nav-links">
          {navItems.map((item)=>(
            <li key={item.id}>
              <button onClick={()=>scrollToSection(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="social-links">
          <a href="https://github.com/Satyam8409" target="_blank">
            <FaGithub size={22}/>
          </a>

          <a href="https://www.linkedin.com/in/satyam-singh8409/" target="_blank">
            <FaLinkedin size={22}/>
          </a>
        </div>

        <div className="mobile-menu">
          {isOpen
            ? <FiX size={28} onClick={()=>setIsOpen(false)}/>
            : <FiMenu size={28} onClick={()=>setIsOpen(true)}/>
          }
        </div>

      </div>

      {isOpen && (
        <div className="mobile-nav">
          {navItems.map((item)=>(
            <button
              key={item.id}
              onClick={()=>scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar