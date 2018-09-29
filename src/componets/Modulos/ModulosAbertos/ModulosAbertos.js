import React from 'react';
import VideoAula from './video.png'
import ModulosAbertosStyle from './ModulosAbertosStyle';

class ModulosAbertos extends React.Component {
  render() {
    return (
        <div style={ModulosAbertosStyle.ModulosAbertos}>

            <div style={ModulosAbertosStyle.Titulo}>

            <h2 style={ModulosAbertosStyle.NomeModulo}>Juros</h2>

            </div>

            <img src={VideoAula} style={ModulosAbertosStyle.Video}/>

            <div style={ModulosAbertosStyle.Conteudo}>

                <h2 style={ModulosAbertosStyle.NomeModulo}>O que é</h2> 
                <p style={ModulosAbertosStyle.Paragrafo}>Seja na hora de tomar um empréstimo, de escolher um investimento ou mesmo quando se paga um boleto em atraso, lá estão os juros fazendo toda a diferença nas contas pessoais e familiares.​</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Calculadoras e simuladores ajudam a fazer os cálculos, mas entender o conceito é fundamental para aprender a usar bem o dinheiro e manter o orçamento doméstico equilibrado.</p>
                    
                <p style={ModulosAbertosStyle.Paragrafo}> Juro é o valor pago para usar um dinheiro que não é seu, como um “aluguel”. Se você pega uma quantia emprestada, deve devolver o mesmo valor e, também, uma quantia extra, como pagamento pelo uso do dinheiro. Estes são os juros. Da mesma maneira, se você deixa um dinheiro no banco, aplicado, deve receber juros pelo uso que o banco faz do seu dinheiro.</p>
                
                <h2 style={ModulosAbertosStyle.NomeModulo}>Como Calcular</h2> 
                <p style={ModulosAbertosStyle.Paragrafo}> Como calcular os efeitos dos juros?</p>

                <p style={ModulosAbertosStyle.Paragrafo}> O valor dos juros é definido por uma porcentagem, que se aplica por um período de tempo. Por exemplo:</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Você toma emprestado R$ 1 mil, por um mês, a uma taxa de juros de 1% ao mês. Passados os 30 dias, deve devolver os R$ 1 mil iniciais e um valor de R$ 10,00 referentes aos juros de 1% sobre o valor inicial. Ou seja, deve pagar R$ 1.010,00.</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Esses são os juros simples. Nesse caso, se você tomar o mesmo empréstimo, a juros simples, por dois meses, deverá pagar mais R$ 10,00 referentes aos juros do segundo mês, ou seja, R$ 1.020,00. Quando você deixa seu dinheiro no banco, aplicado, recebe os chamados juros compostos, conhecidos como “juros sobre juros”.</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Apesar de a conta ser mais complicada, o conceito é simples. A cada mês, a taxa de juros se aplica não só ao valor inicial investido, mas ao valor total acumulado ao longo dos meses. É como se o rendimento de um mês fosse reinvestido no seguinte. Por exemplo:</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Você aplica R$ 1mil no banco, em um investimento que rende 1% ao mês. No primeiro mês, você terá, na aplicação, os mesmos R$ 1mil e mais R$ 10,00 de rendimento. Ou seja, R$ 1.010,00. No segundo mês, a taxa de 1% se aplica ao valor acumulado: R$ 1.010,00. Assim, ao final do segundo mês, você terá R$ 1.010,00 mais R$ 10,10. Ou seja, R$ 1.020,10.</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Fique atento!</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Para saber o impacto dos juros sobre suas operações, verifique se está lidando com juros simples ou compostos.</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Confira também se tarifas e taxas de correção monetária, como​ inflação, são aplicadas.</p>

                <p style={ModulosAbertosStyle.Paragrafo}> Ao fazer compras a prazo, não se esqueça de calcular os juros das parcelas.​</p>

            </div>

            <div style={ModulosAbertosStyle.DivBotao}>

                <button style={ModulosAbertosStyle.Botao}>Continuar</button>
                
            </div>

        </div>
    );
  }
}

export default ModulosAbertos;