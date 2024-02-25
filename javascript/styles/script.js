const colores = [
  "black",
  "blue",
  "brown",
  "cyan",
  "gray",
  "green",
  "lime",
  "orange",
  "pink",
  "purple",
  "red",
  "white",
  "yellow",
];

function colorAleatorio() {
  const color = colores[Math.floor(Math.random() * colores.length)];
  return color;
}

const colorSeleccionado = document.querySelector("#colorSeleccionado");

document.querySelector("#enviar").addEventListener("click", () => {
  const cuadritos = document.querySelector(".cuadrito");

  if (!colores.includes(colorSeleccionado.value)) return alert("El color no es válido");

  cuadritos.style.backgroundColor = colorSeleccionado.value;
});

document.querySelector("#aleatorio").addEventListener("click", () => {
  const cuadritos = document.querySelector(".cuadrito");

  cuadritos.style.backgroundColor = colorAleatorio();
});
