import React, { Component } from 'react';
import ContatosMaisAcessadosStyle from './ContatosMaisAcessadosStyle';
import UserProfileImg from'./user-icon.png';

class ContatosMaisAcessados extends Component {
  render() {
    return (
        <div style={ContatosMaisAcessadosStyle.Painel}>
            <h2 style={ContatosMaisAcessadosStyle.NomeModulo}>Contatos Mais Acessados</h2>
            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileImg} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Nome do contato</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>

            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileImg} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Nome do contato</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>

            <div style={ContatosMaisAcessadosStyle.ObjetivoItem}>
                <img src={UserProfileImg} style={ContatosMaisAcessadosStyle.PerfilImg} />
                <div>
                    <h2 style={ContatosMaisAcessadosStyle.Valor}>Nome do contato</h2>
                    <p>Total: $ 80,00</p>
                </div>
            </div>
        </div>
    );
  }
}

export default ContatosMaisAcessados;