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
    socket.emit('connection', null);
    socket.on("send_message",(msg)=>{
        socket.emit("send_message_server",(msg))
    })
});