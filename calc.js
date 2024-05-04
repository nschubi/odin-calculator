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

const btnDel = document.querySelector('#btnDel');
btnDel.addEventListener('click', () => {
    if (displayValue && !resetEingabe) {
        displayValue = displayValue.slice(0, -1);
        if (!displayValue) {
            displayValue = '0';
            resetEingabe = true;
        }
        updateDisplay();
    }
});

const btnPercentage = document.querySelector('#btnPercentage');
btnPercentage.addEventListener('click', () => {
    if (displayValue) {
        displayValue = (Number(displayValue) / 100).toString();
        updateDisplay();
    }
})

const numbers = document.querySelectorAll(".number");
numbers.forEach(element =>
    element.addEventListener('click', (e) => {
        if (resetEingabe) {
            displayValue = e.target.textContent;
            resetEingabe = false;
        }
        else {
            if (display.textContent.length < 9) {
                displayValue = displayValue + e.target.textContent;
            }
        }
        updateDisplay();
    })
);

const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (display.textContent.length < 9 &&
        !display.textContent.includes('.')) {
        if (resetEingabe) {
            displayValue = '0.';
            resetEingabe = false;
        } else {
            displayValue = displayValue + '.';
        }
        updateDisplay();
    }
});

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    if (inOperation) {
        secondNumber = Number(displayValue);
        displayValue = operate();
        inOperation = false;
        resetEingabe = true;
        updateDisplay();
    } else {
        resetEingabe = true;
    }
});

const operators = document.querySelectorAll('.operation');
operators.forEach(o => o.addEventListener('click', (e) => {
    let target = e.target.textContent;
    operator = target;
    if (inOperation) {
        secondNumber = Number(displayValue);
        firstNumber = operate();
        displayValue = firstNumber;
        resetEingabe = true;
        updateDisplay();
    } else {
        firstNumber = Number(displayValue);
        inOperation = true;
        resetEingabe = true;
    }
}));

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate() {
    switch (operator) {
        case '+': return add(firstNumber, secondNumber);
        case '-': return subtract(firstNumber, secondNumber);
        case '*': return multiply(firstNumber, secondNumber);
        case '/': return divide(firstNumber, secondNumber);
        default:
            console.log(`The operator ${operator} is unkown.`)
            return firstNumber;
    }
}

function updateDisplay() {
    display.textContent = displayValue.toString();
}