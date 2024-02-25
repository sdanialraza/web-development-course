const sorteoNumero = Math.floor(Math.random() * 10) + 1;
let usarioNumero = prompt("Introduce un numero para el sorteo (del 1 al 10):");

while (usarioNumero < 1 || usarioNumero > 10) {
  alert("El numero tiene que estar entre 1 y 10, vuelve a intentarlo");
  usarioNumero = prompt("Introduce un numero para el sorteo (del 1 al 10):");
}

while (usarioNumero != sorteoNumero) {
  alert("No has acertado, vuelve a intentarlo");
  usarioNumero = prompt("Introduce un numero para el sorteo (del 1 al 10):");
}

alert("Enhorabuena, has ganado el sorteo!");
