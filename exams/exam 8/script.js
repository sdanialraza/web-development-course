const adjetivosPositivos = ["feliz", "amable", "intelligente"];
const adjetivosNegativos = ["perezoso", "antisocial", "depresivo"];

const enviar = document.querySelector("#enviar");
const mensaje = document.querySelector(".mensaje");

enviar.addEventListener("click", () => {
    const adjetivo = document.querySelector("#adjetivo").value.toLowerCase().trim();

    if (adjetivosPositivos.includes(adjetivo)) {
        mensaje.innerHTML = ""
        mensaje.style.backgroundImage = "url('https://img.freepik.com/free-photo/assortment-with-happy-emotion_23-2148860256.jpg?w=360')";
    } else if (adjetivosNegativos.includes(adjetivo)) {
        mensaje.innerHTML = ""
        mensaje.style.backgroundImage = "url('https://images.unsplash.com/photo-1620837953277-985e536c977a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVpbmVkJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80')";
    } else {
        mensaje.style.backgroundImage = "";
        mensaje.innerHTML = "Gracias por participar!";
    }
});