import React from 'react';
import ReactDOM from 'react-dom';
import GlobalContext from "./GlobalContext.jsx"

import './index.scss';

//Components
import MainScreen from "./front_comp/MainScreen.jsx"

const Main = () => {
  return (
    <GlobalContext>
      <MainScreen/>
    </GlobalContext>
  );
}

ReactDOM.render(<Main/>,document.getElementById('root'));
