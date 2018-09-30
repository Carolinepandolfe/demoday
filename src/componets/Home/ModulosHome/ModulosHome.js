import React, { Component } from 'react';
import ModulosHomeStyle from './ModulosHomeStyle';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ModulosHome extends Component {
  render() {
    return (
        <div style={ModulosHomeStyle.Painel}>
            <h2 style={ModulosHomeStyle.NomeModulo}>Módulo 2: Juros</h2>
            <div style={ModulosHomeStyle.ProgressBar}>
                <div style={ModulosHomeStyle.OutsideBar}>
                    <div style={ModulosHomeStyle.InsideBar}>
                    </div>
                </div>
                <h2 style={ModulosHomeStyle.NomeModulo}>45%</h2>
            </div>
                <p>Seja na hora de tomar um empréstimo, de escolher um investimento ou mesmo quando se paga um boleto em atraso, lá estão os juros fazendo toda a diferença nas contas pessoais e familiares.</p>
            <div style={ModulosHomeStyle.BotaoAlinhamento}>
            <button style={ModulosHomeStyle.Botao}> <Link to="/ModuloAberto" style={ModulosHomeStyle.BotaoLink}> Continuar </Link> </button>
            </div>
        </div>
    );
  }
}

export default ModulosHome;