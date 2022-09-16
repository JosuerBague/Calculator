import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";
import floatFixer from "./floatFixer.js";

function handleOperation(e) {
  if (STATE.isError) {
    return
  }

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
  let temp, num1Mod, num2Mod, divisor;

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod > num2Mod ? num1Mod : num2Mod;
    temp = (parseFloat(num1) * num1Mod) + (parseFloat(num2) * num2Mod) / divisor;

  } else {
    temp = parseInt(num1) + parseInt(num2);
  }
  STATE.total = temp
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function subtract(num1, num2 = num1) {
  let temp, num1Mod, num2Mod, divisor

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod > num2Mod ? floatFixer(num1) : floatFixer(num2);
    temp = (parseFloat(num1) * num1Mod) - (parseFloat(num2) * num2Mod) / divisor;
  } else {
    temp = parseInt(num1) - parseInt(num2);
  }
  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function multiply(num1, num2 = num1) {
  let temp, num1Mod, num2Mod, divisor

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod * num2Mod;
    temp = (parseFloat(num1) * num1Mod) * (parseFloat(num2) * num2Mod) / divisor;
  } else {
    temp = parseInt(num1) * parseInt(num2);
  }

  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

function divide(num1, num2 = num1) {
  if (num2 === 0) {
    return "Cannot divide by zero"
  }

  let temp, num1Mod, num2Mod, divisor;

  if (num1.includes('.') || num2.includes('.')) {
    num1Mod = floatFixer(num1);
    num2Mod = floatFixer(num2);

    divisor = num1Mod * num2Mod;
    temp = ((parseFloat(num1) * num1Mod) / (parseFloat(num2) * num2Mod)) / divisor;
  } else {
    temp = parseInt(num1) / parseInt(num2);
  }

  STATE.total = temp;
  STATE.valueOne = STATE.total;
  STATE.valueTwo = 0;
}

export { handleOperation, setOperator, operate }