import About from "./components/About/About";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";

function App(){
    return(
        <>
        <Navbar/>
        <About/>
        <Skill/>
        <Education/>
        <Work/>
        <Footer/>
        </>
    )
}

export default App;