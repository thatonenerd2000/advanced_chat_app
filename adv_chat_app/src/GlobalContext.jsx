import React , {useState,useEffect} from 'react';
import socketClient  from "socket.io-client";

export const ConfigContext = React.createContext()

const GlobalContext = (props) => {
    const endpoint = "localhost:3001"
    var socket = socketClient(endpoint);

    const [UID,setUid] = useState("")

    useEffect(()=>{
        socket.on("connect", ()=>{

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