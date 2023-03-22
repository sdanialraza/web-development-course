const password = "HolaMundo";
let input = prompt("Ingresa la contraseña");

for (let i = 0; i < 5; i++) {
  if (input === password) {
    alert("Contraseña correcta");
    break;
  } else {
    alert("Contraseña incorrecta");
    input = prompt("Ingresa la contraseña");
  }

  if (i === 4) alert("Demasiados intentos. No puedes entrar.");
}