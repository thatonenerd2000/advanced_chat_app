import React,{useState,useEffect,useContext} from 'react';
import {ConfigContext} from "../GlobalContext"
import "./front_comp_style.scss"

//Icon
import {AiOutlineSend} from "react-icons/ai";

const InputMessage = () => {
    //Global Context
    const Globalconfig = useContext(ConfigContext);

    const [socket,setSocketDO_NOT_TOUCH] = useState(Globalconfig.socketState)
    return (
        <div id="inputContainer">
            <input type="text" id="inputText" placeholder="Input message here..."></input>
            <button onClick={()=>{
                let message = document.getElementById("inputText")
                socket.emit("send_message-client" , message.value);
                message.value = "";
            }}><AiOutlineSend style={{color:"blue"}}/></button>
        </div>
    )
}

export default InputMessage