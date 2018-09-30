import React, { Component } from 'react';
import UltimasTransferenciasStyle from './UltimasTransferenciasStyle';

class UltimasTransferencias extends Component {
  render() {
    return (
        <div style={UltimasTransferenciasStyle.Painel}>
            <h2 style={UltimasTransferenciasStyle.NomeModulo}>Últimas Transferências</h2>
            <div style={UltimasTransferenciasStyle.ObjetivoItem}>
                <h2 style={UltimasTransferenciasStyle.Valor}>$ 20,00 -</h2>
                <p>Enviado para Jenni Costa </p>
            </div>

            <div style={UltimasTransferenciasStyle.ObjetivoItem}>
                <h2 style={UltimasTransferenciasStyle.Valor}>$ 50,00 +</h2>
                <p>Recebido de Laís Sayuri </p>
            </div>

            <div style={UltimasTransferenciasStyle.ObjetivoItem}>
                <h2 style={UltimasTransferenciasStyle.Valor}>$ 40,00 +</h2>
                <p>Recebido de Dirosaki </p>
            </div>
        </div>
    );
  }
}

export default UltimasTransferencias;