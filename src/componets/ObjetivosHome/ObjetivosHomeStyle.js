let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const ObjetivosHomeStyle = {
    Painel: {
        backgroundColor: corBranca,
        width: 705,
        padding: 30,
        marginRight: 30,
        borderRadius: 20,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    NomeModulo: {
        color: corRoxo
    },

    ObjetivoItem: {
        display: 'flex',
        alignItems: 'flex-start'
    },

    ObjetivoCheckbox: {
        width: 50,
        height: 40,
        marginTop: 10,
        marginRight: 15,
        border: `2px solid ${corRoxo}`,
        borderRadius: '50%'
    },

    BotaoAlinhamento: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    Botao: {
        backgroundColor: corBranca,
        border: 'solid 2px #570063',
        borderRadius: 10,
        color: corRoxo,
        fontWeight: 600,
        fontSize: 15,
        padding: '15px 30px',
        marginTop: 30
    }
}

export default ObjetivosHomeStyle;