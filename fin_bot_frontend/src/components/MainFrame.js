import "./MainCompStyles.css"
import { useState, useRef, useEffect } from "react";
import React from "react";
import axios from "axios"
import logo from "../logo.png"
import subIcon from "../submit.png"
import clearIcon from "../clearIcon.svg"
import chatBotIcon from "../chatbotIcon.png"
import userIcon from "../userbotIcon.png"
import downScroll from "../downScroll.png"

export const MainFrame = () => {

    const [x, setX] = useState([])

    const userRef = useRef(null)

    const ReqHandler = (e) => {

        e.preventDefault()

        if (userRef.current.value !== "") {

            const article = { title: e.target[0].value };
            axios.post('/handle_data', article)
            .then( response => {

                setX(response.data)
            })

            axios.get("/handle_data")
            .then((response) => {

                setX(response.data)
            });

            userRef.current.value = "";

    }
    }

    const OnClear = (e) => {

        e.preventDefault()

        axios.post("/reset", {}).then(
            
            data => {

              setX([])
            }

        )
        
     }

     const scrollDown = (e) => {

        let scroll_to_bottom = document.getElementById('window');
		scroll_to_bottom.scroll({ top: scroll_to_bottom.scrollHeight, behavior: 'smooth' });
     }

    useEffect(() => {

        let scroll_to_bottom = document.getElementById('window');
		scroll_to_bottom.scroll({ top: scroll_to_bottom.scrollHeight, behavior: 'smooth' });

    }, [x])


    const conversations = Array.from(x)

    return(

        <div>
            <div className="header">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="title">
                    <h1>UCSC Financial Aid FinBot</h1>
                </div>
            </div>
            <div id="window" className="chatWindow">

                    <div>

                        <div className="chatbot">
                            <div className="chatIcon">
                                <img src={chatBotIcon}/>
                            </div>
                                <div>
                                    <p>Hello, welcome to the UCSC financial aid office chatbot. How may I be of assistance to you today?</p>
                                </div>
                        </div>
                    </div>

                    {conversations.map((conversation) => (
                        <div className="displayChat" key={conversation.id}>
                            <div className="user">
                                <div className="chatIcon">
                                    <img src={userIcon}/>
                                </div>
                                <p>{conversation.you}</p>
                            </div>
                            <div className="chatbot">
                                <div className="chatIcon">
                                    <img src={chatBotIcon}/>
                                </div>
                                    {conversation.Chatbot.split('\n').map( (it, i) => <div key={'x'+i}><p>{it}</p><br/></div>)}
                            </div>
                        </div>
                    ))}
                <div className="scrollDown">
                    <button>
                        <img src = {downScroll} onClick={scrollDown}/>
                    </button>
                </div>
            </div>
            <div className="MainFrame">
                <form onSubmit={ReqHandler}>
                    <input type="text" name="user_input" className="user_in" ref={userRef}/>
                    <input type="image" src={subIcon} name="user_sub" className="user_in"/>
                    <input type = "image" src={clearIcon} className="clear-btn" onClick={OnClear}/>
                </form>
            </div>
        </div>
        
    )


}

export default MainFrame;