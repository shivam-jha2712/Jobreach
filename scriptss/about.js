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