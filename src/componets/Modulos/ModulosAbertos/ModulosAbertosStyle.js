let corRoxo = '#570063';
let corAmarelo = '#f3ca40';
let corBranca = '#fff';

const ModulosStyle = {
    ModulosAbertos: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            textAlign:'left',
            margin:'12px',
            padding: 30,
            backgroundColor:corBranca,
            borderRadius: 20,
            width: '95%',              
            boxShadow: '5px 0.9px 50px rgba(0, 0, 0, 0.1)'
            
        },

        Titulo:{
            display:'flex',
            justifyContent:'flex-start',
            width:'95%'
        },

        NomeModulo: {
            color: corRoxo
        },

        Video: {
            width: '90%',
            height: '35%'
        },

        Conteudo: {
            height: 900,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginTop:50,
            width:'95%'

        },

        Paragrafo: {
            margin:'8px 0'
        },

        DivBotao:{
            display:'flex',
            justifyContent:'flex-end',
            width:'95%'
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

export default ModulosStyle;