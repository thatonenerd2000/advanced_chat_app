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
    socket.on('send_message-client',(msg) =>{
        io.emit('send_message-server',msg)
    })
    socket.on('send_messageId-client',(uid) => {
        io.emit('send_messageId-server',uid)
    })
});