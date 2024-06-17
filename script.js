console.log(`started javascript`);

let displayValue = "";
let newInput = true;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

document.addEventListener("keydown",(e)=>{
    if(e.key = "Escape"){
        displayValue = ""
        display.querySelector("input").value=displayValue
    }
    
})

buttons.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(newInput){
            displayValue = ""
            newInput = false;
        }
        if(e.value == "="){
            try{
                displayValue = eval(displayValue);
            }
            catch(error){
                alert("Incorrect Syntax")
                displayValue = ""
            }
            newInput = true;
        }else{
            displayValue += e.value
        }
        display.querySelector("input").value=displayValue;
    })
})