let corRoxo = '#570063';
let corAmarelo = '#f3ca40';

const MenuStyle = {
    Menu: {
        backgroundColor: '#fff',
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
        width: 150,
        height: 150
    },

    Nome: {
        color: corRoxo
    },

    Nivel: {
        marginTop: 0,
        color: corAmarelo
    },

    NavMenu: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: 80,
        alignItems: 'flex-start'
    },

    Link: {
        textDecoration: 'none',
        color: corRoxo,
        padding: 20,
        fontWeight: 700
    }
}

export default MenuStyle;