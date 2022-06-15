import './App.css';
import NavBar from './component/navBar';
import { useState } from 'react';
import Homepage from './pages/home';
import AboutMe from './pages/aboutMe';
import ContactMe from "./pages/contactMe"
import Projects from "./pages/projects"
import Education from "./pages/education"
import Skills from "./pages/skills"
function App() {
  const [currentPage,setCurrentPage] = useState("home")

  const renderPage=()=>{
    console.log("current page: ",currentPage);
    switch (currentPage){
      case "Skills":
        return <Skills/>
      case "Projects":
        return <Projects/>
      case "Education":
        return <Education/>
      case "Contact-Me":
        return <ContactMe/>
      case "About-Me":
        return <AboutMe/>
      default:
        return <Homepage/>
    }
  }
  return (
    <div className="App">
      <header>
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      <div className="main-body">
        <div className='card-spacing'>
          <div className='card'>
            {renderPage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
