const Calculator = () => {
    
    return (
        <section className="calculadora">
            <form className="formulario">
                <label>Altura</label>
                <input type="number" placeholder="Centimetos"/>
                <label>Peso</label>
                <input type="number" placeholder=""/>
                <button type="button">Calcular</button>
            </form>
            <div className="resultado">

            </div>
        </section>
    )
}
export default Calculator;