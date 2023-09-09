import "./SideCompStyles.css"
import React from "react"
import linkIcon from "../link.png"

function LinksBody(props) {

    return (
        
        <div>
            <div className="intro">

                <div>
                    <div>
                        <img src={linkIcon}/>
                    </div>
                        <div>
                            <p>This is where you can view your links!</p>
                            <p></p>
                        </div>
                </div>
            </div>

            {props.conversations.map(conversation => {

                console.log(conversation.link_tag[0] === "")
                
                if (conversation.link_tag[0] !== "") {

                return <div key={conversation.id} className="linkTag">
                    <div className="linkConv">

                        <a href={conversation.link} target="_blank">{conversation.link_tag}</a>
                    </div>
                </div>
                }
                
            })}

            </div>
    )
}

export default LinksBody;