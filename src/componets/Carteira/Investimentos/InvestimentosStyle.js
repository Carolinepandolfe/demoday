let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const InvestimentosStyle = {
    Corpo: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '95%',
        height: 300,
        backgroundColor: corBranca,
        marginTop: 30,
        padding: 30,
        borderRadius: 20,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    Grafico: {
        width: '48%',
        height: '100%'
    },

    Empresas: {
        width: '48%',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexWrap: 'wrap'
    },

    EmpresasItem: {
        width: '35%',
        height: '45%',
        borderRadius: 20,
        padding: '0 30px',
        backgroundColor: corBranca,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    EmpresasBotao: {
        width: '35%',
        height: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: '0 30px',
        backgroundColor: corRoxo,
        color: corAmarelo,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
    },

    EmpresasTitulo: {
        color: corRoxo
    },

    EmpresasTexto: {
        color: corAmarelo,
        fontSize: 30,
        fontWeight: 400,
        margin: 0
    },

    GraficoImg: {
        maxWidth: 500
    }
}

export default InvestimentosStyle;