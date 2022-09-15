import logo from "../logo.svg"
function navBar(props){
    return(
        <nav>
            <button className="button" id="logo" onClick={()=>props.setCurrentPage("home")}>
                <img src={logo} className="App-logo" alt="signature">
                </img>
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("home")}>
                Home
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("About-Me")}>
                About Me
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("Skills")}>
                Skills
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("Education")}>
                Education
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("Projects")}>
                Projects
            </button>
            <button className="button" onClick={()=>props.setCurrentPage("Contact-Me")}>
                Contact Me
            </button>
        </nav>
    )
}
export default navBar