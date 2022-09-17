import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";
import { add, subtract, multiply, divide } from "./mainOperations.js";

function handleOperation(e) {
  // If the calculator is in error mode, do nothing:
  if (STATE.isError) {
    return
  }

  // If there is no saved operator and the last key was not an operator:
  // Evaluate: 
  if (STATE.operation && !STATE.lastKeyAnOperator) {
    operate(STATE.operation, STATE.valueOne, STATE.valueTwo);
    handleDisplay()
  }

  // Change the STATE operator to the operator preseed:
  setOperator(e.target.textContent);
  STATE.lastKeyAnOperator = true;
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

  STATE.postOperation = true;
}

export { handleOperation, setOperator, operate }