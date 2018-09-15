import React, { Component } from 'react';
import CarteiraStyle from './CarteiraStyle';
import InfoPrincipal from './InfoPrincipal/InfoPrincipal';
import Investimentos from './Investimentos/Investimentos';

class Carteira extends Component {
  render() {
    return (
      <body style={CarteiraStyle.Corpo}>
        <InfoPrincipal />
        <Investimentos />
      </body>
    );
  }
}

export default Carteira;