import React from 'react';
import icon from '../../../src/icon.png';
import ObjetivosHomeStyle from '../Home/ObjetivosHome/ObjetivosHomeStyle';
import ObjetivoStyle from './ObjetivoStyle';

class Objetivo extends React.Component {
  render() {
    return (
      <body>
      <div>
      <div style={ObjetivoStyle.division}>
      <img src={icon} style={ObjetivoStyle.icon} />
      <div style={ObjetivoStyle.div1}> 
      <h1 style={ObjetivoStyle.h1}>Objetivo 1</h1>
      <p>Invista na empresa que está mais velendo em ações para isso voce tem um valor mínimo de R$ 500,00.</p>
      </div>
      </div>
      <div>
      <h1 style={ObjetivoStyle.h1} >Objetivo 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus similique ducimus quaerat adipisci ipsa veritatis cumque temporibus vero nihil voluptates dignissimos quibusdam explicabo fugit impedit voluptas, voluptatibus libero beatae?</p>
      </div>
      <div>
      <h1 style={ObjetivoStyle.h1}>Objetivo 3</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi velit minus, qui inventore libero debitis aut sequi deleniti ipsum labore. Dicta reprehenderit odit pariatur, saepe doloremque culpa corporis quia ab.</p>
      </div>
      
      <div>
      <h1 style={ObjetivoStyle.h1}>Objetivo 4</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse veritatis aperiam pariatur, nobis eveniet deserunt quibusdam laboriosam, fugit dolorum ducimus omnis voluptates temporibus blanditiis facilis et voluptatibus fugiat maiores optio.</p>
      </div>
      </div>
      </body >
    )
  }
}
  
  export default Objetivo;