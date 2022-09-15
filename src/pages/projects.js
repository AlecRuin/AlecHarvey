import smileboy from "../videos/smileboy.mp4"
import simoleon from "../images/simoleon.png"
import battlebloxdemo from "../videos/battleblox.mp4"
const Projects = ()=>{
    return(
        <div className="h90 w100 m1 flex flex-column">
            <div className="w100 flex align-center h33">
                <div className="w33">
                    <video className="w100 picture" autoPlay={true} loop={true}>
                        <source src={battlebloxdemo} type="video/mp4"/>
                    </video>
                </div>
                <div className="w66">
                    <div className="w100 large-font highlight-color h20">
                        Battleblox 2
                    </div>
                    <div className="h80 small-font primary-text-color">
                        Battleblox 2 was written on Roblox in Lua as my starting place for learning game programming. The game utilized an advanced block-placement system that
                        allowed players to build custom vehicles and battle other players with their vehicles. It had advanced flood-fill system that would dynamically destroy the vehicle if any 
                        structural parts of the vehicle were destroyed. It saved the player vehicles within datastores and queried them at all onced as a JSON to efficienctly load ALL player vehicles
                        at once. Development discontinued once I learned how little money I would earn from this project
                    </div>
                </div>
            </div>

            <div className="w100 flex align-center h33">
                <div className="w66">
                    <div className="w100 large-font highlight-color h20">
                        Simoleon (WIP)
                    </div>
                    <div className="h80 small-font primary-text-color">
                        Simoleon is a financial portfolio application. Using React, MongoDB, GraphQL, and Express, it will allow the user to create an account, create banking accounts,
                        and track their expenditures and incomes. Once the user creates an account, it will ask the user to send an email verification using nodemailer sent from the email
                        support@simoleon.us. This email allows the user to reply back and create an ticket within a collaborative inbox for support staff. Users can create debit or credit accounts 
                        and track transactions. Once a transaction has been made, it will populate doughtnut charts and give a visual representation of their financial activity.
                    </div>
                </div>
                <div className="w33">
                    <img src={simoleon} alt="screenshot of simoleon website" className="w-100 picture"/>
                </div>
            </div>
            
            <div className="w100 flex align-center h33">
                <div className="w33">
                    <video className="w100 picture" autoPlay={true} loop={true}>
                        <source src={smileboy} type="video/mp4"/>
                    </video>
                </div>
                <div className="w66 ">
                    <div className="h20 highlight-color large-font w-100">
                        Smileboy
                    </div>
                    <div className="h80 primary-text-color small-font">
                        Smileboy was a minecraft mod made in 1.7.10 using Forge. I had to use the outdated modding API because I wanted use in my personal modded server. Smile boy was a 
                        creeper body with a reskin texture of a happy face. It did nothing but scurry around like a ocelot. It dropped a placeable smiling block. It was made purly to be cute and adorable to find.
                        Despite being a reskin of a creeper with ocelot behavior, it did not alter their behaviors and was condidered its own entity.
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Projects