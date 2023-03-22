const tipoDeTicket = prompt(
    "Cual tipo del ticket tienes? (Barato, Standard o VIP)"
).toLowerCase();

switch (tipoDeTicket) {
    case "barato":
        alert("Tienes un puesto detras de la columna");
        break;
    case "standard":
        alert("Tienes un puesto en el patio de butacas");
        break;
    case "vip":
        alert("Tienes un puesto en platea");
        break;
    default: alert("No has ingresado un tipo de ticket valido");
}