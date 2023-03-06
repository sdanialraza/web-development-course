try {
    const nombre = prompt("Cual es tu nombre?");
    const apellido = prompt("Cual es tu apellido?");

    if (!nombre || !apellido) throw new Error("No ingresaste tu nombre o apellido");

    const nombreApellido = document.createElement("h1");

    document.body.appendChild(nombreApellido);

    nombreApellido.innerHTML = `Hola, ${nombre} ${apellido}!`;

    console.log(`Hola, ${nombre} ${apellido}!`);

} catch (error) {
    throw new Error(error);
}