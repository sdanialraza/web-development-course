function saludosSinParametros() {
  document.write("<h1> Hola, Andrés </h1> <br>");
}

/* Otra forma de declarar una funcion, funcion flecha o arrow function
const saludosSinParametros = () => {
    document.write("Hola Andrés <br>");
}
*/

function saludosConParametros(saludos = "Hola", nombre = "Andrés") {
  document.write(`<h1> ${saludos}, ${nombre} </h1> <br>`);
}

/* Otra forma de declarar una funcion, funcion flecha o arrow function
const saludosConParametros = (saludos = "Hola", nombre = "Andrés") => {
    document.write(`${saludos}, ${nombre}<br>`);
}
*/

const saludos = function saludosConRetorno(saludos = "Hola", nombre = "Andrés") {
  return `<h1> ${saludos}, ${nombre} </h1> <br>`;
};

/* Otra forma de declarar una funcion, funcion flecha o arrow function
const saludosConRetorno = (saludos = "Hola", nombre = "Andrés") => {
    return `${saludos}, ${nombre}`;
}
*/

// saludosSinParametros();
// saludosConParametros("Hola", "Andrés");
// document.write(saludos("Hola", "Andrés"))
