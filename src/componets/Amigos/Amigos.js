import React from 'react';
import UserProfileAlexia from'./alexia.jpeg';
import UserProfileCarol from'./carol.jpg';
import UserProfileDiego from'./diego.jpg';
import UserProfileGi from'./Gi.jpg';
import UserProfileJeni from'./jeni.jpg';
import UserProfileLais from'./lais.jpg';
import AmigosStyle from './AmigosStyle';

class Amigos extends React.Component {
  render() {
    return (
        <div style={AmigosStyle.Amigos}>
            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileAlexia} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Alexia Gabrielly</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div> 

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileCarol} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Caroline Pandolfe</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileDiego} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Dirosaki</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileGi} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Giselle</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    


             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileJeni} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Jenni Costa</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileLais} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Laís Sayuri</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

        </div>
    );
  }
}

export default Amigos;