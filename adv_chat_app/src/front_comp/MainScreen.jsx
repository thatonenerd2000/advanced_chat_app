import React,{useState,useEffect,useContext} from 'react';
import "./front_comp_style.scss"

//Components
import ChatBubble from "./ChatBubble.jsx"
import InputMessage from './InputMessage';

const MainScreen = () => {
    return(
        <>
            <div id="MainScreen">
                <div className="beginning">This is the very beginning of your chat.</div>
                <ChatBubble MessageType="sent">This got sent</ChatBubble>
                <ChatBubble MessageType="sent">Another Sent Message</ChatBubble>
                <ChatBubble MessageType="receive">Received this one</ChatBubble>
                <ChatBubble MessageType="receive">Yet another one wow. BRIGET BRIGET BRIGET</ChatBubble>

                <InputMessage/>
            </div>
        </>
    )
}

export default MainScreen