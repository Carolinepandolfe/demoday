import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Menu from './componets/Menu/Menu';
import Home from './componets/Home/Home';
import Modulos from './componets/Modulos/Modulos';

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
          </div>
        </div>

      </body>
    );
  }
}

export default App;
