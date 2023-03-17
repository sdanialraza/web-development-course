let salir = false;
function saludos(saludos = "Hola", nombre = "Albert") {
    return `${saludos}, ${nombre}`;
}

do {
    const saludo = prompt("Ingrese un saludo");
    const nombre = prompt("¿Cómo te llamas?");
    if (saludo && nombre) alert(saludos(saludo, nombre));
    else alert(saludos());

    salir = prompt("Salir? (s/n)") === "s" ? true : false;
} while (!salir);