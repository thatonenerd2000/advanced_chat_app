import React,{useState,useEffect,useContext} from 'react';
import "./front_comp_style.scss";

const ChatBubble = (props) => {
    return (
        <div className={"bubble_container " + props.MessageType}>
            <div className={"bubble " + props.MessageType} id="chatBubble">
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default ChatBubble