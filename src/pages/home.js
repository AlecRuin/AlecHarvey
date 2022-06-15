import me from "../images/me.png"
import github from "../images/githubicon.png"
import linkedin from "../images/linkedinicon.png"
import stackoverflow from "../images/stackoverflowicon.png"
import instagram from "../images/instagramicon.png"
import discord from "../images/discordicon.png"
import React, { useCallback, useEffect, useMemo, useState } from "react"
const Homepage=()=>{
    const CopyToClipbard=()=>{
        navigator.clipboard.write("God#0002")
        alert("Discord username and tag copied to the clipboard! Visit Discord or use the app and add me as a friend!")
    }

    return(
        <div className="home-div">
            <img src={me} className="large-box" alt="profile of me" id="picture"></img>
            <h1 className="large-box primary-text-color">HEYO!<br></br>I'm <span className="highlight-color">Alec</span></h1>
            <h3 className="small-box primary-text-color">I WANNA LEARN IT ALL!</h3>
            <ul className="small-box">
                <li>
                    <a className="icon" href="https://github.com/AlecRuin" target="_blank" rel="noreferrer">
                        <img src={github} alt="github icon"></img>
                    </a>
                </li>
                <li>
                    <a className="icon" href="https://www.linkedin.com/in/malik-harvey-206b7516a/" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin icon"></img>
                    </a>
                </li>
                <li>
                    <a className="icon" href="https://stackoverflow.com/users/10722819/alec" target="_blank" rel="noreferrer">
                        <img src={stackoverflow} alt="stackoverflow icon"></img>
                    </a>
                </li>
                <li>
                    <a className="icon" href="https://www.instagram.com/malikharvey19/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="instagram icon"></img>
                    </a>
                </li>
                <li>
                    <a className="icon">
                        <img src={discord} alt="discord icon" onClick={()=>CopyToClipbard()}></img>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Homepage