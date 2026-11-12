// ArenaGG - main.js
// JavaScript de la página de bienvenida (index.html).

document.addEventListener("DOMContentLoaded", () => {
  // ----- Riel de juegos: botones anterior y siguiente -----
  const riel = document.querySelector(".riel-juegos");
  const botonesRiel = document.querySelectorAll("[data-riel-direccion]");
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (riel) {
    botonesRiel.forEach((boton) => {
      boton.addEventListener("click", () => {
        const direccion = Number(boton.dataset.rielDireccion);
        riel.scrollBy({
          left: direccion * riel.clientWidth * 0.8,
          behavior: reducirMovimiento ? "auto" : "smooth",
        });
      });
    });
  }

  // Aquí irá el resto de la lógica de la vista cuando la veamos en clase.
});