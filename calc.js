const display = document.querySelector('#display');
let displayValue = '0';

const btnClear = document.querySelector('#btnClear');
btnClear.addEventListener('click', () => {
    displayValue = '0';
    updateDisplay();
})

const numbers = document.querySelectorAll(".number");
numbers.forEach(element =>
    element.addEventListener('click', (e) => {
        if(display.textContent.length < 9){
            if(displayValue === '0'){
                displayValue = e.target.textContent;
            }else{
                displayValue = displayValue + e.target.textContent;
            }
            updateDisplay();
        }
    })
)

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

function updateDisplay(){
    display.textContent = displayValue.toString();
}