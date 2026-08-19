//Script para ativar o menu hambúrguer
const menuToggle = document.getElementById("menu-toogle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toogle("show")
});