import cubepic from "../images/bb2block.png"
const AboutMe = ()=>{
    return(
        <>
            <img src={cubepic} alt="cube from Battleblox 2 game" className="large-box picture"/>
            <div className="large-box half-width">
                <h2 className="large-font highlight-color ">About Me</h2>
                <p className="primary-text-color medium-font">
                I am Malik "Alec" Harvey, based in Missouri and willing to locate. I am a full stack developer and overall programmer. I have a strong passion in making video games.
                To the left is an image from a game I have been developing for 2 years. I excell at lot at back-end programming but I can program the front end of applications.
                I have dabbled in modding games, making desktop apps, android apps, JRE/JVM, and I am currently trying to develop a server for Unreal Engine 5 to program an RPG! 
                </p>
            </div>   
        </>
    )
}
export default AboutMe