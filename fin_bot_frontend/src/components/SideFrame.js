import "./SideCompStyles.css"
import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios"
import chatLogo from "../chatbotLogo.png"
import subIcon from "../submit.png"
import clearIcon from "../clearIcon.png"
import linkIcon from "../link.png"
import SideMenu from "./SideMenu";
import MessageBody from "./MessagesBody";
import LinksBody from "./LinksBody";

const SideFrame = () => {

    const [isChatActive, setChatActive] = useState(false)
    const [chatDisplay, setChatDisplay] = useState("chat")
    const [linkVal, setLinkVal] = useState(0)

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

        setLinkVal(0)

        if (chatDisplay !== "chat") {

            await setChatDisplay("chat")
        }

        const users = document.querySelectorAll('.sideUser');

        if (users.length === 0) {

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

                intro.style.animation = "fadeOut 0.3s"

                users.forEach((user, index) => {

                    currChat = chats[index]
                    user.style.animation = "fadeOut 0.3s"
                    currChat.style.animation = "fadeOut 0.3s"
                })

                intro.addEventListener("animationend", () => {
    
                    intro.style.display = "none"
                    setChatDisplay("links")

                    if (linkVal > 0) {

                        document.getElementsByClassName("linkCounter")[0].style.display = "none"
        
                        setLinkVal(0)
        
                    }

                    users.forEach((user, index) => {

                        currChat = chats[index]
                        user.style.display = "none"
                        currChat.style.display = "none"
                    })
    
                })

            }
            
        
        } else {

            const linkTags = document.querySelectorAll(".linkTag")
            const intro = document.getElementsByClassName("intro")[0]

            if (linkTags.length === 0) {

                intro.style.animation = "fadeOut 0.5s"

                intro.addEventListener("animationend", () => {
                    
                    intro.style.display = "none"
                    setChatDisplay("chat")

                })

            } else {

                intro.style.animation = "fadeOut 0.5s"

                linkTags.forEach((link) => {
                    link.style.animation = "fadeOut 0.5s"
                })

                intro.addEventListener("animationend", () => {

                    linkTags.forEach((link) => {
                        link.style.display = "none"
                    })

                    document.getElementsByClassName("intro")[0].style.display = "none"
                
                    setChatDisplay("chat")
                })
            
            }
        }

    }

    const textareaSubEnter = (e) => {
    
            if (isChatActive) {
        
                var inputer = document.getElementById("autoAdjustInput")
        
                if (inputer) {

                    if(e.keyCode == 13 && e.shiftKey == false) {

                        if (chatDisplay !== "chat") {

                            setChatDisplay("chat")
                        }
                        
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

        if (conversations.length > 0) {

            if (conversations[conversations.length-1]["link"][0] !== "") {

                setLinkVal(linkVal+0.5)
            }

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

                <SideMenu changeDisplay={changeDisplay} chatDisplay={chatDisplay} linkVal={linkVal} scrollDown={scrollDown} deactivateChat={deactivateChat}/>
                
                <div id = "window" className="sideChat">

                    {chatDisplay === "chat" && <MessageBody conversations={conversations}/>}

                    {chatDisplay === "links" && <LinksBody conversations={conversations}/>}
                        
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
