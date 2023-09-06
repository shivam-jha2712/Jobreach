document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const closeMenu = document.getElementById("close-menu");
    const menu = document.getElementById("menu");

    burgerMenu.addEventListener("click", function () {
        menu.classList.add("active");
        burgerMenu.style.opacity=0
        burgerMenu.classList.add("active");
        closeMenu.classList.add("active");
    });
    
    closeMenu.addEventListener("click", function () {
        menu.classList.remove("active");
        burgerMenu.classList.remove("active");
        closeMenu.classList.remove("active");
        burgerMenu.style.opacity=1
    });
});

const gethiredButton = document.querySelectorAll(".button-onClick-gethired")
const popForm = document.querySelector(".pop-up-Positioning")
const closebutton = document.querySelector(".closebutton")
gethiredButton.forEach(button => {
    button.addEventListener("click", () => {
        popForm.style.display = "flex"
    })

});

closebutton.addEventListener('click', () => {
    popForm.style.display = "none"

})



const hireTalentButton = document.querySelectorAll(".button-onClick-hireTalent")
const popForm1 = document.querySelector(".pop-up-Positioning1")
const closebutton1 = document.querySelector(".closebutton1")

hireTalentButton.forEach(button => {
    button.addEventListener("click", () => {
        popForm1.style.display = "flex"
    })

});

closebutton1.addEventListener('click', () => {
    popForm1.style.display = "none"

})