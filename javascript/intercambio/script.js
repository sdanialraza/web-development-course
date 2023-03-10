let a = prompt('Ingrese un valor para a');
let b = prompt('Ingrese un valor para b');

const temp = a;
a = b;
b = temp;

document.write(`<h1> El valor de a es: ${a} </h1>`);
document.write(`<h1> El valor de b es: ${b} </h1>`);