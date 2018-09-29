let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const AmigosStyle = {
    Amigos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

    },

    Amigo1:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        textAlign:'center',
        margin:'12px',
        padding: 30,
        backgroundColor:corBranca,
        borderRadius: 20,
        width: '25%',
        height: 300,              
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    PerfilImg: {
        width: 100,
        height: 100
    },

    Nome: {
        color: corRoxo
    },

    Nivel: {
        marginTop: 0,
        color: corAmarelo
    },

    Botao: {
        backgroundColor: corBranca,
        color: corRoxo,
        textAlign: 'center',
        border: `2px solid ${corRoxo}`,
        borderRadius:4,
        fontSize:18,
        width: 170,
        height: 40


    }

    
}

export default AmigosStyle;

