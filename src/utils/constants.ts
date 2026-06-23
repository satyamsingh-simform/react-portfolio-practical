
// TECH LOGOS
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import typescriptLogo from "../assets/tech_logo/typescript.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import mcLogo from "../assets/tech_logo/mc.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";

// EDUCATION LOGOS

import cpsLogo from "../assets/education_logo/cpsLogo.png";
import juscoLogo from "../assets/education_logo/juscoLogo.jpeg";
import marwadiLogo from "../assets/education_logo/marwadiLogo.jpeg";

// PROJECT IMAGES

import Swiggy from "../assets/work_logo/swiggy.png";
import csprepLogo from "../assets/work_logo/cs_prep.png";
import cmLogo from "../assets/work_logo/cm.png";
import imagesearchLogo from "../assets/work_logo/image_search.png";

// TYPES
export type Skill = {
  name: string;
  logo: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Education = {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  webapp: string;
};

export const navItems=[
  {id:"about",label:"About"},
  {id:"skills",label:"Skills"},
  {id:"work",label:"Projects"},
  {id:"education",label:"Education"},
  {id:"contact",label:"Contact"}
]

export const links=[
  {name:"About",id:"about"},
  {name:"Skills",id:"skills"},
  {name:"Projects",id:"work"},
  {name:"Education",id:"education"},
  {name:"Contact",id:"contact"}
]

export const personalData={
  name:'Satyam Singh',
  role:'MERN Stack Developer',
  about:'I am a passionate MERN Stack Developer with experience building responsive and scalable web applications using MongoDB, Express.js, React and Node.js. I enjoy solving problems, learning new technologies and creating user-friendly digital experiences.'
}


// SKILLS
export const SkillInfo: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

// EDUCATION
export const education: Education[] = [
  {
    id: 0,
    img: marwadiLogo,
    school: "Marwadi University",
    date: "Sept 2022 - Feb 2026",
    grade: "7.5 CGPA",
    desc: "Final year B.Tech Computer Engineering student with strong knowledge of Data Structures, Algorithms, OOP, DBMS and MERN Stack Development.",
    degree: "B.Tech Computer Engineering",
  },

  {
    id: 1,
    img: juscoLogo,
    school: "Jusco School South Park",
    date: "Apr 2019 - March 2021",
    grade: "78%",
    desc: "Completed higher secondary education with Physics, Chemistry and Mathematics.",
    degree: "CBSE Class XII",
  },

  {
    id: 2,
    img: cpsLogo,
    school: "Central Public School",
    date: "Apr 2018 - March 2019",
    grade: "90.2%",
    desc: "Completed secondary education under CBSE curriculum.",
    degree: "CBSE Class X",
  },
];

// PROJECTS
export const projects: Project[] = [
  {
    id: 0,
    title: "CodeSphere",
    description:
      "Online coding platform built using MERN stack with JWT authentication, Redis rate limiting and Judge0 code execution.",
    image: imagesearchLogo,
    tags: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Redis",
      "JWT",
    ],
    github: "https://github.com/Satyam8409/Leetcode-frontend",
    webapp: "https://leetcode-frontend-six.vercel.app/signup",
  },

  {
    id: 1,
    title: "Swiggy Clone",
    description:
      "Full stack food ordering application with restaurant search, cart management and responsive UI.",
    image: Swiggy,
    tags: [
      "React",
      "Node",
      "Express",
      "API",
      "Tailwind",
    ],
    github: "https://github.com/Satyam8409/Swiggy-Project",
    webapp: "https://swiggy-project-steel.vercel.app/",
  },

  {
    id: 2,
    title: "GitHub Profile Fetcher",
    description:
      "Fetches and displays GitHub profile information, repositories and user statistics using GitHub API.",
    image: csprepLogo,
    tags: [
      "React",
      "API",
      "JavaScript",
    ],
    github: "https://github.com/Satyam8409/Github-Profile-Detective",
    webapp: "https://github-profile-detective-eight.vercel.app/",
  },

  {
    id: 3,
    title: "Portfolio",
    description:
      "Personal portfolio website built using React showcasing projects, skills and education.",
    image: cmLogo,
    tags: [
      "React",
      "TypeScript",
      "CSS",
    ],
    github: "https://github.com/Satyam8409/Portfolio",
    webapp: "https://portfolio-inky-nu-96.vercel.app/",
  },
];