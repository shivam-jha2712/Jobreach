document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const closeMenu = document.getElementById("close-menu");
    const menu = document.getElementById("menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.add("active");
        burgerMenu.classList.add("active");
        closeMenu.classList.add("active");
    });

    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
        burgerMenu.classList.remove("active");
        closeMenu.classList.remove("active");
    });
});
