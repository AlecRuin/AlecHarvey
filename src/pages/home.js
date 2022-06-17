import me from "../images/me.png"
import github from "../images/githubicon.png"
import { print } from "@alecruin/color-logger"
import linkedin from "../images/linkedinicon.png"
import stackoverflow from "../images/stackoverflowicon.png"
import instagram from "../images/instagramicon.png"
import discord from "../images/discordicon.png"
const Homepage=()=>{
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
    return(
        <>
            <img src={me} className="large-box picture" alt="profile of me"></img>
            <div className="half-height large-box large-font">
                <h1 className="primary-text-color">HEYO!<br></br>I'm <span className="highlight-color">Alec</span></h1>
            </div>
            <div className="small-box">
                <h3 className="primary-text-color">I WANNA LEARN IT ALL!</h3>
            </div>
            {/* <ul className="small-box">
                {linksandalts.map(index=>(populatefooter(index)))}
                <li>
                    <a className="icon">
                        <img src={discord} alt="discord icon" onClick={()=>CopyToClipbard()}></img>
                    </a>
                </li>
            </ul> */}
        </>
    )
}
export default Homepage