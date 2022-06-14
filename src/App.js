import logo from './logo.svg';
import './App.css';
import NavBar from './component/navBar';
import { useState } from 'react';
import Homepage from './pages/home';
function App() {
  const [currentPage,setCurrentPage] = useState("home")

  const renderPage=()=>{
    switch (currentPage){
      default:
        return <Homepage/>
    }
  }
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
