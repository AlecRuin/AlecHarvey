import logo from "../logo.svg"
function navBar(props){
    return(
        <nav>
            <button id="logo" onClick={()=>props.setCurrentPage("home")}>
                <img src={logo} className="App-logo" alt="signature">
                </img>
            </button>
            <button onClick={()=>props.setCurrentPage("home")}>
                Home
            </button>
            <button onClick={()=>props.setCurrentPage("About-Me")}>
                About Me
            </button>
            <button>
                Skills
            </button>
            <button>
                Education
            </button>
            <button>
                Projects
            </button>
            <button>
                Contact
            </button>
        </nav>
    )
}
export default navBar