const hireButton =document.querySelectorAll(".button-onClick-gethired")
const popForm =document.querySelector(".pop-up-Positioning")
const closebutton =document.querySelector(".closebutton")
hireButton.forEach(button => {
    button.addEventListener("click",()=>{
        popForm.style.display = "flex"
    })
    
});

closebutton.addEventListener('click',()=>{
    popForm.style.display = "none"

})