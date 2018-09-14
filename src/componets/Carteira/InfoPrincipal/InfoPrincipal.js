import React, { Component } from 'react';
import InfoPrincipalStyle from './InfoPrincipalStyle';

class InfoPrincipal extends Component {
  render() {
    return (
        <div style={InfoPrincipalStyle.Corpo}>
            <div style={InfoPrincipalStyle.Item}>
                <h2 style={InfoPrincipalStyle.Titulo}>Total</h2>
                <p style={InfoPrincipalStyle.Texto}>$ 600,00</p>
            </div>
        
            <div style={InfoPrincipalStyle.Item}>
                <h2 style={InfoPrincipalStyle.Titulo}>Faturamento</h2>
                <p style={InfoPrincipalStyle.Texto}>$ 100,00</p>
            </div>
        
            <div style={InfoPrincipalStyle.Item}>
                <h2 style={InfoPrincipalStyle.Titulo}>Déficit</h2>
                <p style={InfoPrincipalStyle.Texto}>$ 50,00</p>
            </div>
    </div>
    );
  }
}

export default InfoPrincipal;