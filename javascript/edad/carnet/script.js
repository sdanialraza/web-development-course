const edad = prompt("¿Cuál es tu edad?");

if (!edad) {
    document.write("<h1 style='color: yellow'> No has introducido tu edad </h1>");
    throw new Error("No ingresaste tu edad");
}

if (edad < 30) {
    console.log("Tienes carnet joven");
    document.write("<h1 style='color: yellow'> Tienes carnet joven </h1>");
} else if (edad >= 120) {
    console.log("¿Eres inmortal?");
    document.write("<h1 style='color: yellow'> ¿Eres inmortal? </h1>");
} else {
    console.log("No tienes carnet yellow");
    document.write("<h1 style='color: yellow'> No tienes carnet joven </h1>");
}