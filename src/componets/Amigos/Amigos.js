import React from 'react';
import UserProfileSthe from'./Sthe.jpeg';
import UserProfileRenan from'./renan.jpg';
import UserProfileDiego from'./diego.jpg';
import UserProfileGi from'./Gi.jpg';
import UserProfileSabrina from'./sa.jpg';
import UserProfileWes from'./wes.jpg';
import AmigosStyle from './AmigosStyle';

class Amigos extends React.Component {
  render() {
    return (
        <div style={AmigosStyle.Amigos}>
            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileDiego} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Dirosaki</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div> 

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileGi} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Giselle</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileRenan} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Renan</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

            <div style={AmigosStyle.Amigo1}>

                <img src={ UserProfileSabrina} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Sabrina</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    


             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileSthe} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Sthefani</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 1</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

             <div style={AmigosStyle.Amigo1}>

                <img src={UserProfileWes} style={AmigosStyle.PerfilImg} />
                <h2 style={AmigosStyle.Nome}>Wes</h2>
                <h3 style={AmigosStyle.Nivel}>Nível 2</h3>
                <button style={AmigosStyle.Botao}>Visitar Perfil</button>

            </div>    

        </div>
    );
  }
}

export default Amigos;