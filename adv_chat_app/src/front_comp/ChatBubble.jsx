import React from 'react';
import "./front_comp_style.scss";
import Fade from 'react-reveal/Fade';

import sentAvatar from "../assets/sentAvatar.jpg"
import receiveAvatar from "../assets/receiveAvatar.jpg"

const ChatBubble = (props) => {
    return (
        <>
            <Fade right={props.MessageType === "sent" ? true : false} left={props.MessageType === "receive" ? true : false} delay={0} duration={300}>
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
            </Fade>
        </>
    )
}

export default ChatBubble