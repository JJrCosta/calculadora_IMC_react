const InfoTable = () => {
    return (
        <sectioon className="tabela">
            <table>
                <caption>Tabela IMC - Classificação para adultos acima de 20 anos.</caption>
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
                    <td>Pré-obesidade</td>
                </tr>
                <tr>
                    <td>De 30 a 34,9</td>
                    <td>Obesidade Grau 1</td>
                </tr>
                <tr>
                    <td>De 35 a 39,9</td>
                    <td>Obesidade Grau 2</td>
                </tr>
                <tr>
                    <td>Maior que 40</td>
                    <td>Obesidade Grau 3</td>
                </tr>
            </table>
        </sectioon>
    )
}
export default InfoTable;