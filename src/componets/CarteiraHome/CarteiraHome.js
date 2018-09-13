import React, { Component } from 'react';
import CarteiraHomeStyle from './CarteiraHomeStyle';

class CarteiraHome extends Component {
  render() {
    return (
        <div style={CarteiraHomeStyle.Painel}>
            <h2 style={CarteiraHomeStyle.NomeModulo}>Últimas Transferências</h2>
            <div style={CarteiraHomeStyle.ObjetivoItem}>
                <h2 style={CarteiraHomeStyle.Valor}>$ 20,00 +</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div style={CarteiraHomeStyle.ObjetivoItem}>
                <h2 style={CarteiraHomeStyle.Valor}>$ 20,00 +</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div style={CarteiraHomeStyle.ObjetivoItem}>
                <h2 style={CarteiraHomeStyle.Valor}>$ 20,00 +</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

            <div style={CarteiraHomeStyle.BotaoAlinhamento}>
                <button style={CarteiraHomeStyle.Botao}>Saiba Mais</button>
            </div>
        </div>
    );
  }
}

export default CarteiraHome;