
    function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const faqItem = button.parentNode;
            const answer = faqItem.querySelector(".answer");

            if (answer.style.display === "none") {
                answer.style.display = "block";
                button.textContent = "x";
                faqItem.querySelector(".question").style.color = "#1CC382"; // Change question color to green
            } else {
                answer.style.display = "none";
                button.textContent = "+";
                faqItem.querySelector(".question").style.color = ""; // Reset question color
            }
        });
    });
});
