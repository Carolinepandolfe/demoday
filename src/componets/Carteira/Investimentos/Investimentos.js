import React, { Component } from 'react';
import InvestimentosStyle from './InvestimentosStyle';
import Grafico from'./grafico.png';

class Investimentos extends Component {
  render() {
    return (
        <div style={InvestimentosStyle.Corpo}>
            <div style={InvestimentosStyle.Grafico}>
                <h2 style={InvestimentosStyle.EmpresasTitulo}>Investimentos</h2>
                <img src={Grafico} style={InvestimentosStyle.GraficoImg}/>
            </div>

            <div style={InvestimentosStyle.Empresas}>
                <div style={InvestimentosStyle.EmpresasItem}>
                    <h3 style={InvestimentosStyle.EmpresasTitulo}>Empresa 1</h3>
                    <p style={InvestimentosStyle.EmpresasTexto}>30%</p>
                </div>

                <div style={InvestimentosStyle.EmpresasItem}>
                    <h3 style={InvestimentosStyle.EmpresasTitulo}>Empresa 2</h3>
                    <p style={InvestimentosStyle.EmpresasTexto}>10%</p>
                </div>

                <div style={InvestimentosStyle.EmpresasItem}>
                    <h3 style={InvestimentosStyle.EmpresasTitulo}>Empresa 3</h3>
                    <p style={InvestimentosStyle.EmpresasTexto}>60%</p>
                </div>

                <div style={InvestimentosStyle.EmpresasBotao}>
                    <h2>Mais Empresas</h2>
                </div>
            </div>
        </div>
    );
  }
}

export default Investimentos;