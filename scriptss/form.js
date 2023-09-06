const gethiredButton =document.querySelectorAll(".button-onClick-gethired")
const popForm =document.querySelector(".pop-up-Positioning")
const closebutton =document.querySelector(".closebutton")
gethiredButton.forEach(button => {
    button.addEventListener("click",()=>{
        popForm.style.display = "flex"
    })
    
});

closebutton.addEventListener('click',()=>{
    popForm.style.display = "none"
    
})



const hireTalentButton =document.querySelectorAll(".button-onClick-hireTalent")
const popForm1 =document.querySelector(".pop-up-Positioning1")
const closebutton1 =document.querySelector(".closebutton1")

hireTalentButton.forEach(button => {
    button.addEventListener("click",()=>{
        popForm1.style.display = "flex"
    })
    
});

closebutton1.addEventListener('click',()=>{
    popForm1.style.display = "none"
    
})