const estudiantes = ["Adrian", "Aga", "David", "Julio", "Joaquin", "Maria", "Rodolfo"];
const galletaFortuna = [
    "El futuro es brillante para aquellos que se atreven a soñar en grande.",
    "El éxito está a la vuelta de la esquina, sigue adelante.",
    "Recibirás un regalo inesperado pronto.",
    "No temas tomar riesgos, la recompensa puede ser grande.",
    "La fortuna favorece a los valientes.",
    "El cambio está en el horizonte, abraza la transformación.",
    "La creatividad te llevará lejos en tu carrera.",
    "Un amigo cercano te brindará apoyo en momentos difíciles.",
    "La paciencia es la clave para alcanzar tus metas.",
    "Un viaje está en tu futuro cercano, prepárate para nuevas experiencias."
];

// IFFI - Immediately Invoked Function Expression | Función autoinvocada
(function saberFortuna () {
    const fortuna = galletaFortuna[Math.floor(Math.random() * galletaFortuna.length)];
    const nombre = estudiantes[Math.floor(Math.random() * estudiantes.length)];
    document.write("<h1> La Galleta de la Fortuna </h1> <br>");
    document.write(`<h2> ${nombre}: ${fortuna} </h2>`);
})();

/* Otra forma de declarar la función, funcion flecha o arrow function
const saberFortuna = () => {
    const fortuna = galletaFortuna[Math.floor(Math.random() * galletaFortuna.length)];
    const nombre = estudiantes[Math.floor(Math.random() * estudiantes.length)];
    document.write("<h1> La Galleta de la Fortuna </h1> <br>");
    document.write(`<h2> ${nombre}: ${fortuna} </h2>`);
}
saberFortuna();
*/