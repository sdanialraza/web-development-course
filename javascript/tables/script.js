const numero1 = parseFloat(prompt("Ingrese el primer número (Entre 1 y 10)"));
const numero2 = parseFloat(prompt("Ingrese el segundo número (Entre 1 y 10)"));

if (numero1 < 1 || numero1 > 10 || numero2 < 1 || numero2 > 10) {
  alert("Los números deben estar entre 1 y 10");
} else if (numero1 > numero2) {
  alert("El primer número debe ser menor al segundo");
} else {
  for (let i = numero1; i <= numero2; i++) {
    console.log(`Tabla de ${i}`);
    document.write(`<h1> Tabla de ${i} </h1>`);

    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
      document.write(`<h3> ${i} x ${j} = ${i * j} </h3>`);
    }
  }
}
