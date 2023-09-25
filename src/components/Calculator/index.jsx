import { useState } from 'react';
import './calculator.css'

const Calculator = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0)
    const resultado = (peso / (altura**2)).toFixed(1)
    
    const calculaResultado = () => {
        if (peso > 1 && altura > 1) {
            return (
                    <span>{resultado}</span>
            )
        }
    }
    const renderResultado = () => {
        if (resultado < 10 || altura >= 3 ) {
            return (
                <div className="resultado-detalhes bg-red">
                    <p className='resultado-valor'>D:</p>
                    <p className='resultado-indice'>Oops!!</p>
                    <p className='resultado-descript'>
                        Algo deu errado, verifique os valores informados e tente novamente
                    </p>
                </div>
            )
        } else if (resultado < 18.5 && resultado > 1) {
            return (
                <div className="resultado-detalhes bg-yellow">
                    <p className='resultado-valor'>18,5 ou menos</p>
                    <p className='resultado-indice'>Abaixo do normal</p>
                    <p className='resultado-descript'>
                        Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso. Procure um médico.
                    </p>
                </div>
            )
        } else if (resultado > 18.5 && resultado < 25) {
            return (
                <div className="resultado-detalhes bg-green">
                    <p className='resultado-valor'>Entre 18,6 e 24,9</p>
                    <p className='resultado-indice'>Normal</p>
                    <p className='resultado-descript'>
                        Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.
                    </p>
                </div>
            )
        } else if (resultado >= 25 && resultado < 30) {
            return (
                <div className="resultado-detalhes bg-yellow">
                    <p className='resultado-valor'>Entre 25,0 e 29,9</p>
                    <p className='resultado-indice'>Sobrepeso</p>
                    <p className='resultado-descript'>
                        Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.
                    </p>
                </div>
            )
        } else if (resultado >= 30 && resultado < 35) {
            return (
                <div className="resultado-detalhes bg-orange">
                    <p className='resultado-valor'>Entre 30,0 e 34,9</p>
                    <p className='resultado-indice'>Obesidade grau I</p>
                    <p className='resultado-descript'>
                        Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.
                    </p>
                </div>
            )
        } else if (resultado >= 35 && resultado < 40) {
            return (
                <div className="resultado-detalhes bg-orange">
                    <p className='resultado-valor'>Entre 35,0 e 39,9</p>
                    <p className='resultado-indice'>Obesidade grau II</p>
                    <p className='resultado-descript'>
                        Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.
                    </p>
                </div>
            )
        } else if (resultado >= 40) {
            return (
                <div className="resultado-detalhes bg-red">
                    <p className='resultado-valor'>Acima de 40,0</p>
                    <p className='resultado-indice'>Obesidade grau III</p>
                    <p className='resultado-descript'>
                        Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.
                    </p>
                </div>
            )
        }

    }

    return (
        <section className="calculadora">
            <form className="formulario">
                <fieldset>
                    <label>Altura</label>
                    <input type="number" onBlur={({target}) => setAltura(parseFloat(target.value))} placeholder="Metros" required/>
                </fieldset>
                <fieldset>
                    <label>Peso</label>
                    <input type="number" onBlur={({target}) => setPeso(parseFloat(target.value))} placeholder="Kg" required/>
                </fieldset>
                <button type="button" onClick={calculaResultado()}>Calcular</button>
                <div className="resultado">
                    IMC {calculaResultado()}
                </div>
            </form>
            <div className="resultado-info">
                {renderResultado()}
            </div>
        </section>
    )
}
export default Calculator;