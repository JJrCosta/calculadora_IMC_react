const Content = () => {
    return (
        <section className="conteudo">
            <img src="./src/assets/img/balanca.jpg" alt="Imagem de uma balaça." />
            <div className="conteudo__texto">
                <p className="texto">
                    Criado no século 19 pelo matemático Lambert Quételet, o Índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal. A classificação do índice de massa corporal (IMC) pode ajudar a identificar problemas de obesidade ou desnutrição, em crianças, adolescentes, adultos e idosos. Ter um peso dentro do intervalo de peso ideal ajuda ainda a evitar o aparecimento de várias doenças crônicas, como diabetes e hipertensão.
                </p>
                <p className="texto">
                    É importante destacar que a calculadora de Índice de Massa Corporal (IMC) é uma ferramenta útil para estimar o seu índice de massa corporal com base em dados simples, como altura e peso. No entanto, é crucial compreender que os resultados fornecidos por essa calculadora são apenas aproximados e não devem, de forma alguma, substituir a orientação de um profissional de saúde qualificado.
                </p>
                <p className="texto">
                    O cálculo é feito da seguinte forma: divide-se o peso (em kg) pelo quadrado da altura (em metros). Utilize a nossa calculadora. Faça o teste.
                </p>
            </div>
        </section>
    )
}
export default Content;