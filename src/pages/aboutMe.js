import cubepic from "../images/bb2block.png"
const AboutMe = ()=>{
    return(
        <>
        <div className="large-box">
            <img src={cubepic} alt="cube from Battleblox 2 game" className="picture"/>
        </div>
            
            <div className="large-box half-width">
                <h2 className="large-font highlight-color ">About Me</h2>
                <p className="primary-text-color medium-font">
                I am Malik "Alec" Harvey, based in Missouri. I am a full stack developer and general purpose programmer. I have a strong passion in making video games.
                To the left is an image from a game I have been developing for 2 years. I excell at full stack applications but have experience in modding, mobile app creation, server creation and management, and pc building.
                I am currently in server creation for Unreal Engine 5 in C++
                </p>
            </div>   
        </>
    )
}
export default AboutMe