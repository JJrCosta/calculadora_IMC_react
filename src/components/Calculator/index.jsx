import './calculator.css'

const Calculator = () => {
    
    return (
        <section className="calculadora">
            <form className="formulario">
                <fieldset>
                    <label>Altura</label>
                    <input type="number" placeholder="m"/>
                </fieldset>
                <fieldset>
                    <label>Peso</label>
                    <input type="number" placeholder="Kg"/>
                </fieldset>
                <button type="button">Calcular</button>
                <div className="resultado">
                    IMC XPTO
                </div>
            </form>
            <div className="resultado-info">
                <p className='resultado-valor'>18,5 ou menos</p>
                <p className='resultado-indice'>Abaixo do normal</p>
                <p className='resultado-descript'>
                    Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso. Procure um médico.
                </p>
            </div>
        </section>
    )
}
export default Calculator;