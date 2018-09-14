import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Menu from './componets/Menu/Menu';
import Home from './componets/Home/Home';
import Modulos from './componets/Modulos/Modulos';
import Amigos from './componets/Amigos/Amigos';

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
<<<<<<< HEAD
            {/* <Modulos /> */}
            <Amigos/>

=======
            <Modulos />
>>>>>>> ccb3b152fca4924933bf1eb677941c887fa1148a
          </div>
        </div>
      
      </body>
    );
  }
}

export default App;
