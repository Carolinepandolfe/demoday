let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const ModulosHomeStyle = {
    Painel: {
        backgroundColor: corBranca,
        padding: 30,
        marginBottom: 30,
        borderRadius: 20,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)',
        width: '95%'
    },

    ProgressBar: {
        display: 'flex',
        alignItems: 'center'
    },

    NomeModulo: {
        color: corRoxo
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
        padding: '15px 30px'
    }
}

export default ModulosHomeStyle;