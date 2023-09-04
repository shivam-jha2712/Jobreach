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


let currentCard = 1;

function prevCard() {
    if (currentCard > 1) {
        currentCard--;
        updateCardPosition();
    }
}

function nextCard() {
    if (currentCard < 5) { // Adjust the number of cards
        currentCard++;
        updateCardPosition();
    }
}

function updateCardPosition() {
    const cardSlider = document.querySelector(".card-slider");
    const cardWidth = document.querySelector(".card").offsetWidth;
    const translateX = -(currentCard - 1) * cardWidth;
    cardSlider.style.transform = `translateX(${translateX}px)`;
}

updateCardPosition();
