const signo = prompt("¿Que signo zodiac eres?").toLowerCase();

switch (signo) {
  case "aries":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu energía y entusiasmo te llevarán a tomar acción y lograr tus objetivos. No tengas miedo de tomar riesgos y de ser tú mismo. </h1>",
    );
    break;
  case "tauro":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu perseverancia y constancia te ayudarán a lograr tus objetivos. No tengas miedo de ser ambicioso y de perseguir tus sueños. </h1>",
    );
    break;
  case "geminis":
  case "géminis":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu mente curiosa y creativa te llevará a explorar nuevos horizontes y buscar el crecimiento personal. No tengas miedo de pensar fuera de la caja y desafiar las normas tradicionales. </h1>",
    );
    break;
  case "cancer":
  case "cáncer":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu sensibilidad y empatía te guiarán a ayudar a otros y crear conexiones significativas. Recuerda también priorizar el cuidado personal y establecer límites para evitar sentirte abrumado. </h1>",
    );
    break;
  case "leo":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu confianza y liderazgo te ayudarán a lograr tus objetivos. No tengas miedo de tomar riesgos y de ser tú mismo. </h1>",
    );
    break;
  case "virgo":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu perspectiva única e innovación te llevarán a crear cambios positivos en el mundo. No tengas miedo de pensar fuera de la caja y desafiar las normas tradicionales. </h1>",
    );
    break;
  case "libra":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu espíritu aventurero y optimismo te llevarán a explorar nuevos horizontes y buscar el crecimiento personal. No tengas miedo de correr riesgos y abrazar la incertidumbre. </h1>",
    );
    break;
  case "escorpio":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu disciplina y ética de trabajo te ayudarán a lograr tus objetivos ambiciosos, pero recuerda también priorizar el cuidado personal y el equilibrio en tu vida. </h1>",
    );
    break;
  case "sagitario":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu confianza y liderazgo te ayudarán a lograr tus objetivos. No tengas miedo de tomar riesgos y de ser tú mismo. </h1>",
    );
    break;
  case "capricornio":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu perseverancia y constancia te ayudarán a lograr tus objetivos. No tengas miedo de ser ambicioso y de perseguir tus sueños. </h1>",
    );
    break;
  case "acuario":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu mente curiosa y creativa te llevará a explorar nuevos horizontes y buscar el crecimiento personal. No tengas miedo de pensar fuera de la caja y desafiar las normas tradicionales. </h1>",
    );
    break;
  case "piscis":
    document.write(`<h1> ${signo} </h1>`);
    document.write(
      "<h1> Tu sensibilidad y empatía te guiarán a ayudar a otros y crear conexiones significativas. Recuerda también priorizar el cuidado personal y establecer límites para evitar sentirte abrumado. </h1>",
    );
    break;
  default:
    document.write("<h1 class='invalido'> No has ingresado un signo zodiac válido </h1>");
}
