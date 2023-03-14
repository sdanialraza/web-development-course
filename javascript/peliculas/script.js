const peliculas = ["Batman Begins", "El caballero oscuro", "El caballero oscuro: La leyenda renace"]

for (let i = 0; i < peliculas.length; i++) {
    console.log(i, peliculas[i]);
    document.write(`<h1> ${i}:${peliculas[i]} </h1>`);
}