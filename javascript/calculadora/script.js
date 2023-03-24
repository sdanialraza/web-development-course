const primerNumero = document.querySelector('#primerNumero');
const segundoNumero = document.querySelector('#segundoNumero');

const resultadoSuma = document.querySelector('#resultadoSuma');
const resultadoDivision = document.querySelector('#resultadoDivision');

document.querySelector('#sumar').addEventListener("click", () => {
    const resultado = parseFloat(primerNumero.value) + parseFloat(segundoNumero.value);

    resultadoSuma.innerHTML = `Resultado Suma: ${Math.round(resultado)}`
})

document.querySelector('#dividir').addEventListener("click", () => {
    const resultado = parseFloat(primerNumero.value) / parseFloat(segundoNumero.value);

    resultadoDivision.innerHTML = `Resultado Division: ${Math.round(resultado)}`
});