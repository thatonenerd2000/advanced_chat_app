import React,{useState,useEffect,useContext} from 'react';
import "./front_comp_style.scss";

import sentAvatar from "../assets/sentAvatar.jpg"

const ChatBubble = (props) => {
    return (
        <div className={"bubble_container " + props.MessageType}>
            {/* Render before the chat */}
            <img src={sentAvatar} id="sentAvatar" style={{
                display: props.MessageType == "sent" ? "none" : ""
                }}> 
            </img>

            <div className={"bubble " + props.MessageType}>
                <p>{props.children}</p>
            </div>

            {/* Render after the chat */}
            <img src={sentAvatar} id="sentAvatar" style={{
                display: props.MessageType == "receive" ? "none" : ""
                }}> 
            </img>
        </div>
    )
}

export default ChatBubble