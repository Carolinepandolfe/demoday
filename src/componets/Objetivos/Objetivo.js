import React from 'react';
import icon from '../../../src/icon.png';
import ObjetivoStyle from './ObjetivoStyle';

class Objetivo extends React.Component {
  render() {
    return (
        <div>
          <div style={ObjetivoStyle.division}>
            <img src={icon} style={ObjetivoStyle.icon} />
            <div style={ObjetivoStyle.div1}> 
              <h1 style={ObjetivoStyle.h1}>Objetivo 1</h1>
              <p>Invista na empresa que está mais velendo em ações, para isso você tem um valor mínimo de R$500,00.</p>
            </div>
          </div>

          <div style={ObjetivoStyle.division}>
          <img src={icon} style={ObjetivoStyle.icon} />
            <div style={ObjetivoStyle.div1}> 
              <h1 style={ObjetivoStyle.h1}>Objetivo 2</h1>
              <p>Transfira R$80,00 para um amigo.</p>
            </div>
          </div>

          <div style={ObjetivoStyle.division}>
          <img src={icon} style={ObjetivoStyle.icon} />
            <div style={ObjetivoStyle.div1}> 
              <h1 style={ObjetivoStyle.h1}>Objetivo 3</h1>
              <p>Conclua um módulo com 100% de aproveitamento.</p>
            </div>
          </div>
          
          <div style={ObjetivoStyle.division}>
          <img src={icon} style={ObjetivoStyle.icon} />
            <div style={ObjetivoStyle.div1}> 
              <h1 style={ObjetivoStyle.h1}>Objetivo 4</h1>
              <p>Atinja um faturamento de R$100.000,00.</p>
            </div>
          </div>
        </div>
    )
  }
}
  
  export default Objetivo;