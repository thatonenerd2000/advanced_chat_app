import React,{useState,useEffect,useContext} from 'react';
import socketClient  from "socket.io-client";
import "./front_comp_style.scss"

//Icon
import {AiOutlineSend} from "react-icons/ai";

const InputMessage = () => {
    //Socket
    const endpoint = "localhost:3001"
    var socket = socketClient (endpoint);
    return (
        <div id="inputContainer">
            <input type="text" id="inputText" placeholder="Input message here..."></input>
            <button onClick={()=>{
                let message = document.getElementById("inputText")
                socket.emit("send_message-client" , message.value);
                socket.emit("send_messageId-client" , socket.id)
                message.value = "";
            }}><AiOutlineSend style={{color:"blue"}}/></button>
        </div>
    )
}

export default InputMessage