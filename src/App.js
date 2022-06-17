import './App.css';
import NavBar from './component/navBar';
import { useState } from 'react';
import Homepage from './pages/home';
import AboutMe from './pages/aboutMe';
import ContactMe from "./pages/contactMe"
import Projects from "./pages/projects"
import Education from "./pages/education"
import Skills from "./pages/skills"
import {print} from "@alecruin/color-logger"

import github from "./images/githubicon.png"
import linkedin from "./images/linkedinicon.png"
import stackoverflow from "./images/stackoverflowicon.png"
import instagram from "./images/instagramicon.png"
import discord from "./images/discordicon.png"
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
  const CopyToClipbard=()=>{
    navigator.clipboard.write("God#0002")
    alert("Discord username and tag copied to the clipboard! Visit Discord or use the app and add me as a friend!")
}
  const linksandalts=[
      {
          name:"github icon",
          link:"https://github.com/AlecRuin",
          img:github
      },
      {
          name:"linkedin icon",
          link:"https://www.linkedin.com/in/malik-harvey-206b7516a/",
          img:linkedin
      },
      {
          name:"stackoverflow icon",
          link:"https://stackoverflow.com/users/10722819/alec",
          img:stackoverflow
      },
      {
          name:"instagram icon",
          link:"https://www.instagram.com/malikharvey19/",
          img:instagram
      }
  ]
  const populatefooter=(index)=>{
      print("populating social icons", new Error())
      return(
          <li key={index.name}>
              <a className="icon" href={index.link} target="_blank" rel="noreferrer">
                  <img src={index.img} alt={index.name}></img>
              </a>
          </li>
      )
  }
  return (
    <div className="App">
      <header>
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      <div className="main-body">
        <div className='card-spacing'>
          <div className='card'>
            <div className='home-div'>
              {renderPage()}
              <ul className="small-box footer-parent">
                {linksandalts.map(index=>(populatefooter(index)))}
                <li>
                    <a className="icon">
                        <img src={discord} alt="discord icon" onClick={()=>CopyToClipbard()}></img>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
