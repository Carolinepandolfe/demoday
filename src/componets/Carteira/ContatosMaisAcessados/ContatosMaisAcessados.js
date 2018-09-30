import React, { Component } from 'react';
import ContatosMaisAcessadosStyle from './ContatosMaisAcessadosStyle';

import UserProfileAlexia from'./alexia.jpeg';
import UserProfileJeni from'./jeni.jpg';
import UserProfileLais from'./lais.jpg';

class ContatosMaisAcessados extends Component {
  render() {
    return (
        <div style={ContatosMaisAcessadosStyle.Painel}>
            <h2 style={ContatosMaisAcessadosStyle.NomeModulo}>Contatos Mais Acessados</h2>
            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileLais} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Lais Sayuri</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>

            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileAlexia} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Alexia Gabrielly</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>

            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileJeni} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Jenni Costa</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>
        </div>
    );
  }
}

export default ContatosMaisAcessados;