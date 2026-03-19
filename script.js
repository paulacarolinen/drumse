const hotspots = document.querySelectorAll(".hotspot");
const texto = document.getElementById("nome-peca");
const eventos = document.querySelectorAll(".evento");
const botoesEvento = document.querySelectorAll(".header-evento");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    const nome = hotspot.getAttribute("data-nome");
    texto.textContent = nome;
  });
});

botoesEvento.forEach((botao) => {
  botao.addEventListener("click", () => {
    const eventoAtual = botao.parentElement;

    eventos.forEach((evento) => {
      if (evento !== eventoAtual) {
        evento.classList.remove("ativo");
      }
    });

    eventoAtual.classList.toggle("ativo");
  });
});

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("ativo");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
  });
});

document.querySelectorAll(".card img").forEach((img) => {
  img.onerror = () => {
    img.src = "https://via.placeholder.com/400x300?text=Imagem";
  };
});