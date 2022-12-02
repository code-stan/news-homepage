//VARIABLES
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navMenu = document.querySelector(".nav");
const menuOpacity = document.querySelector(".opacity");
const navLink = document.querySelectorAll(".nav-link");
const body = document.body;

//OPEN AND CLOSE MENU FUNCTIONS RESPECTIVELY
const openMenuFunc = function () {
    navMenu.classList.add("nav-close");
    menuOpacity.style.display = "initial";
    body.style.overflow = "hidden";
}
const closeMenuFunc = function () {
    navMenu.classList.remove("nav-close");
    menuOpacity.style.display = "none";
    body.style.overflow = "unset"
}

//EVENT LISTENERS
openMenu.addEventListener("click", openMenuFunc)
closeMenu.addEventListener("click", closeMenuFunc);
navLink.forEach(link =>{
    link.addEventListener("click", closeMenuFunc);
})