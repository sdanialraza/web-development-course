const offer = document.querySelector("#offer");
const poster = document.querySelector(".poster");

offer.addEventListener("click", () => {
  poster.style.display = "block";

  poster.style.animationPlayState = "running";
});

poster.addEventListener("click", () => {
  poster.style.animationPlayState = "paused";
});

poster.addEventListener("dblclick", () => {
  poster.style.display = "none";
});
