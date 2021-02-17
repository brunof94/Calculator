const numbers = document.getElementById("numbers");
const operatorDiv = document.getElementById("operators");
const screenDiv = document.getElementById('screen');
let numberButton, currentNUmber= "",operator, lastNumber="",currentOperator = "",result;
const buttonSize = 50;


for (let i = 1; i <= 9; i++) {
    createButton(i);
}
createButton(0);
createOperator("+");
createOperator("-");
createOperator("*");
createOperator("/");
createEnter();
createEraser();

function createButton(number){
    numberButton = document.createElement('button');
    numberButton.id = `button${number}`;
    numberButton.innerHTML = number;
    numberButton.style.width = `${buttonSize}px`;
    numberButton.style.height = `${buttonSize}px`;
    numberButton.addEventListener('click',(e)=>{
        currentNUmber+= e.target.innerHTML;
        console.log(currentNUmber);
        screenDiv.innerHTML+= number;
    })
    numbers.appendChild(numberButton);
    if (number%3==0) {
        numbers.appendChild(document.createElement('br'))
    }
}

function createOperator(operator){
    operatorButton = document.createElement('button');
    operatorButton.id = `button${operator}`;
    operatorButton.innerHTML = operator;
    operatorButton.style.width = `${buttonSize}px`;
    operatorButton.style.height = `${buttonSize}px`;
    operatorButton.addEventListener('click',(e)=>{
        currentOperator = e.target.innerHTML;
        lastNumber = currentNUmber;
        currentNUmber = "";
        screenDiv.innerHTML+= operator;
    })
    operatorDiv.appendChild(operatorButton);
}

function createEnter(){
    operatorButton = document.createElement('button');
    operatorButton.id = `button=`;
    operatorButton.innerHTML = "=";
    operatorButton.style.width = `${buttonSize}px`;
    operatorButton.style.height = `${buttonSize}px`;
    operatorButton.addEventListener('click',(e)=>{
        result = operate();
        screenDiv.innerHTML+= "=" + result;

    })
    operatorDiv.appendChild(operatorButton);
}

function createEraser(){
    operatorButton = document.createElement('button');
    operatorButton.id = `buttonEraser`;
    operatorButton.innerHTML = "Clear";
    operatorButton.style.width = `${buttonSize}px`;
    operatorButton.style.height = `${buttonSize}px`;
    operatorButton.addEventListener('click',(e)=>{
        currentNUmber= "";
        operator = "";
        lastNumber="";
        currentOperator = ""
        screenDiv.innerHTML= "";

    })
    operatorDiv.appendChild(operatorButton);
}

function operate (){
    numberOne = parseInt(lastNumber);
    numberTwo = parseInt(currentNUmber);
    let result = null;
    console.log(`1- ${numberOne}, 2- ${numberTwo}`)
    if (currentOperator == "*") {
        result = numberOne * numberTwo;
    }else if (currentOperator == "/") {
        result = numberOne / numberTwo
    }else if (currentOperator == "+") {
        result = numberOne + numberTwo
    }else if (currentOperator == "-") {
        result = numberOne - numberTwo
    }
    return result;
}