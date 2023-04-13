"use strict";

var _a, _b;

const nombreJugador1 = (_a = prompt("Ingresa el nombre del Jugador 1:")) !== null && _a !== void 0 ? _a : "Jugador 1";
const nombreJugador2 = (_b = prompt("Ingresa el nombre del Jugador 2:")) !== null && _b !== void 0 ? _b : "Jugador 2";

const tirarDados = document.querySelector("#tirarDados");

const resultadosJugador1 = document.querySelector("#resultadosJugador1");
const resultadosJugador2 = document.querySelector("#resultadosJugador2");
const ganador = document.querySelector("#ganador");

const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
};

tirarDados.addEventListener("click", () => {
    resultadosJugador1.innerHTML = `Tirando los dados para ${nombreJugador1}...`;
    resultadosJugador2.innerHTML = "";

    setTimeout(() => {
        const tiradaJugador1 = rollDice();

        resultadosJugador1.innerHTML = `${nombreJugador1} tiró un ${tiradaJugador1}.`;
        resultadosJugador2.innerHTML = `Tirando los dados para ${nombreJugador2}...`;

        setTimeout(() => {
            const tiradaJugador2 = rollDice();

            resultadosJugador2.innerHTML = `${nombreJugador2} tiró un ${tiradaJugador2}.`;

            if (tiradaJugador1 === tiradaJugador2) {
                ganador.innerHTML = "Empate!";
            }
            else {
                ganador.innerHTML = `Ganador: ${tiradaJugador1 > tiradaJugador2 ? nombreJugador1 : nombreJugador2}`;
            }
        }, 2000);
        
    }, 1500);
});