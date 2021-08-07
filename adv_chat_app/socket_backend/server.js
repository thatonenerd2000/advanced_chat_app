const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3001;

const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

server.listen(port, ()=>{
    console.log(`listening on *:${port}`);
})


io.on('connection', (socket) => {
    console.log('a user connected');
    //Message from client to server
    socket.on('send_message-client',(data) =>{
        //Message from server to client
        io.emit('send_message-server',{Message:data.senderMessage, senderUid:data.senderUid})
    })

    //Typing notification from client to server
    socket.on("send_messageTypingStarted-client",(uid) => {
        //Typing notification from server to client
        io.emit("send_messageTypingStarted-server",uid)
    })
    socket.on("send_messageTypingStopped-client",(uid)=>{
        io.emit("send_messageTypingStopped-server",uid)
    })


});