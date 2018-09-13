import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Menu from './componets/Menu/Menu';
import ModulosHome from './componets/ModulosHome/ModulosHome';
import ObetivosHome from './componets/ObjetivosHome/ObjetivosHome';
import CarteiraHome from './componets/CarteiraHome/CarteiraHome';

class App extends Component {
  render() {
    return (
      <body style={AppStyle.Corpo}>
        <aside style={AppStyle.Menu}>
          <Menu />
        </aside>

      <div style={AppStyle.CorpoDinamico}>
        <div style={AppStyle.TelaDinamica}>
          <ModulosHome />
        </div>

        <div style={AppStyle.CorpoDinamicoHorizontal}>
          <div style={AppStyle.TelaDinamica}>
            <ObetivosHome/>  
          </div>

          <div style={AppStyle.TelaDinamica}>
            <CarteiraHome/>  
          </div>
        </div>
      </div>

      </body>
    );
  }
}

export default App;
