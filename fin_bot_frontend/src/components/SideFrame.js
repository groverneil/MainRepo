import "./SideCompStyles.css"
import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios"
import logo from "../logo.png"
import subIcon from "../submit.png"
import clearIcon from "../clearIcon.svg"
import chatBotIcon from "../chatbotIcon.png"
import userIcon from "../userbotIcon.png"
import downScroll from "../downScroll.png"

export const SideFrame = () => {

    const [isChatActive, setChatActive] = useState(false)

    const activateChat = () => {

        setChatActive(true)

    }


    return (

        <div className="mainSide">

            <button className="activator" onClick={activateChat}>
                <img src = {logo}/>
            </button>

            {isChatActive && <div className="SideChat">
                <p>Hello</p>
            </div>}

        </div>
    )
}


export default SideFrame;
