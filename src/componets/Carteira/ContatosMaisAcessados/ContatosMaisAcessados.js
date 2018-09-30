import React, { Component } from 'react';
import ContatosMaisAcessadosStyle from './ContatosMaisAcessadosStyle';

import UserProfileAlexia from'./alexia.jpeg';
import UserProfileCarol from'./carol.jpg';
import UserProfileGi from'./Gi.jpg';

class ContatosMaisAcessados extends Component {
  render() {
    return (
        <div style={ContatosMaisAcessadosStyle.Painel}>
            <h2 style={ContatosMaisAcessadosStyle.NomeModulo}>Contatos Mais Acessados</h2>
            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileGi} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Giselle</h2>
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
                <img src={UserProfileCarol} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Caroline Pandolfe</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>
        </div>
    );
  }
}

export default ContatosMaisAcessados;