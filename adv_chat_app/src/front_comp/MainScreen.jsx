import React,{useState,useEffect,useContext} from 'react';
import {ConfigContext} from "../GlobalContext"
import "./front_comp_style.scss"

//Components
import ChatBubble from "./ChatBubble.jsx"
import InputMessage from './InputMessage';

const MainScreen = () => {
    //Global Context
    const Globalconfig = useContext(ConfigContext);

    const [socket,setSocketDO_NOT_TOUCH] = useState(Globalconfig.socketState)
    const [messages,pushMessage] = useState([])
    const [currentUid,setCurrentUid] = useState("")

    useEffect(()=>{
        socket.on('send_message-server', (msg) => {
            pushMessage(oldMessages => [...oldMessages,msg])
        });
        socket.on("connect",()=>{
            setCurrentUid(socket.id)
        });
    },[])

    return(
        <>
            <div id="MainScreen">
                <div className="beginning">This is the very beginning of your chat.</div>
                {messages.map(data=>{
                    //If the browser socket Id is the same as the one sent by Global Config, its the same user
                    if(Globalconfig.uid == currentUid){
                        return<ChatBubble MessageType="sent" Message={data}/>
                    }
                })}

                <div id="inputContainer">
                    <InputMessage/>
                </div>
            </div>
        </>
    )
}

export default MainScreen