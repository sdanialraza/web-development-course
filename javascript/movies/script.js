const peliculas = ["Batman Begins", "El caballero oscuro", "El caballero oscuro: La leyenda renace"];

for (let i = 0; i < peliculas.length; i++) {
  console.log(peliculas[i]);
  document.write(`<h1> ${peliculas[i]} </h1>`);
}

/* Reverse
for (let i = peliculas.length - 1; i >= 0; i--) {
    console.log(peliculas[i]);
    document.write(`<h1> ${peliculas[i]} </h1>`);
}
*/
