import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";
import { add, subtract, multiply, divide } from "./mainOperations.js";

function handleOperation(e) {
  // If the calculator is in error mode, do nothing:
  if (STATE._error) {
    return
  }

  // If there is no saved operator and the last key was not an operator:
  // Evaluate: 
  if (STATE._operation && STATE._lastKey === 'numeral') {
    const result = operate(STATE._operation, STATE._valueOne, STATE._valueTwo);
    console.log(result)
    result !== "0" ? handleDisplay("_total") : handleDisplay("zero-div");
  }

  // Change the STATE operator to the operator preseed:
  setOperator(e.key || e.target.attributes.value.value);
  STATE._lastKey = 'operator';
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
      return add(num1, num2);
    }
    case '-': {
      return subtract(num1, num2);
    }
    case '*': {
      return multiply(num1, num2);
    }
    case '/': {
      return divide(num1, num2);
    }

  }

  STATE._postOperation = true;
}

export { handleOperation, setOperator, operate }