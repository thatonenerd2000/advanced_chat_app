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
    const [typing,setTyping] = useState({typeState:false,uidV:""})

    useEffect(()=>{
        socket.on('send_message-server', (data) => {
            pushMessage(oldMessages => [...oldMessages,{message:data.Message,uid:data.senderUid}])
        });
        socket.on("connect",()=>{
            setCurrentUid(socket.id)
        });
        socket.on("send_messageTypingStarted-server",(uid)=>{
            setTyping({typeState:true,uidV:uid})
        })
        socket.on("send_messageTypingStopped-server",()=>{
            setTyping({typeState:false,uidV:""})
        })
    },[])

    function typingAnimation(){
        if(typing.typeState && typing.uidV != currentUid){
            return true
        }

        else{
            return false
        }
    }

    return(
        <>
            <div id="MainScreen">
                <div className="beginning">This is the very beginning of your chat.</div>
                {messages.map(data=>{
                    // If the browser socket Id is the same as the one sent by Global Config, its the same user
                    {console.log(typing)}
                    if(currentUid == data.uid){
                        return<ChatBubble MessageType="sent" Message={data.message}/>
                    }
                    else{
                        return<ChatBubble MessageType="receive" Message={data.message}/>
                    }
                })}

                {console.log(typingAnimation())}
                <div style={
                    typingAnimation() ? {display:"block"} : {display:"none"}
                }>
                    <ChatBubble MessageType="receive" Message="*typing*"/>
                </div>

                <div id="inputContainer">
                    <InputMessage/>
                </div>
            </div>
        </>
    )
}

export default MainScreen