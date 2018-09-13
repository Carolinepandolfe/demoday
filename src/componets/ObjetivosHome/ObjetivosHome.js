import React, { Component } from 'react';
import ObetivosHomeStyle from './ObjetivosHomeStyle';

class ObetivosHome extends Component {
  render() {
    return (
        <div style={ObetivosHomeStyle.Painel}>
            <h2 style={ObetivosHomeStyle.NomeModulo}>Objetivos</h2>
            <div style={ObetivosHomeStyle.ObjetivoItem}>
                <div style={ObetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObetivosHomeStyle.NomeModulo}>Objetivo 1</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObetivosHomeStyle.ObjetivoItem}>
                <div style={ObetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObetivosHomeStyle.NomeModulo}>Objetivo 2</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObetivosHomeStyle.ObjetivoItem}>
                <div style={ObetivosHomeStyle.ObjetivoCheckbox}></div>
                <div>
                    <h3 style={ObetivosHomeStyle.NomeModulo}>Objetivo 3</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium ipsam necessitatibus accusantium magni.</p>
                </div>
            </div>

            <div style={ObetivosHomeStyle.BotaoAlinhamento}>
                <button style={ObetivosHomeStyle.Botao}>Saiba Mais</button>
            </div>
        </div>
    );
  }
}

export default ObetivosHome;