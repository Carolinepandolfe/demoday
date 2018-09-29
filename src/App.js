import React, { Component } from 'react';
import AppStyle from './AppStyle';
import Home from './componets/Home/Home';
import Modulos from './componets/Modulos/Modulos';
import Amigos from './componets/Amigos/Amigos';
import Carteira from './componets/Carteira/Carteira';
import Objetivo from './componets/Objetivos/Objetivo';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UserProfileImg from'./user-icon.png';
import ModulosAbertos from './componets/Modulos/ModulosAbertos/ModulosAbertos';
import Juros from './componets/Modulos/ModulosAbertos/ExercicioJuros/Juros';


class App extends Component {
  render() {
    return (
      <div style={AppStyle.Corpo}>
        <Router>
          <div>
            <aside style={AppStyle.Menu}>

              <div style={AppStyle.Perfil}>
                <img src={UserProfileImg} style={AppStyle.PerfilImg} />
                <h2 style={AppStyle.Nome}>Fabiano</h2>
                <h3 style={AppStyle.Nivel}>Nível 1</h3>
              </div>

                <ul style={AppStyle.NavMenu}>
                  <li style={AppStyle.Link}><Link to="/Home">Home</Link></li>
                  <li style={AppStyle.Link}><Link to="/Modulos">Modulos</Link></li>
                  <li style={AppStyle.Link}><Link to="/Amigos">Amigos</Link></li>
                  <li style={AppStyle.Link}><Link to="/Carteira">Carteira</Link></li>
                  <li style={AppStyle.Link}><Link to="/Objetivos">Objetivos</Link></li>
                  <li style={AppStyle.Link}><Link to="/ModuloAberto">Home</Link></li>
                </ul>
            </aside>

            <div style={AppStyle.Alinhar}>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Modulos" component={Modulos}/>
                <Route exact path="/Amigos" component={Amigos}/>
                <Route exact path="/Carteira" component={Carteira}/>
                <Route exact path="/Objetivos" component={Objetivo}/>
                <Route exact path="/" component={ModulosAbertos}/>
            
            </div>
          </div>
        </Router>
      

      </div>
    );
  }
}

export default App;