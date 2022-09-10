import togglePower from "./togglePower.js";

// Create global STATE object:

// Power button
const powerButton = document.querySelector(".fn-power");
powerButton.addEventListener("click", togglePower);

// Numerical buttons
const numericalButtons = document.querySelectorAll("[class*=num]");
numericalButtons.forEach(button => {
  button.addEventListener('click', handleChangeValue)
})

function handleChangeValue(e) {
  // Check if the number clicked is zero.
  +e.target.textContent === 0 ? handleZero() : handleNonZero(e.target.textContent);
  STATE.lastKeyAnOperator = false;
  STATE.overwrite = false;
  handleDisplay();
  console.log(STATE)
}

function handleNonZero(val) {
  // If there is an operation stored in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {

    // Check if number click happens post memory function click:
    if (STATE.overwrite) {
      STATE.valueTwo = val;
      STATE.overwrite = false;
      return
    }

    STATE.valueTwo = STATE.valueTwo ? STATE.valueTwo + val : val;

  } else {

    if (STATE.overwrite) {
      STATE.valueOne = val;
      STATE.overwrite = false;
      return;
    }

    STATE.valueOne = STATE.valueOne ? STATE.valueOne + val : val;
  }
}

function handleZero() {
  // If there is an operation stored in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo === 0 ? 0 : `${STATE.valueTwo + 0}`;
  }
  else {
    STATE.valueOne = STATE.valueOne === 0 ? 0 : `${STATE.valueOne + 0}`;
  }
}

// Decimal Button
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", handleDecimal);

function handleDecimal() {
  // If there is an operation store in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = `${STATE.valueTwo}`.includes('.') ? STATE.valueTwo : STATE.valueTwo + '.';
  }
  else {
    STATE.valueOne = `${STATE.valueOne}`.includes('.') ? STATE.valueOne : STATE.valueOne + '.';
  }
  handleDisplay();
  STATE.lastKeyAnOperator = false;
}

// Operators
const operatorButtons = document.querySelectorAll("[class*=op]")
operatorButtons.forEach(button => {
  const operand = button.textContent;

  button.addEventListener("click", handleOperation)
})

function handleOperation(e) {

  // Check if there is a previous operation stored in memory && last key 
  // pressed was not an operator, carry out the stored operation:
  if (STATE.operation && !STATE.lastKeyAnOperator) {
    operate(STATE.operation, STATE.valueOne, STATE.valueTwo);
    handleDisplay()
  }

  setOperator(e.target.textContent);

  console.log(STATE)
}

function setOperator(operator) {
  switch (operator) {
    case "+": {
      STATE.operation = "+";
      break;
    }
    case "-": {
      STATE.operation = "-";
      break;
    }
    case "/": {
      STATE.operation = "/";
      break;
    }
    case "*": {
      STATE.operation = "*";
      break;
    }
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case '+': {
      add(num1, num2);
      break;
    }
    case '-': {
      subtract(num1, num2);
      break;
    }
    case '*': {
      multiply(num1, num2);
      break;
    }
    case '/': {
      divide(num1, num2);
      break;
    }
  }

  STATE.operation = null
}

// Handle Display
function handleDisplay() {
  const mainDisplay = document.querySelector(".display-main");

  // 1) Check if there is a saved operator:
  // 2) If there is no saved operator then show the value of val1
  // 3) If there is a saved operator and the last key pressed was an operator show val1
  // 4) If there is a save operator and the last key pressed was not an operator show val2

  if (!STATE.operation) { // If there is no saved operator
    mainDisplay.textContent = STATE.valueOne;
  }
  else if (STATE.operation && STATE.lastKeyAnOperator) {
    mainDisplay.textContent = STATE.valueOne;
  }
  else if (STATE.operation && !STATE.lastKeyAnOperator) {
    mainDisplay.textContent = STATE.valueTwo;
  }
}

function add(num1, num2) {
  STATE.total = +num1 + +num2;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function subtract(num1, num2) {
  STATE.total = +num1 - +num2;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function multiply(num1, num2) {
  STATE.total = +num1 * +num2;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero"
  }

  STATE.total = +num1 / +num2;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

// Clear Button
const clearButton = document.querySelector('.fn-clear');
clearButton.addEventListener('click', clearMemory);

function clearMemory() {
  STATE.total = 0;
  STATE.memoryTotal = 0;
  STATE.valueOne = 0;
  STATE.valueTwo = 0;
  STATE.operation = null;
  STATE.lastKeyAnOperator = false;
  STATE.isPowered = true;

  const mainDisplay = document.querySelector('.display-main');

  mainDisplay.textContent = "CLEAR";
  setTimeout(() => {
    mainDisplay.textContent = 0;
  }, 750)
}

// Memory Clear
const memClearButton = document.querySelector('.fn-memClear');
memClearButton.addEventListener("click", memClear)

function memClear() {
  STATE.memoryTotal = 0;
}

// Memory Recall
const memRecallButton = document.querySelector(".fn-memRecall");
memRecallButton.addEventListener('click', memRecall)

function memRecall() {
  const mainDisplay = document.querySelector(".display-main");
  mainDisplay.textContent = STATE.memoryTotal;
}

// Memory Plus
const memPlusButton = document.querySelector('.fn-memPlus');
memPlusButton.addEventListener('click', memPlus);

function memPlus() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = +STATE.memoryTotal + +mainDisplay.textContent

  if (STATE.operation && STATE.lastKeyAnOperator) {
    STATE.valueTwo = 0;
  } else {
    STATE.valueOne = 0;
  }

}