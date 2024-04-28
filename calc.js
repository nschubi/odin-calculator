let firstNumber;
let secondNumber;
let operator;

let inOperation = false;
let resetEingabe = true;

const display = document.querySelector('#display');
let displayValue = '0';

const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    displayValue = '0';
    inOperation = false;
    resetEingabe = true;
    updateDisplay();
})

const numbers = document.querySelectorAll(".number");
numbers.forEach(element =>
    element.addEventListener('click', (e) => {
        if(display.textContent.length < 9){
            if(resetEingabe){
                displayValue = e.target.textContent;
                resetEingabe = false;
            }else{
                displayValue = displayValue + e.target.textContent;
            }
            updateDisplay();
        }
    })
);

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if(inOperation){
        secondNumber = Number(displayValue);
        displayValue = operate();
        inOperation = false;
        resetEingabe = true;
        updateDisplay();
    }else{
        resetEingabe = true;
    }
});

const operators = document.querySelectorAll('.operation');
operators.forEach(o => o.addEventListener('click', (e) => {
    let target = e.target.textContent;
    operator = target;
    if(inOperation){
        secondNumber = Number(displayValue);
        firstNumber = operate();
        displayValue = firstNumber;
        resetEingabe = true;
        updateDisplay();
    }else{
        firstNumber = Number(displayValue);
        inOperation = true;
        resetEingabe = true;
    }
}));

function add(x,y){
    return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate(){
    switch(operator){
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        default:
            console.log(`The operator ${operator} is unkown.`)
            return firstNumber;
    }
}

function updateDisplay(){
    display.textContent = displayValue.toString();
}