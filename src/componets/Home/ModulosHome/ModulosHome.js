import React, { Component } from 'react';
import ModulosHomeStyle from './ModulosHomeStyle';

class ModulosHome extends Component {
  render() {
    return (
        <div style={ModulosHomeStyle.Painel}>
            <h2 style={ModulosHomeStyle.NomeModulo}>Nome do Módulo</h2>
            <div style={ModulosHomeStyle.ProgressBar}>
                <div>Progress bar</div>
                <h2 style={ModulosHomeStyle.NomeModulo}>45%</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam ullam itaque, aliquid mollitia, provident praesentium quaerat voluptatem ratione commodi in dolor culpa nisi, eaque suscipit totam optio deserunt! Repellat.</p>
            <div style={ModulosHomeStyle.BotaoAlinhamento}>
                <button style={ModulosHomeStyle.Botao}>Continuar</button>
            </div>
        </div>
    );
  }
}

export default ModulosHome;