let suma = 0;
let i = 0

for (i; i < 5; i++) {
    const edad = parseFloat(prompt("Introduce tu edad"));
    suma += edad;
    console.log(`Has introducido edad: ${edad}`);
}

console.log(`La media de las edades es: ${Math.round(suma / i)}`);
document.write(`<h1> La media de las edades es: ${Math.round(suma / i)}</h1>`);