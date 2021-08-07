import React from 'react';
import "./front_comp_style.scss";

import sentAvatar from "../assets/sentAvatar.jpg"
import receiveAvatar from "../assets/receiveAvatar.jpg"

const ChatBubble = (props) => {
    return (
        <>
            <div className={"bubble_container " + props.MessageType}>
                {/* Render before the chat */}
                <img src={sentAvatar} alt="sender" id="sentAvatar" className="avatar" style={{
                    display: props.MessageType === "sent" ? "none" : "inlineBlock"
                    }}> 
                </img>

                <div className={"bubble " + props.MessageType}>
                    <p>{props.Message}</p>
                </div>

                {/* Render after the chat */}
                <img src={receiveAvatar} alt="receiver" id="receiveAvatar" className="avatar" style={{
                    display: props.MessageType === "receive" ? "none" : "inlineBlock"
                    }}> 
                </img>
            </div>
        </>
    )
}

export default ChatBubble