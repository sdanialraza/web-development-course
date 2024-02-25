const casing = (frase1, frase2) => {
  return `${frase1.toLowerCase()} ${frase2.toUpperCase()}`;
};

const frase1 = prompt("Ingrese una frase");
const frase2 = prompt("Ingrese otra frase");

document.write(`${casing(frase1, frase2)} <br> <br> <br>`);

const capitlizar = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
  // return string[0].toUpperCase() + string.slice(1);
};

const palabra = prompt("Ingrese una palabra");
document.write(capitlizar(palabra));
