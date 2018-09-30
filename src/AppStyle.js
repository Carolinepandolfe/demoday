let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const AppStyle = {
    Corpo: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    Menu: {
        position: 'fixed',
        backgroundColor: corBranca,
        boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)',
        width: 300,
        height:'100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    Perfil: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },

    PerfilImg: {
        width: 175,
        height: 175,
        borderRadius: 100
    },

    NavMenu: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        listStyleType: 'none',
        paddingLeft: 80
    },

    Link: {
        textDecoration: 'none',
        color: corRoxo,
        padding: 20,
        fontWeight: 700
    },
    
    LinkInvisivel: {
        color: corBranca
    },

    Nome: {
        color: corRoxo
    },

    Nivel: {
        marginTop: 0,
        color: corAmarelo
    },

    Alinhar: {
        display: 'flex',
        justifyContent: 'center',
        width: '75%',
        marginLeft: 300,
        padding: 30
    },

    Dinamico: {
        width: '100%',
        justifyContent: 'center',
        
    }
}

export default AppStyle;