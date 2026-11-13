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

  // ----- Modales de inicio de sesión y registro -----
const modales = document.querySelectorAll(".modal");
const botonesAbrir = document.querySelectorAll("[data-modal-open]");
const botonesCerrar = document.querySelectorAll("[data-modal-close]");
const botonesCambiar = document.querySelectorAll("[data-modal-switch]");

function cerrarModales() {
  modales.forEach((modal) => {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
  });

  document.body.style.overflow = "";
}

function abrirModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  cerrarModales();

  modal.classList.add("is-visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

botonesAbrir.forEach((boton) => {
  boton.addEventListener("click", () => {
    abrirModal(boton.dataset.modalOpen);
  });
});

botonesCerrar.forEach((boton) => {
  boton.addEventListener("click", cerrarModales);
});

botonesCambiar.forEach((boton) => {
  boton.addEventListener("click", () => {
    abrirModal(boton.dataset.modalSwitch);
  });
});

// Cerrar al hacer clic fuera del contenido.
modales.forEach((modal) => {
  modal.addEventListener("click", (evento) => {
    if (evento.target === modal) {
      cerrarModales();
    }
  });
});

// Cerrar al presionar Escape.
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") {
    cerrarModales();
  }
});

// Evitar que los formularios recarguen la página.
// La autenticación se implementará posteriormente.
document.querySelectorAll(".formulario-modal").forEach((formulario) => {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
  });
});
});