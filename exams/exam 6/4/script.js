let fraseFinal;

function createFrase(persona, accion, lugar) {
  fraseFinal = `${persona} estaba ${accion} en ${lugar}`;
}

const persona = prompt("Ingresa el nombre de una persona");
const accion = prompt("Ingresa una accion");
const lugar = prompt("Ingresa un lugar");

createFrase(persona, accion, lugar);
alert(fraseFinal);
