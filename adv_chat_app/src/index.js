import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

//Components
import MainScreen from "./front_comp/MainScreen.jsx"

const Main = () => {
  return (
    <>
      <MainScreen/>
    </>
  );
}

ReactDOM.render(<Main/>,document.getElementById('root'));
