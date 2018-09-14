import React, { Component } from 'react';
import CarteiraStyle from './CarteiraStyle';
import InfoPrincipal from './InfoPrincipal/InfoPrincipal';

class Carteira extends Component {
  render() {
    return (
      <body style={CarteiraStyle.Corpo}>
        <InfoPrincipal />
      </body>
    );
  }
}

export default Carteira;