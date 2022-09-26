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
    result ? handleDisplay("_total") : handleDisplay("zero-div");
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

  STATE._postOperation = true;
}

export { handleOperation, setOperator, operate }