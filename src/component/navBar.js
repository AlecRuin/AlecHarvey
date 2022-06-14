import logo from "../logo.svg"
function navBar(props){
    console.log(props);
    return(
        <nav>
            <button id="logo">
                <img src={logo} className="App-logo">
                </img>
            </button>
            <button>
                Home
            </button>
            <button>
                About Me
            </button>
            <button>
                Skills
            </button>
            <button>
                Education
            </button>
            <button>
                Experience
            </button>
            <button>
                Contact
            </button>
        </nav>
    )
}
export default navBar