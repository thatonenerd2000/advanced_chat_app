import React , {useState,useEffect} from 'react';
import socketClient  from "socket.io-client";

export const ConfigContext = React.createContext()

const GlobalContext = (props) => {
    const endpoint = "localhost:3001"
    var socket = socketClient(endpoint);

    const [UID,setUid] = useState("")

    useEffect(()=>{
        socket.on("connect", ()=>{
            // console.log("A user has connected in GlobalConfig and his socket id is: " + socket.id)
            setUid(socket.id)
        })
    },[])

    return(
        <ConfigContext.Provider value = {{
            socketState:socket,
            uid:UID
        }}>
            {props.children}
        </ConfigContext.Provider>
    )

}

export default GlobalContext