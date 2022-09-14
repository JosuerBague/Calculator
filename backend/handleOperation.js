import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function handleOperation(e) {
  // Check if there is a previous operation stored in memory && last key 
  // pressed was not an operator, carry out the stored operation:
  if (STATE.operation && !STATE.lastKeyAnOperator) {
    operate(STATE.operation, STATE.valueOne, STATE.valueTwo);
    handleDisplay()
  }

  setOperator(e.target.textContent);
  STATE.lastKeyAnOperator = true;
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

  STATE.postOperation = true;
}

function add(num1, num2 = num1) {
  STATE.total = +num1 * 100 + +num2 *
   100;
  STATE.valueOne = STATE.total / 100;
  STATE.valueTwo = 0;
}

function subtract(num1, num2 = num1) {
  STATE.total = +num1 * 100 - +num2 * 100;
  STATE.valueOne = STATE.total / 100;
  STATE.valueTwo = 0;
}

function multiply(num1, num2 = num1) {
  STATE.total = +num1 * 100 * +num2 * 100;
  STATE.valueOne = STATE.total / 10000;
  STATE.valueTwo = 0;
}

function divide(num1, num2 = num1) {
  if (num2 === 0) {
    return "Cannot divide by zero"
  }

  STATE.total = +num1 * 100 / +num2 * 100;
  STATE.valueOne = STATE.total / 100;
  STATE.valueTwo = 0;
}



export { handleOperation, setOperator, operate }