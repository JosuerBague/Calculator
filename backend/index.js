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

  if (isPowered) {
    memoryIndicator.style.opacity = 1;
    mainDisplay.style.opacity = 1;
  } else {
    memoryIndicator.style.opacity = 0;
    mainDisplay.style.opacity = 0;
  }

  isPowered = !isPowered;
}

// Numerical buttons
const numericalButtons = document.querySelectorAll("[class*=num]");
numericalButtons.forEach(button => {
  button.addEventListener('click', handleChangeValue)
})

function handleChangeValue(e) {
  // Check if the number clicked is zero.
  +value === 0 ? handleZero() : handleNonZero(e.target.textContent);
  handleDisplay();
  STATE.lastKeyAnOperator = false;
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
  // button.addEventListener("click", handleOperation)
})

function handleOperation(e) {
  incomingOperation = e.target.textContent;

  // 1) Check if there is a previous operation stored in memory && last key 
  //    pressed was not an operator:
  if (STATE.operation && !STATE.lastKeyAnOperator) {
    evaluateOperation();
  }
  setOperator(incomingOperation);
  STATE.lastKeyAnOperator = true;
  console.log("val1: ", STATE.valueOne, "opeartion: ", STATE.operation, "val2: ", STATE.valueTwo);
}

// function setOperator(operator) {
//   switch (operator) {
//     case "+": {
//       STATE.operation = "add";
//       break;
//     }
//     case "-": {
//       STATE.operation = "subtract";
//       break;
//     }
//     case "/": {
//       STATE.operation = "divide";
//       break;
//     }
//     case "*": {
//       STATE.operation = "multiply";
//       break;
//     }
//   }
// }

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
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero"
  }
  return num1 / num2
}

