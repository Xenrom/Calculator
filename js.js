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

function operate(firstNum, operation, secondNum){
    switch(operation){
        case "+":
            add(firstNum, secondNum);
            break;
        case "-":
            subtract(firstNum, secondNum);
            break;
        case "*":
            multiply(firstNum, secondNum);
            break;
        case "/":
            divide(firstNum, secondNum);
            break;
        default:
            console.log("unvalid operator, please try again");
            break;
    }

}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

const buttons = document.querySelector(".container").querySelectorAll("button");

