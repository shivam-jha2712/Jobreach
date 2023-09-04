// const questionElements = document.querySelectorAll('.question');

// questionElements.forEach(question => {
//     question.addEventListener('click', () => {
//         const answer = question.nextElementSibling;
//         const plusSign = question.querySelector('.plus-sign');

//         if (answer.style.display === 'none') {
//             answer.style.display = 'block';
//             plusSign.style.transform = 'rotate(45deg)';
//         } else {
//             answer.style.display = 'none';
//             plusSign.style.transform = 'rotate(0)';
//         }
//     });
// });

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



const questionElements = document.querySelectorAll('.question');

questionElements.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const plusSign = question.querySelector('.plus-sign');

        if (answer.style.display === 'none') {
            answer.style.display = 'block';
            plusSign.classList.add('open');
            question.classList.add('open');
        } else {
            answer.style.display = 'none';
            plusSign.classList.remove('open');
            question.classList.remove('open');
        }
    });
});