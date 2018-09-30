let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const ModulosStyle = {

    CorpoDinamico: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%'
    },

    Painel: {
        backgroundColor: corBranca,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        width: '25%',
        height: 450,
        padding: 30,
        marginBottom: 30,
        borderRadius: 20,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    ModuloNumeroBox:{
        width: 150,
        height: 150,
        border: `2px solid ${corRoxo}`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 90,
        color: corRoxo
    },

    ModuloNumeroBoxConcluido:{
        width: 150,
        height: 150,
        backgroundColor: corRoxo,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 90,
        color: corAmarelo
    },

    ModuloNumeroBoxBloqueado:{
        width: 150,
        height: 150,
        backgroundColor: '#ededed',
        border: `2px solid #777`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 90,
        color: '#777'
    },

    NomeModulo: {
        color: corRoxo,
    },

    NomeModuloBloqueado: {
        color: '#777',
    },

    BotaoAlinhamento: {
        display: 'flex',
        justifyContent: 'center',
    },

    Botao: {
        backgroundColor: corBranca,
        border: 'solid 2px #570063',
        borderRadius: 10,
        color: corRoxo,
        fontWeight: 600,
        fontSize: 18,
        padding: '15px 90px'
    },

    BotaoLink: {
        textDecoration: "none",
        color: corRoxo
    },

    BotaoConcluido: {
        backgroundColor: corBranca,
        border: 'solid 2px #570063',
        backgroundColor: corRoxo,
        borderRadius: 10,
        color: corAmarelo,
        fontWeight: 600,
        fontSize: 18,
        padding: '15px 90px'
    },

    BotaoBloqueado: {
        backgroundColor: corBranca,
        border: 'solid 2px #777',
        borderRadius: 10,
        color: '#777',
        fontWeight: 600,
        fontSize: 18,
        padding: '15px 90px'
    }
}

export default ModulosStyle;