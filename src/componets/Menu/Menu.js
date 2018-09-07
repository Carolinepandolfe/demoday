import React, { Component } from 'react';
import UserProfileImg from'./user-icon.png';
import MenuStyle from './MenuStyle';

class Menu extends Component {
  render() {
    return (
      <aside style={MenuStyle.Menu}>
        <div style={MenuStyle.Perfil}>
            <img src={UserProfileImg} style={MenuStyle.PerfilImg} />
            <h2 style={MenuStyle.Nome}>Nome do usuário</h2>
            <h3 style={MenuStyle.Nivel}>Nível 2</h3>
        </div>
        <nav style={MenuStyle.NavMenu}>
            <a href="#" style={MenuStyle.Link}>Home</a>
            <a href="#" style={MenuStyle.Link}>Módulos</a>
            <a href="#" style={MenuStyle.Link}>Amigos</a>
            <a href="#" style={MenuStyle.Link}>Carteira</a>
            <a href="#" style={MenuStyle.Link}>Objetivos</a>
            <a href="#" style={MenuStyle.Link}>Sair</a>
        </nav>
      </aside>
    );
  }
}

export default Menu;