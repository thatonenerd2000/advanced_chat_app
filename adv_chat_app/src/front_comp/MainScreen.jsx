import React,{useState,useEffect,useContext} from 'react';
import socketClient  from "socket.io-client";
import "./front_comp_style.scss"

//Components
import ChatBubble from "./ChatBubble.jsx"
import InputMessage from './InputMessage';

const MainScreen = () => {
    //Socket
    const endpoint = "localhost:3001"
    var socket = socketClient (endpoint);

    const [messages,pushMessage] = useState([])
    const [uid,setUid] = useState('')

    useEffect(()=>{
        socket.on('send_message-server', (msg) => {
            pushMessage(oldMessages => [...oldMessages,msg])
        });
        socket.on("send_messageId-server", (uid) => {
            setUid(uid)
        })
    },[])

    return(
        <>
            <div id="MainScreen">
                <div className="beginning">This is the very beginning of your chat.</div>
                {console.log(messages)}
                {console.log("UID: " + uid)}
                {/* {console.log("this.UID: " + socket.id)} */}
                {messages.map(data=>{
                    return<ChatBubble MessageType="sent" Message={data}/>
                })}

                <div id="inputContainer">
                    <InputMessage/>
                </div>
            </div>
        </>
    )
}

export default MainScreen