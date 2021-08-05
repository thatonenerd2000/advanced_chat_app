import React,{useState,useEffect,useContext} from 'react';
import socketClient  from "socket.io-client";
import "./front_comp_style.scss"

//Components
import ChatBubble from "./ChatBubble.jsx"
import InputMessage from './InputMessage';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

const MainScreen = () => {
    //Socket
    const endpoint = "localhost:3001"
    var socket = socketClient (endpoint);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
    });

    //Message
    const [messageText, setMessageText] = useState("");

    socket.on("send_message_server",(msg) => {
        setMessageText(msg)
        console.log(messageText)
    })
    
    return(
        <>
            <div id="MainScreen">
                <div className="beginning">This is the very beginning of your chat.</div>
                {/* <ChatBubble MessageType="sent" Message={messageText}>This got sent</ChatBubble>
                <ChatBubble MessageType="sent">Another Sent Message</ChatBubble>
                <ChatBubble MessageType="receive">Received this one</ChatBubble>
                <ChatBubble MessageType="receive">Yet another one wow. BRIGET BRIGET BRIGET</ChatBubble>
                <ChatBubble MessageType="sent">Greg understood that this situation would make Michael terribly uncomfortable. Michael simply had no idea what was about to come and even though Greg could prevent it from happening, he opted to let it happen. It was quite ironic, really. It was something Greg had said he would never wish upon anyone a million times, yet here he was knowingly letting it happen to one of his best friends. He rationalized that it would ultimately make Michael a better person and that no matter how uncomfortable, everyone should experience racism at least once in their lifetime.</ChatBubble>
                <ChatBubble MessageType="receive">All he could think about was how it would all end. There was still a bit of uncertainty in the equation, but the basics were there for anyone to see. No matter how much he tried to see the positive, it wasn't anywhere to be seen. The end was coming and it wasn't going to be pretty.</ChatBubble> */}
                {}


                <div id="inputContainer">
                    <InputMessage/>
                </div>
            </div>
        </>
    )
}

export default MainScreen