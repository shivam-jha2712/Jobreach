document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const faqItem = button.parentNode;
            const answer = faqItem.querySelector(".answer");

            if (faqItem.classList.contains("open")) {
                faqItem.classList.remove("open");
                button.textContent = "+";
            } else {
                faqItem.classList.add("open");
                button.textContent = "x";
            }
        });
    });
});



