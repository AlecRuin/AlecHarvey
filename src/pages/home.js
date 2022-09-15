import me from "../images/me.png"
const Homepage=()=>{
    return(
        <>
        <div className="large-box">
            <img src={me} className="picture" alt="profile of me"></img>
        </div>
            
            <div className="half-height large-box large-font">
                <h1 className="primary-text-color">HEYO!<br></br>I'm <span className="highlight-color">Alec</span></h1>
            </div>
            <div className="small-box">
                <h3 className="primary-text-color">I WANNA LEARN IT ALL!</h3>
            </div>
        </>
    )
}
export default Homepage