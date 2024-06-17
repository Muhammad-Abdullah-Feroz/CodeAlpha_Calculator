console.log(`started javascript`);

let displayValue = "";
let answer = "0"
let newInput = true;
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(newInput){
            displayValue = ""
            newInput = false;
        }
        if(e.value == "="){
            try{
                displayValue = eval(displayValue);
                answer = displayValue;
            }
            catch(error){
                alert("Incorrect Syntax")
                displayValue = ""
            }
            newInput = true;
        }else if(e.value == "AC"){
            displayValue = ""
            display.querySelector("input").value=displayValue
        }
        else if(e.value == "Del"){
            displayValue =  displayValue.slice(0,-1);
            display.querySelector("input").value=displayValue
        }
        else if(e.value == "Ans"){
            displayValue =  answer;
            display.querySelector("input").value=displayValue
        }
        else{
            displayValue += e.value
        }
        display.querySelector("input").value=displayValue;
    })
})