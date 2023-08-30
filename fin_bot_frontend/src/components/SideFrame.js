import "./SideCompStyles.css"
import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios"
import chatLogo from "../chatbotLogo.png"
import subIcon from "../submit.png"
import clearIcon from "../clearIcon.png"
import chatBotIcon from "../chatbotIcon.png"
import userIcon from "../userbotIcon.png"
import downScroll from "../downScroll.png"
import linkIcon from "../link.png"

export const SideFrame = () => {

    const [isChatActive, setChatActive] = useState(false)
    const [chatDisplay, setChatDisplay] = useState("chat")

    const activateChat = () => {

        setChatActive(true)

    }

    const deactivateChat = () => {

        var window = document.getElementById("mainBlock");
        var scroller = document.getElementById("scroller");
        var modal = document.getElementsByClassName("modal")[0];

        window.style.animation = "slideRight 0.7s";
        scroller.style.animation = "slideRight 0.7s";
        modal.style.animation = "fadeOut 0.7s";

        window.addEventListener("animationend", () => {

            window.style.display = "none";
            modal.style.display = "none"
            setChatActive(false)
            setChatDisplay("chat")
          });
    }


    const [x, setX] = useState([])

    const userRef = useRef(null)

    async function ReqHandler(e) {

        e.preventDefault()

        if (userRef.current.value !== "") {

            const article = { title: e.target[0].value };
            await axios.post('/handle_data', article)
            .then( response => {

                setX(response.data)
            })


            await axios.get("/handle_data")
            .then((response) => {

                setX(response.data)
            });

            userRef.current.value = "";

    }
    
    }

    async function specialRequest(input) {

        if (userRef.current.value !== "") {

            const article = { title: input.value };
            await axios.post('/handle_data', article)
            .then( response => {

                setX(response.data)
            })


            await axios.get("/handle_data")
            .then((response) => {

                setX(response.data)
            });

            userRef.current.value = ""

        }
    }

    const OnClear = async (e) => {

        e.preventDefault()

        if (chatDisplay === "chat") {

        const users = document.querySelectorAll('.sideUser');

        if (users.length == 0) {

            return;
        }

        const chats = document.querySelectorAll('.sideChatbot');
        const lastChat = users[0];
        const intro = document.getElementsByClassName("intro")[0];
        var chat = chats[0];
        var delay = 1;

        intro.style.animation = "fadeIn 2s";
        intro.style.display = "none";

        users.forEach((user, index) => {

            user.style.animation = "test";
            user.style.animationDuration = delay + "s";
            chat = chats[index];

            delay += 0.3;

            chat.style.animation = "test";
            chat.style.animationDuration = delay + "s";

            delay += 0.3;
        });

        let scroll_to_bottom = document.getElementById('window');
        scroll_to_bottom.scroll({ top: 0, behavior: 'smooth' });

        lastChat.addEventListener("animationend", () => {

            users.forEach(user => {

                user.style.display = "none";
                
            });
    
            chats.forEach(chat => {
    
                chat.style.display = "none";
                
            });


            axios.post("/reset", {}).then(
            
                data => {
    
                  setX([])
                }
            )

            intro.style.display = "block";
        
        })

        } else {

            axios.post("/reset", {}).then(
            
                data => {
    
                  setX([])
                }
            )
            
        }
  
     }

    const scrollDown = (e) => {

        let scroll_to_bottom = document.getElementById('window');
		scroll_to_bottom.scroll({ top: scroll_to_bottom.scrollHeight, behavior: 'smooth' });
    }

    const changeDisplay = () => {

        if (chatDisplay === "chat") {

            var intro = document.getElementsByClassName("intro")[0]

            const users = document.querySelectorAll('.sideUser')

            if (users.length == 0) {

                intro.style.animation = "fadeOut 0.5s"

                intro.addEventListener("animationend", () => {
    
                    intro.style.display = "none"
                    setChatDisplay("links")
    
                })
    
            } else {


                const chats = document.querySelectorAll('.sideChatbot')
                var currChat = "none"

                intro.style.animation = "fadeOut 0.5s"

                users.forEach((user, index) => {

                    currChat = chats[index]
                    user.style.animation = "fadeOut 0.5s"
                    currChat.style.animation = "fadeOut 0.5s"
                })

                intro.addEventListener("animationend", () => {
    
                    intro.style.display = "none"
                    setChatDisplay("links")

                    users.forEach((user, index) => {

                        currChat = chats[index]
                        user.style.display = "none"
                        currChat.style.display = "none"
                    })
    
                })

            }
            
        
        } else {

            setChatDisplay("chat")
        }

    }

    const textareaSubEnter = (e) => {

            console.log("???")
    
            if (isChatActive) {
        
                var inputer = document.getElementById("autoAdjustInput")
        
                if (inputer) {

                    if(e.keyCode == 13 && e.shiftKey == false) {
                        
                        e.preventDefault();
                        specialRequest(inputer)
                        inputer.style.height = "30px"
                    
                    } else {

                        inputer.style.height = "5px";
                        inputer.style.height = (inputer.scrollHeight) + "px";

                    }
        
                }
            }
    }


    useEffect(() => {

        if (isChatActive) {

        let scroll_to_bottom = document.getElementById('window');
		scroll_to_bottom.scroll({ top: scroll_to_bottom.scrollHeight, behavior: 'smooth' });

        }

    }, [x])

    const conversations = Array.from(x)


    return (

        <div className="mainSide">

            {!isChatActive && <button className="activator" onClick={activateChat}>
                <img src = {chatLogo}/>
            </button>}

            {isChatActive && <div className="SideChat">
                <div className="modal" onClick={deactivateChat}></div>
                <div className="sideChatWindow" id="mainBlock">

                <div className="sideMenu"> 
                        <div id = "changeDisplay" className="sideScrollDown">
                            <button onClick={changeDisplay}>
                                <img id = "changeDisplayImg" src = {chatDisplay === "chat" ? linkIcon : chatLogo}/>
                            </button>
                        </div>
                        <div className="sideScrollDown" id = "scroller">
                            <button>
                                <img src = {downScroll} onClick={scrollDown}/>
                            </button>
                        </div>
                        <div className="deActivContainer">
                            <button className="closeButton" onClick={deactivateChat}>X</button>
                        </div>
                </div>
                
                <div id = "window" className="sideChat">

                    {chatDisplay === "chat" && <div>

                        <div className="intro">

                            <div>
                                <div>
                                    <img src={chatBotIcon}/>
                                </div>
                                    <div>
                                        <p>Hello, welcome to the UCSC financial aid office chatbot. How may I be of assistance to you today?</p>
                                        <p></p>
                                    </div>
                            </div>
                        </div>

                        {conversations.map((conversation) => (
                            <div key={conversation.id}>
                                <div className="sideUser">
                                    <div>
                                        <img src={userIcon}/>
                                    </div>
                                    <p>{conversation.you}</p>
                                </div>
                                <div className="sideChatbot">
                                    <div>
                                        <img src={chatBotIcon}/>
                                    </div>
                                        {conversation.Chatbot.split('\n').map( (it, i) => <div key={'x'+i}><p>{it}</p></div>)}
                                </div>
                            </div>
                        ))}

                        </div>}

                        {chatDisplay === "links" && <div>

                            <p>This is where the links would go</p>

                        </div>}
                        
                    </div>

                    <div className="sideFrame">
                        <form id="mainForm" onSubmit={ReqHandler}>
                            <textarea placeholder="Your question here..." spellCheck="true" id="autoAdjustInput" ref={userRef} onKeyDown={textareaSubEnter}/>
                            <button className="emptyButton">
                                <img src={subIcon} className="submitter"></img>
                            </button>
                            <button className="emptyButton" onClick={OnClear}>
                                <img src={clearIcon} className="resetter"></img>
                            </button>
                        </form>
                    </div>
                </div>
            </div>}

        </div>
    )
}


export default SideFrame;
