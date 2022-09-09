// Create global state object:
const state = {
  total: 0,
  memoryTotal: 0,
  valueOne: 0,
  valueTwo: 0,
  operation: null,
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
    handleZero(state.operation)
  } else {
    // 3) If the number clicked is not zero, call handleChange.
    handleChange(state.operation, value)
  }
}

function handleChange(operatorNotNull, val) {
  // 1) Check if state.operator is not null.
  if (operatorNotNull) {
    // 2) If the last key pressed was an operator, then change valueTwo.
    state.valueTwo = state.valueTwo ? state.valueTwo + val : val;
  } else {
    // 3) If the last key pressed was not an operator, change valueOne.
    state.valueOne = state.valueOne ? state.valueOne + val : val;
  }

  console.log("val1: ", state.valueOne, "val2: ", state.valueTwo);
}

function handleZero(operatorNotNull) {
  // 1) Check if operator is not null
  if (operatorNotNull) {
    // 2) Change valueTwo
    state.valueTwo = `${state.valueTwo}`.includes('.') ? state.valueTwo + 0 : 0;
  }
  else {
    state.valueOne = `${state.valueOne}`.includes('.') ? state.valueOne + 0 : 0;
  }
  console.log("val1: ", state.valueOne, "val2: ", state.valueTwo);
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
  console.log("val1: ", state.valueOne, "val2: ", state.valueTwo);
}

// Operators
// Plus
const addButton = document.querySelector(".op-plus");
addButton.addEventListener("click", handleAddition);
function handleAddition() {
  // 1) Check if there is no previous operator in memory:
  if (state.operation === null) {
    // 2) Set state-operation to "add"
    state.operation = 'add'
    console.log("pre: ", state.operation)
  }
  else {
    // 3) Else call evaluate, then set state.operation to "add"
    evaluate();
    state.operation = 'add'
  }
}

function evaluate() {
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
  console.log("val1: ", state.valueOne, "val2: ", state.valueTwo, "operation: ", state.operation);
}