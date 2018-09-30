import React, { Component } from 'react';
import ModulosStyle from './ModulosStyle';
import ModulosAbertos from './ModulosAbertos/ModulosAbertos';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Modulos extends Component {
  render() {
    return (
      <div style={ModulosStyle.CorpoDinamico}>
        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxConcluido}>1</div>
        
            <h2 style={ModulosStyle.NomeModulo}>O que é educação financeira</h2>
            <p> É um conhecimento essencial para todas as pessoas. É vital saber lidar com juros, aprender sobre a inflação, como investir e entre os outros assuntos. Aprenda de uma vez o que é educação financeira!</p>
                
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoConcluido}>Concluído</button>
            </div>
        </div>
        
        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBox}>2</div>

            <h2 style={ModulosStyle.NomeModulo}>Juros</h2>
            <p>Seja na hora de tomar um empréstimo, de escolher um investimento ou mesmo quando se paga um boleto em atraso, lá estão os juros fazendo toda a diferença nas contas pessoais e familiares.</p>

            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.Botao}> <Link to="/ModuloAberto" style={ModulosStyle.BotaoLink}> Começar </Link> </button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>3</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Inflação</h2>
            <p>Considerada um dos termômetros mais importantes da situação econômica de um país, a inflação está sempre presente no noticiário e tem influência direta nas operações financeiras.</p>

            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>4</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Crédito</h2>
            <p>Do crediário na loja ao cartão de crédito, há diversas formas de crédito que fazem parte do dia a dia de todo mundo. Conheça as modalidades e aprenda a usá-las de modo consciente.</p>
            
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>5</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Investimentos</h2>
            <p>Para realizar sonhos, é preciso poupar. Os investimentos são grandes aliados na hora de fazer o seu dinheiro poupado render juros ou lucros.</p>

            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>6</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Tipos de investimento</h2>
            <p>Os bancos oferecem várias modalidades de investimentos. Com apenas R$ 50,00, já é possível investir. Conheça algumas das formas de investir:</p>
            
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Modulos;