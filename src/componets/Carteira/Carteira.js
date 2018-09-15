import React, { Component } from 'react';
import CarteiraStyle from './CarteiraStyle';
import InfoPrincipal from './InfoPrincipal/InfoPrincipal';
import Investimentos from './Investimentos/Investimentos';
import UltimasTransferencias from './UltimasTransferencias/UltimasTransferencias';
import ContatosMaisAcessados from './ContatosMaisAcessados/ContatosMaisAcessados';

class Carteira extends Component {
  render() {
    return (
      <body style={CarteiraStyle.Corpo}>
        <InfoPrincipal />
        <Investimentos />

        <div style={CarteiraStyle.CorpoDinamicoHorizontal}>
            <div style={CarteiraStyle.TelaDinamica}>
              <UltimasTransferencias/>  
            </div>

            <div style={CarteiraStyle.TelaDinamica}>
              <ContatosMaisAcessados/>  
            </div>
        </div>
      </body>
    );
  }
}

export default Carteira;