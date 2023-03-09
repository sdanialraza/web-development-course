const numero1 = Number(prompt("Ingrese el primer número:"));
const simbolo = prompt("Ingrese el símbolo de la operación que desea realizar: sumar, restar, multiplicar o dividir");
const numero2 = Number(prompt("Ingrese el segundo número:"));

if (simbolo == "+") document.write(`<h1> El resultado de la suma es: ${Math.round(numero1 + numero2)} </h1>`);
else if (simbolo == "-") document.write(`<h1> El resultado de la resta es: ${Math.round(numero1 - numero2)} </h1>`);
else if (simbolo == "*") document.write(`<h1> El resultado de la multiplicación es: ${Math.round(numero1 * numero2)} </h1>`);
else if (simbolo == "/") document.write(`<h1> El resultado de la división es: ${Math.round(numero1 / numero2)} </h1>`);
else document.write(`<h1> El símbolo ingresado no es válido </h1>`);

/*
Usando switch

const numero1 = Number(prompt("Ingrese el primer número:"));
const simbolo = prompt("Ingrese el símbolo de la operación que desea realizar: sumar, restar, multiplicar o dividir");
const numero2 = Number(prompt("Ingrese el segundo número:"));

switch (simbolo) {
    case "+": document.write(`<h1> El resultado de la suma es: ${Math.round(numero1 + numero2)} </h1>`);
        break;
    case "-": (simbolo == "-") document.write(`<h1> El resultado de la resta es: ${Math.round(numero1 - numero2)} </h1>`);
        break;
    case "*": (simbolo == "*") document.write(`<h1> El resultado de la multiplicación es: ${Math.round(numero1 * numero2)} </h1>`);
        break;
    case "/": document.write(`<h1> El resultado de la división es: ${Math.round(numero1 / numero2)} </h1>`);
        break;
    default: document.write(`<h1> El símbolo ingresado no es válido </h1>`);
        break;
}
*/