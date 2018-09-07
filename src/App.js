import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Menu from './componets/Menu/Menu';
import ModulosHome from './componets/ModulosHome/ModulosHome';

class App extends Component {
  render() {
    return (
      <body style={AppStyle.Corpo}>
        <aside style={AppStyle.Menu}>
          <Menu />
        </aside>

        <div style={AppStyle.TelaDinamica}>
          <ModulosHome />
        </div>
      </body>
    );
  }
}

export default App;
