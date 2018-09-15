import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Menu from './componets/Menu/Menu';
import Home from './componets/Home/Home';
import Modulos from './componets/Modulos/Modulos';
import Amigos from './componets/Amigos/Amigos';
import Carteira from './componets/Carteira/Carteira';

class App extends Component {
  render() {
    return (
      <body style={AppStyle.Corpo}>
        <aside style={AppStyle.Menu}>
          <Menu />
        </aside>

        <div style={AppStyle.Alinhar}>
          <div style={AppStyle.Dinamico}>
            {/* <Home /> */}
            {/* <Modulos /> */}
            {/* <Amigos/> */}
            {/* <Modulos /> */}
            {/* <Carteira /> */}
          </div>
        </div>
      
      </body>
    );
  }
}

export default App;
