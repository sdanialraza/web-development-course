/*
Ejercicio 1
document.write("<h1>Tabla del 9 <br><br> </h1>");

for (let i = 9; i <= 90; i += 9) {
    document.write(`<h3> 9 x ${i / 9} = ${i} </h3>`);
}

Ejercicio 2
document.write("<h1> Cubo del 1 al 10 <br><br> </h1>");
for (let i = 1; i <= 10; i++) {
    document.write(`<h3> ${i}³ = ${Math.pow(i, 3)} </h3>`);
}

Ejercicio 3
document.write("<h1> Los numeros del 20 al 5 <br><br> </h1>");
let i = 20;
for (i; i >= 5; i--) {
    document.write(`<h3> ${i} </h3>`);
}

Usando while
while (i >= 5) {
    document.write(`<h3> ${i} </h3>`);
    i--;
}
*/

// Ejercicio 4
let suma = 0;

for (let i = 1; i <= 5; i++) { // i = i + 1
    const numero = Number(prompt("Ingrese un numero"));
    suma += numero;
    console.log(`Suma: ${suma}`);
}
document.write(`<h1> La suma de los numeros es: ${suma} </h1>`);
console.log("Operacion finalizada");