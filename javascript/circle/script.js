const radio = prompt("Ingrese el radio del circulo");
if (!radio) throw Error("No ingreso un numero");

const area = Math.PI * Math.pow(radio, 2);
const circunferencia = 2 * Math.PI * radio;

console.log(`El area del circulo es: ${area.toFixed(2)}`);
console.log(`La circunferencia del circulo es: ${circunferencia.toFixed(2)}`);
