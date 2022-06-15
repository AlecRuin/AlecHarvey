import './App.css';
import NavBar from './component/navBar';
import { useState } from 'react';
import Homepage from './pages/home';
import AboutMe from './component/aboutMe';
function App() {
  const [currentPage,setCurrentPage] = useState("home")

  const renderPage=()=>{
    console.log("current page: ",currentPage);
    switch (currentPage){
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
