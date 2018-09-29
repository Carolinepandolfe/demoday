import React from 'react';
import UserProfileImg from'./user-icon.png';
import AmigosStyle from './AmigosStyle';

class Amigos extends React.Component {
  render() {
    return (
        <div style={AmigosStyle.Amigos}>
            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Alexia Gabrielly</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div> 

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Caroline Pandolfe</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Dirosaki</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Giselle</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    


             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Jenni Costa</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileImg} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Lais</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

        </div>
    );
  }
}

export default Amigos;