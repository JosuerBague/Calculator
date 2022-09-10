// Create global STATE object:
const STATE = {
  total: 0,
  memoryTotal: 0,
  valueOne: 0,
  valueTwo: 0,
  operation: null,
  lastKeyAnOperator: false, // Tracks if the last key pressed was an operator
  isPowered: false,
}

// Power button
const powerButton = document.querySelector(".fn-power");
powerButton.addEventListener("click", togglePower);

function togglePower() {
  const memoryIndicator = document.querySelector(".display-memory");
  const mainDisplay = document.querySelector(".display-main");

  if (STATE.isPowered) {
    memoryIndicator.style.opacity = 1;
    mainDisplay.style.opacity = 1;
  } else {
    memoryIndicator.style.opacity = 0;
    mainDisplay.style.opacity = 0;
  }

  STATE.isPowered = !STATE.isPowered;
}

// Numerical buttons
const numericalButtons = document.querySelectorAll("[class*=num]");
numericalButtons.forEach(button => {
  button.addEventListener('click', handleChangeValue)
})

function handleChangeValue(e) {
  // Check if the number clicked is zero.
  +e.target.textContent === 0 ? handleZero() : handleNonZero(e.target.textContent);
  STATE.lastKeyAnOperator = false;
  handleDisplay();
}

function handleNonZero(val) {
  // If the last key pressed was an operator, then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo ? STATE.valueTwo + val : val;
  } else {
    STATE.valueOne = STATE.valueOne ? STATE.valueOne + val : val;
  }
}

function handleZero() {
  // If the last key pressed was an operator, then change valueTwo.
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
  // If the last key pressed was an operator, then change valueTwo.
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
  operand = button.textContent;

  button.addEventListener("click", handleOperation)
})

function handleOperation(e) {
  // Check if there is a previous operation stored in memory && last key 
  // pressed was not an operator, carry out the stored operation:
  if (STATE.operation && !STATE.lastKeyAnOperator) {
    operate(STATE.operation, STATE.valueOne, STATE.valueTwo);
  }

  setOperator(e.target.textContent);
  STATE.lastKeyAnOperator = true;
  handleDisplay()
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
