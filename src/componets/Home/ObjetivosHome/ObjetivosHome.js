import React, { Component } from 'react';
import ObjetivosHomeStyle from './ObjetivosHomeStyle';
import icon from './icon.png';

class ObjetivosHome extends Component {
  render() {
    return (
        <div style={ObjetivosHomeStyle.Painel}>
            <h2 style={ObjetivosHomeStyle.NomeModulo}>Objetivos</h2>
            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <img src={icon} style={ObjetivosHomeStyle.icon} />
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 1</h3>
                    <p>Invista na empresa que está mais velendo em ações, para isso você tem um valor mínimo de R$500,00.</p>
                </div>
            </div>

            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <img src={icon} style={ObjetivosHomeStyle.icon} />
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 2</h3>
                    <p>Transfira R$80,00 para um amigo.</p>
                </div>
            </div>

            <div style={ObjetivosHomeStyle.ObjetivoItem}>
                <img src={icon} style={ObjetivosHomeStyle.icon} />
                <div>
                    <h3 style={ObjetivosHomeStyle.NomeModulo}>Objetivo 3</h3>
                    <p>Conclua um módulo com 100% de aproveitamento.</p>
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