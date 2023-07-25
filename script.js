const burgir = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");


burgir.addEventListener("click", () => {
    burgir.classList.toggle("active");
    navMenu.classList.toggle("active");
  })