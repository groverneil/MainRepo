import "./SideCompStyles.css"
import React from "react"
import chatBotIcon from "../chatbotIcon.png"
import userIcon from "../userbotIcon.png"

function MessageBody(props) {

    return (
        
        <div>

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

            {props.conversations.map((conversation) => (
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

            </div>
    )
}

export default MessageBody;