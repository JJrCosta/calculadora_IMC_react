function App() {
  

  return (
    <>
      <header className="header">
        <h1>Calculadora IMC</h1>
        <h2>Você sabe qual é o seu peso ideal?</h2>
      </header>

      <main className="container">
        <section className="conteudo">
          <img src="./src/assets/img/balanca.jpg" alt="Imagem de uma balaça." />
          <div className="conteudo__texto">
              <p>
                Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. A classificação do índice de massa corporal (IMC) pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos. Ter um peso dentro do intervalo de peso ideal ajuda ainda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.
              </p>
              <p>
                O cálculo é feito da seguinte forma: divide-se o peso (em kg) pelo quadrado da altura (em metros). Utilize a nossa calculadora. Faça o teste.
              </p>
          </div>
        </section>
        <section className="calculadora">
            <form className="formulario">
              <label>Informe a sua altura</label>
              <input type="number" />
              <label>Informe o seu peso</label>
              <input type="number" />
              <button type="button">Calcular</button>
            </form>
          <div className="resultado">

          </div>
        </section>
        <sectioon className="tabela">
          <table>
            <th>
              <td>Valor IMC</td>
              <td>Classificação</td>
            </th>
            <tr>
              <td>Menor que 18,5</td>
              <td>Baixo peso</td>
            </tr>
            <tr>
              <td>De 18,5 a 24,99</td>
              <td>Normal/Ideal</td>
            </tr>
            <tr>
              <td>De 25 a 29,99</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Maior que 30</td>
              <td>Obesidade</td>
            </tr>
          </table>
        </sectioon>
      </main>
      <footer className="rodape">
        <p>
          Calculadora IMC - Projeto EBAC | Módulo 28: Introdução ao React. Desenvolvido por Junior Costa - 2023.
        </p>
      </footer>
    </>
  )
}

export default App
