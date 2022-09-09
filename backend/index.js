// Create global state object:
const state = {
  total: 0,
  memoryTotal: 0,
  valueOne: 0,
  valueTwo: 0,
  operation: null,
  lastKeyAnOperator: false // Tracks if the last key pressed was an operator
}

// Power button
let isPowered = false;
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
  button.addEventListener('click', changeValue)
})

function changeValue(e) {
  const value = e.target.textContent;

  // 1) First, check if the number clicked is zero.
  if (+value === 0) {
    // 2) If the number clicked is zero, call handleZero.
    handleZero()
  } else {
    // 3) If the number clicked is not zero, call handleChange.
    handleChange(value)
  }

  handleDisplay();
  state.lastKeyAnOperator = false;
}

function handleChange(val) {
  // 1) Check if state.operator is not null.
  if (state.operation) {
    // 2) If the last key pressed was an operator, then change valueTwo.
    state.valueTwo = state.valueTwo ? state.valueTwo + val : val;
  } else {
    // 3) If the last key pressed was not an operator, change valueOne.
    state.valueOne = state.valueOne ? state.valueOne + val : val;
  }

  console.log("val1: ", state.valueOne, "opeartion: ", state.operation, "val2: ", state.valueTwo);
}

function handleZero() {
  // 1) If state.operation is null, change Val2:
  if (state.operation) {
    state.valueTwo = state.valueTwo === 0 ? 0 : `${state.valueTwo + 0}`;
    // : `${state.valueTwo}`.includes('.') ? state.valueTwo + 0 : 0;
  }
  // 2) Else change Val1:
  else {
    state.valueOne = state.valueOne === 0 ? 0 : `${state.valueOne + 0}`;
    // state.valueOne = `${state.valueOne}`.includes('.') ? state.valueOne + 0 : 0;
  }
  console.log("val1: ", state.valueOne, "opeartion: ", state.operation, "val2: ", state.valueTwo);

}

// Decimal Button
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", handleDecimal);

function handleDecimal() {
  // 1) Check if state.operator is null
  if (state.operation) {
    // 2) Change valueTwo
    state.valueTwo = `${state.valueTwo}`.includes('.') ? state.valueTwo : state.valueTwo + '.';
  }
  else {
    state.valueOne = `${state.valueOne}`.includes('.') ? state.valueOne : state.valueOne + '.';
  }
  console.log("val1: ", state.valueOne, "opeartion: ", state.operation, "val2: ", state.valueTwo);

  handleDisplay();
  state.lastKeyAnOperator = false;
}

// Operators
// Plus
const operatorButtons = document.querySelectorAll("[class*=op]")
operatorButtons.forEach(button => {
  button.addEventListener("click", handleOperation)
})

function handleOperation(e) {
  incomingOperation = e.target.textContent;

  // 1) Check if there is a previous operation stored in memory && last key 
  //    pressed was not an operator:
  if (state.operation && !state.lastKeyAnOperator) {
    evaluateOperation();
  }
  setOperator(incomingOperation);
  state.lastKeyAnOperator = true;
  console.log("val1: ", state.valueOne, "opeartion: ", state.operation, "val2: ", state.valueTwo);
}

function setOperator(operator) {
  switch (operator) {
    case "+": {
      state.operation = "add";
      break;
    }
    case "-": {
      state.operation = "subtract";
      break;
    }
    case "/": {
      state.operation = "divide";
      break;
    }
    case "*": {
      state.operation = "multiply";
      break;
    }
  }
}

function evaluateOperation() {
  switch (state.operation) {
    case "add": {
      state.valueOne = `${+state.valueOne + +state.valueTwo}`;
      break;
    }
    case "subtract": {
      state.valueOne = `${+state.valueOne - +state.valueTwo}`;
      break;
    }
    case "multiply": {
      state.valueOne = `${+state.valueOne * +state.valueTwo}`;
      break;
    }
    case "divide": {
      state.valueOne = `${+state.valueOne / +state.valueTwo}`;
      break;
    }
  }
  state.valueTwo = 0;
}

// Handle Display
function handleDisplay() {
  const mainDisplay = document.querySelector(".display-main");

  // 1) Check if there is a saved operator:
  // 2) If there is no saved operator then show the value of val1
  // 3) If there is a saved operator and the last key pressed was an operator show val1
  // 4) If there is a save operator and the last key pressed was not an operator show val2

  if (!state.operation) { // If there is no saved operator
    mainDisplay.textContent = state.valueOne;
  }
  else if (state.operation && state.lastKeyAnOperator) {
    mainDisplay.textContent = state.valueOne;
  }
  else if (state.operation && !state.lastKeyAnOperator) {
    mainDisplay.textContent = state.valueTwo;
  }
}