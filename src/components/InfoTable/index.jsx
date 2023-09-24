import './infoTable.css'

const InfoTable = () => {
    return (
        <sectioon className="tabela">
            <table>
                <caption>Tabela IMC - Classificação para adultos acima de 20 anos.</caption>
                <thead className='thead'>
                    <tr>
                        <th>Valor IMC</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-yellow'>
                        <td>Menor que 18,5</td>
                        <td>Baixo peso</td>
                    </tr>
                    <tr className='bg-green'>
                        <td>De 18,5 a 24,99</td>
                        <td>Normal/Ideal</td>
                    </tr>
                    <tr className='bg-yellow'>
                        <td>De 25 a 29,99</td>
                        <td>Pré-obesidade</td>
                    </tr>
                    <tr className='bg-orange'>
                        <td>De 30 a 34,9</td>
                        <td>Obesidade Grau 1</td>
                    </tr>
                    <tr className='bg-orange'>
                        <td>De 35 a 39,9</td>
                        <td>Obesidade Grau 2</td>
                    </tr>
                    <tr className='bg-red'>
                        <td>Maior que 40</td>
                        <td>Obesidade Grau 3</td>
                    </tr>
                </tbody>
            </table>
        </sectioon>
    )
}
export default InfoTable;