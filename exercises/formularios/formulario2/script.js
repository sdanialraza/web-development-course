try {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigoPostal");
    const ciudad = document.getElementById("ciudad");
    const pais = document.getElementById("pais");

    onsubmit = async () => {
        const confirmButton = confirm("¿Estás seguro de que quieres enviar este formulario?");

        if (confirmButton) {
            alert(
                [
                    "Has enviado este formulario:",
                    `Nombre: ${nombre.value}`,
                    `Edad: ${edad.value}`,
                    `Email: ${email.value}`,
                    `Teléfono: ${telefono.value}`,
                    `Dirección: ${direccion.value}`,
                    `Código Postal: ${codigoPostal.value}`,
                    `Ciudad: ${ciudad.value}`,
                    `País: ${pais.value}`,
                ].join("\n")
            );
        }
    }
} catch (error) {
    throw new Error(error);
}