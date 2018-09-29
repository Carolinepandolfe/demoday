import React, { Component } from 'react';
import HomeStyle from './HomeStyle';
import ModulosHome from './ModulosHome/ModulosHome';
import ObjetivosHome from './ObjetivosHome/ObjetivosHome';
import CarteiraHome from './CarteiraHome/CarteiraHome';

class Home extends Component {
  render() {
    return (
      <body style={HomeStyle.Corpo}>
        <div style={HomeStyle.CorpoDinamico}>

            <ModulosHome />

            <div style={HomeStyle.CorpoDinamicoHorizontal}>
                <div style={HomeStyle.TelaDinamica}>
                    <ObjetivosHome/>  
                </div>

                <div style={HomeStyle.TelaDinamica}>
                    <CarteiraHome/>  
                </div>
            </div>
        </div>
      </body>
    );
  }
}

export default Home;