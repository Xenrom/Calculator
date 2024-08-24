function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function remain(a, b){
    return a % b;
}

function operate(firstNum, operation, secondNum){
    switch(operation){
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
        case "%":
            return remain(firstNum, secondNum);
        default:
            console.log("unvalid operator, please try again");
            return "ERROR";
    }

}

function changeDisplayText(word){
    if(word[0] === "0"){
        display.textContent = word.slice(1)
    }
    else {
        display.textContent = word;
    }
}

function changeOperator(choice){

    switch(choice){
        case "plus":
            return "+";
        case "subtract":
            return "-";
        case "multiply":
            return "*";
        case "divide":
            return "/";
        case "remainder":
            return "%";
        default:
            console.log("error??");
    }
}

const display = document.querySelector(".display");
let firstNumber = "";
let operator = "";
let secondNumber = "";

let currentNum = "";

const buttons = document.querySelector(".container").querySelectorAll("button");

buttons.forEach(but => but.addEventListener("click", e => {
    if(e.target.id.charCodeAt(1) >= 48 && e.target.id.charCodeAt(1) <= 57){
        if(operator === ""){
            currentNum += e.target.id[1];
            changeDisplayText(currentNum);
        }
        else {
            currentNum += e.target.id[1];
            changeDisplayText(currentNum);
        }
        console.log(firstNumber, secondNumber);
    }
    else if(e.target.className === "operator"){
        firstNumber = currentNum;
        currentNum = "";
        operator = changeOperator(e.target.id)
    }
    else if(e.target.id === "equal"){
        secondNumber = currentNum;
        const answer = operate(parseFloat(firstNumber), operator, parseFloat(secondNumber));
        changeDisplayText(answer)

        if(typeof answer === 'number' ){
            firstNumber = answer;
        }
        else {
            firstNumber = 0;
        }

        currentNum = firstNumber;
        operator = "";
        secondNumber = "";
    }
    else if(e.target.id === "dot"){
        if(!display.textContent.includes(".")){
            currentNum +=".";
            changeDisplayText(currentNum);
        }
    }
    else if(e.target.id === "undo"){
        if(currentNum.length > 0){
            currentNum = currentNum.slice(0, currentNum.length-1);
            changeDisplayText(currentNum);
        }

        if(currentNum.length === 0){
            currentNum = 0;
            changeDisplayText(currentNum);
        }
    }
    else if(e.target.id === "clear"){
        currentNum = 0;
        firstNumber = 0;
        secondNumber = 0;
        changeDisplayText(currentNum);
    }
})
)