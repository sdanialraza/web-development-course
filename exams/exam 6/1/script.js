const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));

const suma = numero1 + numero2;
const multi = numero1 * numero2;

alert([`La suma de los números es: ${suma}`, `La multiplicación de los números es: ${multi}`].join("\n"));
