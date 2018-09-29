import React, { Component } from 'react';
import ModulosStyle from './ModulosStyle';

class Modulos extends Component {
  render() {
    return (
      <div style={ModulosStyle.CorpoDinamico}>
        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxConcluido}>1</div>
            <h2 style={ModulosStyle.NomeModulo}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoConcluido}>Concluido</button>
            </div>
        </div>
        
        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBox}>2</div>
            <h2 style={ModulosStyle.NomeModulo}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.Botao}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>3</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>4</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>5</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>

        <div style={ModulosStyle.Painel}>
            <div style={ModulosStyle.ModuloNumeroBoxBloqueado}>6</div>
            <h2 style={ModulosStyle.NomeModuloBloqueado}>Nome do Módulo</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias dicta tempore est animi repellat totam odio! Nulla, quisquam beatae molestias ut, at repellendus dolores provident, fugiat odit optio voluptas?</p>
            <div style={ModulosStyle.BotaoAlinhamento}>
                <button style={ModulosStyle.BotaoBloqueado}>Começar</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Modulos;