import React, { Component } from 'react';
import ObjetivosHomeStyle from './ObjetivosHomeStyle';

class ObjetivosHome extends Component {
  render() {
    return (
        <div style={ObjetivosHomeStyle.Painel}>
            <h2 style={ObjetivosHomeStyle.NomeModulo}>Objetivos</h2>
            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <div style={ObjetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <div style={ObjetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 2</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <div style={ObjetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 3</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObjetivosHomeStyle.BotaoAlinhamento}>
                <button style={ObjetivosHomeStyle.Botao}>Saiba Mais</button>
            </div>
        </div>
    );
  }
}

export default ObjetivosHome;