function sumar(numero1, numero2) {
    return numero1 + numero2;
}
function restar(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
function division(numero1, numero2) { 
    return numero1 / numero2;
}


let numero1 = parseFloat(prompt('Ingrese el primer número'));
let simbolo = prompt("Ingrese el símbolo de la operación que desea realizar: sumar, restar, multiplicar o dividir");
let numero2 = parseFloat(prompt('Ingrese el segundo número'));
let continuar = true;

while (continuar) {
    let resultado;

    switch (simbolo) {
        case "+": resultado = sumar(numero1, numero2);
            break;
        case "-": resultado = restar(numero1, numero2);
            break;
        case "*": resultado = multiplicacion(numero1, numero2);
            break;
        case "/": resultado = division(numero1, numero2);
            break;
        default: alert("No ingresó un símbolo válido");
            break;
    }

    if (resultado) alert(`El resultado de la operación es: ${resultado.toFixed(2)}`);

    continuar = confirm("¿Desea realizar otra operación?");
    if (!continuar) break;

    numero1 = parseFloat(prompt('Ingrese el primer número'));
    simbolo = prompt("Ingrese el símbolo de la operación que desea realizar: sumar, restar, multiplicar o dividir");
    numero2 = parseFloat(prompt('Ingrese el segundo número'));
}