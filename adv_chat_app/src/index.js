import React from 'react';
import ReactDOM from 'react-dom';
import socketClient  from "socket.io-client";


import './index.scss';


//Components
import MainScreen from "./front_comp/MainScreen.jsx"

const SERVER = "http://127.0.0.1:3001";

const Main = () => {
  var socket = socketClient (SERVER);
  socket.on('connection', () => {
      console.log(`I'm connected with the back-end`);
  });
  socket.on('connection', () => {
      console.log(`I'm connected with the back-end`);
  }); 
  return (
    <>
      <MainScreen/>
    </>
  );
}

ReactDOM.render(<Main/>,document.getElementById('root'));
