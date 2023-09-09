import "./SideCompStyles.css"
import React from "react";
import chatLogo from "../chatbotLogo.png"
import downScroll from "../downScroll.png"
import linkIcon from "../link.png"

function SideMenu(props) {


    return ( 
    
        <div className="sideMenu"> 
            <div id = "changeDisplay" className="linker">
                <button onClick={props.changeDisplay}>
                    <img id = "changeDisplayImg" src = {props.chatDisplay === "chat" ? linkIcon : chatLogo}/>
                </button>
            </div>
            {props.linkVal > 0 && <div className="linkCounter">{props.linkVal}</div>}
            <div className="sideScrollDown" id = "scroller">
                <button>
                    <img src = {downScroll} onClick={props.scrollDown}/>
                </button>
            </div>
            <div className="deActivContainer">
                <button className="closeButton" onClick={props.deactivateChat}>X</button>
            </div>
        </div>

    )

}

export default SideMenu;