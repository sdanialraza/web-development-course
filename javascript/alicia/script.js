const nombre = prompt("El guarda: \n¿Como te llamas?").toLowerCase();

if (nombre == "alicia") {
  alert("Bienvenida Alicia");
  const bebida = prompt("El barman \n¿Que quieres beber?").toLowerCase();

  if (bebida == "cerveza") {
    alert("Aquí tienes tu cerveza");
    const hora = parseInt(prompt("El barman \n¿Que hora es? (Ej: 19:00)"));
    if (hora < 20 && hora > 10) {
      alert("Aqui tienes otra cerveza, por cuenta de la casa");
    } else {
      alert("No puedes beber mas, tienes que irte");
    }
  } else {
    alert("No puedes beber eso, tienes que irte");
  }
} else {
  alert("No eres Alicia, no puedes entrar, adios!");
}
