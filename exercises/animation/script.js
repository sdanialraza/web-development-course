const rebotar = document.querySelector("#start");
const parar = document.querySelector("#stop");

const ball = document.querySelector(".ball");

rebotar.addEventListener("click", () => {
  ball.style.animationPlayState = "running";
});

parar.addEventListener("click", () => {
  ball.style.animationPlayState = "paused";
});
